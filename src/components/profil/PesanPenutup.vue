<template>
  <section class="pesan-section reveal">
    <div class="container">
      <div class="pesan-card">
        <span class="quote-mark">“</span>
        <div class="pesan-content">
          <p class="pesan-text">
            <slot>
              Terima kasih atas segala bimbingan, dedikasi, ilmu, dan kesabaran yang tak terhingga selama perjalanan tiga tahun kami di bangku sekolah. Setiap nasihat dan teladan yang diberikan akan selalu menjadi suluh bagi langkah kami mengarungi masa depan.
            </slot>
          </p>
          <div class="pesan-author">
            <span class="author-title">{{ title || 'Dari Kami yang Selalu Belajar' }}</span>
            <span class="author-sub">Keluarga Besar XII RPL 2 · RPL NEW ERA</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
})
</script>

<style scoped>
.pesan-section {
  padding: 64px 0;
}

.pesan-card {
  background: var(--gradient-banner);
  border-radius: var(--radius-card);
  padding: 52px 44px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(13, 71, 161, 0.4);
  color: #FFFFFF;
  border: 1px solid rgba(227, 242, 253, 0.3);
}

.quote-mark {
  position: absolute;
  top: -30px;
  left: 20px;
  font-family: 'Outfit', sans-serif;
  font-size: 180px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.12);
  pointer-events: none;
  font-weight: 900;
}

.pesan-content {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
}

.pesan-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-style: italic;
  font-size: clamp(17px, 2.4vw, 23px);
  font-weight: 500;
  line-height: 1.75;
  color: #FFFFFF;
  margin-bottom: 32px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.pesan-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-title {
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #E3F2FD;
}

.author-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  color: rgba(227, 242, 253, 0.8);
}

@media (max-width: 640px) {
  .pesan-card {
    padding: 36px 22px;
  }
}
</style>
