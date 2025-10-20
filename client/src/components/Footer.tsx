import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/config/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Achievements", href: "achievements" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-white/[0.02] backdrop-blur-xl border-t border-white/10">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal bg-clip-text text-transparent mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                data-testid="footer-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                    data-testid={`footer-link-${link.href}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-neon-cyan transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-neon-cyan transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-neon-cyan fill-neon-cyan animate-pulse-glow" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
