<template>
<div>
  <div class="row">
    <div class="col-lg-4 col-sm-6" v-for="stats in statsCards">
      <stats-card>
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
  </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <b-table hover
             :items="items"
             :fields="fields">
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
          {
            key: 'bht_support_contact',
            label: 'TM',
            sortable: true
          }
        ],
        items: '',
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
            footerText: 'Zadnji mijesec',
            footerIcon: 'ti-calendar'
          }
        ]
      }
    },
    async mounted () {
      this.items = (await Customers.index()).data
      this.statsCards[0].value = this.items.length
    }
  }

</script>
<style>

</style>
