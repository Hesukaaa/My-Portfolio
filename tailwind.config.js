/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0D0D0D",
                primary: "#1DB954",
                light: "#FFFFFF",
            },
        },
    },
    plugins: [],
};