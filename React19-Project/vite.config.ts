import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet à Vite d'écouter sur toutes les interfaces réseau
    port: 5173, // Assure-toi que le port est bien configuré
  },
});
