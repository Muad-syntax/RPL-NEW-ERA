<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" aria-label="Kembali ke Home">
        <div class="logo-box">
          <img
            v-if="logoExists"
            :src="logoRpl"
            alt="Logo RPL New Era"
            class="logo-img"
            @error="logoExists = false"
          />
          <span v-else class="logo-fallback">&lt;/RnE&gt;</span>
        </div>
        <div class="logo-info">
          <span class="logo-title">XII RPL 2</span>
          <span class="logo-subtitle">RPL NEW ERA</span>
        </div>
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="nav-menu" role="menubar">
        <li v-for="link in links" :key="link.to" role="none">
          <RouterLink
            :to="link.to"
            class="nav-link"
            :class="{ active: $route.path === link.to }"
            role="menuitem"
          >
            <!-- <span class="nav-icon">{{ link.icon }}</span> -->
            <span class="nav-text">{{ link.label }}</span>
            <span class="nav-glow-indicator" />
          </RouterLink>
        </li>
      </ul>

      <!-- Hamburger Button (Mobile) -->
      <button
        class="hamburger"
        :class="{ open: drawerOpen }"
        @click="toggleDrawer"
        aria-label="Toggle menu"
        :aria-expanded="drawerOpen"
      >
        <span /><span /><span />
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer Overlay -->
  <Transition name="overlay">
    <div v-if="drawerOpen" class="drawer-overlay" @click="closeDrawer" />
  </Transition>

  <!-- Mobile Drawer -->
  <Transition name="drawer">
    <div v-if="drawerOpen" class="drawer" role="dialog" aria-label="Navigation menu">
      <div class="drawer-header">
        <div class="drawer-brand">
          <div class="logo-box small">
            <img v-if="logoExists" :src="logoRpl" alt="Logo RPL" class="logo-img" />
            <span v-else class="logo-fallback">&lt;/RnE&gt;</span>
          </div>
          <div>
            <div class="logo-title">XII RPL 2</div>
            <div class="logo-subtitle">RPL NEW ERA</div>
          </div>
        </div>
        <button class="drawer-close" @click="closeDrawer" aria-label="Tutup menu">✕</button>
      </div>
      <ul class="drawer-menu">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="drawer-link"
            :class="{ active: $route.path === link.to }"
            @click="closeDrawer"
          >
            <span class="drawer-icon">{{ link.icon }}</span>
            <span class="drawer-text">{{ link.label }}</span>
            <span v-if="$route.path === link.to" class="drawer-active-dot" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoRpl from '@/assets/logoRnE.png'

const isScrolled = ref(false)
const drawerOpen = ref(false)
const logoExists = ref(true)

const links = [
  { to: '/',                 label: 'Home',              icon: '' },
  { to: '/tentang',          label: 'Tentang',           icon: '' },
  { to: '/kenangan',         label: 'Kenangan',          icon: '' },
  { to: '/jejak-pembimbing', label: 'Jejak Pembimbing',  icon: '' },
  { to: '/jejak-pelajar',    label: 'Jejak Pelajar',     icon: '' },
]

const onScroll = () => { isScrolled.value = window.scrollY > 20 }
const toggleDrawer = () => { drawerOpen.value = !drawerOpen.value }
const closeDrawer = () => { drawerOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 72px;
  background: rgba(7, 13, 30, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(144, 202, 249, 0.12);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(7, 13, 30, 0.92);
  box-shadow: 0 4px 24px rgba(3, 8, 22, 0.6);
  border-bottom-color: rgba(33, 150, 243, 0.25);
  height: 68px;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
  group: true;
}

.logo-box {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1.5px solid rgba(144, 202, 249, 0.6);
  box-shadow: 0 0 16px rgba(33, 150, 243, 0.25);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.navbar-logo:hover .logo-box {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.5);
  border-color: var(--color-blue-primary);
}

.logo-box.small {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  padding: 2px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-fallback {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #0D47A1;
}

.logo-info {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  line-height: 1.2;
}

.logo-subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-blue-light);
  line-height: 1;
}

/* Desktop Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-link:hover {
  color: #FFFFFF;
  background: rgba(144, 202, 249, 0.08);
}

.nav-link.active {
  color: #FFFFFF;
  font-weight: 600;
  background: rgba(33, 150, 243, 0.12);
  border: 1px solid rgba(33, 150, 243, 0.3);
}

.nav-glow-indicator {
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2196F3, transparent);
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.nav-link.active .nav-glow-indicator {
  opacity: 1;
}

.nav-icon {
  font-size: 15px;
  line-height: 1;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: rgba(13, 71, 161, 0.15);
  border: 1px solid rgba(144, 202, 249, 0.2);
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.hamburger:hover {
  background: rgba(33, 150, 243, 0.2);
  border-color: var(--color-blue-primary);
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-blue-light);
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Drawer */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(3, 8, 22, 0.75);
  z-index: 1001;
  backdrop-filter: blur(8px);
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: linear-gradient(180deg, #0D1A38 0%, #070D1E 100%);
  border-left: 1px solid rgba(144, 202, 249, 0.2);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.6);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(144, 202, 249, 0.15);
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.drawer-close {
  background: rgba(144, 202, 249, 0.1);
  border: 1px solid rgba(144, 202, 249, 0.25);
  color: var(--color-blue-light);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drawer-close:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ff8b8b;
  border-color: rgba(239, 68, 68, 0.4);
}

.drawer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-body);
  transition: all 0.2s ease;
  border: 1px solid transparent;
  position: relative;
}

.drawer-link:hover,
.drawer-link.active {
  background: rgba(33, 150, 243, 0.15);
  color: #FFFFFF;
  border-color: rgba(33, 150, 243, 0.3);
}

.drawer-icon { font-size: 18px; }

.drawer-active-dot {
  margin-left: auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue-primary);
  box-shadow: 0 0 8px var(--color-blue-primary);
}

/* Transitions */
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

.drawer-enter-active, .drawer-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }

/* Responsive */
@media (max-width: 768px) {
  .navbar { height: 64px; }
  .nav-menu { display: none; }
  .hamburger { display: flex; }
}
</style>
