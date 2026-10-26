<template>
  <section class="projects">
    <ProjectCard v-for="(project, index) in visibleProjects" :key="project.id" :project="project" :index="index" />
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import projectsData from '../data/projects.json'
import { tagIds } from '../data/tags'

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: projectsData.filter(p => p.image)
    }
  },
  computed: {
    visibleProjects() {
      const tag = this.$route.query.tag
      if (typeof tag !== 'string' || !tagIds.includes(tag)) return this.projects
      return this.projects.filter(p => p.tags?.includes(tag))
    }
  }
}
</script>

<style scoped>
/* Filas alternas desfasadas a la derecha: --stagger es el desplazamiento y
   el padding derecho le reserva espacio para que no desborde. */
.projects {
  --stagger: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;
  align-items: start;
  padding-right: var(--stagger);
}

/* 2 columnas: filas 2, 4, 6… = elementos 3-4, 7-8… */
.projects > :nth-child(4n + 3),
.projects > :nth-child(4n + 4) {
  transform: translateX(var(--stagger));
}

@media (max-width: 480px) {
  .projects {
    --stagger: 1.5rem;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }

  .projects > :nth-child(4n + 3),
  .projects > :nth-child(4n + 4) {
    transform: none;
  }

  .projects > :nth-child(even) {
    transform: translateX(var(--stagger));
  }
}

@media (min-width: 768px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }

  .projects > :nth-child(4n + 3),
  .projects > :nth-child(4n + 4) {
    transform: none;
  }

  /* 3 columnas: elementos 4-6, 10-12… */
  .projects > :nth-child(6n + 4),
  .projects > :nth-child(6n + 5),
  .projects > :nth-child(6n + 6) {
    transform: translateX(var(--stagger));
  }
}

@media (min-width: 1024px) {
  .projects {
    grid-template-columns: repeat(4, 1fr);
  }

  .projects > :nth-child(6n + 4),
  .projects > :nth-child(6n + 5),
  .projects > :nth-child(6n + 6) {
    transform: none;
  }

  /* 4 columnas: elementos 5-8, 13-16… */
  .projects > :nth-child(8n + 5),
  .projects > :nth-child(8n + 6),
  .projects > :nth-child(8n + 7),
  .projects > :nth-child(8n + 8) {
    transform: translateX(var(--stagger));
  }
}
</style>
