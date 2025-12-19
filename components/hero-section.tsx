import { portfolioData } from "@/lib/data"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center py-20">
      <div className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// hello, world</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            {portfolioData.fullName}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-10 h-px bg-accent" />
          <p className="font-mono text-sm text-primary">Full Stack Developer</p>
        </div>

        <p className="text-muted-foreground max-w-lg leading-relaxed text-base">
          Building reliable web systems with a focus on clean architecture, performance, and developer experience. Based
          in {portfolioData.location}.
        </p>

        <div className="flex items-center gap-5 pt-4">
          <a
            href={`https://github.com/${portfolioData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            github
          </a>
          <span className="text-border">·</span>
          <a
            href={`https://linkedin.com/in/${portfolioData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
