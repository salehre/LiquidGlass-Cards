import { nextTick, onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

export interface JellyItem {
  id: string
  color: string
}

/**
 * Drives the animated "jelly" pill indicator shared by the framework switch
 * and the Vue/React language switch in the header. Each switch gets its own
 * instance (its own refs), but the animation math is identical.
 */
export function useJellySwitch<T extends string>(activeId: Ref<T>, items: JellyItem[] | Ref<JellyItem[]>) {
  const trackRef = ref<HTMLElement | null>(null)
  const indicatorRef = ref<HTMLElement | null>(null)
  const tabRefs = new Map<string, HTMLElement>()

  let settleTimeout: ReturnType<typeof window.setTimeout> | null = null

  function setTabRef(el: Element | null, id: string) {
    if (el instanceof HTMLElement) tabRefs.set(id, el)
  }

  function resolveItems(): JellyItem[] {
    return Array.isArray(items) ? items : items.value
  }

  function moveIndicator(jelly: boolean) {
    const track = trackRef.value
    const indicator = indicatorRef.value
    const tab = tabRefs.get(activeId.value)
    if (!track || !indicator || !tab) return

    if (settleTimeout !== null) {
      window.clearTimeout(settleTimeout)
      settleTimeout = null
    }

    const trackRect = track.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()
    const x = tabRect.left - trackRect.left
    const width = tabRect.width

    const activeItem = resolveItems().find((i) => i.id === activeId.value)
    if (activeItem) indicator.style.background = activeItem.color

    if (!jelly) {
      indicator.style.transition = 'none'
      indicator.style.transform = `translateX(${x}px)`
      indicator.style.width = `${width}px`
      void indicator.offsetWidth
      indicator.style.transition = ''
      return
    }

    const prevX = indicator.getBoundingClientRect().left - trackRect.left
    const prevWidth = indicator.getBoundingClientRect().width
    const movingRight = x > prevX

    indicator.style.transition = 'transform 0.12s ease-out, width 0.12s ease-out'
    if (movingRight) {
      indicator.style.transform = `translateX(${prevX}px)`
      indicator.style.width = `${x + width - prevX}px`
    } else {
      indicator.style.transform = `translateX(${x}px)`
      indicator.style.width = `${prevX + prevWidth - x}px`
    }

    settleTimeout = window.setTimeout(() => {
      indicator.style.transition =
        'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
      indicator.style.transform = `translateX(${x}px)`
      indicator.style.width = `${width}px`
      settleTimeout = null
    }, 120)
  }

  onMounted(() => nextTick(() => moveIndicator(false)))
  onUnmounted(() => {
    if (settleTimeout !== null) window.clearTimeout(settleTimeout)
  })
  watch(activeId, () => nextTick(() => moveIndicator(true)))

  if (!Array.isArray(items)) {
    watch(items, () => nextTick(() => moveIndicator(false)))
  }
  return { trackRef, indicatorRef, setTabRef }
}
