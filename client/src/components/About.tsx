import { GraduationCap } from "lucide-react";
import { personalInfo, education, skills } from "@/config/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple blur-sm" />
          </h2>
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover-elevate transition-all duration-300">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Education Cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-6 hover-elevate active-elevate-2 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`education-card-${edu.id}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-md border border-neon-cyan/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                  <GraduationCap className="w-6 h-6 text-neon-cyan" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-neon-purple/80">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>
          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="animate-fade-in-up">
                <h4 className="text-sm font-mono text-neon-purple mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <span
                          className="px-3 py-1.5 text-sm font-medium bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all cursor-default hover-elevate"
                          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{skill}</p>
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
