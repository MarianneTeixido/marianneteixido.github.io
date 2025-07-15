<template>
  <section class="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects.json'

export default {
  components: { ProjectCard },
  data() {
    return { projects }
  }
}
</script>