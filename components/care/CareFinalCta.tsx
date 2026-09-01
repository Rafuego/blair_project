import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/** Care-page closing CTA (node 3224:4414) — same shape as the homepage's but
 *  with its own artwork and a flat 20% scrim. */
export function CareFinalCta({
  title,
  body,
  image,
  /** Inner panel height: 574 on Perimenopause, 510 on Menopause. */
  panelHeight = 510,
}: {
  title: string;
  body: string;
  image: string;
  panelHeight?: number;
}) {
  return (
    <section className="w-full px-0 pt-4 pb-8">
      <Container className="px-4 xl:px-8">
        <div style={{ ["--panel-h" as string]: `${panelHeight}px` }}
          className="relative flex min-h-[440px] flex-col items-center justify-center gap-8 overflow-clip rounded-large px-6 py-14 xl:min-h-[var(--panel-h)] xl:gap-12 xl:px-30 xl:py-35">
          <Image
            src={image}
            alt=""
            fill
            sizes="1376px"
            className="pointer-events-none rounded-large object-cover object-bottom"
          />
          <div aria-hidden className="absolute inset-0 rounded-large bg-black/20" />
          <div className="relative flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
            <h2 className="type-h2 w-full text-white">{title}</h2>
            <p className="type-body-medium max-w-[470px] text-white">{body}</p>
          </div>
          <div className="relative flex flex-col items-center gap-3 xl:flex-row xl:gap-5">
            <Button href="/signup" variant="primrose">
              Sign up
            </Button>
            <Button href="/intro-call" variant="glass">
              Book a free intro call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
