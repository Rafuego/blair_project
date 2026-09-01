import Image from "next/image";
import { Container } from "../ui/Container";

/**
 * Single-specialist panel for the care pages (node 3292:33185): portrait on a
 * white card beside the attribution copy, with a primrose assurance tab
 * hanging off the bottom edge.
 */
export function CareSpecialist({
  title,
  intro,
  image,
  lead,
  leadName,
  leadRest,
  closing,
  assurance,
  titleWidth = 824,
}: {
  title: string;
  intro?: string;
  image: string;
  lead: string;
  leadName: string;
  leadRest: string;
  closing: string;
  assurance: string;
  /** Heading measure differs per page: 824 on peri/meno, 912 on nutrition. */
  titleWidth?: number;
}) {
  return (
    <section className="w-full bg-cream">
      <Container className="flex flex-col items-center gap-[54px] px-6 py-20 xl:px-25 xl:py-25">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso" style={{ maxWidth: titleWidth }}>{title}</h2>
          {intro && (
            <p className="type-body-lg text-secondary xl:w-[950px]">{intro}</p>
          )}
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-6 overflow-clip rounded-large bg-white p-6 xl:h-[375px] xl:flex-row xl:gap-0 xl:p-10">
            <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-medium xl:h-full xl:w-[300px]">
              {/* Anchored to the top: the box is near-square against a tall
                  portrait, so cover from the bottom cuts the head off. Top
                  anchoring puts the subject 21px down, matching the render. */}
              <Image
                src={image}
                alt={leadName}
                fill
                sizes="300px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex min-w-px flex-1 flex-col items-start justify-center xl:h-full xl:px-14">
              <p className="type-body-lg text-charcoal">
                {lead}
                <span className="font-medium">{leadName}</span>
                {leadRest}
              </p>
              <p className="type-body-lg mt-3 text-charcoal">{closing}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-b-small bg-primrose px-6 py-4">
            <span className="relative size-6 shrink-0">
              <Image src="/icons/shield-check.svg" alt="" fill sizes="24px" />
            </span>
            <p className="type-body-lg-medium text-charcoal">{assurance}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
