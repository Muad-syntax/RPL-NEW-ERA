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
  badgeColor: { type: String, default: 'gold' },
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
  width: 140px;
  height: 140px;
  margin-bottom: 20px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--color-solar-gold);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #2D2A6E, #1E1B4B);
  border: 3px dashed rgba(255, 184, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder .placeholder-icon {
  font-size: 54px;
  opacity: 0.4;
}

.card-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.info-wrap {
  width: 100%;
}

.profil-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-star-white);
  margin-bottom: 4px;
}

.profil-gelar {
  font-size: 13px;
  color: var(--color-solar-gold);
  font-weight: 500;
  margin-bottom: 6px;
}

.profil-mapel {
  font-size: 14px;
  color: rgba(255, 249, 230, 0.7);
  margin-bottom: 12px;
}

.profil-quote {
  font-size: 13px;
  font-style: italic;
  color: rgba(255, 249, 230, 0.85);
  background: rgba(30, 27, 75, 0.4);
  padding: 10px 14px;
  border-radius: 8px;
  border-left: 3px solid var(--color-solar-gold);
  margin-top: 10px;
  text-align: left;
}

.placeholder-tag {
  margin-top: 14px;
  font-size: 11px;
  color: rgba(255, 184, 0, 0.6);
  background: rgba(255, 184, 0, 0.08);
  padding: 4px 10px;
  border-radius: 6px;
  display: inline-block;
}
</style>
