---
title: Tutorial - ngModel
author: Angular Bolivia
publish date: 2020-11-15
description: En este punto vamos a aprender el uso de ngModel para ingresar nuestros gastos.
published: true
slug: 07-workshop-ngmodel
---

# Usando ngModel

> En este punto vamos a aprender el uso de ngModel para ingresar nuestros gastos.

***

## Paso #1

Para saber cuando un usuario ingresa un gasto, primero debemos tener un par de variables que guarden el nombre y la cantidad del gasto al escribir estos valores en los campos de texto y numérico, para esto, abriremos el archivo `main.ts` y crearemos un par de variables(atributos) dentro la clase `App` llamadas `nombreGasto` y `cantidadGasto`. En estas guardaremos los valores correspondientes.

<div align="center">
  <img src="/assets/img/component-1.png" alt="Variables para el gasto" style="width: 1100px;">
</div>

## Paso #2

Ahora, para conectar el campo de texto y el campo numérico con las variables `nombreGasto` y `cantidadGasto` utilizaremos la directiva de Angular `ngModel`. Las directivas son atributos con las que Angular permite agregar súper poderes a las etiquetas HTML.

Agregar `[(ngModel)]="nombreGasto"` y `[(ngModel)]="cantidadGasto"` dentro de las etiquetas `input` hará que lo que escribamos en los campos de texto y numérico sean automáticamente asignados a las variables `nombreGasto` y `cantidadGasto`.

```html
      <input
        id="nombre-gasto"
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

Luego de haber actualizado el código HTML usando `ngModel`, es posible que la terminal muestre un error como el siguiente:

<div align="center">
  <img src="/assets/img/component-1-error.png" alt="Error con ngModel" style="width: 1100px;">
</div>

Esto se debe a que el componente que estamos trabajando aún no "conoce" de donde extraer la directiva.
Para solucionarlo, necesitamos importar el módulo respectivo:

```ts
import { FormsModule } from '@angular/forms';
```

Y a continuación, agregar el atributo imports en la definición del componente(dentro del decorador `@Component`):

```ts
@Component({
  ...
  imports: [FormsModule],
  ...
})
```

Quedando el código de la siguiente manera:

<div align="center">
  <img src="/assets/img/component-1-error-fix.png" alt="Agregando FormsModule" style="width: 1100px;">
</div>

Observa nuevamente la salida en la terminal de Stackblitz. Ya no deberían mostrarse errores.

## Paso #3

No siempre vamos a querer que nuestro texto esté escrito directamente en el **HTML**, por lo general debemos guardar esos textos en variables para poder cambiar los mensajes de manera más dinámica a través de código.

Una de las funcionalidades más geniales de Angular se llama **Interpolation**. Esta te permite enlazar tus variables al HTML.

Para comprobar esto, vamos a mostrar el valor actual de las variables `nombreGasto` y `cantidadGasto` dentro del HTML. Así que ahora vamos a mostrar al lado del input correspondiente a cada una el nombre del gasto con `{{nombreGasto}}` y la cantidad del gasto con `{{cantidadGasto}}`.

```html
<div class="contenedor-principal">
  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="nombre-gasto">Nombre:</label>
      <input
        id="nombre-gasto"
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
  <img src="/assets/img/component-2.png" alt="Interpolation aplicado" style="width: 1100px;">
</div>

[> Próximo artículo: Agregando gastos](/blog/08-workshop-add-expenses)

[< Artículo anterior: ¡Tu primera plantilla!](/blog/06-workshop-template)
