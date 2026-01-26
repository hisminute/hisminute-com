import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  type = "button",
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block w-full sm:w-auto px-8 py-3 font-semibold rounded-lg transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const variantStyles =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--background)] hover:bg-[#c9a432]"
      : "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10";

  const combinedStyles = baseStyles + " " + variantStyles + " " + className;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles + " cursor-pointer"}
    >
      {children}
    </button>
  );
}
