<template>
  <div class="home-view">
    <HeroSection />
    <PengurusSlideshow />
    
    <!-- Quick Highlights Section -->
    <section class="highlights-section section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag reveal">Jelajahi Konten</span>
          <h2 class="section-title text-display-lg text-gradient-primary reveal">Akses Cepat Kenangan</h2>
          <p class="section-sub reveal">Jelajahi setiap babak dan arsip kebersamaan kami</p>
        </div>

        <div class="highlight-grid">
          <RouterLink to="/tentang" class="highlight-card card reveal">
            <div class="card-icon-box">
              <span class="card-icon">🏛</span>
            </div>
            <h3>Profil & Visi</h3>
            <p>Mengenal lebih dalam identitas kelas XII RPL 2, visi, misi, dan semboyan kami.</p>
            <span class="learn-more">
              <span>Selengkapnya</span>
              <span class="arrow-icon">&rarr;</span>
            </span>
          </RouterLink>

          <RouterLink to="/kenangan" class="highlight-card card reveal">
            <div class="card-icon-box">
              <span class="card-icon">📸</span>
            </div>
            <h3>Galeri Kenangan</h3>
            <p>Momen-momen tak terlupakan yang diabadikan selama 3 tahun perjalanan SMK.</p>
            <span class="learn-more">
              <span>Lihat Foto</span>
              <span class="arrow-icon">&rarr;</span>
            </span>
          </RouterLink>

          <RouterLink to="/jejak-pembimbing" class="highlight-card card reveal">
            <div class="card-icon-box">
              <span class="card-icon">👨‍🏫</span>
            </div>
            <h3>Jejak Pembimbing</h3>
            <p>Apresiasi dan penghormatan kepada para wali kelas dari kelas X hingga XII.</p>
            <span class="learn-more">
              <span>Buka Halaman</span>
              <span class="arrow-icon">&rarr;</span>
            </span>
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
  background: var(--gradient-surface);
  position: relative;
}

.section-header {
  margin-bottom: 40px;
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
  padding: 36px 28px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  overflow: hidden;
}

.card-icon-box {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(33, 150, 243, 0.15);
  border: 1px solid rgba(144, 202, 249, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

.card-icon {
  font-size: 26px;
}

.highlight-card:hover .card-icon-box {
  background: var(--color-blue-primary);
  border-color: var(--color-blue-light);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.5);
  transform: scale(1.08);
}

.highlight-card h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 21px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.01em;
}

.highlight-card p {
  font-size: 14px;
  color: var(--color-text-body);
  line-height: 1.6;
  flex-grow: 1;
  opacity: 0.85;
}

.learn-more {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-blue-light);
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.highlight-card:hover .learn-more {
  color: #FFFFFF;
}

.highlight-card:hover .arrow-icon {
  transform: translateX(5px);
}
</style>
