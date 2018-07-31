<template>
  <div class="hero-head ">
    <nav class="navbar is-white is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
             <img src="../assets/logo.png">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              <router-link to="/prijava">Prijava</router-link>
            </a>
            <a class="navbar-item ">
              <router-link to="/registracija">Registracija</router-link>
            </a>
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
      msg: 'Welcome to Your Vue.js App'
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
