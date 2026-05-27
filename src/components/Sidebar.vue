<script setup>
import { useLang } from '../composables/useLang'
import LangToggle from './LangToggle.vue'

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const { t } = useLang()

const handleLinkClick = () => {
  emit('close');
};
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-container">
      <h1 class="align-right">Marianne Teixido</h1>
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
      <LangToggle class="sidebar-lang-toggle" />
    </div>
  </aside>
</template>

<style scoped>
.inline-element {
  display: inline-block;
  margin: 2rem 1rem;
}

.menu-toggle {
  display: none;
  /* Oculto por defecto */
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

@media (max-width: 720px) {
  .menu-toggle {
    display: block;
  }
}
</style>
