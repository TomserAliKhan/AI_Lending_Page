/** @type {import('tailwindcss').Config} */
export default {

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                lato: ["Lato", "sans-serif"]
            },
            keyframes: {
                floatY: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" }
                },
                floatX: {
                    "0%,100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(20px)" }
                }
            },
            animation: {
                "float-y": "floatY 3s ease-in-out infinite",
                "float-x": "floatX 4s ease-in-out infinite"
            }
        },
    },
    plugins: [],
}