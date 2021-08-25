import Vue from 'vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import { environment, firebaseConfig } from './config'

Vue.config.productionTip = false

let app = ''

firebase.initializeApp(firebaseConfig)

if (!environment.isProd) {
  firebase.functions().useFunctionsEmulator('http://localhost:5001')
}

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('setUser', user)
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
