export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bwa-micro-member-page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/api'},
    { src: '~/plugins/vue-loading-overlay'},
    { src: '~plugins/vue-youtube-embed.js', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    ['vue-currency-filter/nuxt', {
      symbol: 'Rp',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: undefined,
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],

  router: {
    prefetchLinks: false
  },

  axios : {
    baseURL: process.env.BASE_URL,
    frontPage: process.env.FRONT_PAGE,
    credentials: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //fixing error runtime vue
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'},
  },

  env : {
    baseUrl: process.env.BASE_URL,
    frontPage: process.env.FRONT_PAGE,
    imageUrl: process.env.IMAGE_URL
  },

  server: {
    port: 3002
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  //loading-bar
  loading: { 
    color: '#ed8936',
    height: '3px' 
  },
}
