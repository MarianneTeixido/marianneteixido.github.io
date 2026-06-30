<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Renderer, Program, Texture, Mesh, Vec2, Flowmap, Triangle } from 'ogl'
import profileImg from '../assets/img/marianne_teixido.jpg'

const containerRef = ref(null)
const cleanups = []

onMounted(() => {
  const container = containerRef.value

  const vertex = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0, 1);
    }
  `

  const fragment = `
    precision highp float;
    uniform sampler2D tWater;
    uniform sampler2D tFlow;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec3 flow = texture2D(tFlow, vUv).rgb;
      vec2 uv = vUv + flow.xy * 0.1;
      vec3 tex = texture2D(tWater, uv).rgb;
      gl_FragColor.rgb = tex;
      gl_FragColor.a = 1.0;
    }
  `

  const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2) })
  const gl = renderer.gl

  Object.assign(gl.canvas.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
  })
  container.appendChild(gl.canvas)

  const flowmap = new Flowmap(gl)
  const geometry = new Triangle(gl)

  const texture = new Texture(gl, {
    wrapS: gl.CLAMP_TO_EDGE,
    wrapT: gl.CLAMP_TO_EDGE,
    generateMipmaps: false,
  })

  const img = new Image()
  img.src = profileImg
  img.onload = () => {
    texture.image = img
    texture.needsUpdate = true
  }

  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      uTime: { value: 0 },
      tWater: { value: texture },
      tFlow: flowmap.uniform,
    },
  })

  const mesh = new Mesh(gl, { geometry, program })

  let aspect = 1

  function resize() {
    const w = container.offsetWidth
    const h = container.offsetHeight
    renderer.setSize(w, h)
    aspect = w / h
  }

  window.addEventListener('resize', resize)
  resize()

  const mouse = new Vec2(-1)
  const velocity = new Vec2()
  const lastMouse = new Vec2()
  let lastTime

  function updateMouse(e) {
    const rect = container.getBoundingClientRect()
    let x, y
    if (e.changedTouches?.length) {
      x = e.changedTouches[0].clientX
      y = e.changedTouches[0].clientY
    } else {
      x = e.clientX
      y = e.clientY
    }

    mouse.set((x - rect.left) / rect.width, 1 - (y - rect.top) / rect.height)

    if (!lastTime) {
      lastTime = performance.now()
      lastMouse.set(x, y)
    }

    const deltaX = x - lastMouse.x
    const deltaY = y - lastMouse.y
    lastMouse.set(x, y)

    const now = performance.now()
    const delta = Math.max(14, now - lastTime)
    lastTime = now

    velocity.x = deltaX / delta
    velocity.y = deltaY / delta
    velocity.needsUpdate = true
  }

  container.addEventListener('mousemove', updateMouse)
  container.addEventListener('touchstart', updateMouse, { passive: true })
  container.addEventListener('touchmove', updateMouse, { passive: true })

  let animId

  function update(t) {
    animId = requestAnimationFrame(update)

    if (!velocity.needsUpdate) {
      mouse.set(-1)
      velocity.set(0)
    }
    velocity.needsUpdate = false

    flowmap.aspect = aspect
    flowmap.mouse.copy(mouse)
    flowmap.velocity.lerp(velocity, velocity.len() ? 0.5 : 0.1)
    flowmap.update()

    program.uniforms.uTime.value = t * 0.001
    renderer.render({ scene: mesh })
  }

  animId = requestAnimationFrame(update)

  cleanups.push(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
    container.removeEventListener('mousemove', updateMouse)
    container.removeEventListener('touchstart', updateMouse)
    container.removeEventListener('touchmove', updateMouse)
    gl.canvas.remove()
  })
})

onUnmounted(() => cleanups.forEach(fn => fn()))
</script>

<template>
  <div ref="containerRef" class="flowmap-photo">
    <img
      src="../assets/img/marianne_teixido.jpg"
      alt="Marianne Teixido selfportrait"
      class="photo-placeholder"
    />
  </div>
</template>

<style scoped>
.flowmap-photo {
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.photo-placeholder {
  display: block;
  width: 100%;
  height: auto;
  visibility: hidden;
}
</style>
