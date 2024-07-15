# AluraFlix

AluraFlix es un proyecto desarrollado como parte del Challenge de Alura Latam 2024. Este proyecto permite la gestión videos en una aplicación web, donde los usuarios pueden ver, agregar, editar y eliminar videos a la plataforma.

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
    ```
    git clone https://github.com/shmariajesus/aluraflix.git
    ```

2. Navega al directorio del proyecto:
    ```
    cd aluraflix
    ```

3. Instala las dependencias:
    ```
    npm install
    ```

4. Inicia el servidor JSON:
    ```
    npm run api
    ```
Esto iniciará JSON Server en el puerto 3000, utilizando `./src/data/CardsData.json` como fuente de datos.

5. Inicia la aplicación en local utilizando Vite en un servidor local.
    ```
    npm run dev
    ```

## Uso

1. Abre http://localhost:5173 en tu navegador para ingresar a la aplicación.
2. Podrás ver la lista de videos organizados por categorías.
3. Podrás agregar más vídeos.
3. Los videos existentes se pueden editar y/o borrar.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
```
aluraflix/
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── index.html
├── package.json
├── README.md
├── tree.txt
├── vite.config.js
├── public/
│   └── favicon.webp
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── backgroundBanner.webp
    │   └── logoHeader.png
    ├── components/
    │   ├── Banner/
    │   │   ├── Banner.jsx
    │   │   └── Banner.module.css
    │   ├── Card/
    │   │   ├── Card.jsx
    │   │   └── Card.module.css
    │   ├── Category/
    │   │   ├── Category.jsx
    │   │   └── Category.module.css
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   ├── Header/
    │   │   ├── Header.jsx
    │   │   └── Header.module.css
    │   ├── Input/
    │   │   ├── Input.jsx
    │   │   └── Input.module.css
    │   ├── Loader/
    │   │   ├── Loader.jsx
    │   │   └── Loader.module.css
    │   ├── Modal/
    │   │   ├── Modal.jsx
    │   │   └── Modal.module.css
    │   ├── OptionList/
    │   │   ├── OptionList.jsx
    │   │   └── OptionList.module.css
    │   └── WatchVideo/
    │       ├── WatchVideo.jsx
    │       └── WatchVideo.module.css
    ├── contexts/
    │   └── DataContext.jsx
    ├── data/
    │   └── CardsData.json
    ├── fonts/
    │   ├── roboto/
    │   │   └── webfonts/
    │   │       ├── roboto-latin-100-italic.woff
    │   │       ├── roboto-latin-100-italic.woff2
    │   │       ├── roboto-latin-100-normal.woff
    │   │       ├── roboto-latin-100-normal.woff2
    │   │       ├── roboto-latin-300-italic.woff
    │   │       ├── roboto-latin-300-italic.woff2
    │   │       ├── roboto-latin-300-normal.woff
    │   │       ├── roboto-latin-300-normal.woff2
    │   │       ├── roboto-latin-400-italic.woff
    │   │       ├── roboto-latin-400-italic.woff2
    │   │       ├── roboto-latin-400-normal.woff
    │   │       ├── roboto-latin-400-normal.woff2
    │   │       ├── roboto-latin-500-italic.woff
    │   │       ├── roboto-latin-500-italic.woff2
    │   │       ├── roboto-latin-500-normal.woff
    │   │       ├── roboto-latin-500-normal.woff2
    │   │       ├── roboto-latin-700-italic.woff
    │   │       ├── roboto-latin-700-italic.woff2
    │   │       ├── roboto-latin-700-normal.woff
    │   │       ├── roboto-latin-700-normal.woff2
    │   │       ├── roboto-latin-900-italic.woff
    │   │       ├── roboto-latin-900-italic.woff2
    │   │       ├── roboto-latin-900-normal.woff
    │   │       └── roboto-latin-900-normal.woff2
    │   └── source-sans-pro/
    │       └── webfonts/
    │           ├── source-sans-pro-latin-200-italic.woff
    │           ├── source-sans-pro-latin-200-italic.woff2
    │           ├── source-sans-pro-latin-200-normal.woff
    │           ├── source-sans-pro-latin-200-normal.woff2
    │           ├── source-sans-pro-latin-300-italic.woff
    │           ├── source-sans-pro-latin-300-italic.woff2
    │           ├── source-sans-pro-latin-300-normal.woff
    │           ├── source-sans-pro-latin-300-normal.woff2
    │           ├── source-sans-pro-latin-400-italic.woff
    │           ├── source-sans-pro-latin-400-italic.woff2
    │           ├── source-sans-pro-latin-400-normal.woff
    │           ├── source-sans-pro-latin-400-normal.woff2
    │           ├── source-sans-pro-latin-600-italic.woff
    │           ├── source-sans-pro-latin-600-italic.woff2
    │           ├── source-sans-pro-latin-600-normal.woff
    │           ├── source-sans-pro-latin-600-normal.woff2
    │           ├── source-sans-pro-latin-700-italic.woff
    │           ├── source-sans-pro-latin-700-italic.woff2
    │           ├── source-sans-pro-latin-700-normal.woff
    │           ├── source-sans-pro-latin-700-normal.woff2
    │           ├── source-sans-pro-latin-900-italic.woff
    │           ├── source-sans-pro-latin-900-italic.woff2
    │           ├── source-sans-pro-latin-900-normal.woff
    │           └── source-sans-pro-latin-900-normal.woff2
    ├── pages/
    │   ├── Home/
    │   │   ├── Home.jsx
    │   │   └── Home.module.css
    │   └── NewVideo/
    │       ├── NewVideo.jsx
    │       └── NewVideo.module.css
    ├── routes/
    │   └── AppRoutes.jsx
    └── validation/
        └── FormValidate.js
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

## Producción:

- **json-server** (^1.0.0-beta.1): Utilizado para simular una API REST y servir datos estáticos desde `./src/data/CardsData.json`.
- **react** (^18.3.1): Librería principal de React para construir la interfaz de usuario.
- **react-dom** (^18.3.1): Renderizador de React para el navegador web.
- **react-icons** (^5.2.1): Biblioteca de iconos para React, utilizada para añadir iconografía a la aplicación.
- **react-router-dom** (^6.24.1): Utilizado para gestionar la navegación en la aplicación React mediante enrutamiento declarativo.

## Desarrollo:

- **@types/react** (^18.3.3): Tipos TypeScript para React, proporcionando autocompletado y verificación de tipos para las API de React.
- **@types/react-dom** (^18.3.0): Tipos TypeScript para ReactDOM, proporcionando autocompletado y verificación de tipos para las API de ReactDOM.
- **@vitejs/plugin-react-swc** (^3.5.0): Plugin Vite para React utilizando SWC como transpilador, optimizando el rendimiento de la compilación.
- **eslint** (^8.57.0): Herramienta de linting para JavaScript y JSX, utilizada para mantener un código consistente y libre de errores.
- **eslint-config-prettier** (^9.1.0): Configuración ESLint que desactiva reglas que entran en conflicto con Prettier para evitar conflictos en el formato de código.
- **eslint-plugin-react** (^7.34.3): Plugin ESLint específico para reglas de React, asegurando buenas prácticas y consistencia en el código React.
- **eslint-plugin-react-hooks** (^4.6.2): Plugin ESLint para reglas específicas de Hooks de React, asegurando el uso correcto y eficiente de los Hooks en la aplicación.
- **eslint-plugin-react-refresh** (^0.4.7): Plugin ESLint para mejorar la compatibilidad y soporte con React Refresh, facilitando la experiencia de desarrollo en caliente.
- **prettier** (3.3.2): Herramienta de formateo de código para mantener un estilo de código consistente y legible.
- **vite** (^5.3.1): Herramienta de construcción rápida y servidor de desarrollo para aplicaciones web modernas, optimizada para proyectos basados en React.

---

Desarrollado por Maria Jesus Silva para Alura Latam 2024.
