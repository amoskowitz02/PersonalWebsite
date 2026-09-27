"use client";

import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="WHAT I'VE BUILT" title="Featured" accent="Projects" />

        {/* Horizontal scrolling cards */}
        <div
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/blog/${project.blogSlug}`}
              className="group flex-shrink-0 w-80 md:w-96 snap-start"
            >
              <div className="h-full flex flex-col rounded-2xl bg-surface border border-border overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/5">
                {/* Cover image */}
                <div className="relative h-48 bg-surface-light border-b border-border overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 320px, 384px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {project.liveDemo && (
                    <span className="absolute top-4 right-4 z-10 px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                      Live Demo
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all mt-auto">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            View All Posts <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}
