import Image from "next/image";
import Link from "next/link";
import type { PricingContent } from "@/lib/pricing";
import { CheckCircle } from "../icons";
import { UnderlineLink } from "../ui/Button";
import { Container } from "../ui/Container";

const CTA_STYLES = {
  "primrose-pale": "bg-primrose-pale text-espresso hover:bg-primrose",
  espresso: "bg-espresso text-white hover:bg-espresso/88",
} as const;

export function Pricing({ content }: { content: PricingContent }) {
  const { title, intro, plans, footnote } = content;

  return (
    <section id="pricing" className="w-full">
      <Container className="px-4 xl:px-8">
        <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-large px-4 py-12 xl:gap-18 xl:px-6 xl:py-18">
          <Image
            src="/images/bands/pricing.png"
            alt=""
            fill
            sizes="1376px"
            className="pointer-events-none rounded-large object-cover"
          />

          <div className="relative flex w-full flex-col items-center gap-4 text-center">
            <h2 className="type-h2 w-full text-espresso">{title}</h2>
            <p className="type-body-lg max-w-[987px] text-secondary">{intro}</p>
          </div>

          <div className="relative flex w-full flex-col items-stretch gap-8 xl:flex-row xl:items-center xl:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex min-w-px flex-1 flex-col gap-6 rounded-medium bg-white px-6 py-8 xl:px-8 xl:py-10 ${
                  plan.featured ? "border-4 border-primrose" : ""
                }`}
              >
                {plan.tag && (
                  <span className="type-caps absolute -top-[13.41px] left-[30px] rounded-[99px] bg-primrose px-3 py-1 text-espresso">
                    {plan.tag}
                  </span>
                )}

                <div className="flex w-full flex-col gap-2">
                  <p className="type-h5 w-full text-espresso">{plan.name}</p>
                  <div className="flex w-full items-baseline gap-1 whitespace-nowrap">
                    <p className="type-h3 text-espresso">{plan.price}</p>
                    <p className="type-body text-secondary">{plan.cadence}</p>
                  </div>
                </div>

                <Link
                  href={plan.href}
                  className={`type-button flex w-full cursor-pointer items-center justify-center gap-1 rounded-circle px-7 py-3 transition-colors duration-200 ${CTA_STYLES[plan.ctaVariant]}`}
                >
                  {plan.cta}
                </Link>

                <ul className="flex w-full flex-col gap-4">
                  {plan.features.map(({ label, note, dotted }) => (
                    <li key={label} className="flex w-full items-start gap-4">
                      <span className="flex shrink-0 items-center pt-[3px] text-espresso">
                        <CheckCircle className="size-6" />
                      </span>
                      <span className="flex min-w-px flex-1 flex-col justify-center gap-1">
                        <span
                          className={`type-body w-full text-charcoal ${
                            dotted
                              ? "underline decoration-[#b8b1a8] decoration-dotted"
                              : ""
                          }`}
                        >
                          {label}
                        </span>
                        {note && (
                          <span className="type-body-sm w-full text-secondary">
                            {note}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center gap-2">
            <p className="type-body text-charcoal">{footnote.lead}</p>
            <UnderlineLink href={footnote.href} className="text-espresso">
              {footnote.link}
            </UnderlineLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
