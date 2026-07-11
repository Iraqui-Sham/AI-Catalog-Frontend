export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canonical brand orange — single source of truth (was scattered
        // across #f05a1a, #FF6B35, #FF4D00 before). Use brand-500 as the
        // default CTA color everywhere.
        brand: {
          50:  '#fff4ec',
          100: '#ffe4d1',
          200: '#ffc7a3',
          300: '#ffa26b',
          400: '#fa7d3d',
          500: '#f05a1a', // primary — matches existing navbar CTA
          600: '#d8480f',
          700: '#b3390d',
          800: '#8f2f11',
          900: '#742810',
        },
        // Warm neutral surface scale — matches the scale already used well
        // in Admin.jsx / ImageGallery.jsx. Standardizing the rest of the
        // dashboard (Sidebar, StudioPage, Navbar, etc.) onto this same
        // scale instead of the cold #111111/#333333/#666666 set they used.
        surface: {
          50:  '#fafaf8',
          100: '#f7f6f3',
          150: '#f0efe9',
          200: '#ededea',
          250: '#e8e7e2',
          300: '#e2e1dc',
          350: '#e0dfdb',
          400: '#d0cfc8',
          450: '#c4c3bc',
          500: '#aeada6',
          600: '#9e9e98',
          700: '#6b6b67',
          800: '#3a3a37',
          850: '#2e2e2b',
          900: '#1a1a18',
        },
      },
    },
  },
  plugins: [],
}
