<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Blog</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <nuxt-link class="navbar-link"
                             :title="link.title"
                             :to="link.url">
                  {{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>

    <router-view></router-view>

    <!--    <footer></footer>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  .nuxt-link-exact-active {
    color: #4b40e3;
  }
}

</style>
