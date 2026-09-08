<template>
  <div>
    <!-- Count Header -->
    <div class="grid-header" v-if="photos.length > 0">
      <span class="photo-count">🖼 {{ photos.length }} Foto Kenangan</span>
    </div>

    <!-- Empty State -->
    <div v-if="photos.length === 0" class="empty-state">
      <div class="empty-icon">📷</div>
      <h3 class="empty-title">Kenangan Sedang Disiapkan...</h3>
      <p class="empty-desc">
        Foto-foto kebersamaan kelas XII RPL 2 akan segera diunggah.
      </p>
      <div class="empty-hint">
        💡 <em>Catatan: Siswa dapat menambahkan foto lewat file <code>src/data/kenangan.json</code></em>
      </div>
    </div>

    <!-- Masonry Grid -->
    <div v-else class="masonry-grid">
      <div
        v-for="(photo, index) in photos"
        :key="photo.id || index"
        class="masonry-item card"
        @click="$emit('select', index)"
      >
        <div class="photo-wrapper">
          <img
            :src="photo.foto"
            :alt="photo.judul || 'Foto Kenangan RPL 2'"
            class="photo-img"
            loading="lazy"
          />
          <div class="photo-overlay">
            <span class="zoom-icon">🔍</span>
            <p class="photo-caption">{{ photo.deskripsi }}</p>
            <span v-if="photo.kategori" class="photo-badge">{{ photo.kategori }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photos: {
    type: Array,
    default: () => [],
  },
})
defineEmits(['select'])
</script>

<style scoped>
.grid-header {
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
}

.photo-count {
  font-size: 14px;
  color: var(--color-solar-gold);
  background: rgba(255, 184, 0, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 184, 0, 0.2);
}

.empty-state {
  text-align: center;
  padding: 60px 24px;
  background: rgba(45, 42, 110, 0.3);
  border: 2px dashed rgba(255, 184, 0, 0.25);
  border-radius: var(--radius-card);
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 56px;
  margin-bottom: 16px;
  opacity: 0.8;
}

.empty-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: 22px;
  color: var(--color-solar-gold);
  margin-bottom: 8px;
}

.empty-desc {
  font-size: 14px;
  color: rgba(255, 249, 230, 0.7);
  margin-bottom: 20px;
}

.empty-hint {
  font-size: 12px;
  color: rgba(255, 249, 230, 0.4);
  background: rgba(30, 27, 75, 0.5);
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
}

.empty-hint code {
  color: var(--color-solar-gold);
}

/* Masonry Layout */
.masonry-grid {
  column-count: 3;
  column-gap: 20px;
}

@media (max-width: 900px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 560px) {
  .masonry-grid {
    column-count: 1;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.photo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
}

.photo-img {
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
}

.masonry-item:hover .photo-img {
  transform: scale(1.04);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(30, 27, 75, 0.95) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.masonry-item:hover .photo-overlay {
  opacity: 1;
}

.zoom-icon {
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 18px;
  background: rgba(30, 27, 75, 0.7);
  padding: 6px;
  border-radius: 50%;
  border: 1px solid rgba(255, 184, 0, 0.3);
}

.photo-caption {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-star-white);
  line-height: 1.3;
}

.photo-badge {
  font-size: 11px;
  color: var(--color-solar-gold);
  margin-top: 4px;
}
</style>
