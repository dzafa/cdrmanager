<template>  
<div>
  <panel>
    <article class="message is-danger is-small" v-show="error.failedLogin">
      <div class="message-body">
        {{ error.msg }}
      </div>
    </article>
    <div class="field is-success">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="e.g. ime.prezime@bhtelecom.ba" required v-model="form.email">
        <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Lozinka</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="********" required v-model="form.password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <input type="checkbox" v-model="form.remember"> Zapamti me
    </div>
    <div class="field">
      <button class="button is-success" @click="login">Prijava</button>
    </div>
  </panel>
</div>
</template>
<script>

import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/layout/Panel'

export default {
  name: 'Prijava',
  components: {
    Panel
  },
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
        const response = await AuthenticationService.login({
          email: this.form.email,
          password: this.form.password,
          remember: this.remember
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$toast.open({
          message: 'Uspješno ste se logovali. Prebacujemo vas na početnu stranicu.',
          type: 'is-success'
        })
        this.$router.push({
          path: 'naplata'
        })
      } catch (error) {
        console.log(this.error.failedLogin)
        this.error.failedLogin = true
        this.error.msg = error.response.data.error
      }
    },
    resetErrors () {
      this.error.msg = ''
      this.error.failedLogin = false
    }
  }
}
</script>

<style>
</style>
