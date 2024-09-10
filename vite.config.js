import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Assuming this alias is used for resolving paths
    },
  },
  base: '/Nader-s_Project/', // Add this line (replace repo-name with your repository name)
})


