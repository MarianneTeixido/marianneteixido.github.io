<template>
  <section class="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import projectsData from '../data/projects.json'

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: projectsData.filter(p => p.image)
    }
  }
}
</script>

<style scoped>
.projects {
  columns: 2;
  column-gap: 0;
}

@media (max-width: 480px) {
  .projects {
    columns: 1;
    margin-top: 3rem; }
}

@media (min-width: 768px) {
  .projects {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .projects {
    columns: 4;
  }
}
</style>