"use client"

import { useState } from "react"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Find which projects use a skill
  const getProjectsForSkill = (skill: string) => {
    const normalizedSkill = skill.toLowerCase().trim()
    return portfolioData.projects.filter((project) => project.technologies.toLowerCase().includes(normalizedSkill))
  }

  return (
    <section id="skills" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent tracking-wider">// capabilities</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Skills</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {portfolioData.skills.map((category) => (
            <div key={category.skillHeading} className="space-y-4">
              <h3 className="font-mono text-xs text-accent tracking-wider uppercase border-b border-accent/30 pb-2 inline-block">
                {category.skillHeading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skillList.split(",").map((skill) => {
                  const trimmedSkill = skill.trim()
                  if (!trimmedSkill) return null
                  const relatedProjects = getProjectsForSkill(trimmedSkill)

                  return (
                    <div
                      key={trimmedSkill}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(trimmedSkill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span
                        className={cn(
                          "inline-block px-3 py-2 text-sm border border-border rounded-sm",
                          "transition-all duration-200 cursor-default",
                          "hover:border-accent/50 hover:bg-secondary",
                          "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {trimmedSkill}
                      </span>

                      {/* Tooltip showing related projects */}
                      {hoveredSkill === trimmedSkill && relatedProjects.length > 0 && (
                        <div className="absolute left-0 top-full mt-2 z-10 w-52 p-4 bg-popover border border-border rounded-sm shadow-sm">
                          <span className="font-mono text-xs text-muted-foreground block mb-2">used in:</span>
                          <ul className="space-y-1.5">
                            {relatedProjects.map((project) => (
                              <li key={project.name} className="text-xs text-accent">
                                → {project.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
