// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image'],
  compatibilityDate: '2024-11-01',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  experimental: {
    viewTransition: true
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
})
