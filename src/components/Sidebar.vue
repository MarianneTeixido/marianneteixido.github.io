<script setup>
import { useLang } from '../composables/useLang'

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const { t, current, setLang } = useLang()

const handleLinkClick = () => {
  emit('close');
};

const toggleLang = () => {
  setLang(current.value === 'ES' ? 'EN' : 'ES')
}
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-container">
      <div class="sidebar-name-row">
        <h1 class="site-name">Marianne Teixido</h1>
        <button class="lang-inline sticky" @click="toggleLang">{{ current === 'ES' ? 'EN' : 'ES' }}</button>
      </div>
      <div>
        <p>{{ t.description }}</p>
        <p></p>
      </div>
      <nav class="menu-column">

        <router-link to="/" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>{{ t.nav.projects }}</router-link>
        <router-link to="/bio" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>{{ t.nav.bio }}</router-link>
        <router-link to="/contact" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>{{ t.nav.contact }}</router-link>
      </nav>

      <div class="social-media-icons">

        <a href="https://github.com/MarianneTeixido" target="_blank" class="sticky"><i class="bi bi-github"></i></a>
        <a href="https://www.instagram.com/marianneteixido/" target="_blank" class="sticky"><i
            class="bi bi-instagram"></i></a>
        <a href="https://social.toplap.org/@teixido" target="_blank" rel="me" class="sticky"><i
            class="bi bi-mastodon"></i></a>
        <a href="https://www.linkedin.com/in/marianneteixidodev/" target="_blank" class="sticky"><i
            class="bi bi-linkedin"></i></a>
        <a href="mailto:marianne.teixido@gmail.com" target="_blank" class="sticky"><i class="bi bi-envelope"></i></a>
      </div>

      <div class="license">
        <span style="margin-top: 3rem;">
          [ <a href="https://labekka.red/licencia-f2f/" target="_blank" class="sticky">
            <img src="../assets/img/f2f-web.png" alt="License" style="width: 32px; height: auto; padding-right: 0.1rem;"
              class="img-fluid" loading="lazy" />
          </a> 2025 Marianne Teixido ]
        </span>
        <p>{{ t.footer }}</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-name-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.site-name {
  font-size: clamp(1.1rem, 1.4vw, 1.5rem);
  font-weight: 700;
  color: var(--Blue-01);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
  margin: 0;
  text-align: left;
  flex: 1;
  min-width: 0;
  word-break: break-word;
}

.lang-inline {
  flex-shrink: 0;
  margin-top: 0.15rem;
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

.lang-inline:hover {
  background: var(--Blue-01);
  color: var(--White);
}

@media (max-width: 720px) {
  .site-name {
    font-size: 1.2rem;
  }
}
</style>
