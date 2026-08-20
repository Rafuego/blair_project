/**
 * The little calendar card used in the wait-time comparison. Figma builds it
 * from primitives (Frame 3224:15372), so it is rebuilt here rather than
 * exported flat — it stays crisp and the marks can be tokenised.
 *
 * Base geometry is 119.8 x 131.78 at scale 1, matching the Figma sheet.
 */
type Mark = "dash" | "ring" | "dot";

const CELLS = 16; // 4 x 4 day grid

function Cell({ mark }: { mark: Mark }) {
  if (mark === "ring") {
    return (
      <span className="block size-[13.2px] rounded-full border-[1.198px] border-espresso opacity-35" />
    );
  }
  if (mark === "dot") {
    return <span className="block size-[14.4px] rounded-full bg-primrose" />;
  }
  return (
    <span className="block h-[1.797px] w-[11.98px] rotate-[30deg] bg-espresso opacity-35" />
  );
}

export function CalendarSheet({
  label,
  showLabel = true,
  ringIndex,
  dotIndex,
  className = "",
}: {
  label: string;
  showLabel?: boolean;
  ringIndex?: number;
  dotIndex?: number;
  className?: string;
}) {
  const marks: Mark[] = Array.from({ length: CELLS }, (_, i) =>
    i === ringIndex ? "ring" : i === dotIndex ? "dot" : "dash",
  );

  return (
    <div
      className={`flex h-[131.78px] w-[119.8px] flex-col gap-[9.584px] rounded-[9.584px] bg-white px-[11.98px] pb-[11.98px] shadow-[0_4.792px_7.188px_rgba(41,11,18,0.1)] ${className}`}
    >
      <div className="flex h-[28.752px] shrink-0 items-center justify-center pt-[2.396px]">
        <p
          className={`type-body-medium whitespace-nowrap text-espresso uppercase ${showLabel ? "" : "opacity-0"}`}
          style={{ fontSize: "14.376px" }}
        >
          {label}
        </p>
      </div>
      <div className="grid flex-1 grid-cols-4 grid-rows-4 place-items-center">
        {marks.map((mark, i) => (
          <Cell key={i} mark={mark} />
        ))}
      </div>
    </div>
  );
}
