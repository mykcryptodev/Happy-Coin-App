<template>
  <v-card class="mx-auto overflow-hidden sharp-top bg-transparent v100" :elevation="0">
    <v-app-bar v-if="showNav">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">
        <router-link :to="{ name: 'Home' }">
          <div class="d-flex align-center">
            <img src="@/assets/logo.png" height="32px">
            <span class="ml-2">Happy</span>
          </div>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{ name: authButton.routeName }">
        <v-btn value="auth" rounded text>
          <v-icon left >{{ authButton.icon }}</v-icon>
          <span>{{ authButton.label }}</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
  name: 'BottomNav',

  data: () => ({
    value: 'home',
    
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },

  computed: {
    authButton () {
      if (this.user && !this.user.isAnonymous) {
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
    
    showNav () {
      return this.$store.getters.getShowNav
    },

    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped>
.v-application a {
  color: inherit !important;
}

.bg-transparent {
  background: transparent !important;
}

.sharp-top {
  border-radius: 0px 0px 2px 2px !important;
}
</style>


