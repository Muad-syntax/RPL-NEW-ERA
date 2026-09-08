<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="lightbox-overlay"
        @click.self="$emit('close')"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <button class="close-btn" @click="$emit('close')" aria-label="Tutup Lightbox">✕</button>

        <button
          v-if="photos.length > 1"
          class="nav-btn prev-btn"
          @click.stop="$emit('prev')"
          aria-label="Foto Sebelumnya"
        >
          &#8249;
        </button>

        <div class="lightbox-content" @click.stop>
          <div class="image-wrapper">
            <img
              :src="currentPhoto.src"
              :alt="currentPhoto.caption || 'Foto Kenangan'"
              class="lightbox-img"
            />
          </div>
          <div class="caption-wrapper" v-if="currentPhoto.caption || currentPhoto.kategori">
            <span v-if="currentPhoto.kategori" class="kategori-tag">{{ currentPhoto.kategori }}</span>
            <p class="caption-text">{{ currentPhoto.caption }}</p>
            <span v-if="currentPhoto.tanggal" class="date-text">📅 {{ currentPhoto.tanggal }}</span>
          </div>
        </div>

        <button
          v-if="photos.length > 1"
          class="nav-btn next-btn"
          @click.stop="$emit('next')"
          aria-label="Foto Selanjutnya"
        >
          &#8250;
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  currentIndex: { type: Number, default: 0 },
  photos: { type: Array, default: () => [] },
  onTouchStart: { type: Function, default: () => {} },
  onTouchEnd: { type: Function, default: () => {} },
})

defineEmits(['close', 'next', 'prev'])

const currentPhoto = computed(() => {
  return props.photos[props.currentIndex] || {}
})
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 8, 30, 0.92);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 184, 0, 0.3);
  color: var(--color-on-dark);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2010;
}

.close-btn:hover {
  background: var(--color-crimson-pop);
  border-color: var(--color-crimson-pop);
  color: #fff;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(30, 27, 75, 0.8);
  border: 1px solid rgba(255, 184, 0, 0.4);
  color: var(--color-solar-gold);
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2010;
}

.nav-btn:hover {
  background: rgba(255, 184, 0, 0.2);
  border-color: var(--color-solar-gold);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn { left: 24px; }
.next-btn { right: 24px; }

.lightbox-content {
  max-width: 900px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.image-wrapper {
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 184, 0, 0.2);
}

.caption-wrapper {
  margin-top: 16px;
  text-align: center;
  max-width: 600px;
}

.kategori-tag {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-solar-gold);
  background: rgba(255, 184, 0, 0.15);
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 6px;
}

.caption-text {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-star-white);
  margin-bottom: 4px;
}

.date-text {
  font-size: 12px;
  color: rgba(255, 249, 230, 0.5);
}

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
  .prev-btn { left: 10px; }
  .next-btn { right: 10px; }
  .close-btn { top: 16px; right: 16px; }
}
</style>
