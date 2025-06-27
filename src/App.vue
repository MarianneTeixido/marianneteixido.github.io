<template>
  <div id="app">
    <Sidebar /> <!-- Componente de navegación lateral -->
    <main class="main-content">
      <router-view /> <!-- Aquí se renderiza cada vista según la ruta -->
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>
