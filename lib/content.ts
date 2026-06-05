import type { LocalizedString } from './i18n'

// Helper — keeps content-file readability high.
const L = (en: string, es: string): LocalizedString => ({ en, es })

export const COPY_RAW = {
  brand: 'Stratix',
  nav: {
    services: L('Services', 'Servicios'),
    clients: L('Clients', 'Clientes'),
    about: L('About', 'Nosotros'),
    contact: L('Contact', 'Contacto'),
    pricing: L('Pricing', 'Precios'),
    bookCta: L('Book a strategy call', 'Agenda una evaluación'),
    systemCta: L('Sign in', 'Acceder al sistema'),
    openMenu: L('Open menu', 'Abrir menú'),
    closeMenu: L('Close menu', 'Cerrar menú'),
  },
  hero: {
    eyebrow: L(
      'Full-service agency · Integrated marketing',
      'Agencia full-service · Marketing integrado',
    ),
    title: L(
      'Your full marketing team, built into how you grow.',
      'Tu equipo de marketing completo, integrado a tu negocio.',
    ),
    subtitle: L(
      'Strategy, paid media, design, web, SEO, AI and more — one dedicated creative team driving your growth.',
      'Estrategia, Paid Media, Diseño, Web, SEO, IA y más — bajo un solo equipo creativo dedicado a hacer crecer tu marca.',
    ),
    primary: L('Book a strategy call', 'Agenda una evaluación'),
    secondary: L('See services', 'Ver servicios'),
    trust: L(
      'Built in Ecuador · Based in Miami · World-class output',
      'Talento Ecuador · Presencia Miami · Calidad internacional',
    ),
  },
  servicesGrid: {
    eyebrow: L('Services', 'Servicios'),
    titlePre: L('11 integrated services', '11 servicios integrados'),
    titleHi: L('under one team', 'bajo un solo equipo'),
    sub: L(
      "Think of us as your external marketing department — strategy, creative, paid, web, data and tech, all in one place.",
      'Trabajamos como tu departamento de marketing externo: estrategia, creatividad, paid, web, datos y tecnología en un solo lugar.',
    ),
    cardCta: L('Learn more', 'Ver más'),
  },
  valueProp: {
    eyebrow: L('Why Stratix', 'Por qué Stratix'),
    title: L(
      'Five reasons serious brands choose us',
      'Cinco razones por las que marcas serias confían en nosotros',
    ),
    pillars: [
      {
        title: L('Ecuador-built talent', 'Talento Ecuador'),
        desc: L(
          "A creative and strategic team trained at the country's top agencies.",
          'Equipo creativo y estratégico formado en las mejores agencias del país.',
        ),
      },
      {
        title: L('Miami footprint', 'Presencia Miami'),
        desc: L(
          'Bicontinental ops serving US and LATAM accounts.',
          'Operación bicontinental con cuentas en Estados Unidos y LATAM.',
        ),
      },
      {
        title: L('World-class output', 'Calidad internacional'),
        desc: L(
          'Production standards and processes that hold up next to global agencies.',
          'Estándares de producción y procesos al nivel de agencias globales.',
        ),
      },
      {
        title: L('Fair regional pricing', 'Precio justo por región'),
        desc: L(
          'A cost structure tuned to deliver value without inflated rates.',
          'Estructura de costos optimizada que entrega valor sin sobrecostos.',
        ),
      },
      {
        title: L('A dedicated creative team', 'Equipo creativo dedicado'),
        desc: L(
          "We don't subcontract — one team lives your brand every day.",
          'No tercerizamos: un equipo asignado vive tu marca día a día.',
        ),
      },
    ],
  },
  clients: {
    eyebrow: L('Holding brands', 'Marcas del holding'),
    title: L('Results that speak for us', 'Resultados que hablan por nosotros'),
    subtitle: L(
      'We work with brands inside the Eminat holding and with external clients across healthcare, tech, retail and professional services.',
      'Trabajamos con marcas del holding Eminat y con clientes externos en salud, tecnología, retail y servicios profesionales.',
    ),
  },
  process: {
    eyebrow: L('How we work', 'Cómo trabajamos'),
    title: L('A clear four-step process', 'Un proceso claro de cuatro pasos'),
    steps: [
      {
        n: '01',
        title: L('Diagnose', 'Diagnóstico'),
        desc: L(
          'We audit brand, channels, data and competition to find the real starting point.',
          'Auditamos marca, canales, datos y competencia para entender el punto de partida.',
        ),
      },
      {
        n: '02',
        title: L('Strategize', 'Estrategia'),
        desc: L(
          'We set goals, audiences, narrative and channel mix with clear KPIs.',
          'Definimos objetivos, audiencias, narrativa y plan de canales con KPIs claros.',
        ),
      },
      {
        n: '03',
        title: L('Produce', 'Producción'),
        desc: L(
          'We execute content, campaigns, design and dev at world-class standards.',
          'Ejecutamos contenido, campañas, diseño y desarrollo con calidad internacional.',
        ),
      },
      {
        n: '04',
        title: L('Deliver results', 'Resultados'),
        desc: L(
          'We measure, report and optimize every month with business outcomes in focus.',
          'Medimos, reportamos y optimizamos cada mes con foco en negocio.',
        ),
      },
    ],
  },
  stats: {
    items: [
      { value: 284, suffix: '+', label: L('Projects delivered', 'Proyectos entregados') },
      { value: 11, suffix: '', label: L('Integrated services', 'Servicios integrados') },
      { value: 7, suffix: '', label: L('Holding brands', 'Marcas del holding') },
      { value: 2, suffix: '', label: L('Countries of operation', 'Países de operación') },
    ],
  },
  cta: {
    eyebrowLeft: L("Let's talk", 'Hablemos'),
    title: L('Ready to grow?', '¿Listo para crecer?'),
    subtitle: L(
      "Tell us about your brand. In 30 minutes we'll give you a diagnosis and a plan for next steps — no strings attached.",
      'Cuéntanos sobre tu marca. En 30 minutos te damos un diagnóstico y un plan de siguientes pasos, sin compromiso.',
    ),
    formHeading: L('Tell us about your brand', 'Cuéntanos sobre tu marca'),
    name: L('Full name', 'Nombre completo'),
    namePlaceholder: L('Your name', 'Tu nombre'),
    email: L('Work email', 'Email corporativo'),
    emailPlaceholder: L('you@company.com', 'tucorreo@empresa.com'),
    phone: L('Phone', 'Teléfono'),
    phonePlaceholder: L('+1 (954) 374-7547', '+1 (954) 374-7547'),
    message: L('Tell us about your project', 'Cuéntanos sobre tu proyecto'),
    messagePlaceholder: L(
      'What do you need to solve in your marketing?',
      '¿Qué necesitas resolver con tu marketing?',
    ),
    submit: L('Send message', 'Enviar mensaje'),
    sending: L('Sending…', 'Enviando…'),
    sent: L('Got it!', '¡Recibido!'),
    successMsg: L(
      "Thanks — you'll hear back within 24 hours.",
      'Gracias. Te respondemos en menos de 24 horas.',
    ),
    errorMsg: L(
      'Something went wrong. Email us directly at',
      'Ocurrió un error. Escríbenos directo a',
    ),
    bullets: [
      L('Free strategy diagnosis', 'Diagnóstico estratégico gratuito'),
      L('Next-step action plan', 'Plan de siguientes pasos'),
      L('No cost, no commitment', 'Sin compromiso ni costo'),
    ],
  },
  footer: {
    tagline: L(
      'Integrated marketing for brands that want to grow on strategy, design and data.',
      'Marketing integrado para marcas que quieren crecer con estrategia, diseño y datos.',
    ),
    colServices: L('Services', 'Servicios'),
    colCompany: L('Company', 'Empresa'),
    colHolding: L('Holding brands', 'Marcas del holding'),
    colContact: L('Contact', 'Contacto'),
    privacy: L('Privacy', 'Privacidad'),
    terms: L('Terms', 'Términos'),
    poweredBy: 'Powered by Eminat Holding · 2026',
    viewAll: L('See all', 'Ver todos'),
    offices: {
      gye: {
        city: L('Guayaquil, Ecuador', 'Guayaquil, Ecuador'),
        line: L('Av. del Bombero Km 6.5', 'Av. del Bombero Km 6.5'),
      },
      mia: {
        city: L('Miami, Florida', 'Miami, Florida'),
        line: L(
          '14601 SW 29th Street, Suite 108, Miramar, FL 33027',
          '14601 SW 29th Street, Suite 108, Miramar, FL 33027',
        ),
      },
    },
    email: 'marketing@eminat.net',
    phone: '+1 (954) 374-7547',
    linkedin: 'https://www.linkedin.com/company/stratix-communications/',
  },
  pages: {
    services: {
      metaTitle: L('Services', 'Servicios'),
      metaDescription: L(
        '11 integrated services across marketing, design, web, data and tech.',
        '11 servicios integrados de marketing, diseño, web, datos y tecnología.',
      ),
      eyebrow: L('Services', 'Servicios'),
      h1Pre: L('A full marketing team,', 'Un equipo de marketing completo,'),
      h1Hi: L('tailored to you.', 'a tu medida.'),
      sub: L(
        'Each service stands on its own or plugs into the full system. You pick which pieces to turn on based on where your brand is.',
        'Cada servicio funciona solo o integrado al sistema completo. Tú eliges qué piezas activar según el momento de tu marca.',
      ),
      cardCta: L('View details', 'Ver detalle'),
    },
    serviceDetail: {
      back: L('← All services', '← Todos los servicios'),
      includesTag: L("What's included", 'Qué incluye'),
      includesTitle: L(
        'A complete system, not a loose set of pieces',
        'Un sistema completo, no piezas sueltas',
      ),
      includesIntroPre: L('We deliver', 'Implementamos'),
      includesIntroPost: L(
        ' through a proven process, with clear deliverables and month-over-month metrics.',
        ' bajo un proceso probado, con entregables claros y métricas mes a mes.',
      ),
      related: L('Related services', 'Servicios relacionados'),
      cta1: L('Book a strategy call', 'Agenda una evaluación'),
      cta2: L('See other services', 'Ver otros servicios'),
      notFound: L('Service not found', 'Servicio no encontrado'),
    },
    clientesPage: {
      metaTitle: L('Clients', 'Clientes'),
      metaDescription: L(
        'Eminat holding brands and external clients that trust Stratix.',
        'Marcas del holding Eminat y clientes externos que confían en Stratix.',
      ),
      eyebrow: L('Clients', 'Clientes'),
      h1Pre: L('Brands that', 'Marcas que'),
      h1Hi: L('grow with us.', 'crecen con nosotros.'),
      sub: L(
        'We work for Eminat holding brands and external clients across healthcare, tech, education and professional services in LATAM and the US.',
        'Trabajamos para marcas del holding Eminat y para clientes externos en salud, tecnología, educación y servicios profesionales en LATAM y EE.UU.',
      ),
    },
    nosotros: {
      metaTitle: L('About', 'Nosotros'),
      metaDescription: L(
        'Who we are — an agency with Ecuador talent and Miami presence.',
        'Quiénes somos: agencia con talento Ecuador y presencia Miami.',
      ),
      eyebrow: L('About', 'Nosotros'),
      h1Pre: L("We're a marketing team built on", 'Somos un equipo de marketing'),
      h1Hi: L('creativity and strategy', 'creativo y estratégico'),
      sub: L(
        'Stratix is part of the Eminat holding, with one clear goal: deliver integrated marketing at world-class standards — built in Ecuador, run between Guayaquil and Miami.',
        'Stratix nace dentro de Eminat Holding con un objetivo claro: ofrecer marketing integrado de calidad internacional con talento ecuatoriano y operación bicontinental entre Guayaquil y Miami.',
      ),
      imageAlt: L('The Stratix team', 'Equipo Stratix'),
    },
    contacto: {
      metaTitle: L('Contact', 'Contacto'),
      metaDescription: L(
        "Let's talk. Offices in Miami and Guayaquil.",
        'Conversemos. Oficinas en Miami y Guayaquil.',
      ),
      eyebrow: L('Contact', 'Contacto'),
      h1Pre: L("Let's talk about your brand.", 'Hablemos sobre tu marca.'),
      h1Hi: L('We reply within 24h.', 'Te respondemos en 24h.'),
      mapMiami: L(
        'Stratix Miami — 14601 SW 29th St, Miramar FL 33027',
        'Stratix Miami — 14601 SW 29th St, Miramar FL 33027',
      ),
      mapGye: L(
        'Stratix Guayaquil — Av. del Bombero Km 6.5',
        'Stratix Guayaquil — Av. del Bombero Km 6.5',
      ),
    },
    precios: {
      metaTitle: L('Pricing', 'Precios'),
      metaDescription: L(
        'Stratix plans and rates — coming soon.',
        'Planes y tarifas Stratix — próximamente.',
      ),
      eyebrow: L('Pricing', 'Precios'),
      h1: L(
        "We're putting together our public pricing.",
        'Estamos preparando nuestro tarifario público.',
      ),
      sub: L(
        "In the meantime, we'll send you a tailored proposal based on your brand's scope. Most plans start with monthly retainers or one-off projects.",
        'Mientras tanto, podemos enviarte una propuesta personalizada según el alcance de tu marca. La mayoría de planes parten desde paquetes mensuales o proyectos puntuales.',
      ),
      cta1: L('Request a proposal', 'Solicitar propuesta'),
      cta2: L('See services', 'Ver servicios'),
    },
  },
} as const

