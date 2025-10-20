import { useState } from "react";
import { ExternalLink, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/config/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal blur-sm" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative AI and ML solutions that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-md overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`project-card-${project.slug}`}
              >
                {/* Project Image/Gradient */}
                <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 via-neon-blue/20 to-neon-teal/20 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-neon-cyan/40 group-hover:text-neon-cyan/60 group-hover:scale-110 transition-all" />
                  </div>
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 px-3 py-1 bg-neon-cyan/20 backdrop-blur-md border border-neon-cyan/30 text-neon-cyan">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Date */}
                  <p className="text-xs font-mono text-neon-blue/80 mb-4">
                    {project.date}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-muted-foreground hover:border-neon-cyan/30 hover:text-neon-cyan transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-neon-cyan">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, isExpanded ? undefined : 2).map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 animate-fade-in-up">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-neon-cyan rounded-full flex-shrink-0 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                        <p className="text-xs text-muted-foreground">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  {project.highlights.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(project.id)}
                      className="w-full mb-3 text-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10"
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <ChevronUp className="ml-2 h-3 w-3" />
                        </>
                      ) : (
                        <>
                          Show More
                          <ChevronDown className="ml-2 h-3 w-3" />
                        </>
                      )}
                    </Button>
                  )}

                  {/* View Details Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/5 border-white/20 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                    data-testid={`button-view-project-${project.slug}`}
                  >
                    View Details
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
