# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Apprendiendo-Juntos-Web
# Pasos: Crear proyecto con Vite + React

# Comando: 
 npm create vite@latest

# Versión de Vite:
 5.2.0

# Select a framework:
- React

# Select a variant:
- JavaScript

# Pasos para correr la app:
# Entrar a la carpeta del proyecto:
- cd Apprendiendo-Juntos-Web

# Instalar npm:
- npm install

# Correr la app:
- npm run dev

# Para buildear el proyecto:
- npm run build

# Estructura de carpetas:
## REACT + VITE:
- Por fuera de la carpeta del proyecto, se encuentra el archivo README.md, donde se encuentra la documentación del proyecto.

# Carpetas del proyecto:
- node_modules: Esta carpeta contiene todos los paquetes y dependencias que son instaladas en tu aplicación React.
- public: Esta carpeta contiene todos los archivos estáticos como index.html, el ícono de la app, imagenes.
- src: Esta es la parte más importante de la aplicación. Acá es donde se CODIFICA la aplicación. En esta carpeta, se colocan todos los archivos relacionados con el desarrollo, como páginas, componentes, archivos CSS, imágenes, etc.
    -- assets (carpeta)
    - App.css (archivo)
    - index.css (archivo)
    - App.jsx (archivo)
    - main.jsx (archivo)

# Archivos del proyecto:
- .eslintrc.cjs
- gitignore : Este archivo le dice a Git qué archivos debe ignorar al enviar su proyecto al Repositorio de GitHub.
- index.html
- package-lock.json: El objetivo de este archivo es llevar un registro de la versión exacta de cada paquete que se instaló en tu aplicación.
- package.json: Este archivo contiene una lista de todas las dependencias que han sido instaladas en tu aplicación.
- README.md (creado por VITE)
- vite.config.js

# Instalar Bootstrap e íconos de Bootstrap (framework de CSS):
- npm i bootstrap@5.3.2
- npm i bootstrap-icons: Luego importar el archivo CSS de Bootstrap Icons en el archivo "main.jsx" --> import "bootstrap-icons/font/bootstrap-icons.css"

# Para dejar de correr el proyecto:
- CTRL + C = S

# Dependencias:
- Comandos:
 -- npm i react-router-dom (React Router)

## Íconos utilizados en la App:
https://www.flaticon.es/

------------------------------------------------------

## Instalación de Firebase:
1) -- npm install firebase
2) Creamos un archivo de configuración donde inicializamos Firebase en nuestra app y creamos un objeto de aplicación de Firebase. También importamos Firestore (Cloud Firestore - BD)

-- Cloud Firestore: es una base de datos de documentos NoSQL que permite almacenar, sincronizar y consultar fácilmente datos en tus apps web y para dispositivos móviles a escala global.

-- Storage: Almacena y recupera archivos generados por el usuario: imágenes, audio y video, sin necesidad de usar código de servidor.

-- Para mostrar las imagenes alojadas en Storage debo usar el método getDownloadURL(), porque usaba el método ref() que devuelve un objeto de tipo Reference, que contiene información sobre la ubicación de almacenamiento de la imagen, pero no las URLs de descarga, por eso no se muestran las imágenes y el registro de la consola muestra referencias en lugar de URLs.

# Carrusel Splide:
## Instalación: 
-- npm install @splidejs/react-splide