<script setup lang="ts">
definePageMeta({
  layout: "default",
})
</script>

<template>
  <!DOCTYPE html>
  <html lang="es">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page con Navbar</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </head>

  <body>
    <nav class="bg-white shadow-md header">
      <div class="container mx-auto px-4 py-2 flex flex-row justify-between items-center">
        <a href="#" class="text-gray-800 font-bold">Tu Título</a>
        <ul class="flex flex-row space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Enlace 1</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Enlace 2</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Enlace 3</a></li>
        </ul>
      </div>
    </nav>

    <section class="bg-cover bg-center py-20" style="background-image: url(imagen.jpg)">
      <div class="container mx-auto px-4 text-white">
        <h1 class="text-4xl font-bold">Título Principal</h1>
        <p class="mt-4 text-lg">Subtítulo descriptivo</p>
        <a href="#"
          class="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Comenzar</a>
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4">
        <p class="text-center">© 2024 Tu Nombre o Empresa</p>
      </div>
    </footer>
  </body>

  </html>
</template>
<style>
.header {

  background-color: var(--primary-dark);

  box-shadow: 0 1px 5px var(--divider);

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: 1fr;

  position: fixed;

  top: 0;

  width: 100%;

  z-index: 999;

  background: #000;

  background: linear-gradient(90deg, #000 0%, rgba(121, 9, 17, .8491771708683473) 77%);

}
</style>
