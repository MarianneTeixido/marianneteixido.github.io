<template>
  <canvas ref="hydraCanvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  code: String,
});

const hydraCanvas = ref(null);

onMounted(() => {
  const hydra = new Hydra({
    canvas: hydraCanvas.value,
    detectAudio: false,
  });

  new Function(props.code)();
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
