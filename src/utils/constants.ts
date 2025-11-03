export const COLORS = {
  // Paleta orgánica natural exacta
  ocreApagado: '#524354',
  marronOscuroApagado: '#291509', 
  caoba: '#4D1A09',
  verdeOlivo: '#565021',
  bosque: '#1C2218',
  verdeEucalipto: '#8B8D79',
  arena: '#C8BAAA',
  oroApagado: '#CBB186',
  pielSuave: '#EDDCC3',
} as const;

// export const BLOG_ARTICLES = [
//   {
//     id: 'moda-sostenible-colombia-2024',
//     title: 'Reflexiones sobre la Moda Sostenible en Colombia',
//     description: 'Mis observaciones y análisis personal sobre el panorama actual de la moda consciente en nuestro país, basado en mi experiencia trabajando con marcas locales.',
//     thumbnail: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '8 min',
//     category: 'Análisis Profundo',
//     author: 'Gabriela Ortiz',
//     date: '15 Enero 2024'
//   },
//   {
//     id: 'fibras-textiles-impacto-ambiental',
//     title: 'Mi Investigación Personal sobre Fibras Textiles',
//     description: 'Lo que descubrí durante mi certificación en investigación de fibras textiles y cómo cambió mi perspectiva sobre los materiales.',
//     thumbnail: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '12 min',
//     category: 'Experiencia Técnica',
//     author: 'Gabriela Ortiz',
//     date: '8 Enero 2024'
//   },
//   {
//     id: 'psicologia-color-vestimenta',
//     title: 'Cómo el Color Transformó mi Práctica Profesional',
//     description: 'Reflexiones sobre el poder del color en la consultoría de imagen y las lecciones aprendidas trabajando con mis clientes.',
//     thumbnail: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '6 min',
//     category: 'Desarrollo Profesional',
//     author: 'Gabriela Ortiz',
//     date: '2 Enero 2024'
//   },
//   {
//     id: 'economia-circular-moda',
//     title: 'Mi Transición hacia la Economía Circular',
//     description: 'Cómo cambié mi enfoque de negocio hacia modelos circulares y las lecciones aprendidas en el proceso.',
//     thumbnail: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '10 min',
//     category: 'Estrategias de Negocio',
//     author: 'Gabriela Ortiz',
//     date: '28 Diciembre 2023'
//   },
//   {
//     id: 'algoritmo-closet-desarrollo',
//     title: 'Cómo Desarrollé el Algoritmo de tu Closet',
//     description: 'El proceso creativo y técnico detrás de mi metodología más exitosa, desde la idea inicial hasta la implementación.',
//     thumbnail: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '15 min',
//     category: 'Desarrollo Profesional',
//     author: 'Gabriela Ortiz',
//     date: '20 Diciembre 2023'
//   },
//   {
//     id: 'clientes-transformacion-personal',
//     title: 'Historias de Transformación: Mis Clientes',
//     description: 'Reflexiones sobre los casos más impactantes en mi práctica y lo que me han enseñado sobre la imagen personal.',
//     thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
//     readTime: '9 min',
//     category: 'Experiencias Personales',
//     author: 'Gabriela Ortiz',
//     date: '15 Diciembre 2023'
//   },
//   {
//     id: 'industria-moda-colombia-realidades',
//     title: 'Realidades de la Industria Textil Colombiana',
//     description: 'Mis observaciones trabajando directamente con la industria local y los desafíos que enfrentamos.',
//     thumbnail: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600',
//     readTime: '11 min',
//     category: 'Análisis Profundo',
//     author: 'Gabriela Ortiz',
//     date: '10 Diciembre 2023'
//   },
//   {
//     id: 'marca-personal-evolucion',
//     title: 'La Evolución de mi Propia Marca Personal',
//     description: 'Un análisis honesto sobre cómo ha cambiado mi identidad profesional y las lecciones del camino.',
//     thumbnail: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600',
//     readTime: '7 min',
//     category: 'Experiencias Personales',
//     author: 'Gabriela Ortiz',
//     date: '5 Diciembre 2023'
//   }
// ] as const;

