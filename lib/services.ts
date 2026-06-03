export type Service = {
  slug: string
  title: string
  short: string
  description: string
  includes: string[]
  iconKey: ServiceIconKey
}

export type ServiceIconKey =
  | 'brand'
  | 'digital'
  | 'linkedin'
  | 'paid'
  | 'design'
  | 'motion'
  | 'seo'
  | 'web'
  | 'btl'
  | 'data'
  | 'stratix'

export const SERVICES: Service[] = [
  {
    slug: 'estrategia-de-marca',
    title: 'Estrategia de marca',
    short: 'Posicionamiento, narrativa y propuesta de valor con foco en negocio.',
    description:
      'Construimos la base estratégica de tu marca: quién eres, qué ofreces, a quién hablas y por qué te eligen sobre la competencia.',
    includes: [
      'Auditoría de marca y benchmark competitivo',
      'Definición de público objetivo y buyer persona',
      'Propuesta de valor diferenciada',
      'Arquitectura de marca y tono de voz',
      'Guía de mensajes clave por canal',
    ],
    iconKey: 'brand',
  },
  {
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    short: 'Estrategia 360° de presencia y conversión en canales digitales.',
    description:
      'Orquestamos contenido, performance y CRM para que cada canal aporte tráfico calificado y oportunidades reales de venta.',
    includes: [
      'Plan editorial mensual',
      'Gestión de redes sociales',
      'Email marketing y automatización',
      'Reportes mensuales con insights',
      'Optimización continua basada en datos',
    ],
    iconKey: 'digital',
  },
  {
    slug: 'linkedin-personal-branding',
    title: 'LinkedIn & Personal Branding',
    short: 'Posicionamiento ejecutivo para CEOs, fundadores y profesionales clave.',
    description:
      'Convertimos a tus líderes en referentes de industria con un sistema de contenido pensado para construir autoridad y red.',
    includes: [
      'Diagnóstico de perfil y audiencia',
      'Estrategia editorial y de tono ejecutivo',
      'Producción de contenido semanal',
      'Engagement estratégico y networking',
      'Métricas de reputación y alcance',
    ],
    iconKey: 'linkedin',
  },
  {
    slug: 'paid-media',
    title: 'Paid Media',
    short: 'Campañas pagas en Meta, Google, TikTok y LinkedIn con foco en ROAS.',
    description:
      'Diseñamos, ejecutamos y optimizamos campañas con metodologías testeadas para maximizar retorno sobre inversión publicitaria.',
    includes: [
      'Estrategia de funnel y audiencias',
      'Creatividades performance-driven',
      'Setup de píxeles, conversiones y tracking',
      'Optimización diaria por palanca',
      'Reportes con CPL, CAC y ROAS',
    ],
    iconKey: 'paid',
  },
  {
    slug: 'diseno-branding',
    title: 'Diseño & Branding',
    short: 'Identidad visual coherente, escalable y estratégica.',
    description:
      'Creamos sistemas visuales completos que comunican calidad, diferencian y se adaptan a todo punto de contacto de la marca.',
    includes: [
      'Identidad visual: logo, color, tipografía',
      'Sistema gráfico y plantillas',
      'Brandbook profesional',
      'Aplicaciones impresas y digitales',
      'Material de campaña',
    ],
    iconKey: 'design',
  },
  {
    slug: 'motion-graphics-animation',
    title: 'Motion Graphics & Animation',
    short: 'Video y animación que captan la atención y comunican rápido.',
    description:
      'Producimos piezas en movimiento para redes, anuncios y storytelling de marca con calidad de estudio internacional.',
    includes: [
      'Reels y videos para redes',
      'Animaciones 2D / motion design',
      'Explainers e infografías animadas',
      'Edición con guion y subtítulos',
      'Adaptaciones por formato y canal',
    ],
    iconKey: 'motion',
  },
  {
    slug: 'seo-content',
    title: 'SEO & Content',
    short: 'Contenido que posiciona orgánicamente y atrae demanda calificada.',
    description:
      'Estrategia de contenido SEO de largo plazo: investigación de keywords, clusters de autoridad y mejora técnica del sitio.',
    includes: [
      'Investigación de keywords y competencia',
      'Auditoría SEO técnica',
      'Clusters de contenido y blog',
      'Optimización on-page',
      'Reportes de posicionamiento',
    ],
    iconKey: 'seo',
  },
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    short: 'Sitios web rápidos, hermosos y orientados a conversión.',
    description:
      'Diseñamos y desarrollamos sitios institucionales, landings y plataformas con stack moderno (Next.js, Tailwind, Vercel).',
    includes: [
      'UX/UI personalizado',
      'Desarrollo en Next.js + Tailwind',
      'Optimización Core Web Vitals',
      'CMS y gestión de contenido',
      'Hosting y mantenimiento',
    ],
    iconKey: 'web',
  },
  {
    slug: 'btl-eventos',
    title: 'BTL & Eventos',
    short: 'Activaciones físicas y experiencias de marca memorables.',
    description:
      'Producimos eventos, activaciones y experiencias que conectan al público con tu marca en el mundo real.',
    includes: [
      'Conceptualización creativa',
      'Producción y logística de eventos',
      'Activaciones BTL',
      'Stands y materiales POP',
      'Cobertura audiovisual del evento',
    ],
    iconKey: 'btl',
  },
  {
    slug: 'data-insights',
    title: 'Data & Insights',
    short: 'Decisiones de marketing basadas en datos, no en intuición.',
    description:
      'Implementamos analítica, dashboards y procesos de medición para que cada decisión tenga sustento cuantitativo.',
    includes: [
      'Setup GA4, GTM y tracking avanzado',
      'Dashboards en Looker Studio',
      'KPIs y framework de medición',
      'A/B testing y experimentación',
      'Reportes ejecutivos mensuales',
    ],
    iconKey: 'data',
  },
  {
    slug: 'stratix-solutions',
    title: 'Stratix Solutions (CRM/ERP)',
    short: 'Plataforma propia de gestión comercial, marketing y operaciones.',
    description:
      'Nuestro sistema integrado conecta marketing, ventas y operaciones en una sola fuente de verdad para tu negocio.',
    includes: [
      'CRM con pipeline configurable',
      'Módulo de marketing y campañas',
      'Facturación y contabilidad',
      'Reportes en tiempo real',
      'Onboarding e implementación',
    ],
    iconKey: 'stratix',
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
