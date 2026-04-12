import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-purple-400">Blog</span>
        </h1>
        <p className="text-zinc-500 mb-12">
          Thoughts on AI systems, data architecture, and engineering.
        </p>

        <div className="space-y-8">
          {posts.map((post) => {
            const card = (
              <article
                className={`group relative rounded-xl bg-surface border border-border overflow-hidden transition-colors ${
                  post.comingSoon ? "opacity-70" : "hover:border-purple-500/30"
                }`}
              >
                {/* Cover image — fills the right ~65% of the card on desktop,
                    with the image's left portion fading into the card background.
                    Hidden on mobile for readability. */}
                {post.coverImage && (
                  <div
                    className="hidden sm:block absolute inset-y-0 right-0 w-[65%] pointer-events-none"
                    aria-hidden
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.85) 55%, black 75%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.85) 55%, black 75%)",
                    }}
                  >
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      sizes="65vw"
                      className="object-cover object-right"
                    />
                  </div>
                )}

                {/* Text content — sits over the faded portion of the image on desktop.
                    Width caps at ~55% so it doesn't spill past where the image becomes opaque. */}
                <div className="relative p-6 sm:w-[55%] min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <time className="text-xs text-zinc-500">{post.date}</time>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2
                    className={`text-xl font-semibold text-zinc-100 transition-colors mb-2 ${
                      !post.comingSoon ? "group-hover:text-purple-300" : ""
                    }`}
                  >
                    {post.title}
                  </h2>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {!post.comingSoon && (
                    <span className="inline-flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              </article>
            );

            if (post.comingSoon) {
              return <div key={post.slug}>{card}</div>;
            }

            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
