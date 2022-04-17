module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#010916",
                highlight: "#0085FF",
                gray: "#44464A",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
            boxShadow: {
                top: '0px -40px 3px rgba(50, 50, 50, 0.75);'
            }
        },
    },
    plugins: [],
};
