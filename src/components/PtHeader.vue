<template>
  <div class="contacts_header-wrapper d-flex justify-content-between align-items-center p-3">
    <div>
      <h1>Contacts</h1>
    </div>
    <div class="d-flex gap-3">
      <div>
        <b-button
            variant="light"
            @click="$emit('update-clicked')"
        >
          <b-icon icon="arrow-repeat"/>
        </b-button>
      </div>
      <div class="d-flex gap-1">
          <label class="btn btn-outline-primary d-block"
                 :class="currentView==='grid' ? 'btn-outline-secondary' : '' "
          >
            <input class="d-none"
                   v-model="currentView"
                   type="radio"
                   name="view-type"
                   value="grid"
                   @change="setView"
            >
            <b-icon icon="grid"/>
          </label>
          <label class="btn btn-outline-primary d-block"
                 :class="currentView==='table'? 'btn-outline-secondary' : '' "
          >
            <input class="d-none"
                   v-model="currentView"
                   type="radio"
                   name="view-type"
                   value="table"
                   @change="setView"
            >
            <b-icon icon="card-list"/>
          </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pt-header',
  data(){
    return {
      currentView: null
    }
  },
  mounted(){
    this.currentView = this.$store.getters.GET_CURRENT_VIEW || 'table'
  },
  methods:{
    setView(){
      this.$store.dispatch('STORE_CURRENT_VIEW', this.currentView)
    }
  },
}
</script>
