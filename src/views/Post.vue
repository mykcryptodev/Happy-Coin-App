<template>
  <v-container class="pt-10">
    <v-row>
      <v-col class="shrink">
        <v-card shaped>
          <v-btn text rounded @click="goBack()">
            <v-icon left>fa-chevron-left</v-icon>
            Back
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card shaped>
          <v-card-text>
            <v-row>
              <v-col>
                <v-skeleton-loader type="heading"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-skeleton-loader type="list-item-avatar-three-line"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
              </v-col>
              <v-col>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                <v-skeleton-loader type="paragraph"></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'Post',

  computed: {
    postId () {
      return this.$route.params.id
    }
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
