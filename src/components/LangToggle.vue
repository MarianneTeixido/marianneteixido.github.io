<template>
  <div class="lang-toggle">
    <button class="lang-btn" @click="toggle">
      {{ current === 'ES' ? 'EN' : 'ES' }}
    </button>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang'

const { current, setLang } = useLang()

const toggle = () => {
  setLang(current.value === 'ES' ? 'EN' : 'ES')
}
</script>

<style scoped>
.lang-toggle {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1001;
}

.lang-btn {
  border: 1px solid var(--Blue-01);
  background: var(--White);
  color: #231F20;
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border-radius: 4px;
  width: 4rem;
  transition: background 0.2s, color 0.2s;
}

.lang-btn:hover {
  background: var(--Blue-01);
  color: var(--White);
}

@media (max-width: 720px) {
  .lang-toggle {
    position: relative;
    bottom: auto;
    left: auto;
    z-index: auto;
    margin-top: 1.5rem;
  }
}
</style>
