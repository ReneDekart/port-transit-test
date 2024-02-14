<template>
  <div class="pt_table_filter-wrapper d-flex align-items-center gap-4 shadow-sm p-3">
    <div class="d-flex">
      <b-input-group>
        <b-form-input
            placeholder="Search by full name"
            :value="filterValues.name"
            @input="setFilterByName"
        />
        <b-input-group-text>
          <b-icon icon="search" />
        </b-input-group-text>
      </b-input-group>
    </div>
    <div class="h-auto">
      <b-form-select
          class="pt_table_filter-select form-select"
          :value="filterValues.gender || null"
          @input="setFilterByGender"
      >
        <b-form-select-option
            class="text-muted"
            :value="null">Select gender
        </b-form-select-option>
        <b-form-select-option
            v-for="(gender, index) in genders"
            :key="index"
            :value="gender">
          {{ gender }}
        </b-form-select-option>
      </b-form-select>
    </div>
    <div>
      <b-input placeholder="Nationality"
               :value="filterValues.nat"
               @input="setFilterByNat"
      />
    </div>
    <div class="ms-auto">
      <b-button
          variant="light"
          @click="clearFilter"
      >
        <span class="align-middle">
          <b-icon icon="x"/>
        </span>
        <span>Clear</span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pt-table-filter',
  methods: {
    setFilterByName(value) {
      this.$store.commit('SET_FILTER_NAME', value)
    },
    setFilterByGender(value) {
      this.$store.commit('SET_FILTER_GENDER', value)
    },
    setFilterByNat(value) {
      this.$store.commit('SET_FILTER_NAT', value.toUpperCase())
    },
    clearFilter() {
      this.$store.commit('SET_FILTER_CLEAR')
    }
  },
  computed: {
    genders() {
      return this.$store.getters.GET_GENDERS
    },
    filterValues() {
      return this.$store.getters.GET_FILTER
    }
  }
}
</script>

<style lang="scss">
.pt_table_filter-wrapper {
  .pt_table_filter-select {
    width: 200px;
  }
}
</style>

