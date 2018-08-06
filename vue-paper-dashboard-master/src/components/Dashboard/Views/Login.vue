<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="notLoggedInsidebarLinks">
    
    </side-bar>
    <notifications>

    </notifications>
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
        <a class="navbar-brand">Prijava na sistem</a>
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
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="e.g. ime.prezime@bhtelecom.ba">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Lozinka"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Lozinka">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Prijava</b-button>
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

<script>
  import TopNavbar from 'components/Dashboard/Layout/TopNavbar.vue'
  import ContentFooter from 'components/Dashboard/Layout/ContentFooter.vue'
  import DashboardContent from 'components/Dashboard/Layout/Content.vue'
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [
          { text: 'Select One', value: null },
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ],
        show: true,
        notLoggedInsidebarLinks: [
          {
            name: 'Prijava',
            icon: 'ti-lock',
            path: '/prijava'
          }
        ]
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
      onSubmit (evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset (evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => { this.show = true })
      }
    }
  }

</script>

<style>
 .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }



</style>
