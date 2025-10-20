import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/config/portfolio-data";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateParallax = (speed: number) => {
    const x = (mousePosition.x - window.innerWidth / 2) * speed;
    const y = (mousePosition.y - window.innerHeight / 2) * speed;
    return { x, y };
  };

  const blob1 = calculateParallax(0.02);
  const blob2 = calculateParallax(-0.015);
  const blob3 = calculateParallax(0.025);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient blobs that follow mouse */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-neon-cyan/30 rounded-full blur-[100px] transition-all duration-1000 ease-out"
          style={{
            top: `20%`,
            left: `20%`,
            transform: `translate(${blob1.x}px, ${blob1.y}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-neon-blue/25 rounded-full blur-[120px] transition-all duration-1000 ease-out"
          style={{
            top: `50%`,
            right: `20%`,
            transform: `translate(${blob2.x}px, ${blob2.y}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-neon-teal/20 rounded-full blur-[100px] transition-all duration-1000 ease-out"
          style={{
            bottom: `20%`,
            left: `50%`,
            transform: `translate(${blob3.x}px, ${blob3.y}px)`,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 text-center">
        {/* Greeting badge */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <div className="px-6 py-3 bg-background/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_4px_20px_rgba(34,211,238,0.1)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.2)] transition-all duration-300">
            <p className="text-sm font-mono text-neon-cyan flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
              Welcome to my portfolio
            </p>
          </div>
        </div>

        {/* Name with liquid gradient */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal bg-clip-text text-transparent bg-300% animate-gradient-shift leading-tight">
            {personalInfo.name}
          </span>
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 mb-6 font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="relative group bg-neon-cyan text-background hover:bg-neon-cyan/90 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] border border-neon-cyan/50 transition-all duration-300 overflow-hidden"
            data-testid="button-view-projects"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="group bg-background/40 backdrop-blur-xl border-white/20 hover:bg-neon-cyan/10 hover:border-neon-cyan/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300"
            data-testid="button-contact-me"
          >
            <Mail className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: Github, href: `https://${personalInfo.github}`, label: "GitHub", testId: "link-github" },
            { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: "LinkedIn", testId: "link-linkedin" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", testId: "link-email" },
          ].map(({ icon: Icon, href, label, testId }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group w-12 h-12 bg-background/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              data-testid={testId}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-foreground/70 group-hover:text-neon-cyan group-hover:scale-110 transition-all" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce group"
          data-testid="button-scroll-down"
        >
          <div className="w-8 h-12 border-2 border-neon-cyan/30 rounded-full flex items-start justify-center p-2 group-hover:border-neon-cyan/50 transition-colors">
            <div className="w-1.5 h-3 bg-neon-cyan rounded-full animate-pulse-glow" />
          </div>
        </button>
      </div>
    </section>
  );
}
