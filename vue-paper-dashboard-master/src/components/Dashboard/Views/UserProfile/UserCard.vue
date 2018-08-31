<template>
  <div class="card card-user" style=""><div class="shape">
					<div class="shape-text">
					153,00								
					</div>
				</div>
    <div class="p-4 bg-dark">   
    <div class="content">
      <div class="author" style="padding-top:24px;"></div> 
        <img class="avatar border-white" src="http://localhost:3000/static/images/clients/logo/image-1535629668916" alt="...">

        
      <h4 class="title">AS Grupacija 
        </h4><b-badge variant="success">Aktivno</b-badge>
        <b-badge variant="yellow">Enterprise Cloud</b-badge>
        <br><br>
       

      <p><span class="glyphicon glyphicon-map-marker"></span> Trg Djeca Dobrinje 20/1, Sarajevo</p>
      <p><span class="glyphicon glyphicon-phone"></span> +38762 121-931</p>
      <p><span class="glyphicon glyphicon-envelope"></span> edin.hodzic@klas.ba</p>
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
