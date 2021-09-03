import Vue from 'vue'
import Vuex from 'vuex'
import { app } from './modules/app'
import { post } from './modules/post'
import { snackbar } from './modules/snackbar'
import { token } from './modules/token'
import { user } from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    app,
    post,
    snackbar,
    token,
    user,
  }
})