---
title: Tutorial - ngModel
author: Angular Bolivia
publish date: 2020-11-15
description: En este punto vamos a aprender el uso de ngModel para ingresar nuestros gastos.
published: true
slug: workshop-ngmodel
---

# Usando ngModel

> En este punto vamos a aprender el uso de ngModel para ingresar nuestros gastos.

***

## Paso #1

Para saber cuando un usuario ingresa un gasto, primero debemos tener un par de variables que guarden el nombre y la cantidad del gasto al escribir estos valores en los campos de texto y numérico, para esto, abriremos el archivo `app.component.ts` y crearemos un par de variables llamadas `nombreGasto` y `cantidadGasto`. En estas guardaremos los valores correspondientes.

<div align="center">
  <img src="/assets/img/component-1.png" alt="Variables para el gasto" style="width: 1000px;">
</div>

## Paso #2

Ahora, para conectar el campo de texto y el campo numérico con las variables `nombreGasto` y `cantidadGasto` utilizaremos la directiva de Angular `ngModel`. Las directivas son atributos con las que Angular permite agregar súper poderes a las etiquetas HTML.

Agregar `[(ngModel)]="nombreGasto"` y `[(ngModel)]="cantidadGasto"` dentro de las etiquetas `input` hará que lo que escribamos en los campos de texto y numérico sean automáticamente asignados a las variables `nombreGasto` y `cantidadGasto`.

```html
      <input
        id="cantidad-nombre"
        type="text"
        [(ngModel)]="nombreGasto"
      />
```

```html
      <input
        id="cantidad-gasto"
        type="number"
        [(ngModel)]="cantidadGasto"
      />
```

## Paso #3

No siempre vamos a querer que nuestro texto esté escrito directamente en el **HTML**, por lo general debemos guardar esos textos en variables para poder cambiar los mensajes de manera más dinámica a través de código.

Una de las funcionalidades más geniales de Angular se llama **Interpolation**. Esta te permite enlazar tus variables al HTML.

Para comprobar esto, vamos a mostrar el valor actual de las variables `nombreGasto` y `cantidadGasto` dentro del HTML. Así que ahora vamos a mostrar al lado del input correspondiente a cada una el nombre del gasto con `{{nombreGasto}}` y la cantidad del gasto con `{{cantidadGasto}}`.

```html
<div class="contenedor-principal">
  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="cantidad-nombre">Nombre:</label>
      <input
        id="cantidad-nombre"
        type="text"
        [(ngModel)]="nombreGasto"
      />
      {{nombreGasto}}
    </div>
    <div>
      <label for="cantidad-gasto">Cantidad:</label>
      <input
        id="cantidad-gasto"
        type="number"
        [(ngModel)]="cantidadGasto"
      />
      {{cantidadGasto}}
    </div>
  </div>
</div>
```

Estas formas: `{{nombreGasto}}` y `{{cantidadGasto}}` son la manera en que Angular puede mostrar las **variables** declaradas del componente en el **HTML**.

El resultado:

<div align="center">
  <img src="/assets/img/component-2.png" alt="Interpolation aplicado" style="width: 1000px;">
</div>

[> Próximo artículo: Agregando gastos](/blog/workshop-expenses)

[< Artículo anterior: ¡Tu primera plantilla!](/blog/workshop-template)
