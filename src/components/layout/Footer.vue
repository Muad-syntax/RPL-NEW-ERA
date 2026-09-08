<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">XII RPL 2</span>
        <p class="footer-tagline">RPL NEW ERA · SMK TI Muhammadiyah Cikampek</p>
      </div>
      <div class="footer-links">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="footer-link">
          {{ link.label }}
        </RouterLink>
      </div>
      <p class="footer-copy">
        © 2026 XII RPL 2 · Rekayasa Perangkat Lunak · Angkatan 2023–2026
      </p>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { to: '/',                  label: 'Home' },
  { to: '/tentang',           label: 'Tentang' },
  { to: '/kenangan',          label: 'Kenangan' },
  { to: '/jejak-pembimbing',  label: 'Jejak Pembimbing' },
  { to: '/jejak-pelajar',     label: 'Jejak Pelajar' },
]
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #161336 0%, #0D0B24 100%);
  border-top: 1px solid rgba(255, 184, 0, 0.15);
  padding: 40px 0 24px;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

.footer-logo {
  font-family: 'Cinzel Decorative', serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-solar-gold);
  display: block;
  margin-bottom: 6px;
}

.footer-tagline {
  font-size: 13px;
  color: rgba(255, 249, 230, 0.5);
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  justify-content: center;
}

.footer-link {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  color: rgba(255, 249, 230, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover { color: var(--color-solar-gold); }

.footer-copy {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  color: rgba(255, 249, 230, 0.3);
  padding-top: 16px;
  border-top: 1px solid rgba(255, 184, 0, 0.08);
  width: 100%;
  text-align: center;
}
</style>
