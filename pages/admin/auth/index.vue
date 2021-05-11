<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput
          v-model="user.email"
          type="email">Login:</AppInput>
        <AppInput
          v-model="user.password"
          type="password">Password:</AppInput>

        <div class="controls">
          <AppButton>Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      //Reset
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>
<style lang="scss">
.auth {
  text-align: center;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  input {
    min-width: 460px;
  }
}
</style>
