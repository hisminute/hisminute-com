interface ScriptureCardProps {
  verse: string;
  reference: string;
  className?: string;
}

export function ScriptureCard({ verse, reference, className = "" }: ScriptureCardProps) {
  return (
    <div
      className={`p-6 md:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 ${className}`}
    >
      <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-4">
        &ldquo;{verse}&rdquo;
      </blockquote>
      <cite className="text-sm font-medium text-zinc-600 dark:text-zinc-400 not-italic">
        — {reference}
      </cite>
    </div>
  );
}
