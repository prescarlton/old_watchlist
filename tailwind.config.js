module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#1C1E24",
                highlight: "#0085FF",
                gray: '#44464A'
            },
            fontFamily: {
              'sans': ['Roboto','sans-serif']
            }
        },
    },
    plugins: [],
};
