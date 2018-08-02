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
<style lang="scss">
    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    $primary: #f6931d;
    $primary-invert: findColorInvert($primary);
    $twitter: #4099FF;
    $twitter-invert: findColorInvert($twitter);

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
        "white": ($white, $black),
        "black": ($black, $white),
        "light": ($light, $light-invert),
        "dark": ($dark, $dark-invert),
        "primary": ($primary, $primary-invert),
        "info": ($info, $info-invert),
        "success": ($success, $success-invert),
        "warning": ($warning, $warning-invert),
        "danger": ($danger, $danger-invert),
        "twitter": ($twitter, $twitter-invert)
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";
    </style>

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
