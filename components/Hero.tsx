import Image from "next/image";
import { ArrowRight } from "./icons";
import { Button, UnderlineLink } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-[810px] w-full flex-col items-start justify-end overflow-hidden">
      {/* Background plate. Crop box and horizontal mirror taken verbatim from
          the Figma image fill (the source photo faces left; the fill mirrors
          it). Percentages are relative to the 1440x810 hero box. */}
      <div aria-hidden className="absolute inset-0 -z-10 scale-x-[-1] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          width={1651}
          height={1101}
          priority
          sizes="115vw"
          className="absolute max-w-none"
          style={{
            left: "-0.36%",
            top: "-35.74%",
            width: "114.67%",
            height: "135.95%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
      </div>

      <div className="flex h-[320px] w-full items-start text-white">
        <div className="flex h-full flex-1 flex-col items-start justify-end gap-6 px-18 py-[54px]">
          <h1 className="type-h1 w-full">Specialist care that keeps up with you</h1>
          <div className="flex items-center gap-2">
            <p className="type-body-medium whitespace-nowrap">For employers?</p>
            <UnderlineLink href="/for-teams">
              Explore Blair for teams
              <ArrowRight className="size-4" />
            </UnderlineLink>
          </div>
        </div>

        <div className="flex h-full flex-1 flex-col items-start justify-end gap-6 px-18 py-[54px]">
          <p className="type-body-medium w-[520px]">
            Blair connects you to specialist-level care across women&rsquo;s health
            — perimenopause and menopause, pelvic and urology, postpartum, and
            nutrition — with the tracking and support to keep up with your life.
            No referrals. No waitlists.
          </p>
          <div className="flex items-center gap-2">
            <Button href="/signup" variant="primrose">
              Sign up
            </Button>
            <Button href="/intro-call" variant="glass">
              Book a free intro call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
