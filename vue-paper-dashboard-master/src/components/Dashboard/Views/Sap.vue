<template>
<div>
  <div class="row">
    <div class="col-lg-4 col-sm-2">
      <div class="card">
         <div class="content">
      <b-form >
      <b-form-group id="naziv"
      label="Naziv"
      label-for="naziv">
      <b-form-input id="naziv"
        type="text"
        required>
      </b-form-input>
      </b-form-group>
      <b-form-group id="extsifra"
        label="Eksterna šifra"
        label-for="extsifra">
        <b-form-input id="extsifra"
          type="text"
          required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="tipsifra"
        label="Vrsta šifre"
        label-for="tipsifra">
        <b-form-input id="tipsifra"
          type="text"
          required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="tipnaplate"
        label="Frekvencija obračuna"
        label-for="tipnaplate">
        <b-form-select v-model="selected" class="mb-3">
      <option :value="null">Izaberite</option>
      <option value="a">Sat</option>
      <option value="a">Dan</option>
      <option value="b">Mjesec</option>
      </optgroup>
    </b-form-select>
      </b-form-group>
      <b-form-group id="cijena"
        label="Cijena"
        label-for="cijena">
        <b-form-input id="cijena"
          type="text"
          required>
        </b-form-input>
      </b-form-group>
    <b-form-group id="opis"
        label="Opis"
        label-for="opis">
       <b-form-textarea id="opis"
                     v-model="text"
                     placeholder="Unesite opis.."
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    </b-form-group>
    <b-form-checkbox id="aktivno"
                     v-model="status"
                     value="accepted"
                     unchecked-value="not_accepted">
      Šifra aktivna?
    </b-form-checkbox><br/>
      <b-button type="submit" variant="success" >Spasi</b-button>
    </b-form>
           
      </div>
      </div>
    </div>
    <div class="col-lg-7 col-sm-6">
      <div class="card">
     <template>
        <b-table striped hover :items="items"></b-table>
      </template>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'

  const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]
  export default {
    components: {
      StatsCard
    },
    data () {
      return {
        items: items
      }
    },
    async mounted () {
      // this.items = (await Customers.index()).data
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
</style>
