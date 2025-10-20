import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/config/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Work Experience
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple to-neon-pink blur-sm" />
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`experience-${exp.id}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-neon-cyan rounded-full border-4 border-background transform -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-6 md:p-8 hover-elevate active-elevate-2 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.1)] animate-fade-in-up">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-mono bg-neon-green/20 border border-neon-green/30 rounded-full text-neon-green">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-neon-purple" />
                          <span className="font-medium text-foreground/90">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-neon-pink" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-neon-cyan rounded-full flex-shrink-0" />
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
