<template>
<div>  <div class="row">
<div class="col-lg-3 col-sm-2">
    <a href="#" @click.prevent="$modals.myModal.$show()" class="btn btn-success btn-lg btn-block">+ <span class="ti-user"></span> Korisnik</a>
    <br>
     <stats-card v-for="stats in statsCards"> 
        <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
          <i :class="stats.icon"></i>
        </div>
        <div class="numbers" slot="content">
          <p>{{stats.title}}</p>
          {{stats.value}}
        </div>
        <div class="stats" slot="footer">
          <i :class="stats.footerIcon"></i> {{stats.footerText}}
        </div>
      </stats-card>
</div>
     <div class="col-md-9">
      <div class="card">
        <b-table
            :items="items"
            :fields="fields">
        <template slot="id" slot-scope="data">
          {{data.item.id}}
        </template>
        <template slot="name" slot-scope="data">
          {{data.item.name}}
        </template>
        <template slot="contract_number" slot-scope="data">
          {{data.item.contract_number}}
        </template>
        <template slot="cdr_number" slot-scope="data">
          {{data.item.cdr_number}}
        </template>
        <template slot="services_type" slot-scope="data">
          {{data.item.services_type}}
        </template>
        <template slot="updatedAt" slot-scope="data">
          {{data.item.updatedAt}}
        </template>
        <template slot=" " slot-scope="data">
            <b-button placeholder="Izbriši" size="sm" class="mr-1">
              <i class="glyphicon glyphicon-pencil"></i>
            </b-button>
           <b-button placeholder="Izbriši" size="sm"  class="mr-1">
              <i class="glyphicon glyphicon-trash"></i>
            </b-button>
        </template>
        </b-table>
      </div>
  </div>   
  </div>

  <vudal name="myModal">
  <div class="header">
    <i class="close icon"></i>
    Novi klijent
  </div>
  <div class="content">
    <div class="row">
    <div class="col-md-8 mb-3">
      <b-form-group id="name" label="Naziv" label-for="name">
        <b-form-input id="name" v-model.trim="forms.name" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="contract_number" label="Broj ugovora" class="col-md-13" style="padding-left:0px;" label-for="contract_number">
        <b-form-input id="contract_number" v-model.trim="forms.contract_number" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="cdr_number" label="Cdr šifra" class="col-md-6" style="padding-left:0px;" label-for="cdr_number">
        <b-form-input id="cdr_number" v-model.trim="forms.cdr_number" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="request_number" label="Broj zahtjeva" class="col-md-5" label-for="request_number">
        <b-form-input id="request_number" v-model.trim="forms.request_number" type="text" required></b-form-input>
      </b-form-group>
    </div>
    <div class="col-md-4 mb-3" >
      <picture-input 
      ref="pictureInput"
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Dodaj logo'
      }"
      @change="onChange">
    </picture-input>
    </div>
    <div class="col-md-12 mb-1">
       <b-form-group id="address" label="Adresa" label-for="address">
        <b-form-input id="address" v-model.trim="forms.address" type="text" required></b-form-input>
      </b-form-group>
         <b-form-group id="city"
        label="Grad"
        label-for="city">
        <b-form-select v-model.trim="forms.city" class="mb-3">
      <option :value="null">Izaberite</option>
      <option value="SA">Sarajevo</option>
      <option value="MO">Mostar</option>
      </optgroup>
    </b-form-select>
  </b-form-group>
      <b-form-group id="contact_person" label="Kontakt osoba" label-for="contact_person">
        <b-form-input id="contact_person"  v-model.trim="forms.contact_person" type="text" required></b-form-input>
      </b-form-group>
     </div>
     <div class="col-md-6 mb-3">
      <b-form-group id="email" label="Email" label-for="email">
        <b-form-input id="email" v-model.trim="forms.email" type="text" required></b-form-input>
      </b-form-group>
     </div>
    <div class="col-md-6 mb-3">
      <b-form-group id="contact_number" label="Telefon" label-for="contact_number">
        <b-form-input id="contact_number" v-model.trim="forms.contact_number" type="text" required></b-form-input>
      </b-form-group>
     </div>
  </div>
       <b-form-group id="services_type"
        label="Vrsta usluge"
        label-for="services_type">
        <b-form-select  v-model.trim="forms.services_type"  class="mb-3">
      <option :value="null">Izaberite</option>
      <option value="EC">Enterprise Cloud</option>
      <option value="PC">Private Cloud</option>
      </optgroup>
    </b-form-select>
  </b-form-group>
     <b-form-group id="bht_support_contact"
        label="Tehnički kontakt BHT"
        label-for="bht_support_contact">
        <b-form-select v-model.trim="forms.bht_support_contact" class="mb-3">
      <option :value="null">Izaberite</option>
      <option value="adnandz">Adnan Dzaferovic</option>
      <option value="jelenar">Jelena Radenkovic</option>
      </optgroup>
    </b-form-select>
  </b-form-group>
  </div>
 <div class="actions" style="text-align:left;">
      <b-button type="submit" variant="success" @click="newClient">Spasi</b-button>
       <b-button class="cancel vudal-btn" variant="danger">Zatvori</b-button>
    </div> 

    {{ forms }}
