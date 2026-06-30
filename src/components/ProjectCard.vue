<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLang } from '../composables/useLang';

const props = defineProps(['project', 'index']);
const canvas = ref(null);
const { current } = useLang();

const localizedSummary = computed(() => {
  if (current.value === 'EN' && props.project.translations?.EN?.summary) {
    return props.project.translations.EN.summary;
  }
  return props.project.summary;
});

const projectNumber = computed(() => String((props.index ?? 0) + 1).padStart(2, '0'));

const getImageUrl = (imageName) => {
  if (!imageName) return '';
  return new URL(`../assets/img/${imageName}`, import.meta.url).href;
};

onMounted(() => {
  if (props.project.hydraCode && canvas.value) {
    new Hydra({
      canvas: canvas.value,
      detectAudio: false,
      enableStreamCapture: false,
    });

    try {
      const hydraScript = new Function(props.project.hydraCode);
      hydraScript();
    } catch (e) {
      console.error("Error executing Hydra code:", e);
    }
  }
});

onUnmounted(() => {
  if (props.project.hydraCode && typeof h !== 'undefined') {
    h.hush();
  }
});
</script>

<template>
  <div class="project">
    <a @click.prevent="$router.push(`/home/${project.id}`)" class="sticky">
      <div class="project-thumb-wrap">
        <div class="project-thumb">
          <canvas v-if="project.hydraCode" ref="canvas" class="hydra-canvas"></canvas>
          <img v-else :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" decoding="async">
        </div>
      </div>
      <span class="project-number">{{ projectNumber }}</span>
      <h3>{{ project.title }}</h3>
    </a>
  </div>
</template>

<style scoped>
.project {
  cursor: pointer;
  break-inside: avoid;
  background: var(--Gray-50);
  padding: 0.75rem 1.75rem 1.75rem 0.75rem;
}

.project a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.project-thumb-wrap {
  position: relative;
}

.project-thumb-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2px 28px 28px 90px;
  border: 2px solid var(--Blue-01);
  transform: translate(12px, 12px);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.2s ease;
}

.project-thumb {
  position: relative;
  border-radius: 2px 28px 28px 90px;
  overflow: hidden;
  z-index: 1;
  transition: transform 0.2s ease;
}

.project:hover .project-thumb {
  transform: translate(6px, 6px);
}

.project:hover .project-thumb-wrap::after {
  transform: translate(6px, 6px);
}

.project-thumb img,
.project-thumb .hydra-canvas {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 4 / 3;
  transition: transform 0.4s ease;
}

.project:hover .project-thumb img,
.project:hover .project-thumb .hydra-canvas {
  transform: scale(1.04);
}

.project-number {
  display: block;
  font-size: 0.75rem;
  color: var(--Blue-01);
  padding: 0.5rem 0.25rem 0.15rem;
  letter-spacing: 0.05em;
}

.project h3 {
  padding: 0 0.25rem 0.75rem;
  margin: 0;
}
</style>
