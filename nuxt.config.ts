// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-quasar-ui", "@nuxt/devtools"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  quasar: {
    /* */
  },
});
