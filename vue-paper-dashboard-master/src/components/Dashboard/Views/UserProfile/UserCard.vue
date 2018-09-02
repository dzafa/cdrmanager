<template>
  <div class="card card-user" ><div class="shape">
					<div class="shape-text">
					153,00								
					</div>
				</div>
    <div class="p-4 bg-dark">   
    <div class="content">
      <div class="author" style="padding-top:24px;"></div> 
      <img class="avatar border-white" :src="getImgUrl(user.image)" alt="...">
      <h4 class="title"> {{ user.name }}
        </h4><b-badge variant="success">Aktivno</b-badge>
        <b-badge variant="yellow">{{ user.services_type }}</b-badge>
        <br><br>
      <p><span class="glyphicon glyphicon-map-marker"></span> {{ user.address + ', ' +  user.city}}</p>
      <p><span class="glyphicon glyphicon-phone"></span> {{ user.contact_number}}</p>
      <p><span class="glyphicon glyphicon-envelope"></span> {{ user.email}}</p>
        </div>
      
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div><hr>
      
    <br>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'CPU'
          },
          {
            title: '2GB',
            subTitle: 'RAM'
          },
          {
            title: '24,6',
            subTitle: 'DISK'
          }
        ]
      }
    },
    props: ['user'],
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      },
      getImgUrl (name) {
        return 'http://localhost:3000/static/images/clients/logo/' + name
      }
    }
  }

</script>
<style scoped>
  .badge-success {
    color: #fff;
    background-color: #28a745;
}
.shape {
    border-style: solid;
    border-width: 0 130px 60px 0;
    float: right;
    height:0px;
    width:0px;
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
.offer-success .shape {
    border-color: transparent #5cb85c transparent transparent;
}
.shape {
    border-color: rgba(255,255,255,0) #28a745 rgba(255,255,255,0) rgba(255,255,255,0);
}
.card-user .avatar {
    width:75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 15px;
}
.shape-text {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    right: -70px;
    top: 2px;
    white-space: nowrap;
    -ms-transform: rotate(30deg);
    -o-transform: rotate(360deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(25deg);
}

</style>
