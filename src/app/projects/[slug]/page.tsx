import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:border-purple-500/50 text-sm text-zinc-300 transition-colors"
            >
              <FaGithub size={16} />
              View Code
            </a>
          )}
          {project.liveDemo && (
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
              <ExternalLink size={16} />
              Live Demo Available
            </span>
          )}
        </div>

        {/* Image placeholder */}
        <div className="w-full h-64 md:h-96 rounded-2xl bg-surface border border-border flex items-center justify-center text-zinc-600 mb-10">
          Project Screenshot / Demo
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-10 rounded-xl bg-surface border border-border p-6">
          <h2 className="text-lg font-semibold text-zinc-100 mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-400"
              >
                <span className="text-purple-500 mt-0.5 flex-shrink-0">
                  &bull;
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
