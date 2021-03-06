import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'

// Plugins
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import BootstrapVue from 'bootstrap-vue'
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { VudalPlugin } from 'vudal'
import Vuelidate from 'vuelidate'
import moment from 'moment'

Vue.prototype.moment = moment
// plugin setup
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(VudalPlugin)
Vue.use(Vuelidate)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  validations: {},
  router,
  data: {
    Chartist: Chartist
  }
})
