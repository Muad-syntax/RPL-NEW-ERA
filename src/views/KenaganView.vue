<template>
  <div class="kenangan-page">
    <!-- Header -->
    <header class="page-header section">
      <div class="container text-center">
        <span class="sub-heading reveal">Arsip Momen Indah</span>
        <h1 class="page-title text-display-xl text-gradient-primary reveal">Galeri Kenangan</h1>
        <p class="page-desc reveal">
          Menyimpan setiap tawa, kerja keras, dan kebersamaan tiga tahun perjalanan di XII RPL 2.
        </p>
      </div>
    </header>

    <!-- Content -->
    <section class="section">
      <div class="container">
        <!-- Filter Tabs -->
        <FilterTab
          v-if="rawPhotos.length > 0"
          :categories="categories"
          v-model="activeCategory"
        />

        <!-- Photo Grid -->
        <FotoGrid
          :photos="filteredPhotos"
          @select="open"
        />

        <!-- Lightbox Modal -->
        <FotoLightbox
          :is-open="isOpen"
          :current-index="currentIndex"
          :photos="filteredPhotos"
          @close="close"
          @next="next"
          @prev="prev"
          :on-touch-start="onTouchStart"
          :on-touch-end="onTouchEnd"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FilterTab from '../components/kenangan/FilterTab.vue'
import FotoGrid from '../components/kenangan/FotoGrid.vue'
import FotoLightbox from '../components/kenangan/FotoLightbox.vue'
import { useLightbox } from '../composables/useLightbox.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import rawPhotos from '../data/kenangan.json'

useScrollReveal()

const activeCategory = ref('Semua')

const categories = [
  'Semua',
  'Kegiatan Kelas',
  'Acara Sekolah',
  'Lainnya',
]

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'Semua') {
    return rawPhotos
  }
  return rawPhotos.filter((p) => p.kategori === activeCategory.value)
})

const { isOpen, currentIndex, open, close, next, prev, onTouchStart, onTouchEnd } =
  useLightbox(filteredPhotos)
</script>

<style scoped>
.kenangan-page {
  padding-top: 72px;
}

.page-header {
  background: var(--gradient-hero);
  border-bottom: 1px solid rgba(144, 202, 249, 0.12);
  padding: 64px 0 44px;
}

.sub-heading {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-blue-light);
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.page-title {
  margin-bottom: 12px;
}

.page-desc {
  font-size: 16px;
  color: var(--color-text-body);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.85;
}
</style>