</vudal>

  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import Customers from 'services/CustomersService'
  import PictureInput from 'vue-picture-input'
  import Vudal from 'vudal'
  export default {
    components: {
      StatsCard,
      Vudal,
      PictureInput
    },
    data () {
      return {
        forms: {
          name: '',
          contract_number: '',
          cdr_number: '',
          request_number: '',
          pictureInput: '',
          address: '',
          city: '',
          contact_person: '',
          email: '',
          contact_number: '',
          logo: '',
          services_type: '',
          bht_support_contact: ''
        },
        fields: [
          {
            key: 'id',
            sortable: true,
            label: 'ID'
          },
          {
            key: 'name',
            label: 'Klijent',
            sortable: true
          },
          {
            key: 'contract_number',
            label: 'Ugovor',
            sortable: true
          },
          {
            key: 'cdr_number',
            label: 'CDR šifra',
            sortable: true
          },
          {
            key: 'services_type',
            label: 'Usluga',
            sortable: true
          },
          {
            key: 'updatedAt',
            label: 'Zadnja promijena',
            sortable: true
          },
          ' '
        ],
        items: [],
        statsCards: [
          {
            type: 'info',
            icon: 'ti-user',
            title: 'Ukupno',
            footerText: 'Osvježeno',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Prihod',
            value: '1,345 BAM',
            footerText: 'Zadnji mjesec',
            footerIcon: 'ti-calendar'
          }
        ]
      }
    },
    async mounted () {
      this.items = (await Customers.index()).data
      this.statsCards[0].value = this.items.length ? this.items.length : this.items.length = 0
    },
    methods: {
      onChange (image) {
        console.log('Novi logo izabran!')
        if (image) {
          console.log('Slika učitana.')
          this.image = image
          console.log(image)
        } else {
          console.log('Nije podržano!')
        }
      },
      async newClient () {
        try {
          const response = await Customers.post({
            contract_number: this.forms.contract_number,
            name: this.forms.name,
            cdr_number: this.forms.cdr_number,
            request_number: this.forms.request_number,
            logo: this.image,
            address: this.forms.address,
            city: this.forms.city,
            contact_person: this.forms.contact_person,
            email: this.forms.email,
            contact_number: this.forms.contract_number,
            services_type: this.forms.services_type,
            bht_support_contact: this.forms.bht_support_contact
          })
          this.items = (await Customers.index()).data
        } catch (error) {
          this.error.msg = error.response.data.error
        }
      }
    }
  }
</script>
<style scoped>
.text-center {
    text-align: left; 
}
.text.center {
    text-align: left; 
}

i.fa {
  display: none;
}
td:hover i.fa {
  display: inline-block;
}
</style>
