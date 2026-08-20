type IconProps = { className?: string };

// Stroke width matches the Figma `stroke/icon` token (1.5).
export function CaretDown({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M13 6L8 11L3 6"
        stroke="currentColor"
        strokeWidth="var(--stroke-icon)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12.5 10.5"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M0.75 5.25H11.75M7.25 9.75L11.75 5.25L7.25 0.75"
        stroke="currentColor"
        strokeWidth="var(--stroke-icon)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
