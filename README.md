# Vtars Gallery
### Ejercicio 1 del módulo de Cloud: desplegar la app en GitHub Pages manual
Landing de una galería de arte

Demo: https://santiagovargast.github.io/master-labs-cloud-gh-pages-manual/#/


## Herramientas
- Vite + React (JavaScript)
- Material UI
- React Router DOM, con HashRouter (necesario para que funcione en GitHub Pages)
- pnpm

## Pasos
### Creacion del proyecto
He creado una pequeña landing con Vte + React(JS) + MUI. He utilizado los componentes de MUI para practicar un poco ya que lo estoy utilizando mucho

```bash
pnpm create vite@latest
```

### Configuración para GitHub Pages
En `vite.config.js` añadi `base: './'`, para que los assets se carguen bien una vez la app esté en una subruta

Tambien usé HashRouter en vez de BrowserRouter

### Siguiente paso: build y deploy
Generé la build de produccion ya con todos los cambios listos

```bash
pnpm run build
```

Esto crea la carpeta `dist/` con el `index.html` y los assets listos
Cree la rama gh-pages y solamente me quedo con los archivos estáticos (borramos todo menos dist y luego sacamos el contenido de dist a la raiz)

Subí la rama con add commit y push

### Activar github pages
En el repo de github, entramos en settings > pages y establecemos la config (seleccionamos la rama de gh-pages)
Al pulsar en save github nos publica el sitio y nos da el enlace para acceder
