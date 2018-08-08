<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="notLoggedInsidebarLinks">
    
    </side-bar>

    
    <div class="main-panel">
       <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">Registracija</a>
      </div>
      <div class="navbar-right-menu">
       
      </div>
    </div>
  </nav>
       <div class="content">
        <div class="container-fluid">
            <div class="row">
    <div class="col-md-6 col-xs-2">
      <div class="card">
      <div class="content">

      <div class="alert alert-danger" role="alert" v-if="error.failedLogin">
        {{ error.msg }}
      </div>
      <b-form @submit="newUser">
      <b-form-group id="exampleInputGroup1"
        label="Email"
        label-for="exampleInput1">
        <b-form-input id="email"
          type="email"
          v-model="form.email"
          required
          placeholder="e.g. ime.prezime@bhtelecom.ba">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
          label="Lozinka"
          label-for="exampleInput2">
          <b-form-input id="exampleInput2"
            type="password"
            v-model="form.password"
            required
            placeholder="********">
          </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success" >Registruj se!</b-button>
    </b-form>
           
      </div></div>
    </div>
  </div>
        </div>
      </div>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from 'components/Dashboard/Layout/TopNavbar.vue'
  import ContentFooter from 'components/Dashboard/Layout/ContentFooter.vue'
  import DashboardContent from 'components/Dashboard/Layout/Content.vue'
  import AuthenticationService from 'services/AuthenticationService'

  export default {
    data () {
      return {
        notLoggedInsidebarLinks: [
          {
            name: 'Prijava',
            icon: 'ti-lock',
            path: '/prijava'
          },
          {
            name: 'Registracija',
            icon: 'ti-user',
            path: '/registracija'
          }
        ],
        show: true,
        form: {
          email: '',
          password: ''
        },
        error: {
          failedLogin: false,
          msg: ''
        }
      }
    },
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      async newUser () {
        try {
          this.resetErrors()
          const response = await AuthenticationService.register({
            email: this.form.email,
            password: this.form.password
          })
          // this.$store.dispatch('setToken', response.data.token)
          // this.$store.dispatch('setUser', response.data.user)

          this.$router.push({
            path: 'klijenti/lista'
          })

          this.form.email = ''
          this.form.password = ''
        } catch (error) {
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
