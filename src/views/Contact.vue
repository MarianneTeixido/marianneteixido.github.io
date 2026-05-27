<template>
  <article class="contact-content">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6">

        <!-- ESPAÑOL -->
        <template v-if="current === 'ES'">
          <h2>Contacto</h2>
          <p>No dudes en contactarme si tienes preguntas o un proyecto en el que pueda ayudarte. Envíame un correo a mteixido[at]piso16.cultura.unam.mx o escríbeme por Mastodon.</p>
          <p style="color: blue; font-weight: bold;">También puedes encontrarme en:</p>
        </template>

        <!-- ENGLISH -->
        <template v-else>
          <h2>Contact</h2>
          <p>Feel free to reach out if you have questions or a project I can help with. Send me an email at mteixido[at]piso16.cultura.unam.mx or message me on Mastodon.</p>
          <p style="color: blue; font-weight: bold;">You can also find me at:</p>
        </template>

        <div class="social-media-icons-contact">
          <a href="https://github.com/MarianneTeixido" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/marianneteixido/" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="https://x.com/marianneteixido" target="_blank"><i class="bi bi-twitter"></i></a>
          <a href="https://www.linkedin.com/in/marianneteixidodev/" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="mailto:mteixido@piso16.cultura.unam.mx" target="_blank"><i class="bi bi-envelope"></i></a>
        </div>

      </div>
    </div>
  </article>
</template>

<script setup>
import { useLang } from '../composables/useLang'

const { current } = useLang()
</script>

<style scoped>


@media (max-width: 480px) {
  .contact-content {
    margin-top: 3rem; }
}

</style>