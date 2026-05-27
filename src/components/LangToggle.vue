<template>
  <div class="lang-toggle">
    <div v-if="isOpen" class="lang-dropdown">
      <button
        v-for="lang in langs.filter(l => l !== current)"
        :key="lang"
        class="lang-option"
        @click="select(lang)"
      >{{ lang }}</button>
    </div>
    <button class="lang-btn" :class="{ 'is-open': isOpen }" @click="isOpen = !isOpen">
      {{ current }} <i class="bi" :class="isOpen ? 'bi-chevron-down' : 'bi-chevron-up'"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang'

const langs = ['ES', 'EN']
const { current, setLang } = useLang()
const isOpen = ref(false)

const select = (lang) => {
  setLang(lang)
  isOpen.value = false
}
</script>

<style scoped>
.lang-toggle {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 4rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  transition: background 0.2s, color 0.2s;
  width: 100%;
}

.lang-btn.is-open {
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.lang-btn i {
  font-size: 0.7rem;
  color: var(--Blue-01);
  transition: color 0.2s;
}

.lang-btn:hover {
  background: var(--Blue-01);
  color: var(--White);
}

.lang-btn:hover i {
  color: var(--White);
}

.lang-dropdown {
  border: 1px solid var(--Blue-01);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  background: var(--White);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.lang-option {
  background: var(--White);
  color: #231F20;
  border: none;
  border-bottom: 1px solid var(--Blue-01);
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, color 0.2s;
  width: 100%;
}

.lang-option:last-child {
  border-bottom: none;
}

.lang-option:hover {
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
