<template>
  <v-app>
    <v-main>
      <transition name="slide-fade-down-slow">
        <div v-if="loadingApp">
          <v-row>
            <v-col
              class="d-flex justify-center align-center text-center"
              style="height: 100vh;"
            >
              <v-progress-circular
                indeterminate
                color="primary"
                :size="100"
                :width="10"
              ></v-progress-circular>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
      </transition>
    </v-main>
    <transition name="slide-fade-up-slow">
      <BottomNav v-if="showNav" />
    </transition>
  </v-app>
</template>

<script>
import BottomNav from '@/components/navigation/BottomNav'

export default {
  name: 'App',

  components: {
    BottomNav
  },

  data: () => ({
    //
  }),

  computed: {
    loadingApp () {
      return this.$store.getters.getLoadingApp
    },
    showNav () {
      return this.$store.getters.getShowNav
    }
  }
};
</script>

<style>
body {
  overflow-x: hidden;
  overflow-y: hidden;
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('./assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('./assets/fonts/plus-jakarta-sans/PlusJakartaSans-BoldItalic.ttf') format('truetype');
  font-weight: bold, italic;
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('./assets/fonts/plus-jakarta-sans/PlusJakartaSans-Italic.ttf') format('truetype');
  font-weight: italic;
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('./assets/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf') format('truetype');
}

.v-application {
  font-family: 'Plus Jakarta Sans'; 
}

.theme--light.v-application {
  background-image: url('assets/img/bg-lite.svg') !important;
  background-size: cover !important;
}

.v-sheet.v-card.v-sheet--shaped {
  border-radius: 24px !important;
}
</style>
