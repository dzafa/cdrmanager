<template>
<div>
  <panel>    
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
      <button class="button is-success" @click="newUser">Registruj se!</button>
    </div>
  </panel>  
</div> 
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/layout/Panel'

export default {
  name: 'Registracija',
  components: {
    Panel
  },
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

        this.$toast.open({
          message: 'Uspješno ste se registrovali. Prebacujemo vas na početnu stranicu.',
          type: 'is-success'
        })
        this.$router.push({
          path: 'naplata'
        })

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
