import { Container } from "../ui/Container";

/**
 * "The operating system for specialist care." (node 3224:6623). The two image
 * slots are literal Placeholder frames in the design — product screens to
 * come — so they render as labelled plates until those assets exist.
 */
const ROWS = [
  {
    title: "Close the specialist gap.",
    body: "There will never be enough specialists. In women's health, the wait to see one is measured in months or years, and entire conditions go untreated in the gap. So we encoded the specialist's judgment into the system itself: intake, diagnosis pathways, treatment protocols, and follow-up, all designed by subspecialists. That's what lets generalist providers at Blair deliver specialist-level care, consistently and at scale.",
    placeholder: "Provider portal snippet.",
    imageFirst: false,
  },
  {
    title: "Get ahead of illness",
    body: "Most healthcare waits for something to go wrong. Our tracking and assessment layer watches the trend line, not the snapshot, so care steps in earlier, outcomes improve, and every new patient makes the system smarter. This is technology that scales care instead of rationing it.",
    placeholder: "Trend-line product screen (tracking view)",
    imageFirst: true,
  },
];

export function AboutSystem() {
  return (
    <section className="w-full py-20 xl:py-25">
      <Container className="flex flex-col gap-12 px-6 xl:gap-[48px] xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 w-full text-espresso">
            The operating system for specialist care.
          </h2>
          <p className="type-body-lg text-secondary">Two jobs. One system.</p>
        </div>

        <div className="flex w-full flex-col gap-2">
          {ROWS.map(({ title, body, placeholder, imageFirst }) => (
            <div
              key={title}
              className={`flex w-full flex-col items-center gap-6 xl:h-[440px] xl:gap-0 ${
                imageFirst ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
            >
              <div className="flex h-[240px] w-full items-center justify-center rounded-large bg-white-40 xl:h-full xl:w-[600px] xl:shrink-0">
                <p className="type-caps text-secondary">{placeholder}</p>
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-4 px-0 xl:px-16">
                <h3 className="type-h3 w-full text-espresso">{title}</h3>
                <p className="type-body w-full text-charcoal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
