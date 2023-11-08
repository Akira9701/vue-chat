import { createRouter, createWebHistory } from 'vue-router'
import MainPageVue from '@/pages/MainPage/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPageVue,
    },
  ],
})

export default router
