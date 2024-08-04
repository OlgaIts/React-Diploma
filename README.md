# Дипломный проект курса «React»

Дипломный проект представляет собой интернет-магазин обуви.

```
Запуск:
npm install
npm run dev

_____________________

Запуск сервера:
cd backend
npm install
npm run watch
```

### Организация папок / архитектура проекта

```
├── backend
├── src
│   ├── api
│   |   ├── services
│   │   │   ├──services.ts
│   |   ├──consts.ts
│   |   ├──index.ts
│   ├── app
│   │   ├── redux
│   │   │   ├── slices
│   │   │   ├──store.ts
│   │   ├── router
│   │   │   ├──routerConfig.tsx
│   │   ├── styles
│   │   │   ├──global.scss
│   │   │   ├──index.scss
│   │   │   ├──vars.scss
│   │   ├──App.module.scss
│   │   ├──App.tsx
│   ├── components
│   │   ├── Title
│   │   │   ├──index.ts
│   │   │   ├──Title.module.scss
│   │   │   ├──Title.tsx
│   ├── hooks
│   │   ├──reduxHooks.ts
│   │   ├──useProducts.ts
│   ├── img
│   │   ├── products
│   ├── pages
│   │   ├── SatrtPage
│   │   │   ├── components
│   │   │   |   ├── TopSales
│   │   │   |   |   |──TopSales.tsx
│   │   │   |   ├──index.ts
│   │   │   ├──index.ts
│   │   │   ├──StartPage.module.scss
│   │   │   ├──StartPage.tsx
│   ├── types
│   │   ├──env.d.ts
│   │   ├──index.d.ts
│   │   ├──products.ts
│   │──main.tsx
|──.env
├──.eslintrc.js
├──.gitignore
├──.prettierignore
├──index.html
├──package-lock.json
├──package.json
├──README.md
├──tsconfig.json
├──vite.config.js

```

Для хранения состояния используется Redux Toolkit