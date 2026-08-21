import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  ssr: false,

  components: [{ path: '~/components', pathPrefix: false }],

  modules: [
    '@nuxtjs/tailwindcss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins!.push(vuetify({ autoImport: true }))
      })
    },
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: { transformAssetUrls },
    },
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Liquid Glass & Glassmorphism Generator',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})