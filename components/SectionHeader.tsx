interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center " + className : className}>
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-[var(--foreground)] mb-3">
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
