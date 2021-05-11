import axios from "axios";

export const state = () => ({
  postLoaded: []
})
export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
  },
  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  }
}

export const actions = {
  nuxtServerInit ({commit}, context) {
    return axios.get('https://blog-nuxt-29dfa-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .then(res => {
        const postsArray = []
        for( let key in res.data) {
          postsArray.push( {...res.data[key], id: key  } )
        }
        commit('setPosts', postsArray)
      })
      .catch( e => console.log(e))  },
  addPost({commit}, post) {
    // console.log(post)
    return axios.post('https://blog-nuxt-29dfa-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post)
      .then(res => {
        // console.log(res)
        commit('addPost', {...post, id: res.data.name})
      })
      .catch( e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }
}
