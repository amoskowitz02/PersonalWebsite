import { Hammer, GraduationCap, Compass, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const items = [
  {
    icon: Hammer,
    label: "Building",
    body: "At Skyward I lead the AI and data infrastructure — agentic pipelines, RAG systems, and the BigQuery warehouse they run on. Most weeks I'm turning a messy business problem into a system that actually ships.",
  },
  {
    icon: GraduationCap,
    label: "Learning",
    body: "I'm currently pursuing an MS in Applied AI at Stevens, expected 2028 — adding theoretical depth to the production intuition I've built, with a focus on knowledge graphs, Graph RAG, and agentic pipelines.",
  },
  {
    icon: Compass,
    label: "Looking for",
    body: "Full-time and consulting roles where I can own AI systems end to end — deciding what gets built, how it gets built, and where AI actually belongs.",
  },
];

export default function Currently() {
  return (
    <section id="currently" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="WHERE I'M HEADED" title="Right" accent="Now" />

        <p className="text-center text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
          Here&apos;s what I&apos;d tell you if we grabbed coffee today.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-surface border border-border p-6 hover:border-purple-500/30 transition-colors"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                <item.icon className="text-purple-400" size={20} />
              </div>
              <h3 className="text-zinc-100 font-medium mb-2">{item.label}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-400 mt-12">
          If that&apos;s the kind of problem you&apos;re working on,{" "}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            let&apos;s talk <ArrowRight size={14} />
          </a>
        </p>
      </div>
    </section>
  );
}
