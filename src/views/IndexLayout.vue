<template>
  <div class="mt-5 d-flex flex-column align-items-center justify-content-center">
    <span class="fs-4">Выберите роль:</span>
    <div class="mt-3 d-flex flex-column">
      <label class="fs-5">
        <input
            type="radio"
            v-model="currentRole"
            name="user-role"
            value="user"
        />
        User
      </label>
      <label class="fs-5">
        <input
            type="radio"
            v-model="currentRole"
            name="user-role"
            value="admin"
        />
        Admin
      </label>
    </div>
    <div class="mt-3">
      <b-button
          size="md"
          variant="primary"
          :disabled="!currentRole"
          @click="onSelectRole"
      >
        Войти
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index-layout',
  data() {
    return {
      currentRole: null
    }
  },
  mounted() {
    this.$store.dispatch("CLEAR_ALL" )
  },
  methods: {
    onSelectRole(){
      this.$store.dispatch("STORE_USER", this.currentRole)
      this.$router.push('/contacts')
    }
  }
}
</script>
