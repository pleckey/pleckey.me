<script setup lang="ts">
import { type Post } from '~/../studio/sanity.types'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <section>
    <Welcome />
    <h2 class="latest-posts-header">Latest Posts</h2>
    <Card v-for="post in posts || []" :key="post._id" :post="post" />
  </section>
</template>

<style scoped>
.latest-posts-header {
  padding: 0 var(--space-2);
  margin: var(--space-4) 0;
}
</style>
