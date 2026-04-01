"use client";

import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles — more of them, brighter
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        // Wrap around
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.4 + 0.6 * Math.sin(p.pulse));

        // Glow effect
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 3
        );
        gradient.addColorStop(0, `rgba(192, 132, 252, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright center dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 190, 255, ${currentOpacity * 0.8})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating orbs — stronger purple/indigo glows */}
      <div className="bg-orb-1 absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-purple-900/30 blur-[120px]" />
      <div className="bg-orb-2 absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-900/25 blur-[100px]" />
      <div className="bg-orb-3 absolute top-[70%] left-[30%] w-[600px] h-[600px] rounded-full bg-purple-800/25 blur-[140px]" />
      <div className="bg-orb-1 absolute top-[85%] right-[20%] w-[350px] h-[350px] rounded-full bg-violet-900/20 blur-[90px]" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating sparkle particles */}
      <Particles />
    </div>
  );
}
