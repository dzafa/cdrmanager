<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="notLoggedInsidebarLinks">
    
    </side-bar>
    <notifications>

    </notifications>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from 'components/Dashboard/Layout/TopNavbar.vue'
  import ContentFooter from 'components/Dashboard/Layout/ContentFooter.vue'
  import DashboardContent from 'components/Dashboard/Layout/Content.vue'
  export default {
    data () {
      return {
        notLoggedInsidebarLinks: [
          {
            name: 'Prijava',
            icon: 'ti-lock',
            path: '/prijava'
          },
          {
            name: 'Registracija',
            icon: 'ti-user',
            path: '/registracija'
          }
        ]
      }
    },
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
