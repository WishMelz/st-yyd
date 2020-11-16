import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/aiMatch',
    name: 'aiMatch',
    component:()=> import('@/views/AiMatch')
  },
  {
    path: '/ListInfo',
    name: 'LsitInfo',
    component:()=> import('@/views/ListInfo')
  },
  {
    path: '/PfnInfo',
    name: 'PfnInfo',
    component:()=> import('@/views/PfnInfo')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
