<template>
  <div class="pembimbing-page">
    <!-- Header -->
    <header class="page-header section">
      <div class="container text-center">
        <span class="sub-heading reveal">Apresiasi & Penghormatan</span>
        <h1 class="page-title text-display-xl text-gradient-primary reveal">Jejak Pembimbing</h1>
        <p class="page-desc reveal">
          Mengenang dedikasi dan bimbingan para wali kelas yang senantiasa menemani perjalanan kami dari kelas X hingga XII.
        </p>
      </div>
    </header>

    <!-- Wali Kelas Sections -->
    <section class="section pembimbing-list">
      <div class="container">
        <div class="pembimbing-grid">
          <ProfilCard
            v-for="wali in pembimbing"
            :key="wali.id"
            :nama="wali.nama"
            :gelar="wali.gelar"
            :mapel="wali.mapel"
            :foto="wali.foto"
            :badge="`Wali Kelas ${wali.kelas}`"
            :badge-color="wali.kelas === 'XII' ? 'primary' : (wali.kelas === 'XI' ? 'sky' : 'dark')"
            :quote="wali.quote"
          />
        </div>
      </div>
    </section>

    <!-- Pesan Penutup -->
    <PesanPenutup title="Apresiasi Untuk Para Wali Kelas">
      "Terima kasih atas segala bimbingan, nasehat, kesabaran, dan kasih sayang yang tulus selama menemani langkah kami berproses. Setiap arahan dari Ibu Guru telah membentuk kami menjadi pribadi yang lebih tangguh dan siap melangkah ke masa depan."
    </PesanPenutup>
  </div>
</template>

<script setup>
import ProfilCard from '../components/profil/ProfilCard.vue'
import PesanPenutup from '../components/profil/PesanPenutup.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import pembimbing from '../data/pembimbing.json'

useScrollReveal()
</script>

<style scoped>
.pembimbing-page {
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

.pembimbing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 900px) {
  .pembimbing-grid {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
