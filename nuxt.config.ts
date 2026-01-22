// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    // Приватные ключи, доступные только на сервере
    apiSecret: "123",

    public: {
      EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
      EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  css: [
    "~/assets/css/fonts.css",
    "~/assets/css/reset.css",
    "~/assets/css/global.css",
  ],

  modules: ["@nuxt/image"],
});
