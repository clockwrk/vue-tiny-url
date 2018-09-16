import Vue from 'vue'
import Router from 'vue-router'
import Tiny from '@/components/Tiny'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tiny',
      component: Tiny
    }
  ]
})
