export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'app',

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 700] },
    ],
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL || 'laibanaseertts@gmail.com',
  },

  nitro: {
    experimental: { wasm: true },
  },
})
