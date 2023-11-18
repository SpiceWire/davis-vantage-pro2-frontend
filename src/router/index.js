// Composables
import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import Connection from '../views/Connection.vue'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/weather',
        name: 'weatherView',
        component: WeatherView
      },
      {
        path: '/connection',
        name: 'connection',
        component: Connection
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
