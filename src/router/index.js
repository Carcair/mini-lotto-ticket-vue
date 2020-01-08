import Vue from 'vue'
import VueRouter from 'vue-router'
import GetTicket from '../views/GetTicket.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/get-ticket',
    name: 'get-ticket',
    component: GetTicket
  },
]

const router = new VueRouter({
  routes
})

export default router
