// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [],
  ssr: true,
  css: ["~/assets/icomoon/style.css"],
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "nuxt-swiper",
    "@nuxt/content",
    "@nuxt/image",
  ],
  nitro: {
    // Configure the public directory
    publicAssets: [
      {
        dir: "public",
        baseURL: "/",
      },
    ],
  },

  runtimeConfig: {
    public: {
      gaId: process.env.GA_ID || "G-BTEH111F6G",
      apiUrl: process.env.API_URL,
      appGooglePlayUrl: process.env.APP_GOOGLE_PLAY_URL,
      appAppStoreUrl: process.env.APP_APP_STORE_URL,
      authOneIdUrl: process.env.ONEID_AUTH_URL,
      mapApiKey: process.env.MAP_API_KEY,
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      "DM+Sans": {
        wght: "200..900",
        ital: "200..700",
      },
    },
  },

  swiper: {
    modules: ["autoplay", "navigation", "pagination"],
  },

  compatibilityDate: "2024-07-06",
});
