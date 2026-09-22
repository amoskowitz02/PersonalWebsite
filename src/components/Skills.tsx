"use client";

import { useRef, useEffect } from "react";
import { skillCategories } from "@/data/skills";
import SectionHeader from "@/components/SectionHeader";

const NUM_COPIES = 6;
const SPEED = 80; // px/s

function MarqueeRow({
  skills,
  reverse,
}: {
  skills: string[];
  reverse?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;

    const setDuration = () => {
      const firstCopy = track.children[0] as HTMLElement;
      if (!firstCopy || firstCopy.offsetWidth === 0) {
        rafId = requestAnimationFrame(setDuration);
        return;
      }
      const marginRight = parseFloat(getComputedStyle(firstCopy).marginRight) || 16;
      const oneWidth = firstCopy.offsetWidth + marginRight;
      track.style.setProperty("--marquee-dur", `${(oneWidth / SPEED).toFixed(2)}s`);
    };

    rafId = requestAnimationFrame(setDuration);
    return () => cancelAnimationFrame(rafId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="overflow-hidden relative"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        ref={trackRef}
        className={`w-max flex ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
      >
        {Array.from({ length: NUM_COPIES }).map((_, copyIdx) => (
          <div key={copyIdx} className="flex gap-4 mr-4" style={{ willChange: "transform" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-surface border border-border text-sm text-zinc-300 whitespace-nowrap hover:border-purple-500/50 hover:text-purple-300 transition-colors shrink-0"
                style={{ willChange: "transform" }}
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="WHAT I WORK WITH" title="Tech" accent="Stack" />

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
