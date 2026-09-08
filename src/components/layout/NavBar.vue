<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" aria-label="Kembali ke Home">
        <div class="logo-icon">
          <img
            v-if="logoExists"
            :src="logoRpl"
            alt="Logo RPL 2"
            class="logo-img"
            @error="logoExists = false"
          />
          <span v-else class="logo-placeholder">RPL</span>
        </div>
        <span class="logo-text">XII RPL 2</span>
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
            <span class="nav-icon">{{ link.icon }}</span>
            {{ link.label }}
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
        <span class="logo-text">XII RPL 2</span>
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
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoRpl from '@/assets/logo-rpl2.jpeg'

const isScrolled = ref(false)
const drawerOpen = ref(false)
const logoExists = ref(true)

const links = [
  { to: '/',                 label: 'Home',              icon: '🏠' },
  { to: '/tentang',          label: 'Tentang',           icon: 'ℹ️' },
  { to: '/kenangan',         label: 'Kenangan',          icon: '📸' },
  { to: '/jejak-pembimbing', label: 'Jejak Pembimbing',  icon: '👨‍🏫' },
  { to: '/jejak-pelajar',    label: 'Jejak Pelajar',     icon: '👩‍💻' },
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
  background: rgba(30, 27, 75, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 184, 0, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(30, 27, 75, 0.95);
  box-shadow: 0 2px 32px rgba(30, 27, 75, 0.5);
  border-bottom-color: rgba(255, 184, 0, 0.25);
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
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-solar-gold);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 184, 0, 0.1);
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-placeholder {
  font-family: 'Cinzel Decorative', serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--color-solar-gold);
}

.logo-text {
  font-family: 'Cinzel Decorative', serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-solar-gold);
  letter-spacing: 0.05em;
}

/* Desktop Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 249, 230, 0.75);
  transition: all 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: var(--color-solar-gold);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav-link:hover {
  color: var(--color-solar-gold);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.nav-link.active {
  color: var(--color-solar-gold);
  font-weight: 600;
}

.nav-icon { font-size: 16px; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.hamburger:hover { background: rgba(255, 184, 0, 0.1); }

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-on-dark);
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  backdrop-filter: blur(4px);
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: linear-gradient(180deg, #2D2A6E 0%, #1E1B4B 100%);
  border-left: 1px solid rgba(255, 184, 0, 0.2);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 184, 0, 0.15);
}

.drawer-close {
  background: rgba(255, 184, 0, 0.1);
  border: 1px solid rgba(255, 184, 0, 0.3);
  color: var(--color-solar-gold);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}
.drawer-close:hover { background: rgba(255, 184, 0, 0.2); }

.drawer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  text-decoration: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 249, 230, 0.75);
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.drawer-link:hover,
.drawer-link.active {
  background: rgba(255, 184, 0, 0.1);
  color: var(--color-solar-gold);
  border-color: rgba(255, 184, 0, 0.2);
}

.drawer-icon { font-size: 18px; }

/* Transitions */
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

.drawer-enter-active, .drawer-leave-active { transition: transform 0.3s ease-in-out; }
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }

/* Responsive */
@media (max-width: 768px) {
  .navbar { height: 60px; }
  .nav-menu { display: none; }
  .hamburger { display: flex; }
}
</style>
