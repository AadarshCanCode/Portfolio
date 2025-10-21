import { GraduationCap, Code2, Database, Globe, Cpu, Zap } from "lucide-react";
import { personalInfo, education, skills } from "@/config/portfolio-data";

const categoryIcons: Record<string, any> = {
  "Programming Languages": Code2,
  "Frameworks & Libraries": Zap,
  "Databases": Database,
  "Tools & Technologies": Cpu,
  "Web Technologies": Globe,
};

export function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-teal mx-auto rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-500" />

              {/* Content card */}
              <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent">
              Education
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group relative"
                data-testid={`education-card-${edu.id}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 w-14 h-14 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl border border-neon-cyan/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <GraduationCap className="w-7 h-7 text-neon-cyan" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-neon-blue/80 bg-neon-blue/10 px-3 py-1 rounded-full inline-block">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>

          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
              const Icon = categoryIcons[category] || Code2;

              return (
                <div
                  key={category}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="relative">
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl border border-neon-cyan/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-neon-cyan" />
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                          {category}
                        </h4>
                        <div className="h-0.5 bg-gradient-to-r from-neon-cyan/50 to-transparent w-full max-w-xs mt-2" />
                      </div>

                      {/* Count badge */}
                      <div className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full">
                        <span className="text-sm font-mono text-neon-cyan">
                          {categorySkills.length}
                        </span>
                      </div>
                    </div>

                    {/* Skills grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pl-16">
                      {categorySkills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className="group/skill relative animate-fade-in-up"
                          style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 30)}ms` }}
                          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {/* Hover glow */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-xl opacity-0 group-hover/skill:opacity-30 blur transition-all duration-300" />

                          {/* Skill card */}
                          <div className="relative bg-background/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all duration-300 cursor-default">
                            <p className="text-sm font-medium text-foreground/80 group-hover/skill:text-neon-cyan transition-colors text-center">
                              {skill}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
