<template>
<div>  <div class="row">
<div class="col-lg-3 col-sm-2">
    <a href="#" class="btn btn-success btn-lg btn-block">+ <span class="ti-user"></span> Korisnik</a>
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
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import Customers from 'services/CustomersService'

  export default {
    components: {
      StatsCard
    },
    data () {
      return {
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
    }
  }
</script>
<style scoped>

.text-center {
    text-align: left; 
}

i.fa {
  display: none;
}
td:hover i.fa {
  display: inline-block;
}
</style>
