import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tagIds } from '../data/tags'

// El filtro vive en la URL (/home?tag=musica): se puede compartir y el botón
// de volver desde un proyecto regresa a la lista ya filtrada.
export function useTagFilter() {
  const route = useRoute()
  const router = useRouter()

  const activeTag = computed(() => {
    const tag = route.query.tag
    return typeof tag === 'string' && tagIds.includes(tag) ? tag : null
  })

  // Selección simple: pulsar la pastilla activa (o «Todos») quita el filtro.
  const setTag = (id) => {
    const location = { path: '/home', query: id && id !== activeTag.value ? { tag: id } : {} }
    return route.path === '/home' ? router.replace(location) : router.push(location)
  }

  return { activeTag, setTag }
}
