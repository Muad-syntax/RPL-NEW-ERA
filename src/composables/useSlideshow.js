import { ref, onMounted, onUnmounted } from 'vue'

export function useSlideshow(total, interval = 5000) {
  const current = ref(0)
  const isPaused = ref(false)
  let timer = null

  const next = () => {
    current.value = (current.value + 1) % total
  }

  const prev = () => {
    current.value = (current.value - 1 + total) % total
  }

  const goTo = (index) => {
    current.value = index
  }

  const pause = () => { isPaused.value = true; clearInterval(timer) }
  const resume = () => {
    isPaused.value = false
    timer = setInterval(next, interval)
  }

  // Touch / swipe support
  let touchStartX = 0
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  onMounted(() => { timer = setInterval(next, interval) })
  onUnmounted(() => clearInterval(timer))

  return { current, isPaused, next, prev, goTo, pause, resume, onTouchStart, onTouchEnd }
}
