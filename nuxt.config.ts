// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Alex Wendland',
      meta: [
        {
          name: 'Alex Wendland\'s Personal Site',
          content: 'This contains information about Alex Wendland and his projects.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_KEY,
  }
})
