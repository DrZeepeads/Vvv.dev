// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools totally broken, not sure why
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],

    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      umamiHost: process.env.NUXT_PUBLIC_UMAMI_HOST,
      umamiId: process.env.NUXT_PUBLIC_UMAMI_ID,
    },
    browserlessApiKey: process.env.NUXT_BROWSERLESS_API_KEY,
    github: {
      clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
    },
    session: {
      name: 'nuxt-session',
      password: process.env.NUXT_SESSION_PASSWORD,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-auth-utils',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxthub/core',
  ],
  hub: {
    database: true,
  },
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      version: 2,
      ignoreLocalhost: true,
    },
  },
  shadcn: {
    prefix: 'Ui',
  },
  tailwindcss: {
    viewer: false,
  },
  ogImage: {
    debug: true,
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient)
      // @ts-expect-error it has alias of vue
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  googleFonts: {
    families: {
      Inter: '400..800',
    },
  },
  site: {
    name: 'vue0',
    description: 'Generate Component with simple text prompts.',
    defaultLocale: 'en',
  },
})
