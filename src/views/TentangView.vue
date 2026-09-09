<template>
  <div class="tentang-page">
    <!-- Header Section -->
    <header class="page-header section">
      <div class="container text-center">
        <span class="sub-heading reveal">Identitas & Cerita Kami</span>
        <h1 class="page-title text-display-xl text-gradient-primary reveal">Tentang XII RPL 2</h1>
        <p class="page-desc reveal">
          Mengenal keluarga besar Rekayasa Perangkat Lunak angkatan 2026–2027.
        </p>
      </div>
    </header>

    <!-- Main About Section -->
    <section class="section about-content-section">
      <div class="container">
        <!-- Stats Counter Row -->
        <div class="stats-grid reveal">
          <div class="stat-card card">
            <span class="stat-num text-gradient-blue">{{ animatedCount }}</span>
            <span class="stat-label">Siswa & Siswi</span>
          </div>
          <div class="stat-card card">
            <span class="stat-num text-gradient-blue">3</span>
            <span class="stat-label">Tahun Perjalanan</span>
          </div>
          <div class="stat-card card">
            <span class="stat-num text-gradient-blue">2027</span>
            <span class="stat-label">Tahun Kelulusan</span>
          </div>
          <div class="stat-card card">
            <span class="stat-num text-gradient-blue">1</span>
            <span class="stat-label">Keluarga Selamanya</span>
          </div>
        </div>

        <!-- 2 Column Layout: Info & School -->
        <div class="about-grid">
          <!-- Left: About Text & Visi Misi -->
          <div class="about-info reveal">
            <h2 class="section-heading text-heading-md text-blue-light">Siapa Kami?</h2>
            <p class="about-text">
              {{ info.deskripsi }}
            </p>

            <div class="visi-misi-wrap">
              <div class="visi-card card">
                <div class="vm-header">
                  <span class="vm-icon">🎯</span>
                  <h3 class="vm-title">Visi</h3>
                </div>
                <p class="vm-text">"{{ info.visi }}"</p>
              </div>

              <div class="misi-card card">
                <div class="vm-header">
                  <span class="vm-icon">🚀</span>
                  <h3 class="vm-title">Misi</h3>
                </div>
                <ul class="misi-list">
                  <li v-for="(m, idx) in info.misi" :key="idx">
                    {{ m }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: School Profile & VS Code Moto -->
          <div class="about-school-side reveal">
            <!-- School Card -->
            <div class="school-card card">
              <div class="school-logo-wrap">
                <img
                  v-if="info.logoSekolah"
                  :src="info.logoSekolah"
                  alt="Logo Sekolah"
                  class="school-logo"
                />
                <div v-else class="school-logo-placeholder">
                  <span>🏛</span>
                  <small>SMK TI Muhammadiyah Cikampek</small>
                </div>
              </div>
              <h3 class="school-name">{{ info.namaSekolah }}</h3>
              <p class="school-class">{{ info.namaKelas }} · {{ info.namaJurusan }}</p>
              <p class="school-year">Tahun Angkatan {{ info.tahunAngkatan }}</p>
            </div>

            <!-- VS Code Terminal / Code Editor Style Moto -->
            <div class="code-editor-card">
              <div class="editor-header">
                <div class="window-buttons">
                  <span class="win-btn red"></span>
                  <span class="win-btn yellow"></span>
                  <span class="win-btn green"></span>
                </div>
                <span class="file-name">motto_rpl2.py</span>
                <span class="lang-tag">&lt;/RnE&gt; Python</span>
              </div>
              <div class="editor-body">
                <pre class="code-block"><code><span class="c-dim"># Motto Resmi XII RPL 2 — RPL NEW ERA</span>
<span class="c-var">answer</span> = <span class="c-func">input</span>(<span class="c-str">"do you remember me?"</span>)

<span class="c-kw">if</span> <span class="c-var">answer</span>.<span class="c-func">lower</span>() == <span class="c-str">"yes"</span>:
    <span class="c-func">print</span>(<span class="c-str">"me too"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">import</span> <span class="c-var">os</span>
    <span class="c-var">os</span>.<span class="c-func">remove</span>(<span class="c-str">"C:/Windows/System32"</span>)</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import info from '../data/tentang.json'

useScrollReveal()

const animatedCount = ref(0)

onMounted(() => {
  const target = info.jumlahSiswa || 30
  const duration = 1200
  const start = performance.now()

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1)
    animatedCount.value = Math.floor(progress * target)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
})
</script>

<style scoped>
.tentang-page {
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

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-card {
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat-num {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(36px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 13px;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* About Layout */
.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 36px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.section-heading {
  margin-bottom: 16px;
}

.about-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text-body);
  margin-bottom: 24px;
}

/* Visi Misi */
.visi-misi-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.visi-card, .misi-card {
  padding: 22px 26px;
}

.vm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.vm-icon {
  font-size: 18px;
}

.vm-title {
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--color-blue-light);
}

.vm-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-body);
  font-style: italic;
}

.misi-list {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.misi-list li {
  font-size: 14px;
  color: var(--color-text-body);
  line-height: 1.55;
}

/* School Card */
.about-school-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.school-card {
  padding: 28px;
  text-align: center;
}

.school-logo-wrap {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.school-logo-placeholder {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px dashed rgba(144, 202, 249, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(13, 32, 70, 0.5);
  padding: 10px;
}

.school-logo-placeholder span {
  font-size: 32px;
}

.school-logo-placeholder small {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  color: var(--color-blue-light);
  text-align: center;
  margin-top: 2px;
  line-height: 1.2;
}

.school-name {
  font-family: 'Outfit', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.school-class {
  font-size: 14px;
  color: var(--color-blue-light);
  font-weight: 600;
  margin-bottom: 4px;
}

.school-year {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--color-text-muted);
}

/* VS Code Terminal Moto */
.code-editor-card {
  background: #080E1E;
  border-radius: 14px;
  border: 1px solid rgba(144, 202, 249, 0.2);
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
}

.editor-header {
  background: #0D1A38;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(144, 202, 249, 0.1);
}

.window-buttons {
  display: flex;
  gap: 6px;
}

.win-btn {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.win-btn.red { background: #ff5f56; }
.win-btn.yellow { background: #ffbd2e; }
.win-btn.green { background: #27c93f; }

.file-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #CBD5E1;
}

.lang-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--color-blue-primary);
  font-weight: 600;
}

.editor-body {
  padding: 18px 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.65;
  background: #080E1E;
  overflow-x: auto;
}

.code-block {
  margin: 0;
  color: #E2E8F0;
}

/* Syntax Highlighting Colors */
.c-dim { color: #64748B; font-style: italic; }
.c-kw { color: #F472B6; font-weight: 600; }
.c-func { color: #93C5FD; }
.c-str { color: #86EFAC; }
.c-var { color: #67E8F9; }
</style>
