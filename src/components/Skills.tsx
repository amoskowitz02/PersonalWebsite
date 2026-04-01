"use client";

import { useRef, useEffect, useCallback } from "react";
import { skillCategories } from "@/data/skills";

function MarqueeRow({
  skills,
  reverse,
}: {
  skills: string[];
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef<number | null>(null);
  const initializedRef = useRef(false);

  const speed = 0.5; // pixels per frame (~30px/s at 60fps)

  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    if (children.length === 0) return;

    // On first frame, if reversed, pre-scroll so content is buffered off the left edge
    if (!initializedRef.current) {
      initializedRef.current = true;
      if (reverse) {
        // Start scrolled so ~4 items worth of content is off-screen to the left
        let offset = 0;
        for (let i = 0; i < Math.min(4, children.length); i++) {
          offset += (children[i] as HTMLElement).offsetWidth + 16;
        }
        posRef.current = offset;
      } else {
        posRef.current = 0;
      }
    }

    posRef.current! += reverse ? -speed : speed;

    const first = children[0] as HTMLElement;
    const firstWidth = first.offsetWidth + 16; // include gap

    if (!reverse && posRef.current! >= firstWidth) {
      container.appendChild(first);
      posRef.current! -= firstWidth;
    } else if (reverse && posRef.current! <= 0) {
      const last = children[children.length - 1] as HTMLElement;
      container.insertBefore(last, children[0]);
      posRef.current! += last.offsetWidth + 16;
    }

    container.style.transform = `translateX(${-posRef.current!}px)`;
    animRef.current = requestAnimationFrame(animate);
  }, [reverse]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  // Repeat skills enough times to fill the screen with plenty of buffer
  const repeated = Array.from({ length: 8 }, () => skills).flat();

  return (
    <div
      className="overflow-hidden relative"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >

      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ willChange: "transform" }}
      >
        {repeated.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-surface border border-border text-sm text-zinc-300 whitespace-nowrap hover:border-purple-500/50 hover:text-purple-300 transition-colors shrink-0"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Tech{" "}
          <span className="text-purple-400">Stack</span>
        </h2>
        <div className="h-1 w-16 bg-purple-500 rounded mx-auto mb-12" />

        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={category.name}>
              <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3 px-2">
                {category.name}
              </h3>
              <MarqueeRow
                skills={category.skills}
                reverse={idx % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
