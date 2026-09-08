import { ref, onMounted, onUnmounted } from 'vue'

export function useLightbox(photos) {
  const isOpen = ref(false)
  const currentIndex = ref(0)

  const open = (index) => {
    currentIndex.value = index
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % photos.value.length
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + photos.value.length) % photos.value.length
  }

  // Touch swipe support
  let touchStartX = 0
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  const onKeydown = (e) => {
    if (!isOpen.value) return
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'Escape') close()
  }

  onMounted(() => window.addEventListener('keydown', onKeydown))
  onUnmounted(() => window.removeEventListener('keydown', onKeydown))

  return { isOpen, currentIndex, open, close, next, prev, onTouchStart, onTouchEnd }
}
