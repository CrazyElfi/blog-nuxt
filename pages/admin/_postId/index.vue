<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit"/>
</template>
<script>
import newPostFrom from '~/components/admin/NewPostFrom.vue'
export default {
  components: {
    newPostFrom
  },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        img: 'https://www.vettimes.co.uk/app/uploads/2020/01/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg'
      },
      comments:[
        {
          name: 'Franclin',
          text: 'Duis aute irure dolor .'
        },
        {
          name: 'Dolly',
          text: 'Duis aute irure velit esse.'
        },
      ]
    }
  },
  methods: {
    onSubmit(post) {
      console.log('Editing  ')
      console.log('post ', post)
    }
  }
}
</script>
