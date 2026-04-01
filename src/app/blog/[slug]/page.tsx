import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <div className="w-full py-20 rounded-2xl bg-surface border border-border flex items-center justify-center text-zinc-600 mb-10">
          Blog post content coming soon
        </div>
      </article>
    </div>
  );
}
