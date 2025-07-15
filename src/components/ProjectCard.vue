<script setup>
const props = defineProps(['project'])

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
}
</script>

<template>
  <div class="project grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-0">
    <a @click.prevent="$router.push(`/home/${project.id}`)" class="sticky">
      <img :src="getImageUrl(project.image)" :alt="project.title">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
    </a>
  </div>
</template>

<style scoped>
.project {
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: linear-gradient(135deg, #f5f7fa 0%, #f8f9fb 100%);
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  margin: 2rem auto;
}

.project:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
}

.project a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}


.project img {
  width: 100%;
  height: auto;
  object-fit: fit;
  object-position: center;
}

.project h3 {
  padding: 1rem 1rem 0;
  margin: 0;
  font-weight: 600;
}

.project p {
  padding: 0.5rem 1rem 1rem;
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9rem;
  flex-grow: 1;
}
</style>