<template>
  <v-bottom-navigation absolute v-model="value">
    <v-row>
      <v-col class="d-flex align-center justify-center">
        <router-link :to="{ name: 'Home' }">
          <v-btn value="home" rounded>
            <span>Home</span>

            <v-icon>fa-home</v-icon>
          </v-btn>
        </router-link>

        <v-btn value="favorites" rounded>
          <span>Favorites</span>

          <v-icon>fa-heart</v-icon>
        </v-btn>

        <router-link :to="{ name: authButton.routeName }">
          <v-btn value="auth" rounded>
            <span>{{ authButton.label }}</span>

            <v-icon>{{ authButton.icon }}</v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNav',

  data: () => ({
    value: 'home'
  }),

  computed: {
    authButton () {
      if (this.user) {
        return {
          icon: 'fa-user-circle',
          label: 'Profile',
          routeName: 'Profile'
        }
      }
      return {
        icon: 'fa-sign-in-alt',
        label: 'Login',
        routeName: 'Login'
      }
    },

    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>


