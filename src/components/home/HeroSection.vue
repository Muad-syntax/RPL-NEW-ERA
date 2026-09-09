<template>
  <section class="hero" aria-label="Hero RPL NEW ERA">
    <!-- Starfield canvas -->
    <canvas ref="canvas" class="stars-canvas" aria-hidden="true" />

    <!-- Ambient Glow Orbs -->
    <div class="orb orb-1" aria-hidden="true" />
    <div class="orb orb-2" aria-hidden="true" />

    <div class="hero-content">
      <!-- Badge Angkatan -->
      <div class="hero-badge reveal-0">
        <span class="badge-dot" />
        <span class="badge-text">Angkatan 2026–2027 · XII RPL 2</span>
      </div>

      <!-- Main Headline -->
      <h1 class="hero-title reveal-1">
        <span class="title-top">RPL</span>
        <span class="title-bottom blue-glow">NEW ERA</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero-subtitle reveal-2">
        Mengabadikan Jejak, Karya, dan Kebersamaan Tiga Tahun di SMK
      </p>

      <!-- School Tag -->
      <div class="hero-school reveal-3">
        <span class="code-bracket">&lt;</span>
        SMK TI Muhammadiyah Cikampek
        <span class="code-bracket">/&gt;</span>
      </div>

      <!-- Actions -->
      <div class="hero-actions reveal-4">
        <RouterLink to="/kenangan" class="btn btn-primary">
          <span>Lihat Kenangan</span>
        </RouterLink>
        <RouterLink to="/tentang" class="btn btn-outline">
          <span>Tentang Kelas</span>
        </RouterLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" aria-label="Scroll ke bawah">
      <span class="scroll-text">SCROLL</span>
      <div class="scroll-chevron">↓</div>
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
  els.forEach((el) => {
    const delay = parseInt(el.className.match(/reveal-(\d)/)?.[1] ?? 0) * 160
    setTimeout(() => el.classList.add('in'), 200 + delay)
  })

  // Starfield
  const cvs = canvas.value
  if (!cvs) return
  const ctx = cvs.getContext('2d')

  const resize = () => {
    cvs.width = window.innerWidth
    cvs.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const stars = Array.from({ length: 140 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.4,
    speed: Math.random() * 0.2 + 0.05,
    opacity: Math.random() * 0.7 + 0.2,
    dir: Math.random() > 0.5 ? 1 : -1,
  }))

  const draw = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    stars.forEach((s) => {
      s.opacity += 0.005 * s.dir
      if (s.opacity >= 0.9 || s.opacity <= 0.15) s.dir *= -1
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(227, 242, 253, ${s.opacity})`
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
  padding-top: 72px;
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
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.orb-1 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(33, 150, 243, 0.22) 0%, transparent 70%);
  top: -120px;
  right: -100px;
}
.orb-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(13, 71, 161, 0.35) 0%, transparent 70%);
  bottom: -100px;
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
  padding: 40px 24px;
  max-width: 960px;
}

/* Staggered reveal classes */
[class*="reveal-"] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
[class*="reveal-"].in {
  opacity: 1;
  transform: translateY(0);
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(13, 71, 161, 0.25);
  border: 1px solid rgba(144, 202, 249, 0.35);
  padding: 6px 18px;
  border-radius: var(--radius-pill);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 16px rgba(33, 150, 243, 0.15);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue-primary);
  box-shadow: 0 0 8px var(--color-blue-primary);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.badge-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-blue-light);
  text-transform: uppercase;
}

/* Title */
.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(52px, 10vw, 100px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.98;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-top {
  color: #FFFFFF;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.title-bottom {
  display: block;
}

.blue-glow {
  background: linear-gradient(135deg, #FFFFFF 0%, #90CAF9 35%, #2196F3 80%, #0D47A1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 35px rgba(33, 150, 243, 0.5));
}

.hero-subtitle {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(15px, 2.2vw, 19px);
  font-weight: 400;
  color: var(--color-text-ice);
  max-width: 640px;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-school {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(12px, 1.8vw, 14px);
  font-weight: 500;
  color: var(--color-blue-light);
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(7, 13, 30, 0.4);
  padding: 4px 14px;
  border-radius: 6px;
  border: 1px solid rgba(144, 202, 249, 0.15);
}

.code-bracket {
  color: var(--color-blue-primary);
  font-weight: 700;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: floatBounce 2s ease-in-out infinite;
}

.scroll-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--color-blue-light);
  opacity: 0.7;
}

.scroll-chevron {
  font-size: 16px;
  color: var(--color-blue-primary);
  opacity: 0.9;
  line-height: 1;
}

@keyframes floatBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}
</style>
