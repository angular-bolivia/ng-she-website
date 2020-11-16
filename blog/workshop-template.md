---
title: Tutorial - Tu primera plantilla
author: Angular Bolivia
publish date: 2020-11-15
description: Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.
published: true
slug: workshop-template
---

# ¡Tu primera plantilla!

> Ahora vamos a añadir la estructura HTML inicial de nuestra aplicación.

***

## Paso #1

Copia el siguiente código a tu archivo `app.component.html`:

```html
<div class="contenedor-principal">
  <div class="form gasto">
    <h3>Agrega tus gastos aquí</h3>
    <div>
      <label for="cantidad-nombre">Nombre:</label>
      <input id="cantidad-nombre" type="text" />
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
  <img src="/assets/img/template-1.png" alt="Primera parte de la plantilla" style="width: 1000px;">
</div>

[> Próximo artículo: Usando ngModel](/blog/workshop-ngmodel)

[< Artículo anterior: Introducción a HTML](/blog/workshop-html)
