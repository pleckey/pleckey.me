// https://nuxt.com/docs/api/configuration/nuxt-config
import { createClient } from '@sanity/client';

export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity', [
    '@nuxtjs/google-fonts',
    {
      families: {
        'IBM Plex Mono': [500, 700],
        Outfit: [400, 700, 800],
        'PT Serif': [400, 700],
        download: true,
        inject: true,
      },
    },
  ], '@nuxtjs/sitemap', '@nuxtjs/robots'],

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
    },
  },

  site: { 
    url: 'https://pleckey.me', 
    name: 'Patrick Leckey' 
  }, 

  sitemap: {
    urls: async () => {
      //const sanityClient = require('@sanity/client');
      const client = await createClient({
        projectId: process.env.NUXT_SANITY_PROJECT_ID,
        dataset: process.env.NUXT_SANITY_DATASET,
        useCdn: true,
      });
      const query = '*[_type == "post"] { slug, _updatedAt }';
      const blogposts= await client.fetch(query);
      return blogposts.map((post: any) => ({
        url: `/post/${post.slug.current}`,
        lastmod: post._updatedAt,
        changefreq: 'weekly',
        priority: 0.8,
      }));
    },
  },

  compatibilityDate: '2024-12-17',
})