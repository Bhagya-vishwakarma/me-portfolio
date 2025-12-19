import { portfolioData } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// reach out</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Contact</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 max-w-xl">
          <a
            href={`mailto:${portfolioData.email}`}
            className="group flex items-center gap-4 p-5 border border-border rounded-sm hover:border-accent/50 hover:bg-secondary transition-all duration-200"
          >
            <span className="font-mono text-xs text-muted-foreground">email</span>
            <span className="text-sm text-accent group-hover:underline underline-offset-4 transition-all duration-200 truncate">
              {portfolioData.email}
            </span>
          </a>

          <a
            href={`https://github.com/${portfolioData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border border-border rounded-sm hover:border-accent/50 hover:bg-secondary transition-all duration-200"
          >
            <span className="font-mono text-xs text-muted-foreground">github</span>
            <span className="text-sm text-accent group-hover:underline underline-offset-4 transition-all duration-200">
              {portfolioData.github}
            </span>
          </a>

          <a
            href={`https://linkedin.com/in/${portfolioData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border border-border rounded-sm hover:border-accent/50 hover:bg-secondary transition-all duration-200"
          >
            <span className="font-mono text-xs text-muted-foreground">linkedin</span>
            <span className="text-sm text-accent group-hover:underline underline-offset-4 transition-all duration-200">
              view profile
            </span>
          </a>

          <a
            href={`tel:${portfolioData.phone}`}
            className="group flex items-center gap-4 p-5 border border-border rounded-sm hover:border-accent/50 hover:bg-secondary transition-all duration-200"
          >
            <span className="font-mono text-xs text-muted-foreground">phone</span>
            <span className="text-sm text-accent group-hover:underline underline-offset-4 transition-all duration-200">
              {portfolioData.phone}
            </span>
          </a>
        </div>

        <div className="pt-10 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} {portfolioData.fullName}
          </p>
        </div>
      </div>
    </section>
  )
}
