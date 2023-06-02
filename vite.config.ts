import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { checker } from 'vite-plugin-checker'
import stylelint from 'vite-plugin-stylelint'
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
  const aliases = [
    {
      find: /~/,
      replacement: path.resolve(__dirname, './src'),
    },
  ]

  return {
    server: {
      port: 3000,
    },
    plugins: [
      react({
        babel: {
          plugins: [['effector/babel-plugin', { addLoc: true }]],
        },
      }),
      splitVendorChunkPlugin(),
      checker({ typescript: true }),
      stylelint({ fix: true }),
      svgr(),
    ],
    resolve: {
      alias: aliases,
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
  }
})
