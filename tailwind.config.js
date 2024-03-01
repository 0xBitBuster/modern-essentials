/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
        "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    ],
    theme: {
        fontFamily: {
            'open-sans': 'var(--font-open-sans)'
        },
        extend: {
            colors: {
                'primary': '#463431',
                'secondary': '#817474',
                'dark-primary': '#D0C3C3'
            }
        }
    },
    plugins: [],
};
