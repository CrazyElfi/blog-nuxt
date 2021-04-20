<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
    <comments :comments="comments"/>
    <newComment/>
  </div>
</template>

<script>
import post from '~/components/blog/Post.vue'
import newComment from '~/components/comments/NewComment.vue'
import comments from '~/components/comments/Comments.vue'

export default {
  components: {
    post,
    comments,
    newComment,
  },
  data() {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.Duis aute irure dolor in reprehenderit in voluptate velit esse.Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        img: 'https://www.vettimes.co.uk/app/uploads/2020/01/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg'
      },
      comments:[
        {
          name: 'Franclin',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.'
        },
        {
          name: 'Dolly',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    max-width: 400px;

  }

  p {
    color: #999999;
  }
}

.post-body {
  text-align: left;
}
</style>
