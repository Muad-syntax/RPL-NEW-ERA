<template>
  <div class="pelajar-page">
    <!-- Header -->
    <header class="page-header section">
      <div class="container text-center">
        <span class="sub-heading reveal">Pahlawan Baris Kode</span>
        <h1 class="page-title text-display-xl text-gold reveal">Jejak Pelajar</h1>
        <p class="page-desc reveal">
          Penghargaan setinggi-tingginya untuk guru-guru produktif RPL yang telah menuntun kami mengenal logika, sintaks, dan arsitektur perangkat lunak.
        </p>
      </div>
    </header>

    <!-- Guru Jurusan Section -->
    <section class="section guru-list">
      <div class="container">
        <div class="guru-grid">
          <ProfilCard
            v-for="guru in pelajar"
            :key="guru.id"
            :nama="guru.nama"
            :gelar="guru.gelar"
            :mapel="guru.mapel"
            :foto="guru.foto"
            badge="Guru Jurusan RPL"
            badge-color="blue"
          />
        </div>
      </div>
    </section>

    <!-- Pesan Penutup -->
    <PesanPenutup title="Apresiasi Untuk Guru Jurusan RPL">
      "Dari baris kode pertama yang penuh error, hingga aplikasi yang siap dijalankan. Terima kasih Bapak Guru atas setiap ilmu pemrograman, kesabaran dalam debugging, dan motivasi untuk selalu berani mengeksplorasi teknologi baru."
    </PesanPenutup>
  </div>
</template>

<script setup>
import ProfilCard from '../components/profil/ProfilCard.vue'
import PesanPenutup from '../components/profil/PesanPenutup.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import pelajar from '../data/pelajar.json'

useScrollReveal()
</script>

<style scoped>
.pelajar-page {
  padding-top: 72px;
}

.page-header {
  background: var(--gradient-hero);
  border-bottom: 1px solid rgba(255, 184, 0, 0.1);
  padding: 60px 0 40px;
}

.sub-heading {
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-solar-gold);
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.page-title {
  margin-bottom: 12px;
}

.page-desc {
  font-size: 16px;
  color: rgba(255, 249, 230, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.guru-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 680px) {
  .guru-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
}
</style>
