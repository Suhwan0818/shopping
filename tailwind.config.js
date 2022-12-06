/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js ,jsx,ts,tsx}',
    {transform: content => content.replace(/taos:/g, '')},
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require, import/no-unresolved
  plugins: [require('flowbite/plugin'), require('taos/plugin')],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js : where([class*="taos:"]:not(.taos-init))',
  ],
};
