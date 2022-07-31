/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./src/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat'],
            },
            colors: {},
            spacing: {},
            height: {},
            scale: {},
            boxShadow: {},
        },
    },
    variants: {},
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
}
