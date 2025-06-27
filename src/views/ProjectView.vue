<template>
  <section class="project-details">
    <h2>{{ project.title }}</h2>
    <p>{{ project.text }}</p>
    <img v-if="project.image" :src="project.image" class="project-img" />
    <BackButton />
  </section>
</template>

<script>
import BackButton from '../components/BackButton.vue'
import projects from '../data/projects.json'

export default {
  components: { BackButton },
  data() {
    return {
      project: {}
    }
  },
  created() {
    const id = this.$route.params.projectId
    this.project = projects.find(p => p.id === id)
  }
}
</script>