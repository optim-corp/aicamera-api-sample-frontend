import { NuxtConfig } from '@nuxt/types'

const isProd = process.env.NODE_ENV === 'production'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const environment = isProd
  ? {
      RAILS_HOST: process.env.RAILS_HOST as string
    }
  : {
      RAILS_HOST: process.env.RAILS_HOST as string
    }

const nuxtConfig: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'カイギジョウホウ！',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css', '@/assets/css/tailwind-utils.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/composition-api',
    '@/plugins/use-axios.ts',
    '@/plugins/api/index'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: `${process.env.RAILS_HOST}`
    }
  },

  server: {
    port: 3333
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  generate: {
    interval: 2000
  },
  env: environment
}
export default nuxtConfig
