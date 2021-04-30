<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput>Login:</AppInput>
        <AppInput>Password:</AppInput>
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
    return {}
  }
}
</script>
