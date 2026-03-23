import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  build: {
    // 生产环境优化
    rollupOptions: {
      output: {
        // 代码分割策略
        manualChunks: {
          // React相关库
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // 动画库
          'vendor-motion': ['framer-motion'],
          // UI库
          'vendor-ui': ['lucide-react', 'tailwind-merge'],
        },
        // 文件命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // 使用esbuild压缩（Vite默认，更快）
    minify: 'esbuild',
    // 生成sourcemap（生产环境可选）
    sourcemap: false,
    // 块大小警告阈值
    chunkSizeWarningLimit: 500,
  },
})
