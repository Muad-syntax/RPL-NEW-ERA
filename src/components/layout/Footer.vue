<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">XII RPL 2</span>
        <p class="footer-tagline">
          <span class="code-tag">&lt;/RnE&gt;</span> RPL NEW ERA · SMK TI Muhammadiyah Cikampek
        </p>
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
  background: #040816;
  border-top: 1px solid rgba(144, 202, 249, 0.12);
  padding: 44px 0 28px;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

.footer-logo {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #FFFFFF;
  display: block;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.footer-tagline {
  font-size: 13.5px;
  color: var(--color-text-muted);
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.code-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-blue-light);
  background: rgba(13, 71, 161, 0.3);
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(144, 202, 249, 0.2);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  justify-content: center;
}

.footer-link {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.2s ease;
}
.footer-link:hover {
  color: var(--color-blue-light);
  transform: translateY(-1px);
}

.footer-copy {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(148, 163, 184, 0.6);
  padding-top: 20px;
  border-top: 1px solid rgba(144, 202, 249, 0.08);
  width: 100%;
  text-align: center;
}
</style>
