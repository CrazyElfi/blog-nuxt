<template>
  <section class="new-comment">
    <div class="container">
      <Message v-if="message" :message="message"/>
      <form
        class="comment-form"
        @submit.prevent="onSubmit">
        <label></label>
        <AppInput v-model="comment.name">Name:</AppInput>

        <AppTextArea v-model="comment.text">Text: </AppTextArea>
        <div class="controls">
          <AppButton> Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = 'Submitted!'
      console.log(this.comment)
      this.comment.name = ''
      this.comment.text = ''
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .comment-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}

</style>
