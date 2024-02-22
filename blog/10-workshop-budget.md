---
title: Tutorial - Presupuesto y saldo
author: Angular Bolivia
publish date: 2020-11-16
description: Para controlar nuestros gastos es importante saber cuál es nuestro presupuesto y cuál sería nuestro saldo.
published: true
slug: 10-workshop-budget
---

# Agregando presupuesto y saldo

> Para controlar nuestros gastos es importante saber cuál es nuestro presupuesto y cuál sería nuestro saldo.

***

## Paso #1

Vamos a aplicar los conocimientos que ya hemos adquirido. Inicialmente, en el archivo `app.ts` agregaremos variables para nuestro `presupuesto` y nuestro `saldo`:

```typescript
  presupuesto = 0;
  saldo = 0;
```

Y en nuestra plantilla agregamos las siguientes estructuras HTML para ingresar el `presupuesto` y para mostrar el `saldo` respectivamente:

```html
  <div class="form presupuesto">
    <label for="presupuesto">Ingresa tu presupuesto:</label>
    <input
      id="presupuesto"
      type="number"
      [(ngModel)]="presupuesto"
    />
    <button>
      Listo
    </button>
  </div>
```

```html
    <div class="restante">
      <p>Saldo disponible</p>
      <p>{{saldo}} Bs</p>
    </div>
```

Nuestra plantilla debería terminar así:

```html
<div class="contenedor-principal">
  <div class="form presupuesto">
    <label for="presupuesto">Ingresa tu presupuesto:</label>
    <input
      id="presupuesto"
      type="number"
      [(ngModel)]="presupuesto"
    />
    <button>
      Listo
    </button>
  </div>

  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="nombre-gasto">Nombre:</label>
      <input
        id="nombre-gasto"
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
  </div>

  <div class="contenedor-lista">
    <div class="restante">
      <p>Saldo disponible</p>
      <p>{{saldo}} Bs</p>
    </div>

    <div class="caja-lista">
      <ul>
        <li *ngFor="let gasto of gastos">
          <p>{{gasto.nombre}}</p>
          <div>
            <span>{{gasto.cantidad}} Bs</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```

## Paso #2

Lo siguiente que queremos hacer es guardar nuestro saldo inicial al oprimir la tecla `ENTER` o el botón que agregamos en la plantilla. No olvidemos que nuestro saldo cuando aún no tenemos gastos es igual a nuestro presupuesto. Para esto crearemos una nueva función llamada `ingresarSaldoInicial` en nuestro componente y agregaremos los cambios necesarios a nuestra plantilla para poder llamarla:

```typescript
  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
  }
```

```html
    <input
      id="presupuesto"
      type="number"
      [(ngModel)]="presupuesto"
      (keyup.enter)="ingresarSaldoInicial()"
    />
    <button (click)="ingresarSaldoInicial()">
      Listo
    </button>
```

Una vez tenemos guardado nuestro saldo, debemos asegurarnos de que el mismo disminuye cada vez que ingresamos un nuevo gasto. Para conseguir esto, modificamos la función `agregarGasto` para restar la cantidad del gasto a nuestro saldo cada vez que introducimos uno nuevo. Esto lo conseguimos con la siguiente línea de código:

```typescript
    this.saldo = this.saldo - gasto.cantidad;
```

La cual es equivalente a:

```typescript
    this.saldo -= gasto.cantidad;
```

Nuestra función terminaría luciendo así:

```typescript
  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.saldo -= gasto.cantidad;
    this.nombreGasto = "";
    this.cantidadGasto = 0;
  }
```

<div align="center">
  <img src="/assets/img/component-5.png" alt="Implementación de la lógica para calcular el saldo" style="width: 1100px;">
</div>

## Paso #3

El primer paso para que nuestra aplicación empiece a funcionar, debería ser el agregar nuestro saldo inicial. Sin embargo, en este momento no contamos con ninguna condicional que impida al usuario agregar gastos hasta haber introducido su saldo.

Para hacer esto, podemos usar la directiva que nos provee Angular **ngIf**, la cual no renderizará la estructura HTML a la que esté agregada al menos que la condición que se le pase se cumpla, o si se le pasa una variable, si la misma tiene un valor **verdadero**.

Lo que podemos hacer es crear una variable que por defecto tenga un valor **falso** hasta que hayamos ingresado nuestro saldo inicial, y usarla junto con la directiva **ngIf** en nuestra plantilla:

```typescript
  saldoInicialIngresado = false;

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }
```

