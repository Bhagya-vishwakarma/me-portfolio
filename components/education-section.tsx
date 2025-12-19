import { portfolioData } from "@/lib/data"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// background</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Education</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.education.map((edu, index) => (
            <article key={`${edu.degree}-${index}`} className="p-6 border border-border rounded-sm space-y-4">
              <div className="space-y-1.5">
                <h3 className="font-medium text-foreground">{edu.degree}</h3>
                <p className="text-sm text-accent">{edu.school}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span>{edu.location}</span>
                <span>·</span>
                <span>{edu.graduationYear}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
