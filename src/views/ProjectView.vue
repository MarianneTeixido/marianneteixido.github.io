<template>
  <section class="project-details">
    <h2>{{ project.title }}</h2>
    <p>{{ project.summary }}</p>

    <!-- Imagen principal -->
    <img
      v-if="project.image"
      :src="getImageUrl(project.image)"
      class="project-img"
      loading="lazy"
      :alt="project.title"
    />

    <!-- Descripción 1 -->
    <div
      v-if="project.details?.fullDescription"
      v-html="project.details.fullDescription"
      class="project-description"
    ></div>

    <!-- Galería 1 -->
    <div
      v-if="project.details?.images && project.details.images.length"
      class="project-gallery"
    >
      <img
        v-for="(img, index) in project.details.images"
        :key="index"
        :src="getImageUrl(img)"
        :alt="`Imagen ${index + 1}`"
        class="gallery-img"
        loading="lazy"
      />
    </div>

    <!-- Descripción 2 -->
    <div
      v-if="project.details?.fullDescription2"
      v-html="project.details.fullDescription2"
      class="project-description"
    ></div>

    <!-- Galería 2 -->
    <div
      v-if="project.details?.images2 && project.details.images2.length"
      class="project-gallery"
    >
      <img
        v-for="(img, index) in project.details.images2"
        :key="index"
        :src="getImageUrl(img)"
        :alt="`Imagen secundaria ${index + 1}`"
        class="gallery-img"
        loading="lazy"
      />
    </div>

    <div class="navigation-buttons">
      <BackButton />
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        class="project-link"
      >
        Ver proyecto
      </a>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'
import BackButton from '../components/BackButton.vue'

const route = useRoute()
const project = projects.find(p => p.id === route.params.projectId)

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
}
</script>

<style scoped>
.project-details {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.project-img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.project-description {
  margin-top: 1.5rem;
  line-height: 1.6;
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.gallery-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.project-link {
  /* Estilos para el enlace del proyecto */
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}
</style>
