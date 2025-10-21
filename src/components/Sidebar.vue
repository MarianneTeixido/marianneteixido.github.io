<script setup>
defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const handleLinkClick = () => {
  emit('close');
};
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-container">
      <h1 class="align-right">Marianne Teixido</h1>
      <div>
        <p>Artista digital, investigadora, live coder y desarrolladora de software</p>
        <p></p>
      </div>
      <nav class="menu-column">

        <router-link to="/" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>Proyectos</router-link>
        <router-link to="/bio" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>Bio</router-link>
        <router-link to="/contact" active-class="active" @click="handleLinkClick" class="sticky"><i
            class="bi bi-chevron-right"></i>Contacto</router-link>
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
        <p>
          Website desarrollado en Vue <em>from scratch</em> por mi.
        </p>
      </div>
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
