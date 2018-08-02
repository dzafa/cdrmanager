<template>
  <section class="hero is-light is-fullheight ">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">         
            <div class="box">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>

export default {
  data () {
    return {
    }
  },
}
</script>

<style>
</style>
