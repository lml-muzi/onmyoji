import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base 决定资源引用的路径前缀，不同托管平台的部署路径不同：
//   - GitHub Pages：/<repo>/ 子路径（本项目 /onmyoji/）
//   - Vercel / Cloudflare Pages：站点根路径 /
// 用环境变量 BASE_PATH 覆盖，各平台在控制台里设一下即可，无需改代码。
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.BASE_PATH || (command === 'build' ? '/onmyoji/' : '/'),
}))
