import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
