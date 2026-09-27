import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="WHO I AM" title="About" accent="Me" />

        <div className="grid md:grid-cols-3 gap-10">
          {/* Profile photo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/profile.png"
              alt="Adam Moskowitz"
              width={240}
              height={240}
              className="w-60 h-60 rounded-2xl object-cover border border-border"
              priority
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-zinc-300 leading-relaxed">
            <p>
              I came up as someone who loved to code — for a long time I
              thought writing every line was the whole job. AI changed how I
              see that. When powerful models are available to anyone, the edge
              isn&apos;t whether you can write the code, it&apos;s whether you
              can{" "}
              <span className="text-zinc-100 font-medium">
                architect the right system reliably and safely
              </span>
              . Somewhere in my first year out of school, I shifted from{" "}
              <span className="text-zinc-100 font-medium">
                coder to systems architect
              </span>
              .
            </p>
            <p>
              These days I build{" "}
              <span className="text-zinc-100 font-medium">
                end-to-end AI infrastructure
              </span>{" "}
              from the ground up. At Skyward, I architected a{" "}
              <span className="text-zinc-100 font-medium">RAG pipeline</span>{" "}
              that{" "}
              <span className="text-zinc-100 font-medium">
                reduced LLM input cost by 97%
              </span>{" "}
              while scaling to{" "}
              <span className="text-zinc-100 font-medium">
                27,000+ generated pages
              </span>{" "}
              (
              <span className="text-zinc-100 font-medium">
                +17% impressions
              </span>
              ,{" "}
              <span className="text-zinc-100 font-medium">
                +10% clicks
              </span>
              ,{" "}
              <span className="text-zinc-100 font-medium">
                +18% average rank
              </span>{" "}
              for a major client).
            </p>
            <p>
              My sweet spot is the intersection of{" "}
              <span className="text-zinc-100 font-medium">systems architecture</span>,{" "}
              <span className="text-zinc-100 font-medium">data engineering</span>, and{" "}
              <span className="text-zinc-100 font-medium">applied AI</span>. I design{" "}
              <span className="text-zinc-100 font-medium">BigQuery data warehouses</span>,
              build{" "}
              <span className="text-zinc-100 font-medium">RAG pipelines</span>{" "}
              with{" "}
              <span className="text-zinc-100 font-medium">
                multi-query retrieval and reranking
              </span>, develop{" "}
              <span className="text-zinc-100 font-medium">
                multi-agent orchestration frameworks
              </span>, and create internal tools that make complex systems
              accessible to non-technical teams.
            </p>
            <p>
              <span className="text-zinc-100 font-medium">Summa Cum Laude</span>{" "}
              graduate from Stevens Institute of Technology (CS,{" "}
              <span className="text-zinc-100 font-medium">3.9 GPA</span>), and
              I&apos;m currently pursuing an{" "}
              <span className="text-zinc-100 font-medium">
                MS in Applied AI
              </span>{" "}
              at Stevens. Always looking for interesting problems to solve —
              currently open to full-time and consulting opportunities.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { value: "100K+", label: "Lines of Code" },
            { value: "100K+", label: "Document Embeddings" },
            { value: "100+", label: "Data Warehouse Tables" },
            { value: "1,000+", label: "Servers Deployed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-surface border border-border"
            >
              <div className="text-2xl font-bold text-purple-400">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
