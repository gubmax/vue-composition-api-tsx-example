import {
  ref, onMounted, onUnmounted, Ref,
} from '@vue/composition-api'

type TContainer = HTMLDivElement | null

const useInfiniteScroll = (
  containerRef: Ref<TContainer>,
  onLoad: () => Promise<void>,
  threshold: number | string,
  hasMoreRef: Ref<boolean>,
): Ref<boolean> => {
  const isLoadingRef = ref(false)

  const scrollHandler = () => {
    const container = containerRef.value
    const hasMore = hasMoreRef.value

    if (isLoadingRef.value === true) {
      return
    }

    const { scrollHeight, scrollTop, offsetHeight } = container!

    if (
      hasMore
      && scrollHeight - (scrollTop + offsetHeight) < threshold
    ) {
      isLoadingRef.value = true
      onLoad().then(() => {
        isLoadingRef.value = false
      })
    } else if (hasMore === false) {
      container!.removeEventListener('scroll', scrollHandler, false)
    }
  }

  onMounted(() => {
    containerRef.value!.addEventListener('scroll', scrollHandler, false)
  })

  onUnmounted(() => {
    containerRef.value!.removeEventListener('scroll', scrollHandler, false)
  })

  return isLoadingRef
}

export default useInfiniteScroll
