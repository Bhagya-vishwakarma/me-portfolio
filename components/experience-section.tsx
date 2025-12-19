import { portfolioData } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// experience</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Work</h2>
        </div>

        <div className="space-y-10">
          {portfolioData.experience.map((exp, index) => (
            <article key={`${exp.company}-${index}`} className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-[-6px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-medium text-foreground">{exp.position}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
