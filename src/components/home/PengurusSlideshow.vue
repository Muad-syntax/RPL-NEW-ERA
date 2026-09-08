<template>
  <section class="slideshow-section section">
    <div class="container">
      <h2 class="section-title text-display-lg text-gold reveal">Pengurus Kelas</h2>
      <p class="section-sub reveal">XII RPL 2 · Periode 2025–2026</p>
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
                <span class="placeholder-hint">Letakkan foto di /assets/images/pengurus/</span>
              </div>

              <!-- Gradient overlay -->
              <div class="slide-overlay" />

              <!-- Badge -->
              <BadgePill :color="item.badgeColor" class="slide-badge">
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
      <button class="arrow arrow-left" @click="prev" aria-label="Slide sebelumnya">&#8249;</button>
      <button class="arrow arrow-right" @click="next" aria-label="Slide berikutnya">&#8250;</button>
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
  background: linear-gradient(180deg, #1E1B4B 0%, #161336 100%);
  overflow: hidden;
}

.section-title {
  text-align: center;
  margin-bottom: 8px;
}
.section-sub {
  text-align: center;
  font-size: 14px;
  color: rgba(255, 249, 230, 0.5);
  margin-bottom: 40px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Slideshow */
.slideshow-wrap {
  position: relative;
  max-width: 420px;
  margin: 0 auto 24px;
}

.slides-track {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 3/4;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,184,0,0.2);
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
  background: #161336;
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
  background: linear-gradient(135deg, #2D2A6E, #1E1B4B);
  border: 2px dashed rgba(255, 184, 0, 0.3);
}

.placeholder-icon {
  font-size: 64px;
  opacity: 0.3;
}

.placeholder-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-solar-gold);
  opacity: 0.7;
}

.placeholder-hint {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  color: rgba(255, 249, 230, 0.35);
  text-align: center;
  padding: 0 16px;
}

/* Overlay & info */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(30,27,75,0) 30%, rgba(30,27,75,0.95) 100%);
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-star-white);
  line-height: 1.2;
}

.slide-jabatan {
  font-size: 13px;
  color: var(--color-solar-gold);
  font-weight: 500;
  margin-top: 4px;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 27, 75, 0.8);
  border: 1px solid rgba(255, 184, 0, 0.3);
  color: var(--color-solar-gold);
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 3;
  line-height: 1;
}
.arrow:hover {
  background: rgba(255, 184, 0, 0.2);
  border-color: var(--color-solar-gold);
  box-shadow: 0 0 16px rgba(255, 184, 0, 0.3);
}
.arrow-left  { left: -20px; }
.arrow-right { right: -20px; }

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
  background: rgba(255, 249, 230, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot.active {
  background: var(--color-solar-gold);
  transform: scale(1.3);
  box-shadow: 0 0 8px rgba(255, 184, 0, 0.5);
}

/* Thumbnail strip */
.thumb-strip {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,184,0,0.3) transparent;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}
.thumb {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: 2px solid rgba(255, 184, 0, 0.15);
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
}
.thumb:hover,
.thumb.active {
  border-color: var(--color-solar-gold);
  background: rgba(255, 184, 0, 0.08);
}
.thumb-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
  background: rgba(45, 42, 110, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}
.thumb.active .thumb-img { border-color: var(--color-solar-gold); }
.thumb-img img { width: 100%; height: 100%; object-fit: cover; }
.thumb-placeholder {
  font-family: 'Cinzel Decorative', serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-solar-gold);
  opacity: 0.6;
}
.thumb-name {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-on-dark);
  text-align: center;
  white-space: nowrap;
}
.thumb-role {
  font-size: 10px;
  color: rgba(255, 249, 230, 0.4);
  text-align: center;
  white-space: nowrap;
}

/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  position: absolute;
  inset: 0;
}
.slide-enter-from { opacity: 0; transform: translateX(40px); }
.slide-leave-to   { opacity: 0; transform: translateX(-40px); }

@media (max-width: 640px) {
  .slideshow-wrap { max-width: 320px; }
  .arrow-left  { left: -12px; }
  .arrow-right { right: -12px; }
  .thumb-strip { flex-wrap: nowrap; justify-content: flex-start; }
}
</style>
