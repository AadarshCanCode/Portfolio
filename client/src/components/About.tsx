import { useState } from "react";
import { GraduationCap, Filter, X } from "lucide-react";
import { personalInfo, education, skills } from "@/config/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function About() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const categories = Object.keys(skillsByCategory);

  const filteredSkills = selectedCategory
    ? { [selectedCategory]: skillsByCategory[selectedCategory] }
    : skillsByCategory;

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue blur-sm" />
          </h2>
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover-elevate transition-all duration-300">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Education Cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-105 hover-elevate active-elevate-2 transition-all duration-300 group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`education-card-${edu.id}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-md border border-neon-cyan/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                  <GraduationCap className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-neon-blue/80">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                size="sm"
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null
                  ? "bg-neon-cyan text-background hover:bg-neon-cyan/90 border-neon-cyan/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-neon-cyan/30"
                }
              >
                <Filter className="w-3 h-3 mr-2" />
                All Skills
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? "bg-neon-cyan text-background hover:bg-neon-cyan/90 border-neon-cyan/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-neon-cyan/30"
                  }
                >
                  {category}
                  {selectedCategory === category && (
                    <X className="w-3 h-3 ml-2" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {Object.entries(filteredSkills).map(([category, categorySkills]) => (
              <div key={category} className="animate-fade-in-up">
                <h4 className="text-sm font-mono text-neon-blue mb-4 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
                  {category}
                  <span className="text-xs text-muted-foreground">({categorySkills.length})</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <span
                          className="px-3 py-1.5 text-sm font-medium bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan hover:scale-110 transition-all cursor-pointer hover-elevate active-elevate-2 animate-fade-in-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs font-semibold">{skill}</p>
                        <p className="text-[10px] text-muted-foreground">{category}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
