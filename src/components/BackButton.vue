<template>
  <button class="back-button" @click="$router.back()">
    {{ current === 'EN' ? 'Back' : 'Volver' }}
  </button>
</template>

<script setup>
import { useLang } from '../composables/useLang';
const { current } = useLang();
</script>

<style scoped>
.back-button {
  border: 1px solid var(--Blue-01);
  background: var(--White);
  color: var(--Dark);
  padding: 0.33rem 0.93rem;
  font-size: 1.04rem;
  font-weight: 600;
  font-family: inherit;
  line-height: 1.3;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.back-button:hover {
  background: var(--Blue-01);
  color: var(--White);
}
</style>
