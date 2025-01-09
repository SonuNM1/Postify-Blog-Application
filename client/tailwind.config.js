import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
});
