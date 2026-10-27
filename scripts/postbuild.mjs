// Prerender de rutas para GitHub Pages: copia docs/index.html a cada ruta con
// title/description/canonical propios (así responden 200 y Google las indexa),
// genera sitemap.xml y 404.html.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'

const SITE = 'https://teixido.cc'
const projects = JSON.parse(readFileSync('src/data/projects.json', 'utf8'))
const template = readFileSync('docs/index.html', 'utf8')
const today = new Date().toISOString().slice(0, 10)

const strip = html => (html ?? '').replace(/<h3>.*?<\/h3>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
const clip = (s, n = 155) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s)
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Proyectos cuya description sale de otro campo que fullDescription.
const descField = { perimetral: 'fullDescription2', 'voces-hibrides': 'fullDescription2' }

// GitHub Pages sirve cada ruta como carpeta y redirige (301) a la versión con
// barra final, así que esa es la URL canónica.
const url = path => `${SITE}${path}/`

const pages = [
  { path: '/home', title: 'Portfolio | Marianne Teixido' },
  { path: '/bio', title: 'Bio | Marianne Teixido' },
  { path: '/contact', title: 'Contact | Marianne Teixido' },
  ...projects
    .filter(p => !p.externalOnly)
    .map(p => {
      const en = p.translations?.EN
      const field = descField[p.id] ?? 'fullDescription'
      return {
        path: `/home/${p.id}`,
        title: `${en?.title ?? p.title} | Marianne Teixido`,
        description: clip([en?.summary ?? p.summary, strip(en?.details?.[field] ?? p.details?.[field])].filter(Boolean).join('. ')),
      }
    }),
]

// Contenido estático por ruta (h1 + párrafo): Vue lo reemplaza al montar, pero
// los rastreadores que no ejecutan JS lo ven en el HTML.
const intro = 'Marianne Teixido is a sound artist, live coder and creative programmer based in Mexico City, Mexico. The work brings together live coding, sound art, creative code and audiovisual projects.'
const body = {
  '/home': { h1: 'Marianne Teixido — live coding, sound art and creative code', p: intro },
  '/bio': { h1: 'Bio — Marianne Teixido', p: intro },
  '/contact': { h1: 'Contact — Marianne Teixido', p: 'Contact Marianne Teixido, sound artist and live coder based in Mexico City, Mexico.' },
}
const bodyFor = ({ path, title, description }) =>
  body[path] ?? { h1: title.replace(/ \| Marianne Teixido$/, ''), p: `${description} Project by Marianne Teixido: live coding, sound art and creative code from Mexico City.` }

const render = ({ path, title, description }) => {
  let html = template.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url(path)}" />`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*/, `$1${url(path)}`)
  if (description) {
    html = html.replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    html = html.replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
  }
  const { h1, p } = bodyFor({ path, title, description })
  html = html.replace('<div id="app"></div>', () => `<div id="app"><h1>${esc(h1)}</h1><p>${esc(p)}</p></div>`)
  return html
}

for (const page of pages) {
  mkdirSync(`docs${page.path}`, { recursive: true })
  writeFileSync(`docs${page.path}/index.html`, render(page))
}

copyFileSync('docs/index.html', 'docs/404.html')

// La raíz también lleva contenido estático (404.html conserva la plantilla vacía).
const rootBody = body['/home']
writeFileSync('docs/index.html', template.replace('<div id="app"></div>', () => `<div id="app"><h1>${esc(rootBody.h1)}</h1><p>${esc(rootBody.p)}</p></div>`))

const urls = [`  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod></url>`, ...pages.map(p => `  <url><loc>${url(p.path)}</loc><lastmod>${today}</lastmod></url>`)]
writeFileSync(
  'docs/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`prerender: ${pages.length} rutas + sitemap.xml + 404.html`)
