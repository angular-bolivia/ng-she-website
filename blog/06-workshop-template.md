---
title: Tutorial - Tu primera plantilla
author: Angular Bolivia
publish date: 2020-11-15
description: Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.
published: true
slug: 06-workshop-template
---

# ¡Tu primera plantilla!

> Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.

***

## Paso #1

Copia el siguiente código HTML a tu archivo `main.ts`. Este código debe estar en la propiedad `template`:

```html
<div class="contenedor-principal">
  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="nombre-gasto">Nombre:</label>
      <input id="nombre-gasto" type="text" />
    </div>
    <div>
      <label for="cantidad-gasto">Cantidad:</label>
      <input id="cantidad-gasto" type="number" />
    </div>
  </div>
</div>
```

El resultado que deberás obtener:

<div align="center">
  <img src="/assets/img/template-1.png" alt="Primera parte de la plantilla" style="width: 1100px;">
</div>

[> Próximo artículo: Usando ngModel](/blog/07-workshop-ngmodel)

[< Artículo anterior: Introducción a HTML](/blog/05-workshop-html)
