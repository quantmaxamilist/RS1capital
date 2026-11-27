// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Preferred address. Canonical URLs, the sitemap and structured data are all built from this.
  site: 'https://www.rs1.uk',
  vite: {
    plugins: [tailwindcss()]
  }
});
