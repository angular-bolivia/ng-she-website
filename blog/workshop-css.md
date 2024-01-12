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

En la archivos que conforman la aplicación existe un archivo llamado `styles.css` en este archivo es donde vamos a trabajar todos nuestros estilos.

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

Vamos a usar una hoja de estilos que ya esta preparada para que funciona muy bien dentro de la aplicación.

Copia los siguientes estilos:

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap");

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: white;

  height: 100vh;
  min-width: 100%;

  background-color: #1c162e;
  background-image: url("./assets/bg.svg");
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
}

input {
  width: 100%;
  height: 40px;

  border-radius: 5px;
  border: 1px solid #aaaaaa;
  outline: none;

  font-size: 1em;

  margin: 10px 0;
  padding: 5px 10px;
  box-sizing: border-box;
}

input::placeholder {
  color: #aaaaaa;
  font-family: "montserrat", sans-serif;
  font-size: 16px;
}

@media screen and (max-width: 825px) {
  body {
    height: 1115px;
    width: 100%;

    align-items: flex-start;
    justify-content: center;

    padding: 0 10%;
    box-sizing: border-box;
  }
}

.contenedor-principal {
  height: 75vh;

  display: grid;
  justify-content: center;
  grid-template-columns: 400px 400px;
  grid-template-rows: 1fr 2fr;
  gap: 1.5em;
}

.presupuesto {
  display: flex;
  flex-direction: column;
}

.presupuesto label {
  font-size: 1.5em;
  font-weight: bold;

  margin-bottom: 12px;
}

.form {
  padding: 1em;

  background-color: white;
  border-radius: 15px;

  color: black;
  font-family: "Montserrat", sans-serif;
}

.form button {
  width: 120px;
  height: 35px;

  color: white;
  font-weight: 700;
  font-size: 1em;

  border: none;
  border-radius: 5px;
  outline: none;

  background: linear-gradient(90deg, #ec008c 0%, #fc6767 100%);
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.5);
  transition: 200ms;
  cursor: pointer;
}

.form button:active {
  box-shadow: none;
}

.gasto {
  display: flex;
  flex-direction: column;

  grid-row: 2/3;

  animation: gasto-animation 450ms;
  will-change: transform;
}

.gasto h3 {
  font-size: 1.5em;
}

.gasto label {
  font-weight: 700;
}

.contenedor-lista {
  grid-row: 1/3;
  grid-column: 2/3;

  display: flex;
  flex-direction: column;
}

.restante {
  width: 100%;
  height: 150px;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #b172f7 0%, #236afa 100%);
  border-radius: 16px;

  animation: restante-animation 450ms 450ms forwards;
  transform: translateY(-1000px);
  will-change: transform;
}

.restante p {
  margin: 0 0 10px;

  font-size: 1.5em;
  font-weight: bold;
}

.restante p:nth-child(2) {
  margin: 0;

  font-size: 2em;
}

.caja-lista {
  flex: 1;

  width: 100%;

  overflow-y: auto;
}

.caja-lista ul {
  list-style: none;

  margin: 0;
  padding: 0;
}

.caja-lista ul li {
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  max-width: 100%;

  background: linear-gradient(314.33deg, #ed4257 -3.69%, #ce1862 109.82%);
  border-radius: 15px;
  animation: item-in 450ms;
  will-change: opacity;

  padding: 0.6em 1em;
  box-sizing: border-box;

  margin-bottom: 1em;
}

.caja-lista ul li:nth-child(2n) {
  background: linear-gradient(314.33deg, #18d0bf -3.69%, #1b9fb4 107.58%);
}

.caja-lista ul li:nth-child(3n) {
  background: linear-gradient(
    314.33deg,
    hsl(244, 100%, 68%) -3.69%,
    #7043c2 109.82%
  );
}

.caja-lista ul li p {
  flex: 1;
  overflow-x: auto;

  display: flex;
  align-items: center;
}

.caja-lista ul li div {
  display: flex;
  align-items: center;
}

.caja-lista ul li div span {
  font-size: 1.5em;
  font-weight: 700;
}

.caja-lista ul li div button {
  cursor: pointer;

  background: none;
  border: none;
  outline: none;
}

.caja-lista ul li div button img {
  width: 35px;
}

@keyframes gasto-animation {
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes restante-animation {
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes item-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width: 825px) {
  .contenedor-principal {
    margin-top: 2em;

    grid-template-columns: 100%;
    grid-template-rows: auto auto 600px;
  }

  .presupuesto,
  .contenedor-lista,
  .caja-lista {
    grid-row: auto;
    grid-column: auto;
  }
}
```

El resultado será:

<div align="center">
  <img src="/assets/img/app-1.png" alt="App final antes de ingresar presupuesto" style="width: 1100px;">
</div>

## Paso #3

Ahora vamos a verlo en pantalla completa haciendo click en el botón **Open in New Window**.

<div align="center">
  <img src="/assets/img/app-2.png" alt="App final después de ingresar presupuesto" style="width: 1100px;">
</div>

El resultado:

<div align="center">
  <img src="/assets/img/app-3.png" alt="App final en pantalla completa" style="width: 1100px;">
</div>

[< Artículo anterior: Agregando presupuesto y saldo](/blog/workshop-budget)
