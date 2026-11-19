import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 部署在 GitHub Pages 的 /<repo>/ 子路径下，构建时需要 base；
// 本地 dev 用根路径，免得访问地址变成 /onmyoji/。
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/onmyoji/' : '/',
}))
