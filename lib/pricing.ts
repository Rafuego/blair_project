export type Feature = { label: string; note?: string; dotted?: boolean };

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  cta: string;
  href: string;
  ctaVariant: "primrose-pale" | "espresso";
  featured?: boolean;
  tag?: string;
  features: Feature[];
};

export type PricingContent = {
  title: string;
  intro: string;
  plans: Plan[];
  footnote: { lead: string; link: string; href: string };
};

/** Canada. A US variant exists in Figma (Pricing_US) — add it as a sibling
 *  export and pass it to <Pricing content={...} />; the component is agnostic. */
export const PRICING_CA: PricingContent = {
  title: "Simple, transparent pricing",
  intro:
    "Transparent pricing, with complete care across every area you are interested in: perimenopause, menopause, urology and pelvic health, and clinical nutrition. The only thing that changes between plans is how long you commit.",
  plans: [
    {
      name: "6-month plan",
      price: "$69",
      cadence: "/mo. $414 for 6 months.",
      cta: "Choose 6 months",
      href: "/signup?plan=6-month",
      ctaVariant: "primrose-pale",
      features: [
        { label: "First appointment included", note: "$69 to get started" },
        { label: "Every area of care in one plan" },
        { label: "2 appointments included", dotted: true },
        {
          label: "Full treatment plan",
          note: "Extra appointments any time at $100",
          dotted: true,
        },
        { label: "Full refund within 30 days", dotted: true },
      ],
    },
    {
      name: "12-month plan",
      price: "$49.99",
      cadence: "/mo. $149.97 every 3 months.",
      cta: "Join Blair",
      href: "/signup?plan=12-month",
      ctaVariant: "espresso",
      featured: true,
      tag: "recommended",
      features: [
        {
          label: "First appointment included",
          note: "$149.97 to get started, includes consultation and first three months",
        },
        { label: "Every area of care in one plan", dotted: true },
        { label: "4 appointments included per year", dotted: true },
        {
          label:
            "Full treatment plan, reviewed and adjusted as your symptoms change",
          note: "Extra appointments any time at $100",
          dotted: true,
        },
        { label: "Full refund within 30 days", dotted: true },
      ],
    },
    {
      name: "Pay As You Go",
      price: "$25",
      cadence: "/month. Cancel anytime.",
      cta: "Get started",
      href: "/signup?plan=payg",
      ctaVariant: "primrose-pale",
      features: [
        {
          label:
            "Keeps care team, tracking, education and appointment booking active",
          note: "First appointment at $200, each follow-up at $100",
        },
        {
          label:
            "First appointment includes full treatment plan and first month of platform access",
        },
        { label: "Book an appointment any time", dotted: true },
        { label: "No commitment and nothing to unwind" },
      ],
    },
  ],
  footnote: { lead: "Not sure yet?", link: "Compare plans", href: "/pricing" },
};

/** US: identical plan copy, two plans only — no Pay As You Go. Handed off to
 *  region-specific links; prices are USD at the same numerals per the frames. */
export const PRICING_US: PricingContent = {
  ...PRICING_CA,
  plans: PRICING_CA.plans.filter((p) => p.name !== "Pay As You Go"),
};
