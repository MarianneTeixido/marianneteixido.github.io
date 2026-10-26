<template>
  <section class="project-details">
    <h2>{{ displayProject.title }}</h2>
    <p>{{ displayProject.summary }}</p>
    <p>{{ displayProject.year }}</p>

    <!-- Imagen principal -->
    <img v-if="displayProject.image" :src="getImageUrl(displayProject.image)" class="project-img zoomable" loading="lazy"
      :alt="displayProject.title" tabindex="0" role="button" @click="openAt(0)" @keydown.enter="openAt(0)" />

    <!-- Sketch de Hydra -->
    <div v-if="displayProject.type === 'hydra-sketch' && displayProject.sketch" class="hydra-sketch-container">
      <HydraSketch :code="displayProject.sketch" />
    </div>

    <!-- Descripción 1 -->
    <div v-if="displayProject.details?.fullDescription" v-html="displayProject.details.fullDescription" class="project-description">
    </div>
      <!-- Reproductor de Audio -->
      <div v-if="displayProject.details?.audio" class="audio-player">
        <audio controls>
          <source :src="getAudioUrl(displayProject.details.audio)" type="audio/mpeg">
          {{ t.projectView.audioUnsupported }}
        </audio>
      </div>

      <!-- Reproductor de audio incrustado (Bandcamp, SoundCloud) -->
      <div v-if="displayProject.details?.audioEmbed" v-html="displayProject.details.audioEmbed" class="audio-embed"></div>

      <!-- Video de YouTube -->
      <div v-if="displayProject.details?.youtubeEmbed" v-html="displayProject.details.youtubeEmbed" class="video-container"></div>

      <!-- Galería 1 -->
      <div v-if="displayProject.details?.images && displayProject.details.images.length" class="project-gallery">
        <img v-for="(img, index) in displayProject.details.images" :key="index" :src="getImageUrl(img)"
        :alt="`${displayProject.title} ${index + 1}`" class="gallery-img zoomable" loading="lazy" tabindex="0"
        role="button" @click="openAt(offsets.g1 + index)" @keydown.enter="openAt(offsets.g1 + index)" />
    </div>

    <!-- Sketch de Hydra 2-->
    <div v-if="displayProject.type === 'hydra-sketch' && displayProject.sketch2" class="hydra-sketch-container">
      <HydraSketch :code="displayProject.sketch2" />
    </div>

    <!-- Descripción 2 -->
    <div v-if="displayProject.details?.fullDescription2" v-html="displayProject.details.fullDescription2" class="project-description">
    </div>

    <!-- Galería 2 -->
    <div v-if="displayProject.details?.images2 && displayProject.details.images2.length" class="project-gallery">
      <img v-for="(img, index) in displayProject.details.images2" :key="index" :src="getImageUrl(img)"
        :alt="`${displayProject.title} ${index + 1}`" class="gallery-img zoomable" loading="lazy" tabindex="0"
        role="button" @click="openAt(offsets.g2 + index)" @keydown.enter="openAt(offsets.g2 + index)" />
    </div>

    <!-- Video Gallery -->
    <div v-if="displayProject.details?.videos && displayProject.details.videos.length" class="video-gallery">
      <video v-for="(video, index) in displayProject.details.videos" :key="index" controls class="gallery-video">
        <source :src="getVideoUrl(video)" type="video/mp4">
        {{ t.projectView.audioUnsupported }}
      </video>
    </div>

    <!-- Description 3 -->
    <div v-if="displayProject.details?.fullDescription3" v-html="displayProject.details.fullDescription3" class="project-description">
    </div>

    <!-- Galería 3 -->
    <div v-if="displayProject.details?.images3 && displayProject.details.images3.length" class="project-gallery">
      <img v-for="(img, index) in displayProject.details.images3" :key="index" :src="getImageUrl(img)"
        :alt="`${displayProject.title} ${index + 1}`" class="gallery-img zoomable" loading="lazy" tabindex="0"
        role="button" @click="openAt(offsets.g3 + index)" @keydown.enter="openAt(offsets.g3 + index)" />
    </div>

    <!-- Technical Notes -->
    <div v-if="displayProject.details?.technical_notes" class="technical-notes">
      <h3>{{ t.projectView.technicalNotes }}</h3>
      <ul>
        <li v-for="(note, index) in displayProject.details.technical_notes" :key="index">
          <strong>{{ note.title }}:</strong> {{ note.content }}
        </li>
      </ul>
    </div>

    <!-- Related Projects -->
    <div v-if="displayProject.related_projects" class="related-projects">
      <h3>{{ t.projectView.relatedProjects }}</h3>
      <ul>
        <li v-for="(related, index) in displayProject.related_projects" :key="index">
          <strong>{{ related.title }}</strong> ({{ related.status }})
          <p>{{ related.description }}</p>
        </li>
      </ul>
    </div>

    <ImageLightbox v-model="lightboxIndex" :images="lightboxImages" />

    <div class="navigation-buttons">
      <BackButton />
      <a v-if="displayProject.link" :href="displayProject.link" target="_blank" class="project-link" data-umami-event="ver-proyecto" :data-umami-event-proyecto="displayProject.id">
        {{ t.projectView.seeProject }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'
import BackButton from '../components/BackButton.vue'
import HydraSketch from '../components/HydraSketch.vue'
import ImageLightbox from '../components/ImageLightbox.vue'
import { useLang } from '../composables/useLang'

const { current, t } = useLang()
const route = useRoute()
const project = projects.find(p => p.id === route.params.projectId)

const displayProject = computed(() => {
  if (current.value === 'ES' || !project?.translations?.EN) return project
  const en = project.translations.EN
  return {
    ...project,
    title: en.title ?? project.title,
    summary: en.summary ?? project.summary,
    details: en.details ? { ...project.details, ...en.details } : project.details,
    related_projects: en.related_projects ?? project.related_projects,
  }
})

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
}

