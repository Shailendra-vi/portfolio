
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  base: './',

  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (warning.message.includes("/*@__PURE__*/")) {
          return;
        }
        warn(warning);
      },
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (info) => {
          if (info.name.endsWith('.css')) {
            return 'assets/index.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 5000
  },
});
