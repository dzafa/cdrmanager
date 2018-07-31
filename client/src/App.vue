<template>
  <div id="app">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
.hero .navbar {
    background-color: #4c4c4c;
}
.navbar-item img {
    max-height: 35px
}
.navbar.is-dark {
    background-color: #f6931d;
    color: whitesmoke;
}
a {
    color: #000;
}

.navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active, .navbar.is-dark .navbar-start .navbar-link:hover, .navbar.is-dark .navbar-start .navbar-link.is-active, .navbar.is-dark .navbar-end > a.navbar-item:hover, .navbar.is-dark .navbar-end > a.navbar-item.is-active, .navbar.is-dark .navbar-end .navbar-link:hover, .navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #e88712;
    color: whitesmoke;
}
</style>
