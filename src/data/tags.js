// Vocabulario cerrado de etiquetas para filtrar proyectos. El orden es el de las
// pastillas en la barra lateral; las que no tienen proyectos no se muestran.
export const tags = [
  { id: 'performance', ES: 'Performance', EN: 'Performance' },
  { id: 'live-coding', ES: 'Live coding', EN: 'Live coding' },
  { id: 'musica', ES: 'Música', EN: 'Music' },
  { id: 'videoarte', ES: 'Videoarte', EN: 'Video art' },
  { id: 'instalacion', ES: 'Instalación', EN: 'Installation' },
  { id: 'software', ES: 'Software', EN: 'Software' },
  { id: 'visualizacion-datos', ES: 'Visualización de datos', EN: 'Data visualization' },
  { id: 'experimentos', ES: 'Experimentos', EN: 'Experiments' },
  { id: 'literatura-electronica', ES: 'Literatura electrónica', EN: 'Electronic literature' },
  { id: 'publicaciones', ES: 'Publicaciones', EN: 'Publications' },
  { id: 'talleres', ES: 'Talleres', EN: 'Workshops' },
  { id: 'curaduria', ES: 'Curaduría', EN: 'Curation' },
  { id: 'colectivas', ES: 'Colectivas', EN: 'Collectives' },
]

export const tagIds = tags.map(t => t.id)
