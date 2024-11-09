module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#333333',
        'custom-dark-soft': '#3D3D3D',
        'custom-dark-placeholder': '#474747',
        'custom-gray-font': '#AEAEAE'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
