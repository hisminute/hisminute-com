interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  /** Override default heading size (`text-2xl md:text-3xl`). */
  titleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
  centered = false,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center " + className : className}>
      <h2
        className={
          "font-heading font-semibold text-[var(--foreground)] mb-3 " +
          (titleClassName ?? "text-2xl md:text-3xl")
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--foreground)]/70 leading-relaxed max-w-prose">
          {subtitle}
        </p>
      )}
    </div>
  );
}
