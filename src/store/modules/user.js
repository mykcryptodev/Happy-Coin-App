import firebase from 'firebase'

export const user = {
  state: {
    user: null,
    userDoc: null
  },
  
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUserDoc (state, payload) {
      state.userDoc = payload
    }
  },

  actions: {
    async createUserDoc (state, payload) {
      const db = firebase.firestore()
      const ref = db.collection('users').doc(payload.uid)
      const userDoc = {}
      return await ref.set(userDoc)
    },
    setUser ({ commit }, payload) {
      return commit('setUser', payload)
    },
    setUserDoc ({ commit, dispatch }, payload) {
      console.log('setting user doc', payload)
      const db = firebase.firestore()

      const userDoc = db.collection('users').doc(payload.uid)
      userDoc.onSnapshot(docSnapshot => {
        console.log('got a snapshot', docSnapshot.data())
        if (!docSnapshot.exists) {
          return dispatch ('createUserDoc', payload)
        }
        return commit('setUserDoc', docSnapshot.data())
      }, err => {
        return err
      })
    },
    async updateUserDoc (state, payload) {
      console.log('payload for update', payload)
      const db = firebase.firestore()
      
      await db.collection('users')
      .doc(payload.user.uid)
      .update(payload.updates)
    }
  },

  getters: {
    getUser (state) {
      return state.user
    },
    getUserDoc (state) {
      return state.userDoc
    }
  }
}