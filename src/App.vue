<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div id="app" :class="{ 'sidebar-is-open': isMenuOpen }">
        <Sidebar :is-open="isMenuOpen" @close="isMenuOpen = false" class="sticky" />
        <div class="main-container">
          <Header @toggle-menu="toggleMenu" class="sticky" />
          <main class="main-content">
            <router-view class="sticky" />
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
