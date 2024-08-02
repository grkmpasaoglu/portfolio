/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#F9F9FF",
        glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
      },
      keyframes: {
        underlineExpand: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        underlineExpand: 'underlineExpand 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};
