// Neon cursor follower with glassmorphism effect
(function() {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion) return;

  const follower = document.createElement("div");
  follower.id = "cursor-follower";
  follower.style.cssText = `
    position: fixed;
    pointer-events: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%);
    border: 2px solid rgba(34, 211, 238, 0.6);
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), inset 0 0 10px rgba(34, 211, 238, 0.4);
    z-index: 9999;
    transition: left 0.15s ease-out, top 0.15s ease-out;
    backdrop-filter: blur(4px);
  `;
  
  document.body.appendChild(follower);

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 100;
  let followerY = 100;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateFollowerPosition() {
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 15) {
      const speed = 0.12;
      followerX += dx * speed;
      followerY += dy * speed;
      
      follower.style.left = (followerX - 12) + "px";
      follower.style.top = (followerY - 12) + "px";
    }

    requestAnimationFrame(updateFollowerPosition);
  }

  updateFollowerPosition();
})();
