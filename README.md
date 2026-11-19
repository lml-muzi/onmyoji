# 阴阳师 · 平安京世界观与式神志

一个关于网易《阴阳师》手游世界观的静态资料页。不做数值攻略，只整理设定：平安京的阴阳两界、四位主角、主线脉络、各方势力，以及十六段式神背景故事。

## 技术栈

- Vite 8 + React 19
- 纯 CSS 手写样式，无 UI 框架、无外部字体、无图片素材
- 视觉元素（圆相、印章、纹样）全部用 CSS / SVG 绘制

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 分支即触发 GitHub Actions，自动构建并发布到 GitHub Pages。
配置文件见 `.github/workflows/deploy.yml`。

构建时 `base` 会自动设为 `/onmyoji/`（见 `vite.config.js`），本地 dev 仍用根路径。

## 内容说明

游戏设定部分依据公开剧情、式神传记与公开资料归纳，表述经过改写；不含官方美术素材。非官方站点，与网易游戏无关。
