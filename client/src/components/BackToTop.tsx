import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-6 left-6 z-40 h-12 w-12 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:bg-neon-purple/20 hover:border-neon-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all animate-fade-in-up"
      data-testid="button-back-to-top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
