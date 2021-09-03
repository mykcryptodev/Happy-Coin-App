<template>
  <div>
    <v-row class="d-flex justify-center">
      <transition-group name="slide-fade-down-slow">
        <v-col v-for="post in posts" :key="post.id">
          <PostCard :post="post" :inList="true" class="mb-2" />
        </v-col>
      </transition-group>
    </v-row>
  </div>
</template>

<script>
import PostCard from '@/components/post/Card'

export default {
  name: 'PostList',

  components: {
    PostCard
  },

  created () {
    this.$store.dispatch('setPosts')
  },

  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  },
}
</script>
