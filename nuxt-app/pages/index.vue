<script setup lang="ts">
import { type Post } from '~/../studio/sanity.types'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <section>
    <Welcome />
    <h2>Latest Posts</h2>
    <Card v-for="post in posts || []" :key="post._id" :post="post" />
  </section>
</template>
