import { skillCategories } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="habilidades" className="py-20 px-4">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl font-bold text-center mb-16">
          Mis <span className="text-primary">habilidades</span>
        </h2>
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-text-muted mb-4 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    className="bg-surface border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group cursor-default"
                    style={{ transitionDelay: `${(catIdx * 5 + skillIdx) * 30}ms` }}
                  >
                    <span className="text-2xl block mb-2">{skill.icon}</span>
                    <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-text-muted">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
