// Composables
import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import Connection from '../views/Connection.vue'
import Testing from '../views/Testing.vue'
import CurrentData from '../views/CurrentData.vue'
import PastData from '../views/PastData.vue'
import HourlyData from '../views/HourlyData.vue'
import ForecastVue from '@/views/ForecastVue.vue'

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
      {
        path: '/testing',
        name: 'testing',
        component: Testing
      },
      {
        path: '/currentData',
        name: 'currentData',
        component: CurrentData
      },
      {
        path: '/pastData',
        name: 'pastData',
        component: PastData
      },
      {
        path: '/hourlyData',
        name: 'hourlytData',
        component: HourlyData
      },
      {
        path: '/forecast',
        name: 'forecast',
        component: ForecastVue
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