// Visor: portada + galerías 1, 2 y 3, en el orden en que aparecen en la página
const lightboxIndex = ref(null)
const openAt = (i) => { lightboxIndex.value = i }
const galleries = computed(() => {
  const d = displayProject.value.details ?? {}
  return [d.images ?? [], d.images2 ?? [], d.images3 ?? []]
})
const hasCover = computed(() => !!displayProject.value.image)
const offsets = computed(() => {
  const base = hasCover.value ? 1 : 0
  const [g1, g2] = galleries.value
  return { g1: base, g2: base + g1.length, g3: base + g1.length + g2.length }
})
const lightboxImages = computed(() => {
  const title = displayProject.value.title
  const names = [
    ...(hasCover.value ? [displayProject.value.image] : []),
    ...galleries.value.flat(),
  ]
  return names.map((name, i) => ({ src: getImageUrl(name), alt: `${title} ${i + 1}` }))
})
const getAudioUrl = (audioName) => {
  return new URL(`../assets/audio/${audioName}`, import.meta.url).href
}
const getVideoUrl = (videoName) => {
  return new URL(`../assets/video/${videoName}`, import.meta.url).href
}
</script>

<style>
/* Global styles for v-html content */
.project-description h4 {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--Blue-01);
  margin-top: 1.25rem;
  margin-bottom: 0.4rem;
}

.project-description ul {
  list-style: none;
  padding-left: 0;
}

.project-description li {
  margin-bottom: 0.3rem;
}

/* Ficha técnica anidada dentro de una exhibición */
.project-description ul.ficha {
  margin: 0.5rem 0 0.9rem 1.5rem;
  padding-left: 0.9rem;
  border-left: 2px solid var(--Blue-01);
  font-size: 0.9rem;
}

.project-description ul.ficha li {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.1rem;
}

.project-description .ficha-label {
  flex: 0 0 5.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--Blue-01);
  opacity: 0.8;
}

.audio-embed {
  margin-top: 1.5rem;
}

.audio-embed iframe {
  display: block;
  width: 100%;
  border: 0;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin-top: 1.5rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>

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
  columns: 2;
  column-gap: 1rem;
  margin-top: 1.5rem;
}

@media (max-width: 600px) {
  .project-gallery {
    columns: 1;
  }
}

.zoomable {
  cursor: zoom-in;
}

.zoomable:focus-visible {
  outline: 2px solid var(--Blue-01);
  outline-offset: 3px;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
  border-radius: 8px;
  break-inside: avoid;
}

.video-gallery {
  columns: 2;
  column-gap: 1rem;
  margin-top: 1.5rem;
}

@media (max-width: 600px) {
  .video-gallery {
    columns: 1;
  }
}

.gallery-video {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
  border-radius: 8px;
  break-inside: avoid;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.project-link {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.hydra-sketch-container {
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
