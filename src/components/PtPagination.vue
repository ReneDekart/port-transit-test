<template>
    <b-pagination
        :value="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        @input="(value)=>onInput(value)"
        align="right"
        size="sm"
        class="my-0"
        prev-text="<"
        next-text=">"
        :hide-goto-end-buttons="true"
        :hide-ellipsis="true"
        :limit="2"
    />
</template>
<script>
export default {
  name: "pt-pagination",
  props: {
    perPage: {
      type: Number,
      default: 10,
      require: true
    },
    currentPage: {
      type: Number,
      default: 0,
      require: true
    },
    totalRows: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onInput(value){
      this.$store.commit('SET_CURRENT_PAGE', value)
    }
  },
}
</script>
