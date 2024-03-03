import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite'
import path from 'path';

export default defineConfig({
	plugins: [UnoCSS(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
    alias: {
      $: path.resolve(__dirname, './src')
    }
  }
});
