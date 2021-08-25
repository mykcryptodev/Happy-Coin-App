<template>
  <v-container class="mt-10">
    <v-row>
      <v-col>
        <v-card shaped>
          <v-row>
            <v-col class="d-flex align-center justify-center">
              <img src="@/assets/logo-spin.gif" height="128px">
            </v-col>
          </v-row>
          <v-card-title class="d-flex justify-center">
            Welcome to Happy Coin!
          </v-card-title>
          <v-card-text>
            A charity-oriented token that is helping to fight mental illness across the world. Meet happycoin.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PostList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostList from '@/components/post/List'

export default {
  name: 'Home',

  components: {
    PostList
  }
}
</script>
