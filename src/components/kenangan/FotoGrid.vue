<template>
  <div>
    <!-- Count Header -->
    <div class="grid-header" v-if="photos.length > 0">
      <span class="photo-count">
        <span class="count-icon">🖼</span> {{ photos.length }} Foto Kenangan
      </span>
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
            :src="photo.foto || photo.src"
            :alt="photo.judul || photo.caption || 'Foto Kenangan RPL 2'"
            class="photo-img"
            loading="lazy"
          />
          <div class="photo-overlay">
            <span class="zoom-icon">🔍</span>
            <p class="photo-caption">{{ photo.deskripsi || photo.caption }}</p>
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
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-blue-light);
  background: rgba(13, 71, 161, 0.25);
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(144, 202, 249, 0.25);
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.count-icon {
  font-size: 14px;
}

.empty-state {
  text-align: center;
  padding: 64px 24px;
  background: rgba(13, 26, 56, 0.5);
  border: 2px dashed rgba(144, 202, 249, 0.25);
  border-radius: var(--radius-card);
  max-width: 520px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 56px;
  margin-bottom: 16px;
  opacity: 0.8;
}

.empty-title {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.empty-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.empty-hint {
  font-size: 12px;
  color: var(--color-text-muted);
  background: rgba(7, 13, 30, 0.6);
  padding: 8px 14px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid rgba(144, 202, 249, 0.1);
}

.empty-hint code {
  color: var(--color-blue-light);
  font-family: 'JetBrains Mono', monospace;
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
  padding: 0;
  border-radius: var(--radius-card);
}

.photo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
}

.photo-img {
  width: 100%;
  display: block;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.masonry-item:hover .photo-img {
  transform: scale(1.05);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(7, 13, 30, 0.95) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 18px;
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
  font-size: 16px;
  background: rgba(7, 13, 30, 0.75);
  padding: 8px;
  border-radius: 50%;
  border: 1px solid rgba(144, 202, 249, 0.3);
  backdrop-filter: blur(8px);
}

.photo-caption {
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.35;
}

.photo-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--color-blue-light);
  margin-top: 6px;
}
</style>
