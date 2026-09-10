export interface Skill {
  name: string
  icon: string
  level: 'Avanzado' | 'Intermedio' | 'Básico'
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes',
    skills: [
      { name: 'C#', icon: '🔷', level: 'Avanzado' },
      { name: 'JavaScript', icon: '⚡', level: 'Intermedio' },
      { name: 'TypeScript', icon: '🔷', level: 'Intermedio' },
      { name: 'Python', icon: '🐍', level: 'Intermedio' },
      { name: 'Java', icon: '☕', level: 'Básico' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', level: 'Intermedio' },
      { name: 'Vite', icon: '⚡', level: 'Intermedio' },
      { name: 'Tailwind CSS', icon: '🎨', level: 'Intermedio' },
      { name: 'React Router', icon: '🧭', level: 'Intermedio' },
      { name: 'HTML5', icon: '🌐', level: 'Avanzado' },
      { name: 'CSS3', icon: '🎨', level: 'Avanzado' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: '.NET 10', icon: '🔷', level: 'Avanzado' },
      { name: 'Entity Framework', icon: '🗄️', level: 'Intermedio' },
      { name: 'Flask', icon: '🐍', level: 'Intermedio' },
      { name: 'SQLAlchemy', icon: '🗄️', level: 'Intermedio' },
      { name: 'Node.js', icon: '🟢', level: 'Básico' },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', level: 'Intermedio' },
      { name: 'SQL Server', icon: '🗄️', level: 'Intermedio' },
      { name: 'MySQL', icon: '🐬', level: 'Básico' },
      { name: 'SQLite', icon: '📦', level: 'Intermedio' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: '🐳', level: 'Intermedio' },
      { name: 'Git', icon: '📦', level: 'Intermedio' },
      { name: 'GitHub Actions', icon: '⚙️', level: 'Básico' },
      { name: 'Render', icon: '☁️', level: 'Básico' },
    ],
  },
  {
    title: 'Servicios',
    skills: [
      { name: 'AWS S3', icon: '☁️', level: 'Intermedio' },
      { name: 'PayPal API', icon: '💳', level: 'Intermedio' },
      { name: 'Firebase', icon: '🔥', level: 'Básico' },
      { name: 'JWT', icon: '🔑', level: 'Intermedio' },
    ],
  },
]
