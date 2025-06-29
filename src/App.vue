<template>
  <div id="app">
    <Sidebar /> 
    <main class="main-content">
      <router-view /> 
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>
