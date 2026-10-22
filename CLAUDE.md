# Plan SEO + Analítica — teixido.cc

Sitio: portafolio Vue (Vite) en GitHub Pages, build a `/docs`, dominio `teixido.cc`. Usar siempre **pnpm**.

> **Estado (2026-10-21):** plan simplificado y definido, implementación pendiente. Solo está hecho el SEO técnico de la sección "Hecho". Al retomar, empezar por la fase 1 (sin tokens). Para la fase 3 hace falta el `website-id` de Umami Cloud.

## Objetivos
1. Saber quién visita: países, ciudades, dispositivos, de dónde llegan (referrers).
2. Métricas de páginas/proyectos más vistos y clics en enlaces salientes.
3. Mejorar posicionamiento en buscadores (Google).

**Restricciones:** costo cero, sin tarjeta, sin cookies ni banner de consentimiento. Sin mapas de calor ni grabaciones (requieren cookies/consentimiento). Sin Bing, PostHog ni Cloudflare por ahora.

## Stack elegido (todo gratis)
| Necesidad | Herramienta | Notas |
|---|---|---|
| Indexación y búsquedas | Google Search Console | Dominio ya verificado. No añade nada al sitio |
| Visitas, país, región, ciudad, referrers, dispositivos, eventos | Umami Cloud (plan gratuito) | Código abierto (MIT), sin cookies, sin tarjeta. Tiene tope mensual de eventos; verificar el límite vigente al registrarse |

Alternativa sencilla si Umami no convence: GoatCounter (solo país).

## Hecho
- [x] Meta description, canonical y Open Graph en `index.html`.
- [x] `public/robots.txt` con referencia al sitemap.
- [x] `scripts/postbuild.mjs`: prerender de cada ruta (`/bio`, `/contact`, `/home/<proyecto>`) con title, description y canonical propios, más `sitemap.xml` y `404.html`. `pnpm build` lo ejecuta.
- [x] `document.title` dinámico por ruta en `src/router/index.js`.
- [x] Dominio verificado en Google Search Console.

Pendiente de verificar: los cambios aún no están commiteados y no se ha confirmado `pnpm build` con el script nuevo (`docs/sitemap.xml` y `docs/robots.txt` ya aparecen en el árbol).

## Pasos pendientes

### Fase 1: publicar lo existente
1. `pnpm build` y revisar que existan `docs/home/<id>/index.html`, `docs/sitemap.xml` y `docs/robots.txt`.
2. Commit y push de `docs/`, `scripts/`, `public/`, `index.html`, `package.json` y el router.
3. Verificar con `curl -I` que `https://teixido.cc/home/subsuelo`, `/robots.txt` y `/sitemap.xml` respondan 200.

### Fase 2: Search Console
4. GSC → Sitemaps → enviar `sitemap.xml`.
5. GSC → Inspección de URLs → solicitar indexación de `/`, `/bio` y 3 o 4 proyectos clave.

### Fase 3: analítica de visitas (Umami Cloud)
6. Crear cuenta en Umami Cloud (sin tarjeta) → *Add website* → `teixido.cc`. Copiar el `website-id`.
7. Pegar el script en `index.html`, con `defer` y `data-website-id`. Umami sigue las rutas SPA por History API.
8. Eventos de clic en enlaces salientes con `data-umami-event="..."` en los enlaces relevantes (SoundCloud, GitHub, Mastodon, proyectos externos).
9. Mide: visitas, páginas, país, región, ciudad, referrers, dispositivos, navegadores y clics en enlaces.

### Fase 4: posicionamiento (contenido y enlaces)
10. Contenido en el HTML estático: el prerender solo cambia `<head>` y el cuerpo lo pinta Vue. Añadir en `postbuild.mjs` un `h1` y un párrafo real por ruta con "live coding", "arte sonoro", "código creativo", más la ciudad y el país.
11. JSON-LD `Person` en `index.html` con `sameAs` a Mastodon, GitHub, SoundCloud, Bandcamp, etc. y `rel="me"` en los enlaces a Mastodon.
12. Añadir `og:image` y `twitter:card` para vistas previas al compartir.
13. `alt` descriptivo en imágenes de proyectos y nombre consistente ("Marianne Teixido") en todos los perfiles.
14. Backlinks: enlazar `teixido.cc` desde perfiles propios, colectivos, festivales, residencias y repositorios. Es lo que más mueve el posicionamiento en un sitio personal.
15. Core Web Vitals: cargar Hydra y los shaders diferidos, sin bloquear el primer render.
16. Revisar `hreflang` ES/EN si el contenido se vuelve bilingüe en rutas distintas. Hoy el idioma se cambia en cliente, así que Google solo ve un idioma por URL.

### Fase 5: seguimiento
17. Semanal: GSC (impresiones, clics, consultas, posición media, páginas excluidas) y Umami (países, ciudades, referrers).
18. Mensual: proyectos más vistos y clics salientes en Umami, para ajustar el orden de proyectos, CTAs y navegación. Revisar Core Web Vitals en GSC.
19. `lastmod` del sitemap se actualiza en cada build (ya lo hace `postbuild.mjs`).

## Privacidad
- Umami no usa cookies ni identifica personas, así que no requiere aviso de cookies.
- Search Console no instala nada en el sitio.
- Si más adelante se quieren heatmaps o grabaciones (PostHog o Clarity), habrá que añadir consentimiento antes de cargarlos.

## Métricas de éxito (revisar a 3 meses)
- Las URLs principales aparecen indexadas en GSC.
- La búsqueda "Marianne Teixido" muestra el sitio en primera posición.
- Existen impresiones por consultas temáticas, como "live coding" y "arte sonoro".
- Se conoce el top de países, ciudades y referrers, y los proyectos más vistos.
