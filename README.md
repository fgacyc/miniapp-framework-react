# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


react 
tailwindcss
react router
```bash
yarn add react-router-dom
```
react-icons
```bash
yarn add react-icons
```

auth 0
zustand
```bash
yarn add zustand
```
ant design mobile(antd-mobile)
```bash
yarn add antd-mobile

```



jwt-decode
```bash
yarn add jwt-decode
```

1. zustand
2. auth0 × 登录方案是UID（Miniapp） + Auth0 两套机制（WebApp）
3. prisma orm（SSR）

1. record enter、exist time and duration
2. 


1. 复制 assets
2. 复制components
3. 复制store
4. 把 <ActionSheetButtons />， <ActionSheetMenu /> 包裹app
5. 修改包信息
```json
    "name": "miniapp-nextjs",
    "author": "FGA TECH TEAM",
    "private": true,
    "version": "0.0.1",
    "app_id": "04f6f82ae7c24608917b",
    "shared": false,
    "instagram": "https://www.instagram.com/fgacyc/",
    "github": "https://github.com/fgacyc/",
    "type": "module",
```
6.修改vite.config.js
```js
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```
7. 修改全局样式
```css
body{
    background-color: #F2F3F5;
    overflow-y: hidden;
}
```