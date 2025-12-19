"use client"

import { useState } from "react"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// work</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Projects</h2>
        </div>

        <div className="grid gap-8">
          {portfolioData.projects.map((project) => {
            const isExpanded = expandedProject === project.name

            return (
              <article
                key={project.name}
                className={cn(
                  "group border border-border rounded-sm p-7",
                  "transition-all duration-300 ease-out",
                  "hover:border-primary/40 hover:shadow-sm",
                  "hover:translate-y-[-2px]",
                  isExpanded && "border-accent/40",
                )}
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium text-accent group-hover:underline underline-offset-4 transition-all duration-200 cursor-default">
                        {project.name}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent hover:underline underline-offset-4 transition-all duration-200 shrink-0"
                      >
                        view →
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .split(",")
                      .slice(0, 5)
                      .map((tech) => {
                        const trimmedTech = tech.trim()
                        if (!trimmedTech) return null
                        return (
                          <span
                            key={trimmedTech}
                            className="font-mono text-xs text-muted-foreground px-2.5 py-1.5 bg-secondary rounded-sm"
                          >
                            {trimmedTech}
                          </span>
                        )
                      })}
                    {project.technologies.split(",").length > 5 && (
                      <button
                        onClick={() => setExpandedProject(isExpanded ? null : project.name)}
                        className="font-mono text-xs text-accent hover:underline underline-offset-4"
                      >
                        +{project.technologies.split(",").length - 5} more
                      </button>
                    )}
                  </div>

                  {/* Expanded tech stack */}
                  {isExpanded && (
                    <div className="pt-5 border-t border-border space-y-3">
                      <span className="font-mono text-xs text-muted-foreground">// full stack</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(",").map((tech) => {
                          const trimmedTech = tech.trim()
                          if (!trimmedTech) return null
                          return (
                            <span
                              key={trimmedTech}
                              className="font-mono text-xs text-muted-foreground px-2.5 py-1.5 bg-secondary rounded-sm"
                            >
                              {trimmedTech}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
