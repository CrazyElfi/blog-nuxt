<template>
    <PostsList :admin=true :posts="posts"/>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
          img: 'https://www.vettimes.co.uk/app/uploads/2020/01/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjshFlUmeqohzoIk7Aydhp65_TkEDY3v4TyTE0pVjl6v8kuIhrjW-ziwTL5nKwpYXb_nw&usqp=CAU'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
          img: 'https://www.mypetzilla.co.uk/files/2515/0853/2576/uk-dog-breeds.jpg'
        }
      ]
    }
  }
}
</script>
