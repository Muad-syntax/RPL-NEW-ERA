<template>
  <section class="hero" aria-label="Hero RPL NEW ERA">
    <!-- Starfield canvas -->
    <canvas ref="canvas" class="stars-canvas" aria-hidden="true" />

    <!-- Glow orbs decoration -->
    <div class="orb orb-1" aria-hidden="true" />
    <div class="orb orb-2" aria-hidden="true" />

    <div class="hero-content">
      <p class="hero-label reveal-0" aria-label="Tahun angkatan">Angkatan 2026 · 2027</p>

      <h1 class="hero-title reveal-1">
        <span class="title-line">RPL</span>
        <span class="title-line gold-glow">NEW ERA</span>
      </h1>

      <p class="hero-subtitle reveal-2">
        Kelas XII · Rekayasa Perangkat Lunak · 2026
      </p>

      <p class="hero-school reveal-3">SMK TI Muhammadiyah Cikampek</p>

      <div class="hero-actions reveal-4">
        <RouterLink to="/kenangan" class="btn btn-gold">📸 Lihat Kenangan</RouterLink>
        <RouterLink to="/tentang" class="btn btn-outline">Tentang Kami</RouterLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" aria-label="Scroll ke bawah">
      <div class="scroll-chevron">&#8964;</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animFrame = null

onMounted(() => {
  // Staggered reveal
  const els = document.querySelectorAll('[class*="reveal-"]')
  els.forEach((el, i) => {
    const delay = parseInt(el.className.match(/reveal-(\d)/)?.[1] ?? 0) * 200
    setTimeout(() => el.classList.add('in'), 300 + delay)
  })

  // Starfield
  const cvs = canvas.value
  const ctx = cvs.getContext('2d')

  const resize = () => {
    cvs.width = window.innerWidth
    cvs.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const stars = Array.from({ length: 160 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.3 + 0.05,
    opacity: Math.random(),
    dir: Math.random() > 0.5 ? 1 : -1,
  }))

  const draw = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    stars.forEach((s) => {
      s.opacity += 0.004 * s.dir
      if (s.opacity >= 1 || s.opacity <= 0) s.dir *= -1
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 249, 230, ${s.opacity})`
      ctx.fill()
    })
    animFrame = requestAnimationFrame(draw)
  }
  draw()
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--gradient-hero);
}

.stars-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* Glow orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 184, 0, 0.12) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}
.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(230, 48, 48, 0.08) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  max-width: 900px;
}

/* Staggered reveal classes */
[class*="reveal-"] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[class*="reveal-"].in {
  opacity: 1;
  transform: translateY(0);
}

.hero-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-solar-gold);
  background: rgba(255, 184, 0, 0.1);
  border: 1px solid rgba(255, 184, 0, 0.25);
  padding: 6px 18px;
  border-radius: 20px;
}

.hero-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(48px, 10vw, 96px);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.05;
  color: var(--color-on-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-line { display: block; }

.gold-glow {
  color: var(--color-solar-gold);
  text-shadow:
    0 0 20px rgba(255, 184, 0, 0.8),
    0 0 40px rgba(255, 184, 0, 0.5),
    0 0 80px rgba(255, 184, 0, 0.3),
    0 4px 0 rgba(232, 131, 26, 0.6);
  -webkit-text-stroke: 0px transparent;
}

.hero-subtitle {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(14px, 2.5vw, 20px);
  font-weight: 400;
  color: rgba(255, 249, 230, 0.8);
  letter-spacing: 0.05em;
}

.hero-school {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(12px, 2vw, 15px);
  font-weight: 500;
  color: rgba(255, 249, 230, 0.5);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 1.8s ease-in-out infinite;
}

.scroll-chevron {
  font-size: 28px;
  color: var(--color-solar-gold);
  opacity: 0.7;
  line-height: 1;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(10px); }
}
</style>
