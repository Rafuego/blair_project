import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function FinalCta() {
  return (
    <section className="w-full px-0 pt-4 pb-8">
      <Container className="px-6 xl:px-8">
        <div className="relative flex min-h-[510px] flex-col items-center justify-center gap-12 overflow-clip rounded-large px-6 py-20 xl:px-30 xl:py-35">
          <Image
            src="/images/bands/final-cta.png"
            alt=""
            fill
            sizes="1376px"
            className="pointer-events-none rounded-large object-cover object-bottom"
          />
          <div className="relative flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
            <h2 className="type-h2 w-full text-white">
              Your strongest chapter starts here
            </h2>
            <p className="type-body-medium max-w-[498px] text-cream">
              Understand where you are, get a plan from specialists, and stay
              supported as your needs change, across every stage.
            </p>
          </div>
          <div className="relative flex items-center gap-5">
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
