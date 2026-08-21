import type { ReactNode } from "react";

/**
 * The designed canvas. Figma draws the homepage on a 1440 frame, so content
 * holds that width and centres beyond it; ambient background plates are left
 * outside this wrapper so they can bleed to the viewport edges.
 *
 * Horizontal padding steps down below 1280 so the desktop composition keeps
 * working on smaller laptops rather than colliding.
 */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
}
