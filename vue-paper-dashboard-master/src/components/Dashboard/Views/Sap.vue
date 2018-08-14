<template>
<div>  
  <div class="row">
    <div class="col-lg-3 col-sm-2">
      <div class="card">
<a href="#" @click.prevent="$modals.simpleModal.$show()" class="btn btn-success btn-lg btn-block">+ <span class="ti-package"></span> Sap Šifra</a>
           
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
        <b-form-group label="Lista sap šifri" class="mb-0">
     <template>
        
        <b-table ref="table"
        
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
        
        <template slot=" " slot-scope="data">
          
         <a @click.stop="info('awd')" class="btn btn-warning btn-xs "><i class="glyphicon glyphicon-pencil"></i></a>
         <a class="btn btn-warning btn-xs "><i class="glyphicon glyphicon-trash"></i></a>
        </template>
        </b-table>
       
      </template>  </b-form-group> </div>
       <b-row>
      <b-col md="12" style="margin-left:10px;">
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
        <b-form-group id="external_code"
        label="Eksterna šifra"
        label-for="external_code">
        <b-form-input id="external_code"
          type="text"
          v-model="forms.external_code"
          required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="service_name"
      label="Naziv"
      label-for="service_name">
      <b-form-input id="service_name"
        type="text"
        v-model.trim="forms.service_name"
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
                     accepted
                     unchecked-value="not_accepted">
      Aktivno?
    </b-form-checkbox><br/>
<div class="actions">
      <b-button type="submit" variant="success" @click="newSap">Spasi</b-button>
      
    
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
        price: ''
      },
      filter: null,
      // totalRows: this.items.length,
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
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    cleanForm () {
      this.forms.service_name = ''
      this.forms.external_code = ''
      this.forms.service_type_code = ''
      this.forms.billing_frequency = ''
      this.forms.price = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  async mounted () {
    this.items = (await Sap.index()).data
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
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
.pagination {
    display: inline-block;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}
</style>
