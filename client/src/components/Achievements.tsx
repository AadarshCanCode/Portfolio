import { Trophy, Award, Code, Github, FileCheck } from "lucide-react";
import { achievements } from "@/config/portfolio-data";

const iconMap = {
  trophy: Trophy,
  award: Award,
  code: Code,
  github: Github,
  certificate: FileCheck,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan blur-sm" />
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon ? iconMap[achievement.icon as keyof typeof iconMap] : Trophy;
            
            return (
              <div
                key={achievement.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-6 hover-elevate active-elevate-2 transition-all duration-300 shadow-[0_0_30px_rgba(320,85,65,0.1)] group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`achievement-${achievement.id}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-md border border-neon-pink/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(320,85,65,0.3)] transition-all">
                    <Icon className="w-6 h-6 text-neon-pink" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-lg group-hover:text-neon-pink transition-colors">
                        {achievement.title}
                      </h3>
                      {achievement.date && (
                        <span className="text-xs font-mono text-neon-purple/80 flex-shrink-0">
                          {achievement.date}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
