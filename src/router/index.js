import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import City from '../pages/City/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
