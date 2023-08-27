export default {
    /**
     * Here we override all the PostCSS plugins to make sure we have
     * the correct order because some plugins like the important-startstop
     * has to come after other plugins.
     */
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        'tailwindcss': {},
        'autoprefixer': {},
        'postcss-important-startstop': {},
    }
}
