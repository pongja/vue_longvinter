import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/components/Home.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  }
]

const router = createRouter({
  history: createWebHistory(''),
  scrollBehavior: () => ({ top: 0, left: 0}),
  routes,
})

export default router
