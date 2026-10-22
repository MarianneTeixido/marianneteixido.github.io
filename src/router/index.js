import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Contact from '../views/Contact.vue'
import ProjectView from '../views/ProjectView.vue'
import projects from '../data/projects.json'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/bio', component: Bio },
  { path: '/contact', component: Contact },
  { path: '/home/:projectId', component: ProjectView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

const staticTitles = { '/home': 'Portafolio', '/bio': 'Bio', '/contact': 'Contacto' }

// Mantiene document.title en sync para que analytics registre títulos útiles
router.afterEach((to) => {
  const project = projects.find(p => p.id === to.params.projectId)
  const name = project?.title ?? staticTitles[to.path]
  document.title = name ? `${name} | Marianne Teixido` : 'Portafolio | Marianne Teixido'
})

export default router
