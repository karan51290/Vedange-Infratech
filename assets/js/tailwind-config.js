// Configures the Tailwind CDN build (must load after the cdn.tailwindcss.com
// script tag, before the DOM is scanned). Mirrors the original @theme block
// from the React build's index.css, plus a new `navy` accent for new sections.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#e84e1b', hover: '#cf4518' },
        ink: { DEFAULT: '#201515', light: '#36342e' },
        body: { DEFAULT: '#605d52', mid: '#939084' },
        canvas: { DEFAULT: '#fffefb', soft: '#f8f4f0' },
        mute: '#c5c0b1',
        navy: { DEFAULT: '#00325f', light: '#0a4a86' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
};
