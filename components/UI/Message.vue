<template>
  <div class="message" :class="msgClass">
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    msgClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
.message {
  font-size: 22px;
  &.success {
    color: #26de81;
  }
  &.error {
    color: #fc5c65;
  }
}
</style>
