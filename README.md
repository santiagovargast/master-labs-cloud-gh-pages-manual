# Vtars Gallery
### Ejercicio 1 del módulo de Cloud: desplegar la app en GitHub Pages manual
Landing de una galería de arte

Demo: 

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

