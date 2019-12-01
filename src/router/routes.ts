import { RouteConfig } from 'vue-router'

import Home from '@/components/routes/Home'

const Chunk = () => import(/* webpackChunkName: "chunk" */ '@/components/routes/Chunk')

const routes = <Array<RouteConfig>>[
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/chunk',
    name: 'chunk',
    component: Chunk,
  },
]

export default routes
