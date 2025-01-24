/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'all-sides': '0px 0px 10px rgba(0, 0, 0, 0.1)', // A light shadow on all sides
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '@media (max-width: 600px)': {
          '.custom-margin-top': {
            marginTop: '40px',
          },

        },
      });
    },
  ],
}

