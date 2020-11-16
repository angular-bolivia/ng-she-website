---
title: Tutorial - Agregando gastos
author: Angular Bolivia
publish date: 2020-11-15
description: Como habrás notado, Interpolation es bastante fácil. Ahora vamos a crear una función que nos permita guardar nuestros gastos.
published: true
slug: workshop-expenses
---

# Agregando gastos

> Como habrás notado, Interpolation es bastante fácil. Ahora vamos a crear una función que nos permita guardar nuestros gastos.

***

## Paso #1

En `app.component.ts` vamos a crear una nueva variable llamada `gastos` en donde guardaremos la lista de gastos.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombreGasto = "";
  cantidadGasto = 0;
  gastos = [];
}
```

¿Notaste que la variable `gastos` se crea diferente?

```typescript
  gastos = [];
```

Esto representa una lista o **Array** dentro de Angular y nos sirve para guardar más de un valor, se puede guardar muchos valores en esta misma variable. Para insertar un nuevo valor solo debes usar el siguiente método:

```typescript
  gastos.push(gasto);
```

Donde `gasto` debería ser un objeto que contenga los valores del nombre y de la cantidad del gasto.

El método `push` agregará un nuevo valor dentro de la variable `gastos`.

Por ahora en este paso solo vamos a crear la variable, así que debes tener este resultado:

<div align="center">
  <img src="/assets/img/component-3.png" alt="Lista de gastos" style="width: 1000px;">
</div>

## Paso #2

Para unificar el nombre y la cantidad de los gastos, crearemos una clase llamada: `Gasto`.

Una **clase** es una estructura especial en programación. Se define con miembros, los cuales pueden ser **propiedades (variables)** y **métodos (funciones)**. Luego, se crean instancias de estas clases, usualmente llamando al operador `new` de la clase: `const instancia = new miClase();`. La **instancia** creada es un **objeto**, mediante el cual puedes llamar a las funciones de la clase y acceder o modificar sus propiedades. Muchas instancias pueden ser creadas de una sola clase.

Dentro de la carpeta `app` creamos un archivo llamado: `gasto.ts`, y en el mismo pasamos el siguiente código:

```typescript
export class Gasto {
  nombre: string;
  cantidad: number;

  constructor(nombreGasto: string, cantidadGasto: number) {
    this.nombre = nombreGasto;
    this.cantidad = cantidadGasto;
  }
}
```

Acabamos de crear una clase `Gasto` que cuenta con dos propiedades (variables): `nombre` y `cantidad`. Además hemos definido que cada que se utilice el operador `new` para crear una instancia de esta clase, es necesario pasarle los valores `nombreGasto` y `cantidadGasto` a través del `constructor`.

Deberíamos tener algo así:

<div align="center">
  <img src="/assets/img/component-4.png" alt="Clase gasto" style="width: 1000px;">
</div>

Esta clase nos ayudará en los pasos siguientes a la hora de ir instanciando gastos, los cuales serán agregados a nuestra lista de gastos.

## Paso #3

En este paso vamos a crear una función llamada `agregarGasto`. El propósito de esta función es guardar el nombre y la cantidad del gasto en una lista de gastos.

Esta función será ejecutada cuando el usuario oprima la tecla `ENTER` dentro del input.

Una **función** en programación es simplemente una manera de definir una serie de acciones que queremos que se lleven a cabo en cierto momento.

> Por ejemplo, si estuviéramos creando una calculadora, lo más seguro es que tendríamos funciones como: sumar, restar, dividir, etc.

Así se verá nuestra función:

```typescript
  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    console.log(this.gastos);
  }
```

Notarás que lo que hacemos es recoger el valor actual de las variables `nombreGasto` y `cantidadGasto` para crear una instancia de la clase `Gasto`, la cual insertaremos dentro de `gastos`. El uso de `this` es para hacer referencia a las variables del componente. El uso de `const` se usa para definir una variable dentro de la función, la cual no cambia de valor. Finalmente usamos `console.log` para imprimir el valor actual de `gastos` en la consola del navegador.

> No debemos olvidar que para poder usar la clase `Gasto` debemos importarla al inicio de nuestro archivo `app.component.ts` de esta forma: `import { Gasto } from "./gasto";`.

## Paso #4

Ya tenemos la función creada pero ahora necesitamos que esta se ejecute cuando el usuario oprima la tecla `ENTER` dentro de los inputs, o al presionar un botón que agregaremos en la vista.

Gracias a lo increíble que es Angular podemos ejecutar funciones desde el **HTML**, basadas en un evento.

Vamos a ir la plantilla y agregaremos lo siguiente:

```html
    <div>
      <label for="cantidad-nombre">Nombre:</label>
      <input
        id="cantidad-nombre"
        type="text"
        [(ngModel)]="nombreGasto"
        (keyup.enter)="agregarGasto()"
      />
    </div>
    <div>
      <label for="cantidad-gasto">Cantidad:</label>
      <input
        id="cantidad-gasto"
        type="number"
        [(ngModel)]="cantidadGasto"
        (keyup.enter)="agregarGasto()"
      />
    </div>
    <button (click)="agregarGasto()">Listo</button>
```

Como ves, agregamos en cada input:

```html
        (keyup.enter)="agregarGasto()"
```

Esto cumple con la función de detectar cuando el usuario oprime la tecla `ENTER` dentro del input y ejecuta la función `agregarGasto`.

Y también agregamos el siguiente botón:

```html
    <button (click)="agregarGasto()">Listo</button>
```

El cual ejecutará la función `agregarGasto` cuando lo presionemos.

El resultado:

<div align="center">
  <img src="/assets/img/template-2.png" alt="Llamar a la función agregarGasto desde la plantilla" style="width: 1000px;">
</div>

## Paso #5

Excelente, pero notas que cuando agregamos un nuevo gasto, los campos de texto y numéricos deberían borrarse para dar oportunidad de escribir un nuevo gasto.

Esto lo vamos a solucionar haciendo que una vez que se inserte el nuevo gasto en la lista, deje los valores de `nombreGasto` y `cantidadGasto` en vacío y 0 respectivamente, así:

```typescript
  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    console.log(this.gastos);
    this.nombreGasto = '';
    this.cantidadGasto = 0;
  }
```

<!-- TODO: Enable when this article is created -->
<!-- [> Próximo artículo: Mostrando los gastos](/blog/workshop-list) -->

[< Artículo anterior: Usando ngModel](/blog/workshop-ngmodel)
