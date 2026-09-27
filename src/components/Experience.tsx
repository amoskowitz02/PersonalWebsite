"use client";

import { useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
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
    <section id="experience" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="WHERE I'VE BEEN" title="Work" accent="Experience" />

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isOpen = openIdx.has(idx);
            return (
              <div
                key={`${exp.company}-${exp.role}`}
                className="rounded-2xl bg-surface border border-border overflow-hidden transition-colors hover:border-purple-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className={`relative w-full text-left p-8 cursor-pointer ${
                    isOpen ? "pb-4" : ""
                  }`}
                >
                  <ChevronDown
                    size={20}
                    className={`absolute top-8 right-8 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <div className="flex items-center gap-4 pr-10 mb-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                      <Briefcase className="text-purple-400" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                  </div>
                  <div>
                    <span className="text-purple-400 font-medium text-sm">
                      {exp.company}
                    </span>
                    <p className="text-sm text-zinc-500 mt-1">
                      {exp.period} &middot; {exp.location}
                    </p>
                    <p className="text-sm text-zinc-400 mt-3">
                      {exp.description}
                    </p>
                  </div>
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
                    <div className="px-8 pb-8 -mt-1">
                      <ul className="space-y-2 border-t border-border pt-3">
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
