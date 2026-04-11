import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  github?: string;
  coverImage?: string;
  comingSoon?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Posts that aren't written yet but should appear in the listing
const COMING_SOON_POSTS: BlogPostMeta[] = [
  {
    slug: "designing-multi-agent-hierarchies",
    title: "Designing Multi-Agent Hierarchies: Staged Pipelines with Human-in-the-Loop",
    date: "Coming Soon",
    excerpt:
      "A practical guide to structuring multi-agent systems with persona agents, validator chains, human feedback loops, and generation agents — lessons from building production agent pipelines.",
    tags: ["Agents", "AI", "Architecture"],
    comingSoon: true,
  },
];

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.existsSync(BLOG_DIR)
    ? fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))
    : [];

  const published = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    return {
      slug: data.slug as string,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
      github: data.github as string | undefined,
      coverImage: data.coverImage as string | undefined,
    };
  });

  published.sort((a, b) => (a.date < b.date ? 1 : -1));

  return [...published, ...COMING_SOON_POSTS];
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: data.slug as string,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    github: data.github as string | undefined,
    coverImage: data.coverImage as string | undefined,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
