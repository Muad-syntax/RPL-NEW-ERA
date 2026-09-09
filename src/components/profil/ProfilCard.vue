<template>
  <div class="profil-card card reveal">
    <!-- Photo Avatar -->
    <div class="avatar-wrap">
      <img
        v-if="foto"
        :src="foto"
        :alt="`Foto ${nama}`"
        class="avatar-img"
        loading="lazy"
      />
      <div v-else class="avatar-placeholder">
        <span class="placeholder-icon">👤</span>
      </div>
      <BadgePill v-if="badge" :color="badgeColor" class="card-badge">
        {{ badge }}
      </BadgePill>
    </div>

    <!-- Info -->
    <div class="info-wrap">
      <h3 class="profil-name">{{ nama }}</h3>
      <p v-if="gelar" class="profil-gelar">{{ gelar }}</p>
      <p class="profil-mapel">{{ mapel }}</p>
      <p v-if="quote" class="profil-quote">"{{ quote }}"</p>
      
      <div v-if="!foto" class="placeholder-tag">
        <span>📸 [Foto {{ nama }}]</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import BadgePill from '../ui/BadgePill.vue'

defineProps({
  nama: { type: String, required: true },
  gelar: { type: String, default: '' },
  mapel: { type: String, default: '' },
  foto: { type: String, default: '' },
  badge: { type: String, default: '' },
  badgeColor: { type: String, default: 'primary' },
  quote: { type: String, default: '' },
})
</script>

<style scoped>
.profil-card {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.avatar-wrap {
  position: relative;
  width: 136px;
  height: 136px;
  margin-bottom: 22px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--color-blue-primary);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.35);
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #0D1A38, #070D1E);
  border: 3px dashed rgba(144, 202, 249, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder .placeholder-icon {
  font-size: 52px;
  opacity: 0.35;
}

.card-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.info-wrap {
  width: 100%;
}

.profil-name {
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.profil-gelar {
  font-size: 13px;
  color: var(--color-blue-light);
  font-weight: 500;
  margin-bottom: 6px;
}

.profil-mapel {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.profil-quote {
  font-size: 13px;
  font-style: italic;
  color: var(--color-text-ice);
  background: rgba(7, 13, 30, 0.6);
  padding: 12px 16px;
  border-radius: 10px;
  border-left: 3px solid var(--color-blue-primary);
  margin-top: 10px;
  text-align: left;
  line-height: 1.5;
}

.placeholder-tag {
  margin-top: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--color-blue-light);
  background: rgba(13, 71, 161, 0.2);
  padding: 4px 10px;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid rgba(144, 202, 249, 0.15);
}
</style>
