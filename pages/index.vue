<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My last posts: "/>
    <PostsList :posts="postsLoaded"/>
    <contacts/>
  </div>
</template>

<script>
import promo from "~/components/Promo.vue"
import contacts from "~/components/Contacts.vue"

export default {
  components: {
    promo,
    contacts
  },
  // asyncData(ctx) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         postsLoaded: [
  //           {
  //             id: 1,
  //             title: '1 post',
  //             descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  //             img: 'https://www.vettimes.co.uk/app/uploads/2020/01/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg'
  //           }
  //         ]
  //       })
  //     }, 1500)
  //   })
  //   .then( data => {
  //     return data
  //   })
  //   .catch( e => {
  //     ctx.error(e)
  //   })
  // },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
