import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          '@': path.resolve('./src'),
        },
      },
    },
  },
}

export default config
