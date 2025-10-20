import { useEffect, useState } from "react";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`transition-all duration-300 rounded-full ${
            isPointer
              ? "w-12 h-12 bg-neon-cyan/30 border-2 border-neon-cyan"
              : "w-6 h-6 bg-white/80"
          }`}
        />
      </div>

      {/* Trailing glow effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-700 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-teal/20 rounded-full blur-3xl" />
      </div>
    </>
  );
}
