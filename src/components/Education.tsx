import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          My{" "}
          <span className="text-purple-400">Education</span>
        </h2>
        <div className="h-1 w-16 bg-purple-500 rounded mx-auto mb-12" />

        {/* Stevens */}
        <div className="rounded-2xl bg-surface border border-border p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <GraduationCap className="text-purple-400" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-100">
                Stevens Institute of Technology
              </h3>
              <p className="text-purple-400 text-sm font-medium">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Graduated May 2024 &middot; Hoboken, NJ
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <span className="text-purple-300 font-bold">3.9</span>
                  <span className="text-xs text-zinc-400">GPA</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Award size={14} className="text-purple-300" />
                  <span className="text-xs text-purple-300">
                    Summa Cum Laude
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Awards & Scholarships
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "First Robotics Scholarship",
                    "Edwin A. Stevens Scholarship",
                    "Stevens Grant",
                  ].map((award) => (
                    <span
                      key={award}
                      className="text-xs px-2 py-1 rounded bg-surface-light text-zinc-400 border border-border"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Artificial Intelligence",
                    "Deep Learning",
                    "NLP",
                    "3D Computer Vision",
                    "Algorithms",
                    "Database Management",
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-1 rounded bg-surface-light text-zinc-400 border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-purple-400" />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-surface border border-border p-5">
            <p className="font-medium text-zinc-200 text-sm">
              Google Prompting Essentials
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Google via Coursera &middot; December 2025
            </p>
          </div>
          <div className="rounded-xl bg-surface border border-border p-5 border-dashed">
            <p className="font-medium text-zinc-400 text-sm">
              Google ML Engineer Professional Certificate
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Google via Coursera &middot; In Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
