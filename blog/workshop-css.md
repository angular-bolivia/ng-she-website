---
title: Tutorial - CSS
author: Angular Bolivia
publish date: 2020-11-16
description: Nuestra aplicación para manejo de gastos todavía es un poco fea, ¿no te parece? ¡Es hora de ponerla bonita! Para eso, vamos a usar CSS.
published: true
slug: workshop-css
---

# CSS - ¡Que quede bonito!

> Nuestra aplicación para manejo de gastos todavía es un poco fea, ¿no te parece? ¡Es hora de ponerla bonita! Para eso, vamos a usar CSS.

## ¿Qué es CSS?

El lenguaje CSS (las siglas en inglés de hojas de estilos en cascada, o Cascading Style Sheets) sirve para describir la apariencia de un sitio web escrito en un lenguaje de marcado (como HTML). Es como la capa de pintura para nuestra página web. ;)

## Paso #1

En los archivos que conforman la aplicación existe un archivo llamado `styles.css` en este archivo es donde vamos a trabajar todos nuestros estilos.

<div align="center">
  <img src="/assets/img/project-structure.png" alt="Estructura del proyecto" style="width: 400px;">
</div>

En ese archivo podemos ajustar cualquier cosa respecto al aspecto visual de la aplicación. Un ejemplo, si agregas este código dentro del archivo `styles.css`:

```css
body {
  background-color: red;
}
```

El resultado es:

<div align="center">
  <img src="/assets/img/red-app.png" alt="App con fondo rojo" style="width: 1000px;">
</div>

## Paso #2

Vamos a usar una hoja de estilos que ya está preparada para que funcione muy bien dentro de la aplicación.

Tenemos 2 opciones, abre cualquier de las 2, copia todo el contenido y reemplaza lo que tengas en `styles.css` con lo que acabas de copiar:

- <a href="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/styles.css" target="_blank" rel="noopener noreferrer">Opción de estilos #1</a>
- <a href="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/styles-v2.css" target="_blank" rel="noopener noreferrer">Opción de estilos #2</a>

El resultado será el siguiente si escoges la Opción #1:

<div align="center">
  <img src="/assets/img/app-1.png" alt="App final antes de ingresar presupuesto" style="width: 1100px;">
</div>

## Paso #3

Ahora vamos a verlo en pantalla completa haciendo click en el botón **Open in New Window**.

<div align="center">
  <img src="/assets/img/app-2.png" alt="App final después de ingresar presupuesto" style="width: 1100px;">
</div>

El resultado de la Opción #1:

<div align="center">
  <img src="/assets/img/app-3.png" alt="App final en pantalla completa" style="width: 1100px;">
</div>

El resultado de la Opción #2:

<div align="center">
  <img src="/assets/img/app-4.png" alt="App final en pantalla completa" style="width: 1100px;">
</div>

[> Próximo artículo: Eliminando gastos](/blog/workshop-delete-expenses)

[< Artículo anterior: Agregando presupuesto y saldo](/blog/workshop-budget)
