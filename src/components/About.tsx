import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          About{" "}
          <span className="text-purple-400">Me</span>
        </h2>
        <div className="h-1 w-16 bg-purple-500 rounded mx-auto mb-10" />

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
          <div className="md:col-span-2 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m an AI and data systems engineer who builds production
              infrastructure from the ground up. At Skyward, I&apos;ve authored{" "}
              <span className="text-purple-300 font-medium">
                75,000+ lines of production Python
              </span>{" "}
              powering AI pipelines, data warehouses, and automation systems that
              deliver measurable results — including a{" "}
              <span className="text-purple-300 font-medium">
                RAG system
              </span>{" "}
              that generated{" "}
              <span className="text-purple-300 font-medium">
                27,000+ FAQ pages
              </span>{" "}
              and drove{" "}
              <span className="text-purple-300 font-medium">
                +24% clicks
              </span>{" "}
              for a major client.
            </p>
            <p>
              My sweet spot is the intersection of{" "}
              <span className="text-purple-300 font-medium">systems architecture</span>,{" "}
              <span className="text-purple-300 font-medium">data engineering</span>, and{" "}
              <span className="text-purple-300 font-medium">applied AI</span>. I design{" "}
              <span className="text-purple-300 font-medium">BigQuery data warehouses</span>,
              build filtered RAG pipelines, develop{" "}
              <span className="text-purple-300 font-medium">multi-agent workflows</span>,
              and create internal tools that make complex systems accessible to
              non-technical teams.
            </p>
            <p>
              <span className="text-purple-300 font-medium">Summa Cum Laude</span>{" "}
              graduate from Stevens Institute of Technology (CS,{" "}
              <span className="text-purple-300 font-medium">3.9 GPA</span>).
              Always looking for interesting problems to solve.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { value: "75K+", label: "Lines of Production Code" },
            { value: "100K+", label: "Document Embeddings" },
            { value: "50+", label: "Data Warehouse Tables" },
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
