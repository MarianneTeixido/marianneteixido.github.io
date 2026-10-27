import { ref, computed } from 'vue'

const current = ref('EN')

const messages = {
  ES: {
    description: 'Artista, compositora, live coder e investigadora',
    nav: {
      projects: 'Proyectos',
      bio: 'Bio',
      contact: 'Contacto',
    },
    location: 'Radicada en Ciudad de México',
    footer: 'Sitio web hecho desde cero con ♡.',
    filters: { label: 'Filtrar proyectos', all: 'Todos' },
    projectView: {
      technicalNotes: 'Ficha técnica',
      relatedProjects: 'Proyectos relacionados',
      seeProject: 'Ver proyecto',
      audioUnsupported: 'Tu navegador no soporta el elemento de audio.',
    },
  },
  EN: {
    description: 'Artist, composer, live coder and researcher',
    nav: {
      projects: 'Projects',
      bio: 'Bio',
      contact: 'Contact',
    },
    location: 'Based in Mexico City',
    footer: 'Website made from scratch with ♡.',
    filters: { label: 'Filter projects', all: 'All' },
    projectView: {
      technicalNotes: 'Technical sheet',
      relatedProjects: 'Related Projects',
      seeProject: 'See project',
      audioUnsupported: 'Your browser does not support the audio element.',
    },
  },
}

export function useLang() {
  const t = computed(() => messages[current.value])
  const setLang = (lang) => { current.value = lang }

  return { current, t, setLang }
}
