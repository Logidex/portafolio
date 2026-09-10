import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4">
      <div
        ref={ref}
        className={`text-center max-w-3xl reveal ${isVisible ? 'visible' : ''}`}
      >
        <p className="text-primary font-mono mb-4 tracking-wider">Hola, soy</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Erick Hipolito Lopez Genao
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-6 gradient-text font-bold">
          Full-Stack Developer
        </h2>
        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          Construyo aplicaciones web completas, desde APIs robustas en .NET y Python
          hasta interfaces modernas con React y TypeScript. Apasionado por crear
          soluciones escalables que resuelven problemas reales.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-primary text-bg font-medium rounded-lg hover:bg-primary/80 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-white/20 text-text rounded-lg hover:border-primary hover:text-primary transition-all hover:scale-105"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
