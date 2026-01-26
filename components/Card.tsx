interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={
        "border border-white/15 rounded-xl p-6 md:p-8 bg-white/[0.03] backdrop-blur-sm " +
        className
      }
    >
      {children}
    </div>
  );
}
