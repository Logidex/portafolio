export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'AutomarketRD',
    description:
      'Marketplace automotriz para conectar compradores, vendedores y dealers en Republica Dominicana. Backend en .NET 10 con Clean Architecture y frontend en React + TypeScript.',
    tags: ['.NET 10', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'PayPal'],
    github: 'https://github.com/Logidex/AutomarketRD',
    highlights: [
      'Arquitectura por capas (API, Application, Core, Infrastructure)',
      'Autenticacion JWT en cookie HttpOnly',
      'Pagos integrados con PayPal (webhook verificado)',
      '373 tests automatizados (340 backend + 33 frontend)',
      'Docker Compose para dev, staging y produccion',
      'Tema claro/oscuro y responsive',
    ],
  },
  {
    title: 'Parking OS',
    description:
      'Sistema de gestion de estacionamiento con autenticacion JWT, control de espacios, generacion de tickets y reportes de transacciones.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'JWT'],
    github: 'https://github.com/Logidex/parking-OS',
    highlights: [
      'Autenticacion con JWT',
      'Gestion de vehiculos y espacios',
      'Generacion de tickets',
      'Historial de transacciones',
      'Reportes y estadisticas',
    ],
  },
]
