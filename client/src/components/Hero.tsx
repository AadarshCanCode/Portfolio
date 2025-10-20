import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/config/portfolio-data";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 animate-gradient-shift bg-300%" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 text-center">
        {/* Glassmorphic Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 md:p-12 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          {/* Greeting */}
          <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-md border border-neon-cyan/30 rounded-full">
            <p className="text-sm font-mono text-neon-cyan">
              Welcome to my portfolio
            </p>
          </div>

          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient-shift bg-300% leading-tight">
            {personalInfo.name}
          </h1>

          {/* Animated Role Titles */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-6 font-medium">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-neon-cyan text-background hover:bg-neon-cyan/90 shadow-[0_0_20px_rgba(34,211,238,0.3)] border border-neon-cyan/50"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 hover:border-neon-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              data-testid="button-contact-me"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-cyan rounded-full animate-pulse-glow" />
          </div>
        </button>
      </div>
    </section>
  );
}
