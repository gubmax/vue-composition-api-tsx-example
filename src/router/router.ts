import Vue from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'

import routes from './routes'

export const routerOptions = <RouterOptions>{
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
}

Vue.use(VueRouter)
const router = new VueRouter(routerOptions)

export default router
