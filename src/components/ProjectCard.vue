<script setup>
const props = defineProps(['project'])

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
}
</script>

<template>
<div class="project">
      <a @click.prevent="$router.push(`/home/${project.id}`)">
      <img :src="getImageUrl(project.image)" :alt="project.title">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
    </a>
  </div>
</template>