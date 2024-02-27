---
title: Retos Extra
author: Angular Bolivia
publish date: 2024-02-21
description: Retos adicionales para el workshop
published: true
slug: retos-extra
---

# Retos Adicionales
¿Te gustaría seguir practicando junto a tu proyecto? Estás en el lugar indicado.

### Separar la Plantilla 

Como te habrás dado cuenta, en este momento el código de la plantilla y el código TypeScript se encuentran en el mismo archivo. 

En caso de que la aplicación llegara a crecer en líneas de código sería un tanto incómodo seguir trabajando en un mismo archivo. 

Para facilitar estar tarea debemos:

- Crear un archivo `main.html`.
- Mover el código de la plantilla a ese nuevo archivo.
- Referenciar a la nueva plantilla desde el componente. Para ello se debe hacer uso de la propiedad `templateUrl` en lugar de `template` en la configuración del component.

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: 'main.html'
})
export class App {
}
```

### Agregar un botón de "Reiniciar"
Cuando inicia la aplicación, actualmente permite ingresar un valor numérico para el presupuesto. Luego de ingresado el valor, no es posible cambiarlo. Se pide lo siguiente:

- Agregar un botón "reiniciar", el cual deberá ser visible solo si ya se tiene el presupuesto asignado. 
- Una vez el botón sea presionado, la aplicación debe volver a su estado inicial, eliminando los gastos que se hayan ingresado hasta ese momento.

### Dividir para Vencer
En el mundo real, es habitual desarrollar una aplicación basada en varios componentes que colaboran entre si. 

En este caso, es posible dividir la aplicación en varias partes. Para empezar, se podría crear un componente únicamente para mostrar un elemento "gasto".

Para lograr este objetivo, tenemos que crear una carpeta llamada `gasto`.

Dentro de dicha carpeta, se deberán crear los siguientes archivos: `gasto.component.html`, `gasto.component.ts`, `gasto.component.css`. Quedando el proyecto con la siguiente estructura de archivos:

```txt
|- src/
    - gasto/
        - gasto.component.html
        - gasto.component.ts
        - gasto.component.css
    - gasto.ts
    - global_styles.css
    - index.html
    - main.html
    - main.ts
    - tsconfig.app.json
```

El objetivo es "mover" el código relacionado a un item de la lista de gastos al nuevo componente. Es decir, el archivo `gasto.component.html` debería tener más o menos el siguiente código:

```html
<li>
  <p>{{ gasto.nombre }}</p>
  <div>
    <span>{{ gasto.cantidad }} Bs</span>
    <button (click)="eliminarGasto()">
      <img
        src="https://raw.githubusercontent.com/angular-bolivia/ng-she-workshop/develop/src/assets/trash-icon.svg"
        alt="Eliminar gasto"
      />
    </button>
  </div>
</li>
```

Al mismo tiempo, el código TypeScript para el componente gasto estaría dado inicialmente como:

```ts
import { Component } from '@angular/core';
import { Gasto } from '../gasto';

@Component({
  selector: 'gasto',
  standalone: true,
  imports: [],
  templateUrl: 'gasto.component.html',
})
export class GastoComponent {
 
}
```

Lo cual significa que el nuevo componente `gasto` se encargará de la gestión de un único gasto. Será necesario definir un atributo para el [input](https://angular.dev/guide/components/inputs) y un método para el [output](https://angular.dev/guide/components/outputs)

El componente inicial `main`, seguirá gestionando el conjunto de gastos y su plantilla debería cambiar a algo como lo siguiente:

```html
<div class="caja-lista">
  <ul>
    <gasto
          *ngFor="let gasto of gastos"
          [gasto]="gasto"
          (eliminar)="eliminarGasto($event)"
    >
    </gasto>
  </ul>
</div>
```

Observa que ahora el componente `main` hace uso del nuevo componente `gasto`. El método `eliminarGasto` deberá ser actualizado.


### Explora el nuevo Control de Flujo

Angular v17 introduce el concepto de un nuevo control de Flujo para el manejo de plantillas.

La aplicación actual hace uso de las directivas `NgIf` y `NgFor`, las cuales se soportan en todas las versiones del framework. 

Para hacer una migración automática debes abrir una nueva terminal en Stackblitz. Y a continuación ejecutar el siguiente comando:

```bash
ng generate @angular/core:control-flow
```

Presiona la tecla `ENTER` en caso de que la terminal espere algún otro parámetro de entrada. Al terminar, la salida debería ser algo como:

```text
❯ ng generate @angular/core:control-flow
? Which path in your project should be migrated? ./
? Should the migration reformat your templates? Yes
    IMPORTANT! This migration is in developer preview. Use with caution.
UPDATE src/main.html (2039 bytes)
UPDATE src/main.ts (1444 bytes)
```

Observa que se actualizaron dos archivos: `main.ts` y `main.html`. Revisa que cambios ocurrieron y experimenta el nuevo control de flujo.

Aprende más sobre el nuevo control de flujo [aquí](https://angular.dev/guide/templates/control-flow).


[< Volver al inicio](/blog/01-workshop-welcome)
