import Vue from 'vue'
import VueRouter from 'vue-router'
import Ticket from '../views/Ticket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ticket',
    component: Ticket
  },
]

const router = new VueRouter({
  routes
})

export default router
