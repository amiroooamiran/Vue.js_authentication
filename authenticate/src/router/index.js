import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingupView from '@/views/SingupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/singup',
    name: 'singup',
    component: SingupView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/reset_password',
    name: 'resetPassword',
    component: ResetPasswordView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
