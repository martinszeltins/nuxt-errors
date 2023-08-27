import { fileURLToPath } from 'node:url'
import vite from './common/config/nuxt/vite.config'
import apollo from './common/config/nuxt/apollo.config'
import postcss from './common/config/nuxt/postcss.config'
import tailwindcss from './common/config/nuxt/tailwindcss.config'

export default defineNuxtConfig({
    ssr: (process?.env?.SSR === 'false') ? false : true,

    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || 'https://rickandmortyapi.com',
        }
    },

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/apollo',
        '@nuxtjs/tailwindcss',
    ],

    alias: {
        'img': fileURLToPath(new URL('./assets/img', import.meta.url)),
    },

    serverDir: './common/server',

    dir: {
        assets: './common/assets',
        layouts: './common/layouts',
        middleware: './common/middleware',
        modules: './common/modules',
        pages: './common/pages',
        plugins: './common/plugins',
        public: './common/public',
        static: './common/static',
    },

    components: [
        {
            path: '~/auth/components',
        },

        {
            path: '~/common/components',
        },

        {
            path: '~/manifest-profiles/components',
        },

        {
            path: '~/organizations/components',
        },

        {
            path: '~/pages/components',
        },

        {
            path: '~/printing/components',
        },

        {
            path: '~/reports/components',
        },

        {
            path: '~/roles/components',
        },

        {
            path: '~/shipping-labels/components',
        },

        {
            path: '~/user-invitation/components',
        },

        {
            path: '~/users/components',
        },
    ],

    imports: {
        dirs: [
            'common/**/*.ts',
            'users/**/*.ts',
            'manifest-profiles/**/*.ts',
            'organizations/**/*.ts',
            'printing/**/*.ts',
            'reports/**/*.ts',
            'roles/**/*.ts',
            'shipping-labels/**/*.ts',
            'user-invitation/**/*.ts',
        ]
    },

    typescript: {
        typeCheck: true,
        strict: true
    },

    experimental: {
        viewTransition: true,
        typedPages: true,
    },

    css: ['~/common/assets/css/app.css'],

    build: {
        // Libraries that don't play nice with modern web need to be transpiled.
        transpile: [
            'primevue',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-solid-svg-icons',
        ]
    },

    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    vite: vite,
    tailwindcss: tailwindcss,
    postcss: postcss,
    apollo: apollo,
})
