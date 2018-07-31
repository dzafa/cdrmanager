<template>
  <section class="hero is-light is-fullheight ">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                 <article class="message is-danger is-small" v-show="error.failedLogin">
                  <div class="message-body">
                  {{ error.msg }}
                  </div>
                </article>
                <div class="field is-success">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="e.g. ime.prezime@bhtelecom.ba" required
                          :class="{'is-danger': error.email}" v-model="form.email">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <p class="help is-danger" v-if="error.email">{{ error.msg }}</p>
                </div>
                <div class="field">
                  <label class="label">Lozinka</label>
                  <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="********" required
                          :class="{'is-danger': error.password}" v-model="form.password">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                <input type="checkbox" v-model="form.remember"> Zapamti me
                </div>
                <div class="field">
                  <button class="button is-success" @click="login">
                    Prijava
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Prijava',
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: null
      },
      error: {
        failedLogin: false,
        msg: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.form.email,
          password: this.form.password,
          remember: this.remember
        })
      } catch (error) {
        this.error.failedLogin = true
        this.error.msg = error.response.data.error
      }
    },
    resetErrors () {
      this.error.email = false
      this.error.password = false
      this.error.remember = false
      this.error.msg = ''
    }
  }
}
</script>

<style>
</style>
