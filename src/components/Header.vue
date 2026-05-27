<template>
  <header class="mobile-header" :class="{ 'menu-is-open': isMenuOpen }">
    <button class="btn btn-outline-primary btn-menu" @click="$emit('toggle-menu')">
      <i class="bi bi-list"></i>
    </button>
    <h1 class="inline-element">Marianne Teixido</h1>
  </header>
</template>

<script setup>
defineProps({ isMenuOpen: Boolean });
defineEmits(['toggle-menu']);
</script>

<style scoped>
.mobile-header {
  display: none;
}

@media (max-width: 720px) {
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.1rem 0.1rem 1rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }

  .mobile-header.menu-is-open {
    transform: translateX(80vw);
  }

  .btn-menu {
    z-index: 1100;
  }
}
</style>
