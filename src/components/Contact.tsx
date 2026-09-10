import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="contacto" className="py-20 px-4">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-primary">Contacto</span>
        </h2>
        <p className="text-text-muted text-center mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-bg font-medium rounded-lg hover:bg-primary/80 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
