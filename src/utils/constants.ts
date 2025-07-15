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
    title: 'Guía Completa: Moda Sostenible en Colombia',
    description: 'Todo lo que necesitas saber sobre marcas locales conscientes y materiales eco-friendly.',
    thumbnail: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '15:30',
    category: 'Moda Sostenible'
  },
  {
    id: 'marcas-locales-spotlight',
    title: 'Marcas Colombianas que Debes Conocer',
    description: 'Spotlight a diseñadores locales que están revolucionando la moda nacional.',
    thumbnail: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12:15',
    category: 'Marcas Locales'
  },
  {
    id: 'basicos-armario-guia',
    title: 'Básicos de Armario: Guía de Compra 2025',
    description: 'Las 15 piezas esenciales para construir un guardarropa funcional y atemporal.',
    thumbnail: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '18:45',
    category: 'Guías de Compra'
  },
  {
    id: 'estilo-personal-metodologia',
    title: 'Cómo Desarrollar tu Estilo Personal',
    description: 'Mi metodología paso a paso para descubrir y definir tu lenguaje visual único.',
    thumbnail: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '22:30',
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