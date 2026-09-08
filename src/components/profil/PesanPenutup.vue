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
            <span class="author-sub">Keluarga Besar XII RPL 2</span>
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
  padding: 60px 0;
}

.pesan-card {
  background: var(--gradient-gold);
  border-radius: var(--radius-card);
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(255, 184, 0, 0.25);
  color: var(--color-deep-navy);
}

.quote-mark {
  position: absolute;
  top: -20px;
  left: 20px;
  font-family: 'Cinzel Decorative', serif;
  font-size: 160px;
  line-height: 1;
  color: rgba(30, 27, 75, 0.12);
  pointer-events: none;
  font-weight: 900;
}

.pesan-content {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

.pesan-text {
  font-family: 'Cinzel Decorative', serif;
  font-style: italic;
  font-size: clamp(18px, 2.8vw, 26px);
  font-weight: 700;
  line-height: 1.6;
  color: var(--color-deep-navy);
  margin-bottom: 28px;
}

.pesan-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #1a1540;
}

.author-sub {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: rgba(30, 27, 75, 0.7);
}

@media (max-width: 640px) {
  .pesan-card {
    padding: 32px 20px;
  }
}
</style>
