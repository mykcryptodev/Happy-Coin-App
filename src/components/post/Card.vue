<template>
  <v-card shaped>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',

  data: () => ({
    title: 'Test title',
    text: 'Test text'
  })
}
</script>
