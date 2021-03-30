import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import(/* webpackChunkName: "about" */ '../views/Company.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import(/* webpackChunkName: "about" */ '../views/Work.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
