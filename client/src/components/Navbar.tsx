import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
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
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-[90%] max-w-4xl" : "w-[95%] max-w-6xl"
      }`}
      data-testid="navbar"
    >
      <div
        className={`relative overflow-hidden rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(34,211,238,0.15)]"
            : "bg-background/40 backdrop-blur-xl border border-white/5"
        }`}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex items-center justify-between px-6 md:px-8 h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="relative text-xl md:text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-teal bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
            data-testid="link-logo"
          >
            AP
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  activeSection === link.href
                    ? "text-neon-cyan"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                data-testid={`link-${link.href}`}
              >
                <span className="relative z-10">{link.label}</span>
                <div
                  className={`absolute inset-0 rounded-full bg-neon-cyan/10 transition-all duration-300 ${
                    activeSection === link.href
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                />
                {activeSection === link.href && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-teal rounded-full" />
                )}
              </button>
            ))}
            <div className="ml-2 pl-2 border-l border-white/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-neon-cyan/10"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-background/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(34,211,238,0.15)] animate-fade-in-up">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
                  activeSection === link.href
                    ? "bg-neon-cyan/10 text-neon-cyan"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                }`}
                data-testid={`mobile-link-${link.href}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
