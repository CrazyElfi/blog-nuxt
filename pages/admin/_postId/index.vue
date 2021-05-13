<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit"/>
</template>
<script>
import axios from "axios";
import newPostFrom from '~/components/admin/NewPostFrom.vue'

export default {
  components: {
    newPostFrom
  },
  layout: 'admin',
  asyncData(ctx) {
      return axios.get(`https://blog-nuxt-29dfa-default-rtdb.europe-west1.firebasedatabase.app/posts/${ctx.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: ctx.params.postId}
        }
      })
    .catch( e => ctx.error(e))
  },
  methods: {
    onSubmit(post) {
      console.log('Editing  ')
      this.$store.dispatch('editPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>
