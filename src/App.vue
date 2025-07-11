<template>
  <div id="app" :class="{ 'sidebar-is-open': isMenuOpen }">
    <Sidebar :is-open="isMenuOpen" @close="isMenuOpen = false" class="sticky"/>
    <div class="main-container">
      <Header @toggle-menu="toggleMenu" class="sticky"/>
      <main class="main-content">
        <router-view class="sticky"/>
      </main>
    </div>
    <StickyCursor />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import StickyCursor from './components/StickyCursor.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
#app {
  display: flex;
  position: relative;
  overflow-x: hidden;
}

.main-container {
  flex-grow: 1;
  transition: transform 0.3s ease;
}

#app.sidebar-is-open .main-container {
  transform: translateX(80vw);
}
</style>
