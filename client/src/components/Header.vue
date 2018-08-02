<template>
  <div class="hero-head ">
    <nav class="navbar is-dark is-fixed-top">
      <div class="container">
        <div class="navbar-brand" >
          <div class="navbar-item">
             <a href="#" style="padding:0px; margin:0px"><img src="../assets/bht-mini.jpg" ></a>
          </div>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end" v-if="!$store.state.isUserLoggedIn">
            <router-link to="/prijava" tag="a" class="navbar-item">Prijava</router-link>
            <router-link to="/registracija" tag="a" class="navbar-item">Registracija</router-link>
          </div>
          <div class="navbar-end" v-if="$store.state.isUserLoggedIn">
            <router-link to="/postavke" tag="a" class="navbar-item">Postavke</router-link>
             <a class="navbar-item" @click="logout">Odjava</a>
          </div>
          
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$toast.open({
        duration: 5000,
        message: 'Odjava je uspješna. Hvala na posjeti!',
        position: 'is-bottom',
        type: 'is-danger'
      })
      this.$router.push({
        path: 'prijava'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }
</style>
