<template>
  <div class="p-5">
    <pt-header class="mb-4 shadow-sm"
               @update-clicked="updateCollection"
    />
    <pt-table-filter v-if="userRole ==='admin'"/>
    <pt-grid
        class="mt-4 mb-4 shadow-sm"
        v-if="currentView ==='grid'"
        :items="currentItems"
    />
    <pt-table
        class="mt-4 mb-4"
        v-if="currentView ==='table'"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        sort-by-field="name"
    />
    <pt-statistic
        class="mt-4 mb-4 shadow-sm"
    />
    <pt-pagination
        :total-rows="items.length"
        :per-page="perPage"
        :current-page="currentPage"
    ></pt-pagination>
  </div>
</template>

<script>
export default {
  name: 'contacts-layout',
  data() {
    return {
      userRole: null,
      fields: [
        {key: 'picture', label: 'Avatar', sortable: false},
        {key: 'name', label: 'Full name', sortable: true},
        {key: 'dob', label: 'Birthday', sortable: false},
        {key: 'email', label: 'Email', sortable: false},
        {key: 'phone', label: 'Phone', sortable: false},
        {key: 'location', label: 'Location', sortable: false},
        {key: 'nat', label: 'Nationality', sortable: false},
      ]
    }
  },
  async mounted() {
    this.userRole = this.$store.getters.GET_USER_ROLE || null
    this.sortBy = this.sortByField
    console.log(this.userRole)
    await this.updateCollection()
  },
  methods: {
    parseDate(date) {
      return this.$moment(date).format('dddd, L, LT')
    },
    async updateCollection(){
      const {data, status, error} = await this.$http.getContacts({
        results: 200
      })
      if (!error) {
        this.$store.commit('SET_CONTACTS', data)
        this.$store.commit('SET_FILTER_CLEAR')
      } else {
        console.log(error, status)
      }
    }
  },
  computed: {
    items() {
      return this.$store.getters.GET_FILTERED_COLLECTION || []
    },
    perPage() {
      return this.$store.getters.GET_PER_PAGE || 0
    },
    currentPage() {
      return this.$store.getters.GET_CURRENT_PAGE || 0
    },
    currentItems() {
      return this.items.filter((item, index) =>
          (index < (this.perPage * this.currentPage)
              && index >= (this.perPage * (this.currentPage - 1))))
    },
    currentView(){
      return this.$store.getters.GET_CURRENT_VIEW
    }
  }
}
</script>
