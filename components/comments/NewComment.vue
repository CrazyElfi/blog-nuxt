<template>
  <section class="new-comment">
    <div class="container">
      <form
        class="comment-form"
        @submit.prevent="onSubmit">
        <label>Name: </label>
        <input v-model="comment.name" type="text">

        <label>Text: </label>
        <textarea v-model="comment.text"></textarea>
        <div class="controls">
          <button class="btn btnPrimary"> Submit!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onsubmit() {
      console.log(this.comment)
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
