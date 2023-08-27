import PrimeButton from 'primevue/button'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('PrimeButton', PrimeButton)
})
