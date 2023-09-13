/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,php}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {},
};