```html
  <div class="form gasto" *ngIf="saldoInicialIngresado">
```

```html
    <div class="restante" *ngIf="saldoInicialIngresado">
```
Luego de usar la directiva `NgIf` en la plantilla, podrias tener un error como el que sigue(visible en la terminal).

```text
[WARNING] NG8103: The `*ngIf` directive was used in the template, but neither the `NgIf` directive nor the `CommonModule` was imported
```

Al igual que que la directiva `NgFor`, antes de usar la directiva `NgIf`, es necesario importarla como parte de el componente. Actualiza las siguientes lineas de codigo en el archivo `main.ts`:

```ts
import { NgFor, NgIf } from '@angular/common';

@Component({
  ...
  imports: [FormsModule, NgFor, NgIf],
  ...
})
```

Así se verá nuestra app antes de ingresar nuestro saldo inicial:

<div align="center">
  <img src="/assets/img/template-5.png" alt="Uso de la directiva ngIf con valor false" style="width: 1100px;">
</div>

Así se verá nuestra app después de ingresar nuestro saldo inicial:

<div align="center">
  <img src="/assets/img/template-6.png" alt="Uso de la directiva ngIf con valor true" style="width: 1100px;">
</div>

## Paso #4

Como último paso, una vez ya se ingresó el saldo inicial, nos vamos a encargar de esconder el botón para ingresar el saldo y modificar el input de presupuesto para volverlo de solo lectura.

En el caso del botón, solo se debe mostrar si aún no hemos introducido el saldo inicial. Para esto podemos usar el **operador lógico** de negación `!` al inicio de nuestra variable. De esta forma, como nuestra variable representa el valor de **'saldo inicial ingresado'**, al negarla pasaría a representar el valor de **'saldo inicial no ingresado'**:

Entonces, debemos agregar la directiva **ngIf** con el siguiente valor al botón:

```html
      *ngIf="!saldoInicialIngresado"
```

Nuestro botón se vería así:

```html
    <button
      (click)="ingresarSaldoInicial()"
      *ngIf="!saldoInicialIngresado"
    >
      Listo
    </button>
```

Por último, debemos aplicar la propiedad `readonly` a nuestro input si el saldo inicial ya se ingresó. Con esta propiedad evitaremos que el usuario pueda modificar el presupuesto y accionar la tecla `ENTER`. Para ello agregamos la propiedad de esta forma a nuestro input de presupuesto:

```html
      [readonly]="saldoInicialIngresado"
```

Nuestro input quedaría así:

```html
    <input
      id="presupuesto"
      type="number"
      [(ngModel)]="presupuesto"
      (keyup.enter)="ingresarSaldoInicial()"
      [readonly]="saldoInicialIngresado"
    />
```

Hasta el momento nuestra plantilla debería tener la siguiente estructura HTML:

```html
<div class="contenedor-principal">
  <div class="form presupuesto">
    <label for="presupuesto">Ingresa tu presupuesto:</label>
    <input
      id="presupuesto"
      type="number"
      [(ngModel)]="presupuesto"
      (keyup.enter)="ingresarSaldoInicial()"
      [readonly]="saldoInicialIngresado"
    />
    <button
      (click)="ingresarSaldoInicial()"
      *ngIf="!saldoInicialIngresado"
    >
      Listo
    </button>
  </div>

  <div class="form gasto" *ngIf="saldoInicialIngresado">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="nombre-gasto">Nombre:</label>
      <input
        id="nombre-gasto"
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
  </div>

  <div class="contenedor-lista">
    <div class="restante" *ngIf="saldoInicialIngresado">
      <p>Saldo disponible</p>
      <p>{{saldo}} Bs</p>
    </div>

    <div class="caja-lista">
      <ul>
        <li *ngFor="let gasto of gastos">
          <p>{{gasto.nombre}}</p>
          <div>
            <span>{{gasto.cantidad}} Bs</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```

Y nuestro código TypeScript en la clase `App` debería ser el siguiente:

```typescript
export class App {
  nombreGasto = "";
  cantidadGasto = 10;
  gastos: Gasto[] = [];
  presupuesto = 0;
  saldo = 0;
  saldoInicialIngresado = false;

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.saldo = this.saldo - gasto.cantidad;
    this.nombreGasto = "";
    this.cantidadGasto = 0;
  }
}
```

[> Próximo artículo: CSS - ¡Que quede bonito!](/blog/11-workshop-css)

[< Artículo anterior: Mostrando los gastos](/blog/09-workshop-expenses-list)
