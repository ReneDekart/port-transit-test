<template>
  <b-card class="pt_contact_card-wrapper">
    <b-card-text class="d-flex flex-column align-items-center h-100">
      <b-avatar
          class="mb-2"
          :src="contact.picture.medium"/>
      <div class="text-primary text-center">
        <h4>{{ contact.name }}</h4>
      </div>
      <div class="mb-2">
        {{parseDate(contact.dob.date)}}
      </div>
      <div class="mb-2 text-primary">
        <b-icon
            class="clipboard_icon"
            icon="clipboard"
            @click="$clipboard(contact.email)"
        />
        {{contact.email}}
      </div>
      <div class="mb-2 text-primary">
        <b-icon
            class="clipboard_icon"
            icon="clipboard"
            @click="$clipboard(contact.phone)"
        />
        {{contact.phone}}
      </div>
      <div class="mb-2 text-center text-primary">
        <b-icon
            class="clipboard_icon"
            icon="clipboard"
            @click="$clipboard($utils.parseLocation(contact.location))"
        />
        {{$utils.parseLocation(contact.location)}}}
      </div>
      <div class="mt-auto">
        <span
            class="px-3 py-1"
            :style="`background-color: ${$store.getters.GET_COLLECTION_NATIONALITIES[contact.nat].color}`"
        >{{contact.nat}}</span>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'pt-contact-card',
  props: {
    contact: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  methods:{
    parseDate(date) {
      return this.$moment(date).format('dddd, L, LT');
    },
  }
}
</script>

<style lang="scss">
.pt_contact_card-wrapper {
  width: 300px;
}
</style>
