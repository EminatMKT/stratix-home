import type { LocalizedString } from './i18n'

const L = (en: string, es: string): LocalizedString => ({ en, es })

export type RawClient = {
  name: string // proper noun — same in both languages
  color: string
  tag: LocalizedString
  result: LocalizedString
}

export const CLIENTS_RAW: RawClient[] = [
  {
    name: 'EMC Medical Center',
    color: '#0EA5E9',
    tag: L('Healthcare · Aesthetics', 'Salud · Estética'),
    result: L(
      'Positioned as the go-to medical reference in Guayaquil.',
      'Posicionamiento como centro médico de referencia en Guayaquil.',
    ),
  },
  {
    name: 'Soy Vivi Negrete',
    color: '#EC4899',
    tag: L('Personal Branding', 'Personal Branding'),
    result: L(
      'A premium personal brand with an active, engaged community.',
      'Marca personal con audiencia premium y comunidad activa.',
    ),
  },
  {
    name: 'Eminat Research Group',
    color: '#8B5CF6',
    tag: L('Research · Insights', 'Investigación · Insights'),
    result: L(
      'B2B corporate identity built for market research.',
      'Identidad corporativa B2B para investigación de mercado.',
    ),
  },
  {
    name: 'Vivi Negrete Foundation',
    color: '#F97316',
    tag: L('Foundation · NGO', 'Fundación · ONG'),
    result: L(
      'Digital platform and campaigns built for social impact.',
      'Plataforma digital y campañas para impacto social.',
    ),
  },
  {
    name: 'Premier by Eminat',
    color: '#10B981',
    tag: L('Professional services', 'Servicios profesionales'),
    result: L(
      'B2B lead generation through paid campaigns and LinkedIn.',
      'Generación de leads B2B con campañas paid + LinkedIn.',
    ),
  },
  {
    name: 'Ornella AI',
    color: '#EF4444',
    tag: L('Technology · AI', 'Tecnología · IA'),
    result: L(
      'SaaS product with a sharp brand narrative and global positioning.',
      'Producto SaaS con narrativa de marca y posicionamiento global.',
    ),
  },
  {
    name: 'Eminat Mentor',
    color: '#F59E0B',
    tag: L('Executive education', 'Educación ejecutiva'),
    result: L(
      'Mentoring program with a premium acquisition funnel.',
      'Programa de mentoring con embudo de captación premium.',
    ),
  },
]
