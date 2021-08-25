export const user = {
  state: {
    user: null,
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
  },
  actions: {
    setUser ({ commit }, payload) {
      return commit('setUser', payload)
    },
  },
  getters: {
    getUser (state) {
      return state.user
    },
  }
}