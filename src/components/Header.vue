<template>
  <header class="mobile-header">
    <button class="btn btn-outline-primary btn-menu" @click="$emit('toggle-menu')">
      <i class="bi bi-list"></i>
    </button>
    <h1 class="inline-element">Marianne Teixido</h1>
  </header>
</template>

<script setup>
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
    padding: 1rem;
    width: 100%;
  }

  .btn-menu {
    z-index: 1100;
  }
}
</style>
