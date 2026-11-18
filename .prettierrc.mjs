/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  // el plugin de Tailwind debe ir siempre último
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  // Tailwind v4: le indica dónde está tu @theme, para que reconozca tus clases propias (bg-noche, text-mega…)
  tailwindStylesheet: './src/styles/global.css',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
