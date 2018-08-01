
<template>
  <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <div class="field">
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
                  <p class="help is-danger" v-if="error.password">{{ error.msg }}</p>
                  <p class="help is-danger" v-if="error.default">{{ error.msg }}</p>
                </div>
                <div class="field">
                  <button class="button is-success" @click="newUser">
                    Registruj se!
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
  name: 'Registracija',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: {
        email: false,
        password: false,
        default: false,
        msg: ''
      }
    }
  },
  methods: {
    async newUser () {
      try {
        this.resetErrors()
        const response = await AuthenticationService.register({
          email: this.form.email,
          password: this.form.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.form.email = ''
        this.form.password = ''
      } catch (error) {
        this.resetErrors()
        if (error.response.data.type === 'email') {
          this.error.email = true
        } else if (error.response.data.type === 'password') {
          this.error.password = true
        } else {
          this.error.default = true
        }
        this.error.msg = error.response.data.error
      }
    },
    resetErrors () {
      this.error.email = false
      this.error.password = false
      this.error.msg = ''
    }
  }
}
</script>

<style>
</style>
