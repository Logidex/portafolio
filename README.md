# Portafolio - Erick Lopez

Portafolio personal de Erick Hipolito Lopez Genao, desarrollador full-stack.

## Tecnologias

- **Frontend:** React 19, TypeScript, Tailwind CSS v4
- **Build:** Vite 8
- **Deploy:** Cloudflare Pages

## Estructura del proyecto

```
src/
├── assets/          # Imagenes y archivos estaticos
├── components/      # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── AnimatedBackground.tsx
│   └── SectionDivider.tsx
├── data/            # Datos de proyectos y habilidades
├── hooks/           # Custom hooks
├── App.tsx
├── main.tsx
└── index.css
```

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

Los archivos estaticos se generan en la carpeta `dist/`.

## Despliegue

El proyecto se despliega automaticamente en Cloudflare Pages cada vez que se hace push a `main`.

URL: `https://tu-proyecto.pages.dev`
