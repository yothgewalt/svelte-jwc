/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.svelte",
        "./index.html"
    ],
    theme: {
        extend: {},
        fontFamily: {
            "chakra-petch": ["Chakra Petch", "sans-serif"]
        },
        screens: {
            "912px": "912px"
        },
    },
    plugins: [],
};
