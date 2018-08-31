<template>
<div>  

<div class="row">

<div class="col-lg-3 col-sm-2">

    <a href="#" @click="cleanForm" @click.prevent="$modals.myModal.$show()" class="btn btn-success btn-lg btn-block">+ <span class="ti-user"></span> Korisnik</a>
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
      <div class="card" >
       <div class="content"> 
      
        <b-table
            :items="items"
            :fields="fields" >
        <template slot="index" slot-scope="data">
          {{data.index +1 }}
        </template>
        <template slot="name" slot-scope="data">
        <a href="">
          <b-img width="70" height="70" thumbnail :src="getImgUrl(data.item.image)" alt="Logo" />
          {{data.item.name}}
        </a>
        </template>
        <template slot="contract_number" slot-scope="data">
          {{data.item.contract_number}}
        </template>
        <template slot="cdr_number" slot-scope="data">
          {{data.item.cdr_number}}
        </template>
        <template slot="services_type" slot-scope="data">
         <span v-bind:class="'badge badge-success'">{{data.item.services_type}}</span>
          <span></span>
        </template>
        <template slot="updatedAt" slot-scope="data">
         <i>{{moment(data.item.updatedAt).lang('hr').fromNow()}}</i>

        
        </template>
        <template slot="actions" slot-scope="data">
            <b-button placeholder="Izmijeni" @click.stop="editClient(data.item)" size="sm" class="mr-1">
              <i class="glyphicon glyphicon-pencil"></i>
            </b-button>
           <b-button placeholder="Izbriši" size="sm"  @click.stop="deleteClient(data.item, data.index)" class="mr-1">
              <i class="glyphicon glyphicon-trash"></i>
            </b-button>
          <b-button placeholder="Pregled" size="sm"  class="mr-1">
              <i class="glyphicon glyphicon-search"></i>
            </b-button>
        </template>
        </b-table></b-form-group> <b-row>
     
    </b-row> </div>
      </div>
  </div>   
  </div>

  <vudal name="myModal">
  <div class="header">
    <i class="close icon"></i>
    Novi klijent
  </div>
  <div class="content">
    <b-form>
    <div class="row">
      <div class="col-md-8 mb-3">

        <b-form-group id="name" label="Naziv" label-for="name">
          <b-form-input id="name" v-on:input="$v.forms.name.$touch" v-model.trim="$v.forms.name.$model" type="text"/>
          <div v-if="$v.forms.name.$error">
            <div class="error" v-if="!$v.forms.name.required">Unos je obavezan</div>
            <div class="error" v-if="!$v.forms.name.minLength">Minimalno 3 karaktera</div>
          </div>
        </b-form-group>

        <b-form-group id="contract_number" label="Broj ugovora" class="col-md-13" style="padding-left:0px;" label-for="contract_number">
          <b-form-input id="contract_number" class="form-control is-invalid"v-model.trim="$v.forms.contract_number.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.contract_number.$error">
            <div class="error" v-if="!$v.forms.contract_number.required">Unos je obavezan</div>
            <div class="error" v-if="!$v.forms.contract_number.numeric">Numerički znakovi su dozvoljeni</div>
          </div>
        </b-form-group>

        <b-form-group id="cdr_number" label="Cdr šifra" class="col-md-6" style="padding-left:0px;" label-for="cdr_number">
          <b-form-input id="cdr_number" v-model.trim="$v.forms.cdr_number.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.cdr_number.$error">
            <div class="error" v-if="!$v.forms.cdr_number.required">Unos je obavezan</div>
            <div class="error" v-if="!$v.forms.cdr_number.numeric">Numerički znakovi su dozvoljeni</div>
          </div>
        </b-form-group>

        <b-form-group id="request_number" label="Broj zahtjeva" class="col-md-5" label-for="request_number">
          <b-form-input id="request_number" v-model.trim="$v.forms.request_number.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.request_number.$error">
            <div class="error" v-if="!$v.forms.request_number.required">Unos je obavezan</div>
            <div class="error" v-if="!$v.forms.request_number.numeric">Numerički znakovi su dozvoljeni</div>
          </div>
        </b-form-group>
        
      </div>
      <div class="col-md-4 mb-3" >
        <picture-input 
          ref="pictureInput"
          id="image"
          name="image"
          margin="16"
          accept="image/jpeg,image/png,image/gif" 
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
          <b-form-input id="address" v-model.trim="$v.forms.address.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.address.$error">
            <div class="error" v-if="!$v.forms.address.required">Unos je obavezan</div>
          </div>
        </b-form-group>
      
        <b-form-group id="city" label="Grad" label-for="city">
          <b-form-select v-model.trim="$v.forms.city.$model" class="mb-3">
            <option :value="null">Izaberite</option>
            <option value="SA">Sarajevo</option>
            <option value="MO">Mostar</option>
            </optgroup>
          </b-form-select>
          <div v-if="$v.forms.city.$error">
            <div class="error" v-if="!$v.forms.city.required">Molimo izaberite grad</div>
          </div>
        </b-form-group>

        <b-form-group id="contact_person" label="Kontakt osoba" label-for="contact_person">
          <b-form-input id="contact_person"  v-model.trim="$v.forms.contact_person.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.contact_person.$error">
            <div class="error" v-if="!$v.forms.contact_person.required">Unos je obavezan</div>
          </div>
        </b-form-group>
      </div>

      <div class="col-md-6 mb-3">
        <b-form-group id="email" label="Email" label-for="email">
          <b-form-input id="email" v-model.trim="$v.forms.email.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.email.$error">
            <div class="error" v-if="!$v.forms.email.required">Unos je obavezan</div>
            <div class="error" v-if="!$v.forms.email.email">Format email adrese nije ispravan</div>
          </div>
        </b-form-group>
      </div>

      <div class="col-md-6 mb-3">
        <b-form-group id="contact_number" label="Telefon" label-for="contact_number">
          <b-form-input id="contact_number" v-model.trim="$v.forms.contact_number.$model" type="text" required></b-form-input>
          <div v-if="$v.forms.contact_number.$error">
            <div class="error" v-if="!$v.forms.contact_number.required">Unos je obavezan</div>
          </div>
        </b-form-group>
      </div>
    </div>
    <b-form-group id="services_type" label="Vrsta usluge" label-for="services_type">
      <b-form-select  v-model.trim="$v.forms.services_type.$model"  class="mb-3">
        <option :value="null">Izaberite</option>
        <option value="EC">Enterprise Cloud</option>
        <option value="PC">Private Cloud</option>
        </optgroup>
      </b-form-select>
      <div v-if="$v.forms.services_type.$error">
        <div class="error" v-if="!$v.forms.services_type.required">Molimo izaberite tip usluge</div>
      </div>
    </b-form-group>

    <b-form-group id="bht_support_contact" label="Tehnički kontakt BHT" label-for="bht_support_contact">
      <b-form-select v-model.trim="$v.forms.bht_support_contact.$model" class="mb-3">
        <option :value="null">Izaberite</option>
        <option value="adnandz">Adnan Dzaferovic</option>
        <option value="jelenar">Jelena Radenkovic</option>
        </optgroup>
      </b-form-select>

      <div v-if="$v.forms.bht_support_contact.$error">
        <div class="error" v-if="!$v.forms.bht_support_contact.required">Molimo izaberite tehnički kontakt na strani BHT.</div>
      </div>
    </b-form-group>
    <div class="actions" style="text-align:left;">
      <b-button type="submit" variant="success" @click="newClient" :disabled="$v.forms.$invalid">Spasi</b-button>
      <b-button class="cancel vudal-btn" variant="danger">Zatvori</b-button>
    </div>
  </b-form >
  </div>  
