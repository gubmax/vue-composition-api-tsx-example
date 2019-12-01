import { onBeforeMount, reactive } from '@vue/composition-api'

import { TProps, TState } from './useRequest.interface'

const useRequest = (
  props: TProps,
  prefetchData = null,
  dispatch?: (val: any) => void,
): TState => {
  const state: TState = reactive({
    isFetching: false,
    responseData: null,
    error: null,
  })

  onBeforeMount(() => {
    if (prefetchData !== null) {
      return
    }

    state.isFetching = true

    // Dummy request
    setTimeout(() => {
      state.isFetching = false
      state.responseData = `This text is dummy response from "${props.url}"!`

      if (dispatch !== undefined) {
        dispatch(state.responseData)
      }
    }, 2500)
  })

  return state
}

export default useRequest
