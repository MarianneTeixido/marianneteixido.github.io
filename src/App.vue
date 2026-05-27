<template>
  <div class="app-shell" :class="{ 'sidebar-is-open': isMenuOpen }">
    <Sidebar :is-open="isMenuOpen" @close="isMenuOpen = false" />
    <Header @toggle-menu="toggleMenu" :is-menu-open="isMenuOpen" />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="main-container">
          <main class="main-content">
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </div>
  <StickyCursor />
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import StickyCursor from './components/StickyCursor.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const route = useRoute();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
  });
});

watch(() => route.fullPath, async () => {
  await nextTick();
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTop(0, true);
    ScrollTrigger.refresh();
  }
});

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
.app-shell {
  position: relative;
  overflow-x: hidden;
}

.main-container {
  transition: transform 0.3s ease;
}

.app-shell.sidebar-is-open .main-container {
  transform: translateX(80vw);
}
</style>
