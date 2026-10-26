<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="index !== null" class="lightbox" role="dialog" aria-modal="true" @click.self="close"
        @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
        <button class="lb-btn lb-close" :aria-label="labels.close" @click="close">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <button v-if="images.length > 1" class="lb-btn lb-nav lb-prev" :aria-label="labels.prev" @click="prev">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 4l-8 8 8 8" />
          </svg>
        </button>

        <figure class="lb-figure" @click.self="close">
          <img :key="index" :src="images[index].src" :alt="images[index].alt" class="lb-img" />
        </figure>

        <button v-if="images.length > 1" class="lb-btn lb-nav lb-next" :aria-label="labels.next" @click="next">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4l8 8-8 8" />
          </svg>
        </button>

        <p v-if="images.length > 1" class="lb-counter">{{ index + 1 }} / {{ images.length }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, watch } from 'vue'
import { useLang } from '../composables/useLang'

const props = defineProps({
  images: { type: Array, required: true }, // [{ src, alt }]
  modelValue: { type: Number, default: null }, // índice abierto, null = cerrado
})
const emit = defineEmits(['update:modelValue'])

const { current } = useLang()
const labels = computed(() =>
  current.value === 'EN'
    ? { close: 'Close', prev: 'Previous image', next: 'Next image' }
    : { close: 'Cerrar', prev: 'Imagen anterior', next: 'Imagen siguiente' }
)

const index = computed(() => props.modelValue)
const close = () => emit('update:modelValue', null)
const go = (step) => {
  const n = props.images.length
  emit('update:modelValue', (index.value + step + n) % n)
}
const prev = () => go(-1)
const next = () => go(1)

const onKey = (e) => {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft' && props.images.length > 1) prev()
  else if (e.key === 'ArrowRight' && props.images.length > 1) next()
}

// Deslizar con el dedo en pantallas táctiles
let touchX = null
const onTouchStart = (e) => { touchX = e.touches[0].clientX }
const onTouchEnd = (e) => {
  if (touchX === null || props.images.length < 2) return
  const dx = e.changedTouches[0].clientX - touchX
  touchX = null
  if (Math.abs(dx) > 50) dx > 0 ? prev() : next()
}

watch(index, (val, old) => {
  if (val !== null && old === null) {
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
  } else if (val === null && old !== null) {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Glassmorfismo: velo translúcido + desenfoque de lo que hay detrás */
  background: rgba(255, 255, 255, 0.01);
  -webkit-backdrop-filter: blur(6px) saturate(0.25);
  backdrop-filter: blur(3px) saturate(1);
}

.lb-figure {
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 4.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  animation: lb-in 250ms ease;
}

@keyframes lb-in {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

/* Botones: mismo lenguaje que "Volver" (azul, esquinas suaves, inversión al hover) */
.lb-btn {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--Blue-01);
  border-radius: 0.375rem;
  background-color: var(--Blue-01);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4), 0 4px 6px -2px rgba(37, 99, 235, 0.2);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lb-btn:hover {
  background-color: white;
  color: var(--Blue-01);
  border-color: var(--Blue-01);
}

.lb-btn svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: square;
  stroke-linejoin: miter;
}

.lb-close { top: 1.25rem; right: 1.25rem; }
.lb-nav { top: 50%; transform: translateY(-50%); }
.lb-prev { left: 1.25rem; }
.lb-next { right: 1.25rem; }

.lb-counter {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0.35rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--Blue-01);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 200ms ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .lb-figure { padding: 4.5rem 0.75rem 3.5rem; }
  .lb-nav { top: auto; bottom: 1rem; transform: none; width: 44px; height: 44px; }
  .lb-prev { left: 1rem; }
  .lb-next { right: 1rem; }
  .lb-close { width: 44px; height: 44px; top: 1rem; right: 1rem; }
}
</style>
