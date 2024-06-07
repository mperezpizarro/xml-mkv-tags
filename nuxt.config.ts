// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/fonts", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "en",
        iso: "en-US",
        files: ["links.en.ts", "about.en.ts", "home.en.ts"]
      }, 
      {
        code: "es",
        iso: "es-ES",
        files: ["links.es.ts", "about.es.ts", "home.es.ts"]
      }
    ],
    defaultLocale: "es",
    strategy: "prefix",
    langDir: "i18n",
    lazy: true
  }
})