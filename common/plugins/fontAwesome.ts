import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add(fas, far)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)

    // eslint-disable-next-line no-unused-labels
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})
