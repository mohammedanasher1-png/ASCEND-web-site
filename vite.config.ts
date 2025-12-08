import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; //

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 🚨🚨🚨 هذا هو السطر الحاسم الذي يجب إضافته 🚨🚨🚨
      base: '/ASCEND-web-site/', 
      // 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
