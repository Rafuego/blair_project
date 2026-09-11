/* eslint-disable @next/next/no-img-element */

/**
 * "Backed by leading investors" + founder quote (node 3324:7082).
 * Two cards side by side: white investors card with primrose-pale logo
 * chips, and an espresso quote card attributed to the CEO.
 */
const LOGOS = [
  { src: "/images/about/investor-1.svg", alt: "Accelia Capital", w: 100, h: 51 },
  { src: "/images/about/investor-2.svg", alt: "BDC", w: 81, h: 43 },
  { src: "/images/about/investor-3.svg", alt: "Ogaei", w: 82, h: 41 },
];

export function AboutInvestors() {
  return (
    <section className="w-full px-6 pt-10 pb-16 xl:px-8 xl:pt-18 xl:pb-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-4 xl:flex-row xl:items-center">
        <div className="flex flex-col items-start justify-center gap-8 rounded-large bg-white p-8 xl:h-[428px] xl:shrink-0 xl:gap-12 xl:p-16">
          <div className="flex flex-col items-start gap-4">
            <h2 className="type-h2 text-espresso">Backed by leading investors</h2>
            <p className="type-body-lg text-secondary">
              Blair is backed by investors who build category-defining companies.
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            {LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="flex h-16 min-w-px flex-1 flex-col items-center justify-center overflow-hidden rounded-small bg-primrose-pale px-3 py-3 xl:h-20 xl:px-8 xl:py-4"
              >
                <img src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="h-auto max-h-9 w-auto max-w-full object-contain xl:max-h-[51px]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start justify-center gap-6 rounded-large bg-espresso p-8 xl:p-16">
          <p className="font-display text-[24px] leading-[normal] text-white xl:text-[32px]">
            &ldquo;We are building the operating system for the next generation of
            healthcare. When specialist judgment lives in the system itself, the
            best care stops being a privilege of access and becomes the default
            for everyone.&rdquo;
          </p>
          <p className="type-caps text-primrose">Madge Rumman, Co-Founder and CEO</p>
        </div>
      </div>
    </section>
  );
}
