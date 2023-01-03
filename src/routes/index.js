import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/components/Home.vue'
import itemPage from '~/components/ToItemPage.vue'
import News from '~/components/ToNews.vue'
import Notice from '~/components/Notice.vue'
import ToNoticeDetail from '~/components/ToNoticeDetail.vue'
import ToNoticeEdit from '~/components/ToNoticeEdit.vue'
import NoticeCreate from '~/components/ToNoticeCreate.vue'
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
    path: '/Notice/:id',
    name: 'noticedetail',
    component: ToNoticeDetail,
    props:true
  },
  {
    path: '/Notice/:id/Edit',
    name: 'noticeEdit',
    component: ToNoticeEdit
  },
  {
    path: '/Notice/Create',
    name: 'noticecreate',
    component: NoticeCreate
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
