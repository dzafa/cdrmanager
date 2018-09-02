<template>
    <div class="row">
      <div class="col-lg-3 col-md-5">
        <user-card :user="user">

        </user-card>
        
        <members-card>

        </members-card>
      </div>
      <div class="col-lg-9 col-md-7">
        <edit-profile-form>

        </edit-profile-form>
      </div> 
    </div>
  
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import Customers from 'services/CustomersService'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard
    },
    data () {
      return {
        user: {}
      }
    },
    async mounted () {
      this.user = (await Customers.getByName(this.$route.params.id)).data
    }
  }

</script>
<style>

</style>
