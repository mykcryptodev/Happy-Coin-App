<template>
  <v-container class="pt-15">
    <v-card shaped>
      <v-row>
        <v-col class="d-flex align-center justify-center">
          <img src="@/assets/logo-spin.gif" height="128px">
        </v-col>
      </v-row>
      <v-card-title class="d-flex justify-center">
        Login
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="d-flex align-center justify-center">
            <LoginButton
              icon="mdi-google"
              text="Login with Google"
            />
          </v-col>
          <v-col class="d-flex align-center justify-center">
            <LoginButton
              icon="mdi-facebook"
              text="Login with Facebook"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import LoginButton from '@/components/auth/LoginButton'
  
  export default {
    name: 'Login',
    
    components: {
      LoginButton
    },

    data: () => ({
    }),

    created () {
      // if the user is logged in already, send them home
      if (this.user) {
        return this.$router.push({ name: 'Home' })
      }
    },

    computed: {
      user () {
        return this.$store.getters.getUser
      }
    }
  }
</script>
