import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24">
      {/* Gradient background — fades smoothly into page */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-3xl text-center flex flex-col items-center gap-6">
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-2">
          Open to Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Adam{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Moskowitz
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 font-light">
          AI & Data Systems Engineer | Consultant
        </p>

        <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
          Building production AI pipelines, data warehouses, and automation
          systems from the ground up.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/adammosk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/amoskowitz02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* CTA — matches width of social links row */}
        <a
          href="#contact"
          className="mt-4 w-full max-w-md py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors text-center animate-subtle-pulse"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}