export const SERVICES = [
  {
    id: 'consultoria-imagen-personal',
    title: 'Consultoría de Imagen Personal',
    description: 'Transformación integral de tu estilo personal con enfoque consciente y auténtico.',
    icon: 'User',
    features: [
      'Análisis de estilo personal',
      'Paleta de colores personalizada',
      'Wardrobe audit completo',
      'Shopping estratégico',
      'Protocolo y etiqueta',
      'Comunicación no verbal'
    ]
  },
  {
    id: 'consultoria-marca',
    title: 'Consultoría de Marca',
    description: 'Desarrollo de identidad visual coherente para emprendedores y empresas.',
    icon: 'Briefcase',
    features: [
      'Estrategia de marca personal',
      'Identidad visual corporativa',
      'Comunicación coherente',
      'Posicionamiento estratégico',
      'Manual de marca',
      'Implementación integral'
    ]
  },
  {
    id: 'charlas-capacitaciones',
    title: 'Charlas y Capacitaciones',
    description: 'Formación especializada en imagen, protocolo y desarrollo personal.',
    icon: 'Users',
    features: [
      'Talleres de imagen personal',
      'Capacitación empresarial',
      'Conferencias magistrales',
      'Protocolo y etiqueta',
      'Desarrollo de soft skills',
      'Programas personalizados'
    ]
  },
  {
    id: 'colaboraciones',
    title: 'Colaboraciones',
    description: 'Proyectos creativos y alianzas estratégicas con marcas y profesionales.',
    icon: 'Camera',
    features: [
      'Styling para marcas',
      'Producciones editoriales',
      'Campañas publicitarias',
      'Eventos especiales',
      'Partnerships estratégicos',
      'Proyectos creativos'
    ]
  }
] as const;

export const VLOG_VIDEOS = [
  {
    id: 'moda-sostenible-guia',
    title: '"No inviertas en ropa, invierte en tu cuerpo" ',
    description: 'Cómo sentirte increíble con los que llevas puesto.',
    link: 'https://www.instagram.com/p/DI4Zz1XOyJM/',
    thumbnail: '/blog/blog2.png',
    duration: '00:53',
    category: 'Moda Sostenible'
  },
  {
    id: 'marcas-locales-spotlight',
    title: 'Revelando los Secretos de tu Diseñadora Favorita',
    description: 'Todo lo que debes saber para hacer una compra consciente.',
    link: 'https://www.instagram.com/p/DM77uY1uwY1/',
    thumbnail: '/blog/blog3.png',
    duration: '00:38',
    category: 'Guía de Compra'
  },
  {
    id: 'basicos-armario-guia',
    title: 'Básicos de Armario: Guía de versatilidad',
    description: 'Cómo transformar tu look de office en un outfit funcional y atemporal.',
    link: 'https://www.instagram.com/p/DJh_xB6tPSM/',
    thumbnail: 'blog/blog5.png',
    duration: '1:10',
    category: 'Guía de Compra'
  },
  {
    id: 'estilo-personal-metodologia',
    title: '¿DESINTERÉS O MIEDO?',
    description: '¡El reto más grande de mi trabajo como consultora de imagen sigue siendo generarte la confianza de conocerte a ti mismo!.',
    link: 'https://www.instagram.com/p/DNgRBXJuEB5/',
    thumbnail: '/blog/blog4.png',
    duration: '00:55',
    category: 'Educación de Estilo'
  }
] as const;

export const CLOSET_ALGORITHM_STEPS = [
  {
    step: 1,
    title: 'Análisis Personal',
    description: 'Evaluamos tu estilo de vida, personalidad y objetivos estéticos.',
    icon: 'Search',
    color: '#524334'
  },
  {
    step: 2,
    title: 'Auditoría de Guardarropa',
    description: 'Revisión completa de tu closet actual identificando piezas clave.',
    icon: 'Eye',
    color: '#565021'
  },
  {
    step: 3,
    title: 'Paleta de Colores',
    description: 'Definimos tu paleta personal basada en tu tono de piel y preferencias.',
    icon: 'Palette',
    color: '#8B8D79'
  },
  {
    step: 4,
    title: 'Cápsula Estratégica',
    description: 'Creamos combinaciones versátiles que maximizan tu guardarropa.',
    icon: 'Layers',
    color: '#4D1A09'
  },
  {
    step: 5,
    title: 'Plan de Compras',
    description: 'Lista priorizada de piezas que completarán tu estilo ideal.',
    icon: 'ShoppingBag',
    color: '#CBB186'
  }
] as const;