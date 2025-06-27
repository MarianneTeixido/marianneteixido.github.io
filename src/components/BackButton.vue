<template>
  <button id="backButton" class="btn btn-secondary" @click="$router.back()">Volver</button>
</template>

// data/projects.json
[
  {
    "id": "proyecto1",
    "title": "Proyecto 1",
    "text": "Descripción del proyecto 1",
    "summary": "Resumen del proyecto 1",
    "image": "/assets/img/proyecto1.jpg"
  },
  {
    "id": "proyecto2",
    "title": "Proyecto 2",
    "text": "Descripción del proyecto 2",
    "summary": "Resumen del proyecto 2",
    "image": "/assets/img/proyecto2.jpg"
  }
]