<script setup lang="ts">
interface AdjacentPost {
  title?: string;
  slug?: string;
}

defineProps<{
  prevPost?: AdjacentPost | null;
  nextPost?: AdjacentPost | null;
}>();
</script>

<template>
  <nav v-if="prevPost || nextPost" class="post-navigation">
    <NuxtLink v-if="prevPost" class="post-navigation__link post-navigation__link--prev"
      :to="`/post/${prevPost.slug}`">
      <span class="post-navigation__label">← Previous</span>
      <span class="post-navigation__title">{{ prevPost.title }}</span>
    </NuxtLink>

    <NuxtLink v-if="nextPost" class="post-navigation__link post-navigation__link--next" :to="`/post/${nextPost.slug}`">
      <span class="post-navigation__label">Next →</span>
      <span class="post-navigation__title">{{ nextPost.title }}</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.post-navigation {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-3) 0;
  margin-top: var(--space-6);
  border-top: 1px solid var(--highlight);

  & .post-navigation__link {
    display: flex;
    flex-direction: column;
    max-width: 45%;
    color: var(--text);
    text-decoration: none;
  }

  & .post-navigation__link--next {
    margin-left: auto;
    text-align: right;
  }

  & .post-navigation__label {
    font-family: var(--font-family-sans);
    font-weight: 600;
    font-size: var(--font-size-1);
    color: var(--highlight);
  }

  & .post-navigation__title {
    font-family: var(--font-family-sans);
    font-weight: 800;
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    margin-top: var(--space-1);
  }

  & .post-navigation__link:hover .post-navigation__title {
    opacity: 0.8;
    transition: 0.2s;
  }
}

@media (min-width: 800px) {
  .post-navigation {
    & .post-navigation__title {
      font-size: var(--font-size-4);
    }
  }
}

@media (max-width: 799px) {
  .post-navigation {
    flex-direction: column;
    gap: var(--space-3);

    & .post-navigation__link {
      max-width: 100%;
    }

    & .post-navigation__link--next {
      margin-left: 0;
      text-align: left;
    }
  }
}
</style>
