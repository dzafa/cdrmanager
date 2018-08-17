<template>
<div>  
  <div class="row">
    <div class="col-lg-3 col-sm-2">
      <div class="card">
<a href="#" @click="cleanForm" @click.prevent="$modals.simpleModal.$show()" class="btn btn-success btn-lg btn-block">+ <span class="ti-package"></span> Sap Šifra</a> 
      </div>
      <div class="card">
         <div class="content"> 
 <b-form-group label="Pretraga" class="mb-0">
            <b-form-input v-model="filter" placeholder="Traži..." /><br/>
              <b-btn variant="success" :disabled="!filter" @click="filter = ''">Traži</b-btn>
        </b-form-group> 
      </div>
      </div>
      <div class="card">
         <div class="content" style="display:none"> 
      </div>
      </div>
    </div>
    <div class="col-lg-9 col-sm-6">
      <div class="card">
         <div class="content"> 
         <div v-show="items.length <= 0 "><p>Trenutno nema sap zapisa</p></div>
        <b-form-group label="Pregled sap šifri" class="mb-0" v-show="items.length > 0 ">
     <template>
        <b-table id="my-table"
            hover
            :filter="filter"
            @filtered="onFiltered"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage">
        <template slot="service_name" slot-scope="data">
          {{data.item.service_name}}
        </template>
        <template slot="external_code" slot-scope="data">
          {{data.item.external_code}}
        </template>
        <template slot="billing_frequency" slot-scope="data">
          {{data.item.billing_frequency}}
        </template>
        <template slot="price" slot-scope="data">
          {{data.item.price}} 
        </template>
        <template slot="active" slot-scope="data">
          <span v-bind:class="[data.item.active ? 'badge badge-success' : '', 'badge badge-info']">{{data.item.active ? 'Aktivno' :'Neaktivno' }}</span>
        </template>        
        <template slot="actions" slot-scope="data">
            <b-button placeholder="Izbriši" size="sm" @click.stop="editSapCode(data.item)" class="mr-1">
              <i class="glyphicon glyphicon-pencil"></i>
            </b-button>
           <b-button placeholder="Izbriši" size="sm" @click.stop="deleteSapCode(data.item, data.index)" class="mr-1">
              <i class="glyphicon glyphicon-trash"></i>
            </b-button>
        </template>
        </b-table>
       
      </template>  </b-form-group> </div>
       <b-row>
      <b-col md="12" style="text-align:right;padding-right:30px" v-show="items.length > 0 ">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
      </div>
        
    </div>
  </div>
   <vudal name="simpleModal">
    <div class="header">
      <i class="close icon">&times;</i>
      Nova šifra
    </div>
    <div class="content">
            <b-form-group class="mb-0">
          <div class="alert alert-danger" role="alert" v-if="error.newsap">
        {{ error.msg }}
      </div>
      <b-form >
      
      <b-form-group :class="{ 'error': $v.forms.external_code.$error }" id="external_code"
        label="Eksterna šifra"
        label-for="external_code">
        <b-form-input id="external_code"
          type="text"
          v-model.trim="forms.external_code"
          :disabled="disabled_external_code"
          required>
        </b-form-input>
      <div class="error" v-if="!$v.forms.external_code.required">Unos je obavezan</div>
      <div class="error" v-if="!$v.forms.external_code.minLength">Minimalno 3 karaktera</div>
      <div class="error" v-if="!$v.forms.external_code.numeric">Samo numericki znakovi su dozvoljeni</div>
      </b-form-group>

      <b-form-group :class="{ 'error': $v.forms.service_name.$error }" id="service_name"
      label="Naziv"
      label-for="service_name">
      <b-form-input id="service_name"
        type="text"
        v-model.trim="forms.service_name"
        required>
      </b-form-input>
      <div class="error" v-if="!$v.forms.service_name.required">Unos je obavezan</div>
      <div class="error" v-if="!$v.forms.service_name.minLength">Minimalno 3 karaktera</div>
      <div class="error" v-if="!$v.forms.service_name.maxLength">Maksinalno 200 karaktera</div>
      </b-form-group>
      
     <b-form-group id="service_type_code"
        label="Tip šifre"
        :class="{ 'error': $v.forms.service_type_code.$error }"
        label-for="service_type_code">
        <b-form-select  class="mb-3" v-model="forms.service_type_code">
      <option :value="null">Izaberite</option>
      <option value="OT">OT</option>
      <option value="PE">PE</option>
      <option value="NET">NET</option>
      </optgroup>
    </b-form-select>
      <div class="error" v-if="!$v.forms.service_type_code.required">Unos je obavezan</div>
      </b-form-group>
      <b-form-group id="billing_frequency"
        :class="{ 'error': $v.forms.billing_frequency.$error }"
        label="Frekvencija obračuna"
        label-for="billing_frequency">
        <b-form-select  class="mb-3" v-model="forms.billing_frequency">
      <option :value="null">Izaberite</option>
      <option value="jednokratno">Jednokratno</option>
      <option value="sat">Sat</option>
      <option value="dan">Dan</option>
      <option value="mjesec">Mjesec</option>
      </optgroup>
    </b-form-select>
      <div class="error" v-if="!$v.forms.billing_frequency.required">Unos je obavezan</div>
      </b-form-group>
      <b-form-group id="price"
        :class="{ 'error': $v.forms.price.$error }"
        label="Cijena"
        label-for="cijena">
        <b-form-input id="price"
          v-model="forms.price"
          type="number"
          required>
        </b-form-input>
      <div class="error" v-if="!$v.forms.price.required">Unos je obavezan</div>
      <div class="error" v-if="!$v.forms.price.decimal">Unesite ispravan format</div>
      </b-form-group>
       <b-form-checkbox id="aktivno"
                     value="true"
                     unchecked-value="false"
                     v-model="forms.active">
      Aktivno?
    </b-form-checkbox><br/>
