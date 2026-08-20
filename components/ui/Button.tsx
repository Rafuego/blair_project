import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primrose" | "white" | "glass" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primrose: "bg-primrose text-espresso",
  white: "bg-white text-espresso",
  glass: "bg-glass-light-15 text-white backdrop-blur-[20px]",
  ghost: "text-white",
};

export function Button({
  href,
  variant = "primrose",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`type-button inline-flex shrink-0 items-center justify-center gap-1 rounded-circle px-7 py-3 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Text link with a rule beneath it — the "Explore Blair for teams" treatment. */
export function UnderlineLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`type-button inline-flex shrink-0 items-center justify-center gap-1 border-b border-solid border-current py-1 opacity-75 transition-opacity hover:opacity-100 ${className}`}
    >
      {children}
    </Link>
  );
}
