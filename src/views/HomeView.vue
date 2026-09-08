<template>
  <div class="home-view">
    <HeroSection />
    <PengurusSlideshow />
    
    <!-- Quick Highlights Section -->
    <section class="highlights-section section">
      <div class="container">
        <div class="highlight-grid">
          <RouterLink to="/tentang" class="highlight-card card reveal">
            <div class="card-icon">🏛</div>
            <h3>Profil & Visi</h3>
            <p>Mengenal lebih dalam identitas kelas XII RPL 2, visi, misi, dan semboyan kami.</p>
            <span class="learn-more">Selengkapnya &rarr;</span>
          </RouterLink>

          <RouterLink to="/kenangan" class="highlight-card card reveal">
            <div class="card-icon">📸</div>
            <h3>Galeri Kenangan</h3>
            <p>Momen-momen tak terlupakan yang diabadikan selama 3 tahun perjalanan SMK.</p>
            <span class="learn-more">Lihat Foto &rarr;</span>
          </RouterLink>

          <RouterLink to="/jejak-pembimbing" class="highlight-card card reveal">
            <div class="card-icon">👨‍🏫</div>
            <h3>Jejak Pembimbing</h3>
            <p>Apresiasi dan penghormatan kepada para wali kelas dari kelas X hingga XII.</p>
            <span class="learn-more">Buka Halaman &rarr;</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import PengurusSlideshow from '../components/home/PengurusSlideshow.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

.highlights-section {
  background: var(--color-deep-navy);
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap);
}

@media (max-width: 850px) {
  .highlight-grid {
    grid-template-columns: 1fr;
  }
}

.highlight-card {
  padding: 32px 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.card-icon {
  font-size: 32px;
  margin-bottom: 4px;
}

.highlight-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-star-white);
}

.highlight-card p {
  font-size: 14px;
  color: rgba(255, 249, 230, 0.65);
  line-height: 1.5;
  flex-grow: 1;
}

.learn-more {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-solar-gold);
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: transform 0.2s ease;
}

.highlight-card:hover .learn-more {
  transform: translateX(4px);
}
</style>
