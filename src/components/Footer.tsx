import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Adam Moskowitz. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/adammosk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/amoskowitz02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:amoskowitz02@gmail.com"
            className="text-zinc-500 hover:text-purple-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
