import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primrose" | "white" | "glass" | "ghost" | "espresso";

const VARIANTS: Record<Variant, string> = {
  primrose: "bg-primrose text-espresso hover:bg-primrose-pale",
  white: "bg-white text-espresso hover:bg-cream",
  glass:
    "bg-glass-light-15 text-white backdrop-blur-[20px] hover:bg-white/25",
  ghost: "text-white hover:opacity-75",
  espresso: "bg-espresso text-white hover:bg-espresso/88",
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
      className={`type-button inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-circle px-7 py-3 transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
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
      className={`type-button inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 border-b border-solid border-current py-1 opacity-75 transition-opacity duration-200 hover:opacity-100 ${className}`}
    >
      {children}
    </Link>
  );
}
