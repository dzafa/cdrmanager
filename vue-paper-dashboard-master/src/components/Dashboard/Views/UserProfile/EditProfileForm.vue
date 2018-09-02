<template>
  <b-card no-body>
  <div class="nav-tabs-custom">
 <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="active">
    <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Resursi</a>
  </li>
  <li >
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Naplata</a>
  </li>
  <li>
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Historija aktivnosti</a>
  </li>
</ul><div class="col-lg-12 col-sm-2">
<div class="content" style="float:right">
  
    <br> <button type="button" class="btn btn-warning">+ Nova VM</button> </div></div>
  <div class="content">
      <div class="row">
    <div class="col-lg-4 col-sm-2">
    <b-card header="SQL Instanca"
                header-tag="header"
                footer="Centos 7"
                footer-tag="footer"
                title="">
            <p class="card-text">172.30.2.12</p>
               <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h6>{{info.title}}
            <small>{{info.subTitle}}</small>
          </h6>
        </div>
      </div></div>
        </b-card>
      </div>
       <div class="col-lg-4 col-sm-2">
    <b-card header="App1"
                header-tag="header"
                footer="Windows server 2016"
                footer-tag="footer"
                title="">
            <p class="card-text">172.30.2.12</p>
           <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h6>{{info.title}}
            <small>{{info.subTitle}}</small>
          </h6>
        </div>
      </div>
  
    </div>
        </b-card>
      </div>  <div class="col-lg-4 col-sm-2">
    <b-card header="Backup test1"
                header-tag="header"
                footer="AIX"
                footer-tag="footer"
                title="">
            <p class="card-text">172.30.2.12</p>
            <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h6>{{info.title}}
            <small>{{info.subTitle}}</small>
          </h6>
        </div>
      </div></div>
        </b-card>
      </div>
      </div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
</div>
</div>
</b-card>
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
        ],
        user: {
          company: 'Paper Dashboard',
          username: 'michael23',
          email: '',
          lastName: 'Faker',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          postalCode: '',
          aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      },
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
<style>
.nav-tabs-custom>.nav-tabs>li:first-of-type.active>a {
    border-left-color: transparent;
}
.nav-tabs-custom>.nav-tabs>li.active>a {
    border-top-color: transparent;
    border-left-color: #f4f4f4;
    border-right-color: #f4f4f4;
}
.nav-tabs-custom>.nav-tabs>li.active>a, .nav-tabs-custom>.nav-tabs>li.active:hover>a {
    background-color: #fff;
    color: #444;
}
.nav-tabs-custom>.nav-tabs>li>a, .nav-tabs-custom>.nav-tabs>li>a:hover {
    background: transparent;
    margin: 0;
}
.nav-tabs-custom>.nav-tabs>li>a {
    color: #444;
    border-radius: 0;
}
.nav-tabs-custom {
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 3px;
}
.nav-tabs-custom>.nav-tabs>li:first-of-type {
    margin-left: 0;
}
.nav-tabs-custom>.nav-tabs>li.active {
    border-top-color: #f1882c;
}
.nav-tabs-custom>.nav-tabs>li {
    border-top: 3px solid transparent;
    margin-bottom: -2px;
    margin-right: 5px;
}
.nav-tabs>li {
    float: left;
    margin-bottom: -1px;
}
.nav>li {
    position: relative;
    display: block;
}
.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}

.card-header {
    padding: 12px 20px;
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
}
.card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}
.card-footer {
    padding: 12px 20px;
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 20px;
    padding: 1.25rem;
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
</style>
