// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image'],
  compatibilityDate: '2024-11-01',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
	  head: {
		  htmlAttrs: {
			  lang: "uz",
		  },
		  title: 'АДТИ - Бинолар',
		  meta: [
			  { charset: 'utf-8' },
			  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			  { name: 'description', content: 'АДТИ - Бинолар жойлашуви' },
			  { name: 'author', content: 'Umarjon Alimdjanov' },

			  // Open Graph (для соцсетей)
			  { property: 'og:title', content: 'АДТИ - Бинолар' },
			  { property: 'og:description', content: 'АДТИ - Бинолар жойлашуви' },
			  { property: 'og:type', content: 'website' },
			  { property: 'og:url', content: 'https://adti-binolar.vercel.app' },
			  {property: 'og:image', content: '/icon.png'},

		  ],
		  link: [
			  {rel: 'icon', type: 'image/x-icon', href: '/icon.png'}
		  ]
	  },
  },
  experimental: {
    viewTransition: true
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
})
