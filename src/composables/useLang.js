import { ref, computed } from 'vue'

const current = ref('ES')

const messages = {
  ES: {
    description: 'Artista digital, investigadora, live coder y desarrolladora de software',
    nav: {
      projects: 'Proyectos',
      bio: 'Bio',
      contact: 'Contacto',
    },
    footer: 'Website desarrollado en Vue from scratch por mi.',
  },
  EN: {
    description: 'Digital artist, researcher, live coder and software developer',
    nav: {
      projects: 'Projects',
      bio: 'Bio',
      contact: 'Contact',
    },
    footer: 'Website developed in Vue from scratch by me.',
  },
}

export function useLang() {
  const t = computed(() => messages[current.value])
  const setLang = (lang) => { current.value = lang }

  return { current, t, setLang }
}
