<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">
        Contact me!
      </h2>
      <form
        class="contact-form"
        @submit.prevent="onSubmit">
        <label>Name: </label>
        <input v-model="user.name" type="text">

        <label>Email: </label>
        <input v-model="user.email " type="text">
        <label>Text: </label>
        <textarea v-model="user.text"></textarea>
        <div class="controls">
          <button class="btn btnWhite"> Submit!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onsubmit() {
      console.log(this.user)
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4b40e3;
  color: #ffffff;

  .title {
    color: #ffffff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }

}

</style>
