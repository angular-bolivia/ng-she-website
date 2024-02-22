---
title: Tutorial - Lista de gastos
author: Angular Bolivia
publish date: 2020-11-16
description: En la variable gastos se encuentran todos los gastos guardados que el usuario está creando, ahora llego el punto de mostrarlos en pantalla.
published: true
slug: 09-workshop-expenses-list
---

# Mostrando los gastos

> En la variable `gastos` se encuentran todos los gastos guardados que el usuario está creando, ahora llego el punto de mostrarlos en pantalla.

***

## Paso #1

Lo primero que vamos hacer es crear la estructura HTML para mostrar los gastos. Será así:

```html
  <div class="contenedor-lista">
    <div class="caja-lista">
      <ul>
        <li>
          <p>Chocolates</p>
          <div>
            <span>10 Bs</span>
          </div>
        </li>
        <li>
          <p>Pan</p>
          <div>
            <span>5 Bs</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
```

Lo vamos agregar a toda nuestra plantilla:

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
    <div class="caja-lista">
      <ul>
        <li>
          <p>Chocolates</p>
          <div>
            <span>10 Bs</span>
          </div>
        </li>
        <li>
          <p>Pan</p>
          <div>
            <span>5 Bs</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```

El resultado debe ser:

<div align="center">
  <img src="/assets/img/template-3.png" alt="Lista de gastos estática inicial" style="width: 1100px;">
</div>

## Paso #2

Como ves, en la aplicación se muestra una lista de gastos, pero es una lista estática. Debemos lograr que se muestre dinámicamente según los gastos guardados en la variable `gastos`.

Para lograr esto, Angular nos provee la directiva **ngFor**, capaz de hacer una repetición de elementos dentro de la página. Esta repetición nos permite recorrer una estructura de array y para cada uno de sus elementos replicar una cantidad de elementos en el HTML.

En nuestro caso para mostrar todas los gastos vamos a modificar el elemento `li` y aplicar un **ngFor**.

```html
        <li *ngFor="let gasto of gastos">
          <p>{{gasto.nombre}}</p>
          <div>
            <span>{{gasto.cantidad}} Bs</span>
          </div>
        </li>
```

Si el código no funciona, se debe a que la directiva `NgFor` aún no ha sido importada en el componente. En tal caso debes revisar la salida que se tiene en la terminal.

Asegúrate de importar la directiva usando el siguiente código en la parte superior del archivo `main.ts`:

```ts
import { NgFor } from '@angular/common';
```

Posteriormente, debes actualizar el atributo `imports` en la definición del componente:

```ts
@Component({
  ...
  imports: [FormsModule, NgFor],
  ...
})
export class App {
```

<div align="center">
  <img src="/assets/img/template-4.png" alt="Lista de gastos dinámica inicial" style="width: 1100px;">
</div>

[> Próximo artículo: Agregando presupuesto y saldo](/blog/10-workshop-budget)

[< Artículo anterior: Agregando gastos](/blog/08-workshop-add-expenses)
