import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import AccountView from './views/AccountView.vue'
import InvoiceView from './views/InvoiceView.vue'
import OrderView from './views/OrderView.vue'
import DefaultView from './views/DefaultView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AccountView,
    alias: '/account',
    meta: {
      title: 'Nastavení účtu',
    },
  },
  {
    path: '/invoice',
    component: InvoiceView,
    meta: {
      title: 'Faktury',
    },
  },
  {
    path: '/order',
    component: OrderView,
    meta: {
      title: 'Moje objednávky',
    },
  },
  {
    path: '/:slug',
    component: DefaultView,
    meta: {
      title: '404',
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
