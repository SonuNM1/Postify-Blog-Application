import { defineConfig } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';
import scrollbarPlugin from 'tailwind-scrollbar';

export default defineConfig({
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    scrollbarPlugin,
  ],
});
