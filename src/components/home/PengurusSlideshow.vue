<template>
  <section class="slideshow-section section">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag reveal">Struktur Organisasi</span>
        <h2 class="section-title text-display-lg text-gradient-primary reveal">Pengurus Kelas</h2>
        <p class="section-sub reveal">XII RPL 2 · Periode 2025–2026</p>
      </div>
    </div>

    <div
      class="slideshow-wrap"
      @mouseenter="pause"
      @mouseleave="resume"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <!-- Slides -->
      <div class="slides-track">
        <TransitionGroup name="slide" tag="div" class="slides-container">
          <div
            v-for="(item, index) in pengurus"
            :key="item.id"
            v-show="current === index"
            class="slide"
          >
            <!-- Photo area -->
            <div class="slide-photo">
              <img
                v-if="item.foto"
                :src="item.foto"
                :alt="`Foto ${item.nama}`"
                class="slide-img"
                loading="lazy"
              />
              <div v-else class="slide-placeholder" :aria-label="`Placeholder foto ${item.nama}`">
                <div class="placeholder-icon">👤</div>
                <span class="placeholder-label">[ Foto {{ item.nama }} ]</span>
                <span class="placeholder-hint">src/assets/images/pengurus/</span>
              </div>

              <!-- Gradient overlay -->
              <div class="slide-overlay" />

              <!-- Badge -->
              <BadgePill :color="item.badgeColor || 'primary'" class="slide-badge">
                {{ item.jabatan }}
              </BadgePill>

              <!-- Name on photo -->
              <div class="slide-info">
                <h3 class="slide-name">{{ item.nama }}</h3>
                <p class="slide-jabatan">{{ item.jabatan }}</p>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Arrow Navigation -->
      <button class="arrow arrow-left" @click="prev" aria-label="Slide sebelumnya">
        <span>&#8249;</span>
      </button>
      <button class="arrow arrow-right" @click="next" aria-label="Slide berikutnya">
        <span>&#8250;</span>
      </button>
    </div>

    <!-- Dot indicators -->
    <div class="dots-wrap">
      <button
        v-for="(item, index) in pengurus"
        :key="item.id"
        class="dot"
        :class="{ active: current === index }"
        @click="goTo(index)"
        :aria-label="`Lihat slide ${index + 1}: ${item.nama}`"
      />
    </div>

    <!-- Thumbnail strip (desktop) -->
    <div class="thumb-strip container">
      <button
        v-for="(item, index) in pengurus"
        :key="item.id"
        class="thumb"
        :class="{ active: current === index }"
        @click="goTo(index)"
      >
        <div class="thumb-img">
          <img
            v-if="item.foto"
            :src="item.foto"
            :alt="item.nama"
            loading="lazy"
          />
          <span v-else class="thumb-placeholder">{{ item.nama.charAt(0) }}</span>
        </div>
        <span class="thumb-name">{{ item.nama }}</span>
        <span class="thumb-role">{{ item.jabatan }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useSlideshow } from '../../composables/useSlideshow.js'
import BadgePill from '../ui/BadgePill.vue'
import pengurus from '../../data/pengurus.json'

const { current, next, prev, goTo, pause, resume, onTouchStart, onTouchEnd } =
  useSlideshow(pengurus.length, 5000)
</script>

<style scoped>
.slideshow-section {
  background: var(--gradient-surface);
  position: relative;
  overflow: hidden;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-blue-light);
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.section-title {
  margin-bottom: 8px;
}

.section-sub {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 36px;
  letter-spacing: 0.05em;
}

/* Slideshow */
.slideshow-wrap {
  position: relative;
  max-width: 400px;
  margin: 0 auto 20px;
}

.slides-track {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  aspect-ratio: 3/4;
  box-shadow: 0 20px 50px rgba(3, 8, 22, 0.7), 0 0 0 1px rgba(144, 202, 249, 0.2);
  background: #070D1E;
}

.slides-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
}

.slide-photo {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0D1A38;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Placeholder */
.slide-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, #0D1A38, #070D1E);
  border: 2px dashed rgba(144, 202, 249, 0.25);
}

.placeholder-icon {
  font-size: 56px;
  opacity: 0.3;
}

.placeholder-label {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-blue-light);
  opacity: 0.8;
}

.placeholder-hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--color-text-muted);
  text-align: center;
  padding: 0 16px;
}

/* Overlay & info */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 13, 30, 0) 35%, rgba(7, 13, 30, 0.95) 100%);
}

.slide-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
}

.slide-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
}

.slide-name {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.slide-jabatan {
  font-size: 13px;
  color: var(--color-blue-light);
  font-weight: 500;
  margin-top: 4px;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(7, 13, 30, 0.85);
  border: 1px solid rgba(144, 202, 249, 0.3);
  color: var(--color-blue-light);
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 3;
  backdrop-filter: blur(8px);
}
.arrow:hover {
  background: var(--color-blue-primary);
  border-color: var(--color-blue-light);
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.5);
  transform: translateY(-50%) scale(1.08);
}
.arrow-left  { left: -21px; }
.arrow-right { right: -21px; }

/* Dots */
.dots-wrap {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(144, 202, 249, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot.active {
  background: var(--color-blue-primary);
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.7);
  width: 20px;
  border-radius: 4px;
}

/* Thumbnail strip */
.thumb-strip {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: thin;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}
.thumb {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: rgba(13, 26, 56, 0.4);
  border: 1px solid rgba(144, 202, 249, 0.15);
  border-radius: 12px;
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 84px;
}
.thumb:hover,
.thumb.active {
  border-color: var(--color-blue-primary);
  background: rgba(33, 150, 243, 0.12);
  transform: translateY(-2px);
}
.thumb.active {
  box-shadow: 0 4px 16px rgba(33, 150, 243, 0.2);
}
.thumb-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
  background: #070D1E;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}
.thumb.active .thumb-img { border-color: var(--color-blue-primary); }
.thumb-img img { width: 100%; height: 100%; object-fit: cover; }
.thumb-placeholder {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-blue-light);
  opacity: 0.8;
}
.thumb-name {
  font-size: 11.5px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  white-space: nowrap;
}
.thumb-role {
  font-size: 10px;
  color: var(--color-text-muted);
  text-align: center;
  white-space: nowrap;
}

/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  position: absolute;
  inset: 0;
}
.slide-enter-from { opacity: 0; transform: translateX(30px); }
.slide-leave-to   { opacity: 0; transform: translateX(-30px); }

@media (max-width: 640px) {
  .slideshow-wrap { max-width: 320px; }
  .arrow-left  { left: -10px; }
  .arrow-right { right: -10px; }
  .thumb-strip { flex-wrap: nowrap; justify-content: flex-start; }
}
</style>
