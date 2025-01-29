// https://nuxt.com/docs/api/configuration/nuxt-config
const compatibilityDate = '2024-12-17' as const;

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
  ], '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-gtag'],

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || compatibilityDate,
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
    sources: [
      '/api/posts',
    ],
  },

  gtag: {
    enabled: process.env.NUXT_PUBLIC_GTAG_ID ? true : false,
  },

  compatibilityDate,
});