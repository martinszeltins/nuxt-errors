/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app.vue',
        './common/components/**/*.{vue,ts}',
        './common/pages/**/*.{vue,ts}',
        './common/layouts/**/*.{vue,ts}',
        './auth/components/**/*.{vue,ts}',
        './manifest-profiles/components/**/*.{vue,ts}',
        './organizations/components/**/*.{vue,ts}',
        './printing/components/**/*.{vue,ts}',
        './reports/components/**/*.{vue,ts}',
        './roles/components/**/*.{vue,ts}',
        './shipping-labels/**/*.{vue,ts}',
        './user-invitation/**/*.{vue,ts}',
        './users/**/*.{vue,ts}',
    ],

    darkMode: 'class',

    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
