import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Klijenti',
      icon: 'ti-wallet',
      path: '/klijenti'
    },
    {
      name: 'Sap',
      icon: 'ti-package',
      path: '/admin/overview'
    },
    {
      name: 'Generator',
      icon: 'ti-files',
      path: '/admin/stats'
    },
    {
      name: 'Statistika',
      icon: 'ti-bar-chart-alt',
      path: '/admin/table-list'
    }
  /*
  ,
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
  */
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
