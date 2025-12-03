import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ahmet.akyildiz.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.cjs',
    }),
  ],
  output: 'static',
});