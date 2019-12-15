import { ref } from '@vue/composition-api'

import { useStore, useRequest, useInfiniteScroll } from '@/use'
import HelloWorld from '@/components/elements'
import ImageLogo from '@/assets/logo.png'

import s from './Home.module.scss'

const Home = () => {
  // Store
  const [getters, dispatch] = useStore()

  // Request
  const setResponseData = (data: any) => dispatch('setResponseData', data)
  const reqState = useRequest({ url: '/test' }, null, setResponseData)

  // Infinite Scroll
  const infiniteScrollItems = ref([...Array(50).keys()])
  const hasMoreRef = ref(true)

  const dummyPromise = () => new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
    .then(() => {
      hasMoreRef.value = false
      const { value } = infiniteScrollItems
      infiniteScrollItems.value = value.concat(Array.from(value, (v) => value.length + v))
    })

  const infiniteScrollRef = ref(null)
  const isLoadingRef = useInfiniteScroll(
    infiniteScrollRef, dummyPromise, 300, hasMoreRef,
  )

  return () => (
    <div>
      <img alt="Vue logo" src={ImageLogo} />

      <HelloWorld msg="This text is a prop!">
        <p slot="named">This text from named slot!</p>
        <p>This text from default slot!</p>
      </HelloWorld>

      <h1>{getters.mainMsg}</h1>
      <button onClick={() => dispatch('changeMsg')}>mutate</button>

      <h1>{reqState.isFetching ? 'Loading...' : getters.responseData}</h1>

      <p>Items counter: {isLoadingRef.value ? 'Loading...' : infiniteScrollItems.value.length}</p>
      <div class={s.infiniteScrollContainer} ref="infiniteScrollRef">
        {
          infiniteScrollItems.value.map((key) => (
            <div key={key} class={s.infiniteScrollItem}>
              {key}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
