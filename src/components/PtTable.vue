<template>
  <div class="pt_table-wrapper shadow-sm p-3">
    <b-table
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        selectable
        select-mode="single"
        :per-page="perPage"
        :current-page="currentPage"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
    >
      <template #cell(picture)="row">
        <b-avatar variant="info" :src="row.value.medium"></b-avatar>
      </template>
      <template #cell(name)="row">
        <span class="text-primary"> {{ row.value }}</span>
      </template>
      <template #cell(dob)="row">
        {{ parseDate(row.value.date) }}
        <br>
        {{ row.value.age }} years
      </template>
      <template #cell(email)="row">
        <span class="text-primary">
          <b-icon
              icon="clipboard"
              @click="$clipboard(row.value)"
          />
          {{ row.value }}
        </span>
      </template>
      <template #cell(phone)="row">
        <span class="text-primary">
          <b-icon
              icon="clipboard"
              @click="$clipboard(row.value)"
          />
          {{ row.value }}
        </span>
      </template>
      <template #cell(location)="row">
        <span class="text-primary">
          <b-icon
              icon="clipboard"
              @click="$clipboard($utils.parseLocation(row.value))"
          />
        </span>
        {{$utils.parseLocation(row.value)}}
      </template>
      <template #cell(nat)="row">
        <span class="px-3 py-1"
            :style="`background-color: ${$store.getters.GET_COLLECTION_NATIONALITIES[row.value].color}`">
        {{ row.value }}
        </span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'pt-table',
  props: {
    items: {
      type: Array,
      default: undefined
    },
    perPage: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    sortByField: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      sortBy: '',
      sortDesc: false,
    }
  },
  methods: {
    parseDate(date) {
      return this.$moment(date).format('dddd, L, LT');
    }
  }
}
</script>

<style lang="scss">
.pt_table-wrapper {
  td {
    vertical-align: middle;
  }
}
</style>
