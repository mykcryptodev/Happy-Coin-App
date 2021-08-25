<template>
  <v-btn 
    color="primary"
    rounded
    @click="login"
  >
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    <span v-if="text">{{ text }}</span>
  </v-btn>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Login',
    props: {
      text: String,
      icon: String
    },
    data () {
      return {
        googleAuth: new firebase.auth.GoogleAuthProvider()
      }
    },
    methods: {
      async login () {
        const result = await firebase.auth().signInWithPopup(this.googleAuth)
        if (result.additionalUserInfo.isNewUser) {
          this.$store.dispatch('setLoadingApp', true)
          await firebase.firestore().collection('users')
          .doc(result.user.uid).set({
            uid: result.user.uid,
            email: result.user.email
          })
        }
        return this.redirectAfterLogin()
      },
      redirectAfterLogin () {
        if (this.$route.query && this.$route.query.from) {
          return this.$router.replace(this.$route.query.from)
        }
        return this.$router.push({ name: 'Home' })
      }
    }
  }
</script>
