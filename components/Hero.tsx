import Image from "next/image";
import { ArrowRight } from "./icons";
import { Button, UnderlineLink } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-[750px] w-full flex-col items-start justify-end overflow-hidden xl:min-h-[810px]">
      {/* Background plate, mirrored per the Figma image fill (the source
          photo faces left). Cover + bottom anchor reproduces the designed
          crop window at 1440 and stays undistorted at any viewport — the
          old percentage crop box changed shape with the section and
          stretched the photo on wide screens. */}
      <div aria-hidden className="absolute inset-0 -z-10 scale-x-[-1] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
      </div>

      <Container className="flex flex-col text-white xl:min-h-[320px] xl:flex-row xl:items-start">
        <div className="flex min-w-0 flex-1 flex-col items-start justify-end gap-6 px-6 pt-12 pb-4 xl:px-18 xl:py-[54px]">
          <h1 className="type-h1 w-full">Specialist care that keeps up with you</h1>
          <div className="flex items-center gap-2">
            <p className="type-body-medium whitespace-nowrap">For employers?</p>
            <UnderlineLink href="/for-teams">
              Explore Blair for teams
              <ArrowRight className="size-4" />
            </UnderlineLink>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start justify-end gap-6 px-6 pt-4 pb-10 xl:px-18 xl:py-[54px]">
          <p className="type-body-medium w-full max-w-[520px]">
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
      </Container>
    </section>
  );
}
