<template>
  <div class="pt_statistic-wrapper p-3 d-flex flex-column align-items-start">
    <h3>Statistic</h3>
    <div class="d-flex flex-column">
      <div class="d-flex gap-4">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">
            Collection size
          </div>
          <div class="fs-3">
            {{ collectionSize }}
          </div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">
            Males
          </div>
          <div class="fs-3">
            {{ collectionStatistic.men }}
          </div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">
            Females
          </div>
          <div class="fs-3">
            {{ collectionStatistic.women }}
          </div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">
            Indeterminate
          </div>
          <div class="fs-3">
            {{ collectionStatistic.indeterminate }}
          </div>
        </div>
      </div>
      <div class="text-center">
        <span class="bg-warning">{{ predominate }} predominate</span>
      </div>
    </div>
    <div class="mt-5">
      <span class="text-muted">Nationalities</span>
      <div class="d-flex flex-wrap mt-2 gap-4">
      <template v-for="(nat, index) in Object.keys(nationalities)">
        <div v-if="nationalities[nat].count > 0" :key="index">
          <b>{{nat}}</b>
          <span class="text-muted">{{ `: ${nationalities[nat].count} contact${nationalities[nat].count > 1 ? 's' : ''}`}}</span>
        </div>
      </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pt-statistic',
  computed: {
    collectionSize() {
      return this.$store.getters.GET_COLLECTION_SIZE
    },
    collectionStatistic() {
      return this.$store.getters.GET_COLLECTION_STATISTIC
    },
    predominate() {
      const statistic = this.$store.getters.GET_COLLECTION_STATISTIC
      if(statistic.men > statistic.women && statistic.men > statistic.indeterminate) return "Men"
      if(statistic.women > statistic.men && statistic.women > statistic.indeterminate) return "Women"
      if(statistic.indeterminate > statistic.men && statistic.indeterminate > statistic.men) return "Indeterminate"
      return "Nobody"
    },
    nationalities(){
      return this.$store.getters.GET_COLLECTION_NATIONALITIES
    }
  }
}
</script>
