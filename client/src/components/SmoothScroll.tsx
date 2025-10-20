import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Add smooth scroll behavior to all elements
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Lenis smooth scroll alternative (lightweight implementation)
    let scrolling = false;
    let targetScroll = window.scrollY;

    const smoothScroll = () => {
      if (!scrolling) return;

      const currentScroll = window.scrollY;
      const diff = targetScroll - currentScroll;

      if (Math.abs(diff) > 0.5) {
        window.scrollTo(0, currentScroll + diff * 0.1);
        requestAnimationFrame(smoothScroll);
      } else {
        scrolling = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      targetScroll = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          targetScroll + e.deltaY
        )
      );

      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    // Uncomment to enable custom smooth scroll
    // window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.documentElement.style.scrollBehavior = "";
      // window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
