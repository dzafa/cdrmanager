<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
        <drop-down title="Adnan Dzaferovic" icon="ti-settings">
          <li><a href="#">Postavke</a></li>
          <div class="divider"></div>
          <li><a @click="logout">Odjava</a></li>
        </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      logout () {
        this.$router.push({
          path: '/prijava'
        })
      }
    }
  }

</script>
<style>
.navbar-right-menu .navbar-user img {
    float: left;
    width: 30px;
    height: 30px;
    margin: -5px 10px 0 0;
    border-radius: 30px;
}

.f-s-14 {
    font-size: 14px!important;
}

a {
    color: #b1b1b1;
}

a:hover {
    color: #f1882c;
}
</style>
