"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, FileText, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxZvYCbxgeS-xvkfrL6NAsPEmpzofLywuXdf9UkfMEWzPuwxoujOzggtS3-tmPMncE/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Let&apos;s{" "}
          <span className="text-purple-400">Connect</span>
        </h2>
        <div className="h-1 w-16 bg-purple-500 rounded mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — info */}
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed">
              I&apos;m currently open to new opportunities in AI/ML Engineering,
              Data Engineering, Solutions Architecture, and AI Consulting. If you
              have an interesting problem to solve, I&apos;d love to hear about
              it.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <MapPin size={16} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-zinc-300">Based in NJ, USA</p>
                  <p className="text-xs text-zinc-500">
                    Open to relocation
                  </p>
                </div>
              </div>

              <a
                href="mailto:amoskowitz02@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-purple-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Mail size={16} className="text-purple-400" />
                </div>
                amoskowitz02@gmail.com
              </a>

              <a
                href="tel:+12013160023"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-purple-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Phone size={16} className="text-purple-400" />
                </div>
                (201) 316-0023
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/adammosk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/amoskowitz02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm text-zinc-300"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-zinc-400 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-zinc-200 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-400 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-zinc-200 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-zinc-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-zinc-200 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors animate-subtle-pulse disabled:opacity-50"
            >
              <Send size={16} />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent!"
                : status === "error"
                ? "Failed — Try Again"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
