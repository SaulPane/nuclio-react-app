module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({

                'hero-pattern': "url('/src/images/background.jpeg')",

                'footer-texture': "url('/img/footer-texture.png')",
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}