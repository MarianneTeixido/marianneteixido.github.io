<template>
  <section class="project-details">
    <h2>{{ project.title }}</h2>
    <p>{{ project.summary }}</p>
    <p>{{ project.year }}</p>

    <!-- Imagen principal -->
    <img v-if="project.image" :src="getImageUrl(project.image)" class="project-img" loading="lazy"
      :alt="project.title" />

    <!-- Sketch de Hydra -->
    <div v-if="project.type === 'hydra-sketch' && project.sketch" class="hydra-sketch-container">
      <HydraSketch :code="project.sketch" />
    </div>

    <!-- Descripción 1 -->
    <div v-if="project.details?.fullDescription" v-html="project.details.fullDescription" class="project-description">
    </div>
  <!-- Reproductor de Audio -->
    <div v-if="project.details?.audio" class="audio-player">
      <audio controls>
        <source :src="getAudioUrl(project.details.audio)" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
    <!-- Galería 1 -->
    <div v-if="project.details?.images && project.details.images.length" class="project-gallery">
      <img v-for="(img, index) in project.details.images" :key="index" :src="getImageUrl(img)"
        :alt="`Imagen ${index + 1}`" class="gallery-img" loading="lazy" />
    </div>

    <!-- Sketch de Hydra 2-->
    <div v-if="project.type === 'hydra-sketch' && project.sketch2" class="hydra-sketch-container">
      <HydraSketch :code="project.sketch2" />
    </div>

    <!-- Descripción 2 -->
    <div v-if="project.details?.fullDescription2" v-html="project.details.fullDescription2" class="project-description">
    </div>



    <!-- Galería 2 -->
    <div v-if="project.details?.images2 && project.details.images2.length" class="project-gallery">
      <img v-for="(img, index) in project.details.images2" :key="index" :src="getImageUrl(img)"
        :alt="`Imagen secundaria ${index + 1}`" class="gallery-img" loading="lazy" />
    </div>

    <!-- Description 3 -->
    <div v-if="project.details?.fullDescription3" v-html="project.details.fullDescription3" class="project-description">
    </div>

    <!-- Galería 3 -->
    <div v-if="project.details?.images3 && project.details.images3.length" class="project-gallery">
      <img v-for="(img, index) in project.details.images3" :key="index" :src="getImageUrl(img)"
        :alt="`Imagen secundaria ${index + 1}`" class="gallery-img" loading="lazy" />
    </div>

    <!-- Technical Notes -->
    <div v-if="project.details?.technical_notes" class="technical-notes">
      <h3>Technical Notes</h3>
      <ul>
        <li v-for="(note, index) in project.details.technical_notes" :key="index">
          <strong>{{ note.title }}:</strong> {{ note.content }}
        </li>
      </ul>
    </div>

    <!-- Related Projects -->
    <div v-if="project.related_projects" class="related-projects">
      <h3>Proyectos relacionados</h3>
      <ul>
        <li v-for="(related, index) in project.related_projects" :key="index">
          <strong>{{ related.title }}</strong> ({{ related.status }})
          <p>{{ related.description }}</p>
        </li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <BackButton />
      <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
        Ver proyecto
      </a>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'
import BackButton from '../components/BackButton.vue'
import HydraSketch from '../components/HydraSketch.vue'

const route = useRoute()
const project = projects.find(p => p.id === route.params.projectId)

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
}
const getAudioUrl = (audioName) => {
  return new URL(`../assets/audio/${audioName}`, import.meta.url).href
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
.audio-player {
  margin-top: 1.5rem;
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

.hydra-sketch-container {
  margin-top: 1.5rem;
}

.audio-player {
  margin-top: 1.5rem;
}

.technical-notes,
.related-projects {
  margin-top: 2rem;
}

.technical-notes h3,
.related-projects h3 {
  margin-bottom: 1rem;
}

.technical-notes ul,
.related-projects ul {
  list-style-type: none;
  padding: 0;
}

.technical-notes li,
.related-projects li {
  margin-bottom: 0.5rem;
}
</style>
