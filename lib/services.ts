import type { LocalizedString } from './i18n'

const L = (en: string, es: string): LocalizedString => ({ en, es })

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

export type RawService = {
  slug: string
  iconKey: ServiceIconKey
  title: LocalizedString
  short: LocalizedString
  description: LocalizedString
  includes: LocalizedString[]
}

export const SERVICES_RAW: RawService[] = [
  {
    slug: 'estrategia-de-marca',
    iconKey: 'brand',
    title: L('Brand strategy', 'Estrategia de marca'),
    short: L(
      'Positioning, narrative and value prop built around business outcomes.',
      'Posicionamiento, narrativa y propuesta de valor con foco en negocio.',
    ),
    description: L(
      'We build the strategic foundation of your brand — who you are, what you offer, who you serve, and why they pick you over everyone else.',
      'Construimos la base estratégica de tu marca: quién eres, qué ofreces, a quién hablas y por qué te eligen sobre la competencia.',
    ),
    includes: [
      L('Brand audit and competitive benchmark', 'Auditoría de marca y benchmark competitivo'),
      L('Target audience and buyer personas', 'Definición de público objetivo y buyer persona'),
      L('Differentiated value proposition', 'Propuesta de valor diferenciada'),
      L('Brand architecture and tone of voice', 'Arquitectura de marca y tono de voz'),
      L('Key messaging guide by channel', 'Guía de mensajes clave por canal'),
    ],
  },
  {
    slug: 'marketing-digital',
    iconKey: 'digital',
    title: L('Digital Marketing', 'Marketing Digital'),
    short: L(
      '360° strategy across every digital channel — from presence to conversion.',
      'Estrategia 360° de presencia y conversión en canales digitales.',
    ),
    description: L(
      'We orchestrate content, performance media and CRM so every channel drives qualified traffic and real sales opportunities.',
      'Orquestamos contenido, performance y CRM para que cada canal aporte tráfico calificado y oportunidades reales de venta.',
    ),
    includes: [
      L('Monthly editorial plan', 'Plan editorial mensual'),
      L('Social media management', 'Gestión de redes sociales'),
      L('Email marketing and automation', 'Email marketing y automatización'),
      L('Monthly reports with insights', 'Reportes mensuales con insights'),
      L('Continuous, data-driven optimization', 'Optimización continua basada en datos'),
    ],
  },
  {
    slug: 'linkedin-personal-branding',
    iconKey: 'linkedin',
    title: L('LinkedIn & Personal Branding', 'LinkedIn & Personal Branding'),
    short: L(
      'Executive positioning for CEOs, founders and key professionals.',
      'Posicionamiento ejecutivo para CEOs, fundadores y profesionales clave.',
    ),
    description: L(
      'We turn your leaders into industry voices with a content system built to grow authority and network.',
      'Convertimos a tus líderes en referentes de industria con un sistema de contenido pensado para construir autoridad y red.',
    ),
    includes: [
      L('Profile and audience diagnosis', 'Diagnóstico de perfil y audiencia'),
      L('Editorial and executive tone strategy', 'Estrategia editorial y de tono ejecutivo'),
      L('Weekly content production', 'Producción de contenido semanal'),
      L('Strategic engagement and networking', 'Engagement estratégico y networking'),
      L('Reputation and reach metrics', 'Métricas de reputación y alcance'),
    ],
  },
  {
    slug: 'paid-media',
    iconKey: 'paid',
    title: L('Paid Media', 'Paid Media'),
    short: L(
      'Paid campaigns across Meta, Google, TikTok and LinkedIn — focused on ROAS.',
      'Campañas pagas en Meta, Google, TikTok y LinkedIn con foco en ROAS.',
    ),
    description: L(
      'We design, run and optimize campaigns with proven playbooks to maximize return on ad spend.',
      'Diseñamos, ejecutamos y optimizamos campañas con metodologías testeadas para maximizar retorno sobre inversión publicitaria.',
    ),
    includes: [
      L('Funnel and audience strategy', 'Estrategia de funnel y audiencias'),
      L('Performance-driven creatives', 'Creatividades performance-driven'),
      L('Pixel, conversion and tracking setup', 'Setup de píxeles, conversiones y tracking'),
      L('Daily lever-by-lever optimization', 'Optimización diaria por palanca'),
      L('Reports on CPL, CAC and ROAS', 'Reportes con CPL, CAC y ROAS'),
    ],
  },
  {
    slug: 'diseno-branding',
    iconKey: 'design',
    title: L('Design & Branding', 'Diseño & Branding'),
    short: L(
      "Visual identity that's coherent, scalable and strategic.",
      'Identidad visual coherente, escalable y estratégica.',
    ),
    description: L(
      'We design full visual systems that signal quality, set you apart and flex across every brand touchpoint.',
      'Creamos sistemas visuales completos que comunican calidad, diferencian y se adaptan a todo punto de contacto de la marca.',
    ),
    includes: [
      L('Visual identity: logo, color, typography', 'Identidad visual: logo, color, tipografía'),
      L('Graphic system and templates', 'Sistema gráfico y plantillas'),
      L('Professional brand book', 'Brandbook profesional'),
      L('Print and digital applications', 'Aplicaciones impresas y digitales'),
      L('Campaign assets', 'Material de campaña'),
    ],
  },
  {
    slug: 'motion-graphics-animation',
    iconKey: 'motion',
    title: L('Motion Graphics & Animation', 'Motion Graphics & Animation'),
    short: L(
      'Video and motion that grab attention and land your message fast.',
      'Video y animación que captan la atención y comunican rápido.',
    ),
    description: L(
      'We produce motion pieces for social, ads and brand storytelling — at the level of a global studio.',
      'Producimos piezas en movimiento para redes, anuncios y storytelling de marca con calidad de estudio internacional.',
    ),
    includes: [
      L('Reels and social videos', 'Reels y videos para redes'),
      L('2D animation / motion design', 'Animaciones 2D / motion design'),
      L('Explainers and animated infographics', 'Explainers e infografías animadas'),
      L('Scripted editing with subtitles', 'Edición con guion y subtítulos'),
      L('Format and channel adaptations', 'Adaptaciones por formato y canal'),
    ],
  },
  {
    slug: 'seo-content',
    iconKey: 'seo',
    title: L('SEO & Content', 'SEO & Content'),
    short: L(
      'Content that ranks organically and pulls in qualified demand.',
      'Contenido que posiciona orgánicamente y atrae demanda calificada.',
    ),
    description: L(
      'Long-term SEO content strategy — keyword research, authority clusters and technical optimization.',
      'Estrategia de contenido SEO de largo plazo: investigación de keywords, clusters de autoridad y mejora técnica del sitio.',
    ),
    includes: [
      L('Keyword and competitor research', 'Investigación de keywords y competencia'),
      L('Technical SEO audit', 'Auditoría SEO técnica'),
      L('Content clusters and blog', 'Clusters de contenido y blog'),
      L('On-page optimization', 'Optimización on-page'),
      L('Ranking reports', 'Reportes de posicionamiento'),
    ],
  },
  {
    slug: 'web-design-development',
    iconKey: 'web',
    title: L('Web Design & Development', 'Web Design & Development'),
    short: L(
      'Websites that are fast, beautiful and built to convert.',
      'Sitios web rápidos, hermosos y orientados a conversión.',
    ),
    description: L(
      'We design and build sites, landings and platforms on a modern stack — Next.js, Tailwind, Vercel.',
      'Diseñamos y desarrollamos sitios institucionales, landings y plataformas con stack moderno (Next.js, Tailwind, Vercel).',
    ),
    includes: [
      L('Custom UX/UI', 'UX/UI personalizado'),
      L('Next.js + Tailwind development', 'Desarrollo en Next.js + Tailwind'),
      L('Core Web Vitals optimization', 'Optimización Core Web Vitals'),
      L('CMS and content management', 'CMS y gestión de contenido'),
      L('Hosting and maintenance', 'Hosting y mantenimiento'),
    ],
  },
  {
    slug: 'btl-eventos',
    iconKey: 'btl',
    title: L('BTL & Events', 'BTL & Eventos'),
    short: L(
      'In-person activations and brand experiences that stick.',
      'Activaciones físicas y experiencias de marca memorables.',
    ),
    description: L(
      'We produce events, activations and experiences that connect people with your brand in the real world.',
      'Producimos eventos, activaciones y experiencias que conectan al público con tu marca en el mundo real.',
    ),
    includes: [
      L('Creative concept development', 'Conceptualización creativa'),
      L('Event production and logistics', 'Producción y logística de eventos'),
      L('BTL activations', 'Activaciones BTL'),
      L('Stands and POP materials', 'Stands y materiales POP'),
      L('Event audiovisual coverage', 'Cobertura audiovisual del evento'),
    ],
  },
  {
    slug: 'data-insights',
    iconKey: 'data',
    title: L('Data & Insights', 'Data & Insights'),
    short: L(
      'Marketing decisions driven by data — not guesswork.',
      'Decisiones de marketing basadas en datos, no en intuición.',
    ),
    description: L(
      'We set up analytics, dashboards and measurement processes so every decision is backed by numbers.',
      'Implementamos analítica, dashboards y procesos de medición para que cada decisión tenga sustento cuantitativo.',
    ),
    includes: [
      L('GA4, GTM and advanced tracking setup', 'Setup GA4, GTM y tracking avanzado'),
      L('Looker Studio dashboards', 'Dashboards en Looker Studio'),
      L('KPIs and measurement framework', 'KPIs y framework de medición'),
      L('A/B testing and experimentation', 'A/B testing y experimentación'),
      L('Monthly executive reports', 'Reportes ejecutivos mensuales'),
    ],
  },
  {
    slug: 'stratix-solutions',
    iconKey: 'stratix',
    title: L('Stratix Solutions (CRM/ERP)', 'Stratix Solutions (CRM/ERP)'),
    short: L(
      'Our in-house platform for sales, marketing and operations.',
      'Plataforma propia de gestión comercial, marketing y operaciones.',
    ),
    description: L(
      'Our integrated system connects marketing, sales and ops into a single source of truth for your business.',
      'Nuestro sistema integrado conecta marketing, ventas y operaciones en una sola fuente de verdad para tu negocio.',
    ),
    includes: [
      L('CRM with configurable pipeline', 'CRM con pipeline configurable'),
      L('Marketing and campaigns module', 'Módulo de marketing y campañas'),
      L('Billing and accounting', 'Facturación y contabilidad'),
      L('Real-time reporting', 'Reportes en tiempo real'),
      L('Onboarding and implementation', 'Onboarding e implementación'),
    ],
  },
]

// Server-safe helpers (do not need locale).
export function getServiceRaw(slug: string): RawService | undefined {
  return SERVICES_RAW.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return SERVICES_RAW.map((s) => s.slug)
}
