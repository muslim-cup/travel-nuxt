// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/style/global.css'],
  modules: ['@pinia/nuxt', 'nuxt-windicss',],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})