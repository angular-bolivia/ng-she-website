---
title: Tutorial - Eliminando gastos
author: Angular Bolivia
publish date: 2020-11-28
description: ¿Llegaste muy rápido hasta aquí? Si aún queda tiempo para que termine el taller, podemos ver cómo eliminar gastos de nuestra lista.
published: true
slug: 12-workshop-delete-expenses
---

# Eliminando gastos

> ¿Llegaste muy rápido hasta aquí? Si aún queda tiempo para que termine el taller, podemos ver cómo eliminar gastos de nuestra lista.

***

## Paso #1

En el archivo `main.ts` vamos a crear una nueva función llamada `eliminarGasto` que recibirá el índice del gasto a eliminar y la cantidad del gasto:

```typescript
  eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.saldo += cantidadGasto;
  }
```

Como puedes ver, estamos usando la función `splice` de nuestro **Array** de gastos. La misma elimina la cantidad de elementos que le indiquemos a partir del índice que le pasamos. En este caso, el índice lo pasaremos desde la plantilla y la cantidad de elementos que eliminaremos será solo 1 siempre. En la otra línea estamos agregando a nuestro saldo la cantidad del gasto que estamos eliminando.

> Los **índices** en los **Arrays** representan la posición de cada uno de los elementos. Toma en cuenta que los **índices** se empiezan contando desde **0**.

## Paso #2

Ahora debemos obtener el índice de cada uno de nuestros gastos en la plantilla. Para ello podemos pedirle a la directiva que nos la pase de la siguiente madera: `index as indice`.

```html
        <li *ngFor="let gasto of gastos; index as indice">
```

Lo siguiente es agregar un botón para cada gasto, al que al hacerle click llame a la función que acabamos de crear:

```html
            <button (click)="eliminarGasto(indice, gasto.cantidad)">
              <img src="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/assets/trash-icon.svg" alt="Eliminar gasto" />
            </button>
```

La sección de nuestra plantilla con la lista de gastos tendrá el siguiente código:

```html
  <div class="contenedor-lista" *ngIf="saldoInicialIngresado">
    <div class="restante">
      <p>Saldo disponible</p>
      <p>{{saldo}} Bs</p>
    </div>
 
    <div class="caja-lista">
      <ul>
        <li *ngFor="let gasto of gastos; index as indice">
          <p>{{gasto.nombre}}</p>
          <div>
            <span>{{gasto.cantidad}} Bs</span>
            <button (click)="eliminarGasto(indice, gasto.cantidad)">
              <img src="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/assets/trash-icon.svg" alt="Eliminar gasto" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
```

Y nuestra app se verá así:

<div align="center">
  <img src="/assets/img/template-7.png" alt="Eliminar gastos" style="width: 1100px;">
</div>

[> Próximo artículo: ¡Comparte tu app!](/blog/13-workshop-share)

[< Artículo anterior: ¡Que quede bonito!](/blog/11-workshop-css)
