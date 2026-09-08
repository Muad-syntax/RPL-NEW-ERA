import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TentangView from '../views/TentangView.vue'
import KenaganView from '../views/KenaganView.vue'
import JejakPembimbingView from '../views/JejakPembimbingView.vue'
import JejakPelajarView from '../views/JejakPelajarView.vue'

const routes = [
  { path: '/',                  component: HomeView,            name: 'home' },
  { path: '/tentang',           component: TentangView,         name: 'tentang' },
  { path: '/kenangan',          component: KenaganView,         name: 'kenangan' },
  { path: '/jejak-pembimbing',  component: JejakPembimbingView, name: 'jejak-pembimbing' },
  { path: '/jejak-pelajar',     component: JejakPelajarView,    name: 'jejak-pelajar' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
