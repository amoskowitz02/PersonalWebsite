"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  // Skyward (index 0) is expanded by default; everything else starts collapsed.
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) =>
    setOpenIdx((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="WHERE I'VE BEEN" title="Work" accent="Experience" />

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isOpen = openIdx.has(idx);
            return (
              <div
                key={`${exp.company}-${exp.role}`}
                className="rounded-xl bg-surface border border-border overflow-hidden transition-colors hover:border-purple-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {exp.role}
                      </h3>
                      <span className="text-purple-400 font-medium text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      {exp.period} &middot; {exp.location}
                    </p>
                    <p className="text-sm text-zinc-400 mt-3">
                      {exp.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-zinc-500 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable detail */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 -mt-1">
                      <ul className="space-y-2 border-t border-border pt-4">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-sm text-zinc-400 flex items-start gap-2"
                          >
                            <span className="text-purple-500 mt-1.5 flex-shrink-0">
                              &bull;
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded bg-surface-light text-zinc-500 border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
