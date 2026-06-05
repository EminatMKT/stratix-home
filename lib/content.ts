// Single source of copy. Today we ship Spanish (es). When the EN version is
// ready, mirror the keys under `en` and read by locale.
export const COPY = {
  es: {
    brand: 'Stratix',
    nav: {
      services: 'Servicios',
      clients: 'Clientes',
      about: 'Nosotros',
      contact: 'Contacto',
      pricing: 'Precios',
      bookCta: 'Agenda una evaluación',
      systemCta: 'Acceder al sistema',
    },
    hero: {
      eyebrow: 'Agencia full-service · Marketing integrado',
      title: 'Tu equipo de marketing completo, integrado a tu negocio.',
      subtitle:
        'Estrategia, Paid Media, Diseño, Web, SEO, IA y más — bajo un solo equipo creativo dedicado a hacer crecer tu marca.',
      primary: 'Agenda una evaluación',
      secondary: 'Ver servicios',
      trust: 'Talento Ecuador · Presencia Miami · Calidad internacional',
    },
    valueProp: {
      eyebrow: 'Por qué Stratix',
      title: 'Cinco razones por las que marcas serias confían en nosotros',
      pillars: [
        {
          title: 'Talento Ecuador',
          desc: 'Equipo creativo y estratégico formado en las mejores agencias del país.',
        },
        {
          title: 'Presencia Miami',
          desc: 'Operación bicontinental con cuentas en Estados Unidos y LATAM.',
        },
        {
          title: 'Calidad internacional',
          desc: 'Estándares de producción y procesos al nivel de agencias globales.',
        },
        {
          title: 'Precio justo por región',
          desc: 'Estructura de costos optimizada que entrega valor sin sobrecostos.',
        },
        {
          title: 'Equipo creativo dedicado',
          desc: 'No tercerizamos: un equipo asignado vive tu marca día a día.',
        },
      ],
    },
    clients: {
      eyebrow: 'Marcas del holding',
      title: 'Resultados que hablan por nosotros',
      subtitle:
        'Trabajamos con marcas del holding Eminat y con clientes externos en salud, tecnología, retail y servicios profesionales.',
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso claro de cuatro pasos',
      steps: [
        {
          n: '01',
          title: 'Diagnóstico',
          desc: 'Auditamos marca, canales, datos y competencia para entender el punto de partida.',
        },
        {
          n: '02',
          title: 'Estrategia',
          desc: 'Definimos objetivos, audiencias, narrativa y plan de canales con KPIs claros.',
        },
        {
          n: '03',
          title: 'Producción',
          desc: 'Ejecutamos contenido, campañas, diseño y desarrollo con calidad internacional.',
        },
        {
          n: '04',
          title: 'Resultados',
          desc: 'Medimos, reportamos y optimizamos cada mes con foco en negocio.',
        },
      ],
    },
    stats: {
      items: [
        { value: 284, suffix: '+', label: 'Proyectos entregados' },
        { value: 11, suffix: '', label: 'Servicios integrados' },
        { value: 7, suffix: '', label: 'Marcas del holding' },
        { value: 2, suffix: '', label: 'Países de operación' },
      ],
    },
    cta: {
      title: '¿Listo para crecer?',
      subtitle:
        'Cuéntanos sobre tu marca. En 30 minutos te damos un diagnóstico y un plan de siguientes pasos, sin compromiso.',
      name: 'Nombre completo',
      email: 'Email corporativo',
      phone: 'Teléfono',
      message: 'Cuéntanos sobre tu proyecto',
      submit: 'Enviar mensaje',
    },
    footer: {
      tagline:
        'Marketing integrado para marcas que quieren crecer con estrategia, diseño y datos.',
      colServices: 'Servicios',
      colCompany: 'Empresa',
      colHolding: 'Marcas del holding',
      colContact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos',
      poweredBy: 'Powered by Eminat Holding · 2026',
      offices: {
        gye: { city: 'Guayaquil, Ecuador', line: 'Av. del Bombero Km 6.5' },
        mia: {
          city: 'Miami, Florida',
          line: '14601 SW 29th Street, Suite 108, Miramar, FL 33027',
        },
      },
      email: 'marketing@eminat.net',
      phone: '+1 (954) 374-7547',
      linkedin: 'https://www.linkedin.com/company/stratix-communications/',
    },
  },
} as const

export type Locale = keyof typeof COPY
export const t = COPY.es
