interface SectionHeaderProps {
  /** Small uppercase narrative kicker shown above the title (e.g. "WHO I AM") */
  eyebrow?: string;
  /** First part of the title, rendered in white */
  title: string;
  /** Final word of the title, rendered in purple accent */
  accent: string;
}

/**
 * Standard section header: a small narrative eyebrow, a two-word title
 * (white + purple accent), and the accent bar beneath. Used across every
 * section so the page reads as one continuous story.
 */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold mb-3">
        {title} <span className="text-purple-400">{accent}</span>
      </h2>
      <div className="h-1 w-16 bg-purple-500 rounded mx-auto" />
    </div>
  );
}
