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
              :src="currentPhoto.src || currentPhoto.foto"
              :alt="currentPhoto.caption || currentPhoto.deskripsi || 'Foto Kenangan'"
              class="lightbox-img"
            />
          </div>
          <div class="caption-wrapper" v-if="currentPhoto.caption || currentPhoto.deskripsi || currentPhoto.kategori">
            <span v-if="currentPhoto.kategori" class="kategori-tag">{{ currentPhoto.kategori }}</span>
            <p class="caption-text">{{ currentPhoto.caption || currentPhoto.deskripsi }}</p>
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
  background: rgba(4, 9, 22, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
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
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(144, 202, 249, 0.1);
  border: 1px solid rgba(144, 202, 249, 0.25);
  color: var(--color-text-main);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2010;
}

.close-btn:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: rgba(239, 68, 68, 0.6);
  color: #ff9b9b;
  transform: scale(1.08);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(13, 26, 56, 0.85);
  border: 1px solid rgba(144, 202, 249, 0.3);
  color: var(--color-blue-light);
  font-size: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2010;
  backdrop-filter: blur(8px);
}

.nav-btn:hover {
  background: var(--color-blue-primary);
  border-color: var(--color-blue-light);
  color: #FFFFFF;
  box-shadow: 0 0 24px rgba(33, 150, 243, 0.6);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn { left: 24px; }
.next-btn { right: 24px; }

.lightbox-content {
  max-width: 900px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.image-wrapper {
  max-height: 72vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 72vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(144, 202, 249, 0.2);
}

.caption-wrapper {
  margin-top: 16px;
  text-align: center;
  max-width: 600px;
}

.kategori-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-blue-light);
  background: rgba(13, 71, 161, 0.35);
  padding: 3px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(144, 202, 249, 0.25);
  margin-bottom: 6px;
}

.caption-text {
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.date-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--color-text-muted);
}

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
  .prev-btn { left: 8px; }
  .next-btn { right: 8px; }
  .close-btn { top: 16px; right: 16px; }
}
</style>
