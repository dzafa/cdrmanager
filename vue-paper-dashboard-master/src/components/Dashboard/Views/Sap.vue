<template>
<div>
  <div class="row">
    <div class="col-lg-3 col-sm-2">
      <div class="card">
         <div class="content">
          <div class="alert alert-danger" role="alert" v-if="error.newsap">
        {{ error.msg }}
      </div>
      <b-form >
      <b-form-group id="service_name"
      label="Naziv"
      label-for="service_name">
      <b-form-input id="service_name"
        type="text"
        v-model.trim="forms.service_name"
        required>
      </b-form-input>
      </b-form-group>
      <b-form-group id="external_code"
        label="Eksterna šifra"
        label-for="external_code">
        <b-form-input id="external_code"
          type="text"
          v-model="forms.external_code"
          required>
        </b-form-input>
      </b-form-group>
     <b-form-group id="service_type_code"
        label="Tip šifre"
        label-for="service_type_code">
        <b-form-select  class="mb-3" v-model="forms.service_type_code">
      <option :value="null">Izaberite</option>
      <option value="OT">OT</option>
      <option value="PE">PE</option>
      <option value="NET">NET</option>
      </optgroup>
    </b-form-select>
      </b-form-group>
      <b-form-group id="billing_frequency"
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
      </b-form-group>
      <b-form-group id="price"
        label="Cijena"
        label-for="cijena">
        <b-form-input id="cipricejena"
          v-model="forms.price"
          type="text"
          required>
        </b-form-input>
      </b-form-group>
       <b-form-checkbox id="aktivno"
                     value="accepted"
                     unchecked-value="not_accepted">
      Šifra aktivna?
    </b-form-checkbox><br/>

    {{forms}}
      <b-button type="submit" variant="success" @click="newSap">Spasi</b-button>
    </b-form>
           
      </div>
      </div>
    </div>
    <div class="col-lg-7 col-sm-6">
      <div class="card">
     <template>
        <b-table
            :items="items"
            :fields="fields">
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
        <template slot=" " slot-scope="data">
         <a class="btn btn-warning btn-xs "><i class="glyphicon glyphicon-pencil"></i></a>
         <a class="btn btn-warning btn-xs "><i class="glyphicon glyphicon-trash"></i></a>
        </template>
        </b-table>
      </template>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
import Sap from 'services/SapService'

export default {
  components: {
    StatsCard
  },
  data () {
    return {
      forms: {
        service_name: '',
        external_code: '',
        service_type_code: '',
        billing_frequency: '',
        price: ''
      },
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
        ' '
      ],
      items: [],
      error: {
        newsap: '',
        msg: ''
      }
    }
  },
  methods: {
    async newSap () {
      try {
        const response = await Sap.post({
          service_name: this.forms.service_name,
          external_code: this.forms.external_code,
          service_type_code: this.forms.service_type_code,
          billing_frequency: this.forms.billing_frequency,
          price: this.forms.price
        })
        this.cleanForm()
        this.items = (await Sap.index()).data
      } catch (error) {
        this.error.newSap = true
        this.error.msg = error.response.data.error
      }
    },
    cleanForm () {
      this.forms.service_name = ''
      this.forms.external_code = ''
      this.forms.service_type_code = ''
      this.forms.billing_frequency = ''
      this.forms.price = ''
    }
  },
  async mounted () {
    this.items = (await Sap.index()).data
  }
}
</script>
<style>

.text-center {
    text-align: left; 
}
.card form {
     padding-left: 0px; 
}
</style>
