import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Registracija from '@/components/Registracija'
import Prijava from '@/components/Prijava'
import Naplata from '@/components/Naplata'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/registracija',
      name: 'Registracija',
      component: Registracija
    },
    {
      path: '/prijava',
      name: 'Prijava',
      component: Prijava
    },
    {
      path: '/naplata',
      name: 'Naplata',
      component: Naplata
    }
  ]
})
