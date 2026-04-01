import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Work{" "}
          <span className="text-purple-400">Experience</span>
        </h2>
        <div className="h-1 w-16 bg-purple-500 rounded mx-auto mb-12" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-background -translate-x-1.5 mt-2 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 rounded-xl bg-surface border border-border p-6 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-purple-400 font-medium text-sm">
                    {exp.company}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {exp.period} &middot; {exp.location}
                  </p>

                  <p className="text-sm text-zinc-400 mt-3">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-500 flex items-start gap-2"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
