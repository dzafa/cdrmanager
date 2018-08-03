<template>
  <section class="hero is-light is-fullheight ">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-4 is-offset-8">         
            <div class="box">
              
        <b-table
            :hoverable="true"
            :striped="true"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            default-sort="user.first_name"
            :data="data"
            detailed
            detail-key="id"
            @details-open="(row, index) => $toast.open(`Expanded ${row.name}`)">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="name" label="Klijent" sortable>
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="contract_number" label="Ugovor" sortable>
                    {{ props.row.contract_number }}
                </b-table-column>

                <b-table-column field="cdr_number" label="CDR šifra" sortable>
                    {{ props.row.cdr_number }}
                </b-table-column>

                <b-table-column field="createdAt" label="Zadnja promjena" centered sortable>
                    <span class="tag is-success">
                        {{ new Date(props.row.createdAt).toLocaleDateString() }}
                    </span>
                </b-table-column>

               <b-table-column field="servicesType" label="Usluga" sortable>
                    {{ props.row.services_type }}
                </b-table-column>

                <b-table-column field="bht_support_contact" label="TL" sortable>
                    {{ props.row.bht_support_contact }}
                </b-table-column>
            </template>

             <template slot="detail" slot-scope="props">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ props.row.name }} {{ props.row.name }}</strong>
                            <small>@{{ props.row.name }}</small>
                            <small>31m</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
        </template>
        </b-table>
          </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import Customers from '@/services/CustomersService'
import Panel from '@/components/layout/Panel'

export default {
  components: {
    Panel
  },
  data() {
    return {
        data: '',
        defaultOpenedDetails: [1],
        isPaginated: true,
        isPaginationSimple: false,
        defaultSortDirection: 'asc',
        currentPage: 1,
        perPage: 30
    }
  },
  async mounted () {
    this.data = (await Customers.index()).data
  }
}

</script>