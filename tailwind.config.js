/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    important: true,
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 992px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1400px) { ... }

            '3xl': '1600px',
            // => @media (min-width: 1600px) { ... }
        },
        fontSize: {
            "18": ['18px', '26px'],
            ...defaultTheme.fontSize
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            light: {
                white: '#ffffff'
            },
            dark: {
                500: '#414141',
                600: '#2E2E2E'
            },
            gray: {
                400: '#777'
            },
            primary: {
                300: '#FFCC21',
                400: '#FF963C',
                500: '#EA6C00',
                '300-400': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)'
            },
            secondary: {
                300: '#8FE9D0'
            },
        },
        extend: {},
    },
    plugins: [],
}

