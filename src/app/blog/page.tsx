import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Placeholder blog posts — replace with real content or a CMS later
const posts: BlogPost[] = [
  {
    slug: "building-rag-pipeline-at-scale",
    title: "Building a RAG Pipeline at Scale: Lessons from 100K+ Embeddings",
    date: "Coming Soon",
    excerpt:
      "A deep dive into designing and deploying a production RAG system that processes over 100,000 document embeddings with multi-query retrieval and cross-encoder reranking.",
    tags: ["RAG", "AI", "Architecture"],
  },
];

export default function BlogPage() {
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
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl bg-surface border border-border p-6 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
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

              <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-purple-400 hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
