import firebase from 'firebase'

export const post = {
  state: {
    posts: []
  },
  mutations: {
    setPosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    async setPosts ({ commit }) {
      const db = firebase.firestore()
      let posts = []
      await db.collection('posts').onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          let post = doc.data()
          post.id = doc.id
          posts.push(post)
        })
      })
      return commit('setPosts', posts)
    },
  },
  getters: {
    getPosts (state) {
      return state.posts
    }
  }
}
