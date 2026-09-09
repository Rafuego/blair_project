import Image from "next/image";
import { Button } from "../../ui/Button";

/** "Simple, predictable pricing" photo band (node 3224:5733). */
export function CaFinalCta() {
  return (
    <section className="w-full px-4 xl:px-8">
      <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden rounded-large px-6 py-16 xl:gap-12 xl:px-30 xl:py-25">
        <Image
          src="/images/employers-ca/final-cta-bg.png"
          alt=""
          fill
          sizes="1376px"
          className="object-cover object-bottom"
        />
        <div className="relative flex w-full flex-col items-center gap-6 text-center text-white xl:w-[800px]">
          <h2 className="type-h2">Simple, predictable pricing</h2>
          <p className="type-body-lg-medium w-full font-medium opacity-80 xl:w-[582px]">
            One per-employee-per-month subscription covers every area of care — unlimited access,
            no claims, no surprises. Volume pricing for enterprise rollouts, with spouse coverage
            available.
          </p>
        </div>
        <Button href="#demo" variant="primrose" className="relative">
          Request employer pricing
        </Button>
      </div>
    </section>
  );
}
