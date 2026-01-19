// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    // Приватные ключи, доступные только на сервере
    apiSecret: "123",
    // Ключи внутри public также доступны и на клиенте
    public: {
      apiBase: "/api",
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
});
