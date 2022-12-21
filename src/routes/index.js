import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/components/Home.vue'
import itemPage from '~/components/ToItemPage.vue'
import News from '~/components/ToNews.vue'
import Notice from '~/components/Notice.vue'
import NotFoundView from '~/components/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/itempage',
    name: 'itempage',
    component: itemPage
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(''),
  scrollBehavior: () => ({ top: 0, left: 0}),
  routes,
})

export default router
