"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { id: "hero", label: "Home", shortcut: "01" },
  { id: "projects", label: "Projects", shortcut: "02" },
  { id: "experience", label: "Experience", shortcut: "03" },
  { id: "education", label: "Education", shortcut: "04" },
  { id: "skills", label: "Skills", shortcut: "05" },
  { id: "contact", label: "Contact", shortcut: "06" },
]

interface SidebarProps {
  activeSection: string
  onNavigate: (id: string) => void
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 bg-primary text-primary-foreground rounded-sm"
        aria-label="Toggle navigation"
      >
        <span className="block w-5 h-0.5 bg-current mb-1.5" />
        <span className="block w-5 h-0.5 bg-current mb-1.5" />
        <span className="block w-5 h-0.5 bg-current" />
      </button>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-56 bg-sidebar border-r border-sidebar-border z-40",
          "transition-transform duration-300 ease-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex flex-col h-full pt-20 lg:pt-10 px-5">
          <div className="mb-10 pb-6 border-b border-sidebar-border">
            <span className="font-mono text-xs text-accent tracking-widest">// nav</span>
            <div className="mt-3 h-px bg-accent/30 w-8" />
          </div>

          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full text-left py-2.5 px-4 text-sm transition-all duration-200 flex items-center gap-3",
                    "hover:text-accent hover:bg-sidebar-accent rounded-sm",
                    activeSection === item.id
                      ? "text-accent bg-sidebar-accent border-l-2 border-accent ml-[-2px] font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  <span className="font-mono text-xs opacity-50">{item.shortcut}</span>
                  <span>{item.label}</span>
                </button>
                {index === 1 && <div className="my-3 h-px bg-sidebar-border mx-4" />}
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-8 pt-6 border-t border-sidebar-border space-y-4">
            <ThemeToggle />
            <div className="px-3">
              <span className="font-mono text-xs text-muted-foreground/50">v1.0.0</span>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
