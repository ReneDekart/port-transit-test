<template>
  <div class="pt_grid-wrapper d-flex flex-wrap justify-content-around gap-4 p-3">
    <pt-contact-card v-for="(contact, index ) in items" :key="index"
                     :contact="contact"
    />
  </div>
</template>
<script>

export default {
 name: "pt-grid",
 props: {
   items: {
     type: Array,
     default: ()=>{
       return []
     }
   }
 }
}
</script>
