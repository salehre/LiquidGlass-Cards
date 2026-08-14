import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // SPA mode keeps things simple with 3 CSS frameworks loaded at once
  ssr: false,

  // Without this, components in subfolders (e.g. components/generator/CardPreview.vue)
  // auto-register under a folder-prefixed name like <GeneratorCardPreview> instead of
  // <CardPreview>, which is what was breaking the generator page.
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
      title: 'Aether Cards — Glass Card Generator',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})