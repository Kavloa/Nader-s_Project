import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Assuming this alias is used for resolving paths
    },
  },
  base: '/Nader-s_Project/', // Ensure this matches your GitHub repository name exactly
})


