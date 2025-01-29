<script lang="ts" setup>
import { type Post } from '~/../studio/sanity.types';
import { formatDate, urlFor } from '~/utils';

defineProps<{ post: Post; }>();
</script>

<template>
  <NuxtLink class="card" :to="`/post/${post.slug?.current || ''}`">
    <div class="card__image-container">
      <img v-if="post.mainImage" class="card__cover" :src="urlFor(post.mainImage as any).width(500).height(300).url()"
        alt="Cover image" />
      <div v-else class="card__cover--none" />
    </div>

    <div class="card__container">
      <p class="card__date">{{ formatDate(post._createdAt) }}</p>
      <h3 class="card__title">{{ post.title }}</h3>
      <p class="card__excerpt">{{ post.excerpt }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  margin-bottom: var(--space-6);
  position: relative;
  /* border-bottom: 1px solid var(--highlight); */
  color: var(--text);
  text-decoration: none;

  & .card__container {
    margin: 0 var(--space-1) 0;
  }

  & .card__image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 366.5px;
    max-width: 366.5px;
  }

  & .card__cover,
  & .card__cover--none {
    width: 100%;
    height: 231px;
    object-fit: cover;
  }

  & .card__cover--none {
    background: var(--highlight);
  }

  & .card__title {
    font-family: var(--font-family-sans);
    font-weight: 800;
    font-size: var(--font-size-6);
    line-height: var(--line-height-6);
    letter-spacing: -0.025em;
    margin: var(--space-3) 0;
  }

  & .card__excerpt {
    font-family: var(--font-family-sans);
    font-weight: 400;
    font-size: var(--font-size-2);
    line-height: var(--line-height-3);
    margin-top: 0;
    border-left: 0.5em solid var(--highlight);
    padding-left: var(--space-2);
  }

  & .card__date {
    font-weight: 600;
    font-family: var(--font-family-sans);
    font-size: var(--font-size-1);
  }

  &:hover .card__title {
    opacity: 0.8;
    transition: 0.2s;
  }

  &:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

@media (min-width: 575px) {
  .card {
    /* border-bottom: 1px solid var(--highlight); */

    &:last-child {
      padding-bottom: var(--space-6);
      border-bottom: 1px solid var(--highlight);
    }
  }
}

@media (min-width: 800px) {
  .card {
    flex-direction: row;

    & .card__container {
      margin: 0 var(--space-4) 0;
    }

    & .card__cover,
    & .card__cover--none {
      min-width: 366.5px;
      max-width: 366.5px;
      max-height: 231px;
    }
  }
}

@media (max-width: 799px) {
  .card {
    & .card__image-container {
      min-width: 100%;
      max-width: 100%;
    }
  }
}
</style>
