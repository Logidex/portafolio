import { useScrollReveal } from '../hooks/useScrollReveal'
import mePhoto from '../assets/me.jpeg'

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="sobre-mi" className="py-20 px-4 bg-surface">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Sobre <span className="text-primary">mi</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl p-[2px] bg-gradient-to-br from-primary via-accent to-secondary">
              <img
                src={mePhoto}
                alt="Erick Lopez"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-text-muted leading-relaxed">
              Soy Erick Lopez, estudiante de Licenciatura en Informatica en la UASD
              y desarrollador full-stack. Me enfoco en backend con .NET 10 y Python,
              pero tambien construyo interfaces modernas con React y TypeScript.
            </p>
            <p className="text-text-muted leading-relaxed">
              Diseno soluciones con arquitectura limpia, bases de datos optimizadas
              y despliegue automatizado con Docker. Me gusta resolver problemas de
              forma rapida y profesional.
            </p>
            <p className="text-text-muted leading-relaxed">
              Actualmente trabajando en AutoMarketRD, un marketplace automotriz
              para el mercado dominicano.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-text-muted">Proyectos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-text-muted">Tecnologias</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">700+</p>
                <p className="text-sm text-text-muted">Commits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
