const snackbarTimeout = 6000
export const snackbar = {
  state: {
    snackbarText: '',
    snackbarY: '', // "top" or "bottom"
    snackbarX: '', // "right" or "left"
    snackbarMode: '', // "multi-line" or "vertical"
    snackbarColor: '',
    showSnackbar: false
  },
  mutations: {
    setSnackbar (state, payload) {
      for (const property in payload) {
        state[property] = payload[property]
      }
      setTimeout(() => {
        state.showSnackbar = false
      }, snackbarTimeout)
    }
  },
  actions: {
    setSnackbar ({ commit }, payload) {
      return commit('setSnackbar', payload)
    }
  },
  getters: {
    getSnackbar (state) {
      return {
        snackbarText: state.snackbarText,
        snackbarY: state.snackbarY,
        snackbarX: state.snackbarX,
        snackbarMode: state.snackbarMode,
        snackbarTimeout: state.snackbarTimeout,
        snackbarColor: state.snackbarColor,
        showSnackbar: state.showSnackbar
      }
    }
  }
}
