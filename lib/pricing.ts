/** `dotted` marks a feature as tooltip-bearing (the dotted underline is the
 *  trigger affordance). `tooltip` is the hover copy — PLACEHOLDER text except
 *  where the design provides it; developers edit these strings only. */
export type Feature = {
  label: string;
  note?: string;
  dotted?: boolean;
  tooltip?: string;
};

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
        {
          label: "2 appointments included",
          dotted: true,
          tooltip: "Two provider appointments over your six months, booked whenever you need them.",
        },
        {
          label: "Full treatment plan",
          note: "Extra appointments any time at $100",
          dotted: true,
          tooltip: "Assessment, diagnosis, prescriptions where appropriate, and follow-up — built for you by your provider.",
        },
        {
          label: "Full refund within 30 days",
          dotted: true,
          tooltip: "Not the right fit? Tell us within 30 days of starting and we refund in full.",
        },
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
        {
          label: "Every area of care in one plan",
          dotted: true,
          tooltip: "Perimenopause and menopause, urology and pelvic health, and clinical nutrition. Use your appointments for any of them.",
        },
        {
          label: "4 appointments included per year",
          dotted: true,
          tooltip: "Four provider appointments across your year, booked whenever you need them.",
        },
        {
          label:
            "Full treatment plan, reviewed and adjusted as your symptoms change",
          note: "Extra appointments any time at $100",
          dotted: true,
          tooltip: "Your plan is reviewed at every follow-up and adjusted as your symptoms and goals change.",
        },
        {
          label: "Full refund within 30 days",
          dotted: true,
          tooltip: "Not the right fit? Tell us within 30 days of starting and we refund in full.",
        },
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
        {
          label: "Book an appointment any time",
          dotted: true,
          tooltip: "No membership commitment needed — book a visit whenever you want one.",
        },
        { label: "No commitment and nothing to unwind" },
      ],
    },
  ],
  footnote: { lead: "Not sure yet?", link: "Compare plans", href: "/pricing" },
};

/** US (frame 3292:28673): two plans, no Pay As You Go, and its own feature
 *  copy — not a filtered copy of CA. */
export const PRICING_US: PricingContent = {
  ...PRICING_CA,
  plans: [
    {
      name: "6-month plan",
      price: "$69",
      cadence: "/mo. $414 for 6 months.",
      cta: "Choose 6 months",
      href: "/signup?plan=6-month&region=us",
      ctaVariant: "primrose-pale",
      features: [
        { label: "First appointment included", note: "$69 to get started" },
        { label: "Full access across all care areas" },
        {
          label: "2 appointments included",
          dotted: true,
          tooltip: "Two provider appointments over your six months, booked whenever you need them.",
        },
        {
          label: "Assessment, diagnosis, and personalized treatment plan",
          note: "Extra appointments any time at $100",
          dotted: true,
          tooltip: "Assessment, diagnosis, prescriptions where appropriate, and follow-up — built for you by your provider.",
        },
        {
          label: "Full refund within 30 days",
          dotted: true,
          tooltip: "Not the right fit? Tell us within 30 days of starting and we refund in full.",
        },
      ],
    },
    {
      name: "12-month plan",
      price: "$49.99",
      cadence: "/mo. $149.97 every 3 months.",
      cta: "Join Blair",
      href: "/signup?plan=12-month&region=us",
      ctaVariant: "espresso",
      featured: true,
      tag: "recommended",
      features: [
        { label: "First appointment included", note: "No separate consultation fee" },
        {
          label: "Full access across all care areas",
          dotted: true,
          tooltip: "Perimenopause and menopause, urology and pelvic health, and clinical nutrition. Use your appointments for any of them.",
        },
        {
          label: "4 appointments included per year",
          dotted: true,
          tooltip: "Four provider appointments across your year, booked whenever you need them.",
        },
        {
          label: "Assessment with instant clinical insights",
          note: "Extra appointments any time at $100",
          dotted: true,
          tooltip: "Your answers are screened against clinical criteria for immediate insights your provider builds on.",
        },
        {
          label: "Full refund within 30 days",
          dotted: true,
          tooltip: "Not the right fit? Tell us within 30 days of starting and we refund in full.",
        },
      ],
    },
  ],
};
