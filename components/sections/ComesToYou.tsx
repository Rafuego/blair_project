import Image from "next/image";
import { Container } from "../ui/Container";

export function ComesToYou() {
  return (
    <section className="w-full py-25">
      <Container className="flex flex-col gap-10 px-5 xl:flex-row xl:items-center xl:gap-18 xl:px-18">
        {/* Left: copy above, image below */}
        <div className="flex min-w-px flex-1 flex-col justify-end gap-12 xl:self-stretch">
          <div className="flex w-full flex-col gap-6">
            <h2 className="type-h2 w-full max-w-[582px] text-espresso">
              Care that comes to you — no waitlist required
            </h2>
            <p className="type-body w-full text-secondary">
              Getting specialist care in Canada too often means long waits and
              starting over with every referral. Blair changes that:
              specialist-level care, right when you need it — so you get answers
              sooner and back to feeling like you.
            </p>
          </div>
          <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-large xl:h-[458.33px]">
            <Image
              src="/images/comes-to-you/left.png"
              alt=""
              fill
              sizes="(max-width: 1440px) 45vw, 612px"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right: image above, copy below */}
        <div className="flex min-w-px flex-1 flex-col-reverse gap-12 xl:min-h-[886.5px] xl:flex-col">
          <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-large xl:h-[610.9px]">
            <Image
              src="/images/comes-to-you/right.jpg"
              alt=""
              fill
              sizes="(max-width: 1440px) 45vw, 612px"
              className="object-cover"
              style={{ objectPosition: "center 31%" }}
            />
          </div>
          <div className="flex w-full flex-col gap-6">
            <p className="type-body w-full text-secondary">
              We&rsquo;ve built real specialist expertise into everything Blair
              does. Not a referral. Not a runaround. Just the right care, right
              away.
            </p>
            <h2 className="type-h2 w-full text-charcoal">
              Built with leading women&rsquo;s health specialists.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
