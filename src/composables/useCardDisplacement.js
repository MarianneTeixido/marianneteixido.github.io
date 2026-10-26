import { Renderer, Program, Texture, Mesh, Vec2, Flowmap, Triangle } from 'ogl'

// Displacement con flowmap sobre las miniaturas de las cards, igual que la foto
// de Bio. Para no abrir un contexto WebGL por card (los navegadores limitan ~16)
// hay un único canvas compartido que se coloca sobre la card con hover y se
// retira al salir; el resto del tiempo no se renderiza nada.

const ANIMATED_EXT = ['gif', 'apng', 'webp', 'mp4', 'webm']
const SLOW_FRAME_MS = 34
const SAMPLE_FRAMES = 45

const vertex = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`

// Misma intensidad que en Bio (0.1). La textura se recorta tipo object-fit: cover
// para coincidir con la <img> que queda debajo.
const fragment = `
  precision highp float;
  uniform sampler2D tWater;
  uniform sampler2D tFlow;
  uniform vec2 uCover;
  varying vec2 vUv;
  void main() {
    vec3 flow = texture2D(tFlow, vUv).rgb;
    vec2 uv = vUv + flow.xy * 0.1;
    uv = (uv - 0.5) * uCover + 0.5;
    gl_FragColor = vec4(texture2D(tWater, uv).rgb, 1.0);
  }
`

let shared = null
let disabled = false
let active = null

const isAnimatedImage = (name = '') => ANIMATED_EXT.includes(name.split('.').pop().toLowerCase())

// Se evalúa en cada hover: el usuario puede cambiar el tamaño de ventana o sus preferencias.
const canRun = () => {
  if (disabled) return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (!window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 721px)').matches) return false
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return false
  if (navigator.deviceMemory && navigator.deviceMemory <= 2) return false
  return true
}

const getShared = () => {
  if (shared) return shared
  try {
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: false })
    const gl = renderer.gl
    if (!gl) throw new Error('webgl')

    const flowmap = new Flowmap(gl, { falloff: 0.4, alpha: 0.7, dissipation: 0.975 })
    const texture = new Texture(gl, {
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
      generateMipmaps: false,
    })
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        tWater: { value: texture },
        tFlow: flowmap.uniform,
        uCover: { value: new Vec2(1, 1) },
      },
    })
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

    Object.assign(gl.canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block',
      pointerEvents: 'none',
      zIndex: '1',
      transition: 'transform 0.4s ease',
    })

    shared = { renderer, gl, flowmap, texture, program, mesh }
  } catch {
    disabled = true
    shared = null
  }
  return shared
}

export function attachDisplacement(thumb, img) {
  const mouse = new Vec2(-1)
  const target = new Vec2(-1)
  const velocity = new Vec2()
  const lastMouse = new Vec2()
  let lastTime = 0
  let raf = null
  let frames = 0
  let elapsed = 0
  let prev = 0
  let aspect = 1

  const stop = () => {
    if (raf) cancelAnimationFrame(raf)
    raf = null
    if (active === stop) {
      active = null
      shared?.gl.canvas.remove()
    }
  }

  const updateMouse = (e) => {
    const rect = thumb.getBoundingClientRect()
    target.set((e.clientX - rect.left) / rect.width, 1 - (e.clientY - rect.top) / rect.height)
    if (mouse.x < 0) mouse.copy(target)

    if (!lastTime) {
      lastTime = performance.now()
      lastMouse.set(e.clientX, e.clientY)
    }
    const deltaX = e.clientX - lastMouse.x
    const deltaY = e.clientY - lastMouse.y
    lastMouse.set(e.clientX, e.clientY)

    const now = performance.now()
    const delta = Math.max(14, now - lastTime)
    lastTime = now

    velocity.x = deltaX / delta
    velocity.y = deltaY / delta
    velocity.needsUpdate = true
  }

  const draw = (t) => {
    const s = shared

    // Si el equipo no sostiene ~30 fps con el efecto, se apaga para toda la sesión.
    if (prev) {
      frames++
      if (frames > 5) elapsed += t - prev
      if (frames === SAMPLE_FRAMES + 5 && elapsed / SAMPLE_FRAMES > SLOW_FRAME_MS) {
        disabled = true
        stop()
        return
      }
    }
    prev = t

    // La posición y la velocidad se suavizan para que el desplazamiento siga al cursor sin tirones.
    const moving = velocity.needsUpdate
    if (!moving) {
      velocity.set(0)
    } else {
      mouse.x += (target.x - mouse.x) * 0.35
      mouse.y += (target.y - mouse.y) * 0.35
    }
    velocity.needsUpdate = false

    s.flowmap.aspect = aspect
    // Sin movimiento no se estampa nada: así la estela se disipa sola en vez de borrarse.
    if (moving) s.flowmap.mouse.copy(mouse)
    else s.flowmap.mouse.set(-1)
    s.flowmap.velocity.lerp(velocity, velocity.len() ? 0.2 : 0.06)
    s.flowmap.update()
    s.renderer.render({ scene: s.mesh })
    raf = requestAnimationFrame(draw)
  }

  const onEnter = () => {
    if (!canRun() || !img.complete || !img.naturalWidth) return
    const s = getShared()
    if (!s) return
    if (active) active()

    const w = thumb.clientWidth
    const h = thumb.clientHeight
    s.renderer.setSize(w, h)
    Object.assign(s.gl.canvas.style, { width: '100%', height: '100%' })
    aspect = w / h

    const boxAspect = w / h
    const imgAspect = img.naturalWidth / img.naturalHeight
    s.program.uniforms.uCover.value.set(
      boxAspect > imgAspect ? 1 : boxAspect / imgAspect,
      boxAspect > imgAspect ? imgAspect / boxAspect : 1,
    )
    s.texture.image = img
    s.texture.needsUpdate = true

    lastTime = 0
    frames = 0
    elapsed = 0
    prev = 0
    mouse.set(-1)
    target.set(-1)
    velocity.set(0)

    // Primer cuadro sin flujo (idéntico a la <img>) antes de mostrar el canvas,
    // para que no haya parpadeo; la <img> sigue debajo y recibe el mismo zoom.
    s.renderer.render({ scene: s.mesh })
    const canvas = s.gl.canvas
    canvas.style.transform = 'scale(1)'
    thumb.appendChild(canvas)
    void canvas.offsetWidth
    canvas.style.transform = 'scale(1.04)'

    active = stop
    raf = requestAnimationFrame(draw)
  }

  thumb.addEventListener('mouseenter', onEnter)
  thumb.addEventListener('mousemove', updateMouse)
  thumb.addEventListener('mouseleave', stop)

  return () => {
    stop()
    thumb.removeEventListener('mouseenter', onEnter)
    thumb.removeEventListener('mousemove', updateMouse)
    thumb.removeEventListener('mouseleave', stop)
  }
}

export { isAnimatedImage }