</vudal>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import Customers from 'services/CustomersService'
  import PictureInput from 'vue-picture-input'
  import Vudal from 'vudal'
  import { validationMixin } from 'vuelidate'
  import swal from 'sweetalert'
  import { required, email, minLength, maxLength, numeric, decimal } from 'vuelidate/lib/validators'
  export default {
    components: {
      StatsCard,
      Vudal,
      PictureInput
    },
    data () {
      return {
        forms: {
          name: null,
          contract_number: null,
          cdr_number: null,
          request_number: null,
          pictureInput: null,
          address: null,
          city: null,
          contact_person: null,
          email: null,
          contact_number: null,
          services_type: null,
          bht_support_contact: null
        },
        fields: [
          {
            key: 'index',
            label: '#'
          },
          {
            key: 'name',
            label: 'Klijent',
            sortable: true
          },
          {
            key: 'contract_number',
            label: 'Ugovor',
            sortable: true,
            class: 'korisnik'
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
          {
            key: 'actions',
            label: 'Akcije'
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
    validations: {
      forms: {
        name: {
          required,
          minLength: minLength(3)
        },
        contract_number: {
          required,
          numeric
        },
        cdr_number: {
          required,
          numeric
        },
        request_number: {
          required,
          numeric
        },
        pictureInput: {
          required
        },
        address: {
          required
        },
        city: {
          required
        },
        email: {
          required,
          email
        },
        contact_person: {
          required
        },
        contact_number: {
          required
        },
        services_type: {
          required
        },
        bht_support_contact: {
          required
        }
      }
    },
    async mounted () {
      this.items = (await Customers.index()).data
      this.statsCards[0].value = this.items.length ? this.items.length : this.items.length = 0
    },
    methods: {
      editClient (item) {
        this.forms.name = item.name
        this.forms.contract_number = item.contract_number
        this.forms.cdr_number = item.cdr_number
        this.forms.request_number = item.request_number
        this.forms.pictureInput = this.image
        this.forms.address = item.address
        this.forms.city = item.city
        this.forms.contact_person = item.contact_person
        this.forms.email = item.email
        this.forms.contact_number = item.contract_number
        this.forms.services_type = item.services_type
        this.forms.bht_support_contact = item.bht_support_contact

        this.$modals.myModal.$show()
      },
      cleanForm () {
        this.forms.name = null
        this.forms.contract_number = null
        this.forms.cdr_number = null
        this.forms.request_number = null
        this.forms.pictureInput = null
        this.forms.address = null
        this.forms.city = null
        this.forms.contact_person = null
        this.forms.email = null
        this.forms.contact_number = null
        this.forms.services_type = null
        this.forms.bht_support_contact = null
        this.$nextTick(() => { this.$v.$reset() })
      },
      getImgUrl (name) {
        return 'http://localhost:3000/static/images/clients/logo/' + name
      },
      onChange () {
        console.log('Novi logo izabran!')
        if (this.$refs.pictureInput.file) {
          console.log('Slika učitana.')
          this.forms.pictureInput = this.$refs.pictureInput.file
          console.log(this.forms.pictureInput)
        } else {
          console.log('Nije podržano!')
        }
      },
      async deleteClient (item, index) {
        try {
          swal({
            title: 'Potvrda',
            text: 'Molimo za potvrdu da želite obrisati klijenta ' + item.name + '?',
            icon: 'warning',
            buttons: ['Odustani', 'Obriši'],
            dangerMode: true
          }).then((willDelete) => {
            if (willDelete) {
              Customers.delete(item.id).then((response) => {
                this.items.splice(index, 1)
              }).then(data => {
                swal('Uspješno ste obrisali navedenog klijenta!', {
                  icon: 'success',
                  dangerMode: false
                })
              })
            }
          }
          )
        } catch (error) {
          console.log(error)
        }
      },
      async newClient () {
        try {
          const response = await Customers.post({
            contract_number: this.forms.contract_number,
            name: this.forms.name,
            cdr_number: this.forms.cdr_number,
            request_number: this.forms.request_number,
            pictureInput: this.forms.pictureInput,
            address: this.forms.address,
            city: this.forms.city,
            contact_person: this.forms.contact_person,
            email: this.forms.email,
            contact_number: this.forms.contract_number,
            services_type: this.forms.services_type,
            bht_support_contact: this.forms.bht_support_contact
          })
          this.$nextTick(() => { this.$v.$reset() })
          this.items = (await Customers.index()).data
        } catch (error) {
          this.error.msg = error.response.data.error
        }
      }
    }
  }
</script>
<style lang="css" scoped>
.korisnik{
  vertical-align: middle;

}
.badge-success {
    color: #fff;
    background-color: #28a745;
}
.text-center {
    text-align: left; 
}
i.fa {
  display: none;
}
td:hover i.fa {
  display: inline-block;
}
.error {
  border-color: red;
  color: red;
}
</style>
