// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: "UniversumGames",
      meta:[
        {name: "author", content: "UniversumGames"},
        {name: "description", content: "UniversumGames"},
        {name: "keywords", content: "universegame, developer, github"}
      ],
      favicon: { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    }
  },

  //modules: ["@nuxtjs/i18n"],
  css:[
    '~/assets/css/main.css',
    '~/assets/css/connectionsStyle.css',
    '~/assets/css/pie.css'
  ]
  /*i18n: {
    debug: true,
    locales: [
      { code: 'en', file: 'en.json', language: 'en-US', name: 'English' },
      { code: 'de', file: 'de.json', language: 'de-DE', name: 'Deutsch' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'universegame_lang',
      redirectOn: 'root'  // recommended
    }
  }*/,

  modules: ['nuxt-svgo-loader']
})