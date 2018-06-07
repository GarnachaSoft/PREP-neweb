import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Calificar from '@/components/Calificar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/calificar',
      name: 'Calificar',
      component: Calificar
    }
    {
      path: '/privacidad',
      name: 'Calificar',
      component: Calificar
    }
  ]
})
