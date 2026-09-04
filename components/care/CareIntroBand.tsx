import { Container } from "../ui/Container";

/** The espresso band directly under the care hero (node 3224:4219). */
export function CareIntroBand({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  /** Trailing sentence set in primrose (Urology band, node 3224:6223). */
  accent?: string;
}) {
  return (
    <section className="w-full overflow-clip rounded-b-[48px] bg-espresso">
      <Container className="px-0">
        <div className="flex w-full flex-col items-start justify-between gap-8 px-6 py-16 xl:flex-row xl:items-end xl:px-18 xl:py-25">
          <h2 className="type-h2 whitespace-pre-line text-white xl:w-[744px]">
            {title}
          </h2>
          <p className="type-body-lg whitespace-pre-line text-taupe xl:w-[552px]">
            {body}
            {accent && (
              <span className="type-body-lg-medium text-primrose"> {accent}</span>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