<div class="actions">
      <b-button :disabled="$v.$invalid" type="submit" variant="success" @click="newSap">Spasi</b-button>
       <b-button class="cancel vudal-btn" variant="danger">Zatvori</b-button>
    </div> 
    </b-form>
          </b-form-group>
   </div>
  </vudal>
  </div>
  
</template>
<script>
import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
import Sap from 'services/SapService'
import Vudal from 'vudal'
import swal from 'sweetalert'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, numeric, decimal } from 'vuelidate/lib/validators'

export default {
  components: {
    StatsCard,
    Vudal
  },
  data () {
    return {
      forms: {
        service_name: '',
        external_code: '',
        service_type_code: '',
        billing_frequency: '',
        price: '',
        active: 'true'
      },
      filter: null,
      currentPage: 1,
      perPage: 10,
      pageOptions: [ 5, 10, 15 ],
      fields: [
        {
          key: 'external_code',
          label: 'Šifra',
          sortable: true
        },
        {
          key: 'service_name',
          label: 'Naziv',
          sortable: true
        },
        {
          key: 'billing_frequency',
          label: 'Frekvencija',
          sortable: true
        },
        {
          key: 'price',
          label: 'Cijena',
          sortable: true
        },
        {
          key: 'active',
          label: 'Aktivno',
          sortable: true
        },
        {
          key: 'actions',
          label: 'Akcije'
        }
      ],
      items: [],
      totalRows: null,
      error: {
        newsap: '',
        msg: ''
      }
    }
  },
  validations: {
    forms: {
      external_code: {
        required,
        numeric,
        minLength: minLength(3)
      },
      service_name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(200)
      },
      service_type_code: {
        required
      },
      billing_frequency: {
        required
      },
      price: {
        required,
        decimal
      },
      active: {
        required
      }
    },
    disabled_external_code: false
  },
  methods: {
    async newSap () {
      try {
        const response = await Sap.post({
          service_name: this.forms.service_name,
          external_code: this.forms.external_code,
          service_type_code: this.forms.service_type_code,
          billing_frequency: this.forms.billing_frequency,
          price: this.forms.price,
          active: this.forms.active
        })
        this.items = (await Sap.index()).data
      } catch (error) {
        this.error.newSap = true
        this.error.msg = error.response.data.error
      }
    },
    async deleteSapCode (item, index) {
      try {
        swal({
          title: 'Potvrda',
          text: 'Molimo za potvrdu da želite obrisati šifru ' + item.external_code + '?',
          icon: 'warning',
          buttons: ['Odustani', 'Obriši'],
          dangerMode: true
        }).then((willDelete) => {
          if (willDelete) {
            Sap.delete(item.id).then((response) => {
              this.items.splice(index, 1)
            }).then(data => {
              swal('Uspješno ste obrisali navedenu šifru!', {
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
    editSapCode (item) {
      this.forms.service_name = item.service_name
      this.forms.external_code = item.external_code
      this.forms.service_type_code = item.service_type_code
      this.forms.billing_frequency = item.billing_frequency
      this.forms.price = item.price
      this.forms.active = item.active
      this.disabled_external_code = true
      this.$modals.simpleModal.$show()
    },
    cleanForm () {
      this.disabled_external_code = false
      this.forms.service_name = ''
      this.forms.external_code = null
      this.forms.service_type_code = ''
      this.forms.billing_frequency = ''
      this.forms.price = ''
      this.forms.active = true
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  async mounted () {
    this.items = (await Sap.index()).data
    this.items[0]._rowVariant = 'danger'
    this.totalRows = this.items.length
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    },
    formatPrice () {
      return this.forms.price.toFixed(2)
    }
  }
}
</script>

<style scoped>
.text-center {
    text-align: left; 
}
.card form {
     padding-left: 0px; 
}

.badge-success {
    color: #fff;
    background-color: #28a745;
}
.badge-secondary {
    color: #fff;
    background-color: #6c757d;
}
.error {
  border-color: red;
  color: red;
}

.table-danger, .table-danger td, .table-danger th {
    background-color: #7d363e;
}
</style>
