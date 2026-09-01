import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/** "Wondering if this is perimenopause?" (node 3323:12205). */
export function CareAssessment({
  title,
  paragraphs,
  image,
}: {
  title: string;
  paragraphs: string[];
  image: string;
}) {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-10 px-6 pt-20 pb-12 xl:flex-row xl:gap-18 xl:px-18 xl:pt-30 xl:pb-18">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-large xl:h-[430px] xl:w-[600px]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 600px"
            className="object-cover object-bottom"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start justify-end gap-8">
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="type-h2 w-full text-espresso xl:w-[582px]">{title}</h2>
            <div className="flex w-full flex-col gap-3 xl:w-[500px]">
              {paragraphs.map((p) => (
                <p key={p} className="type-body text-charcoal">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button href="/assessment" variant="espresso">
              Start the free assessment
            </Button>
            <Button href="/intro-call" variant="primrose">
              Book a free NP call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
