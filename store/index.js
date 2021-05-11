import axios from "axios";

export const state = () => ({
  postLoaded: []
})
export const mutations = {
  addPost(state, post) {
    console.log(post)
    state.postLoaded.push(post )
  }
}

export const actions = {
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

export const getters = {}
