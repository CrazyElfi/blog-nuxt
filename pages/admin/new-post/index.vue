<template>
 <newPostFrom @submit="onSubmit"/>
</template>
<script>
import newPostFrom from '~/components/admin/NewPostFrom.vue'
export default {
  components: {
    newPostFrom
  },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('post added')
      console.log('post ', post)
    }
  }
}
</script>
