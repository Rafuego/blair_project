"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretDown, CloseIcon, MenuIcon } from "./icons";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

/**
 * Navigation per the four nav components: Consumer/Employer × Canada/US.
 *
 * Two selectors drive the experience — the region pill (CA/US) by the logo
 * and the audience selector on the right, which shows the current audience
 * ("For Individuals" / "For Employers") and switches the entire link set:
 *
 *   Individual:  Areas of Care ▾ · How It Works · Pricing · About Us
 *   Employer:    Why Blair · Areas of Care ▾ · Proof(CA)/Value(US) ▾ ·
 *                Resources · About Us
 *
 * Panels designed so far: Areas of Care (both audiences — the CTA card swaps
 * between the assessment and Book a demo) and Value (Employer US). Why Blair
 * and Proof are drawn with carets but have no designed panels yet, so they
 * render as plain links. Selections are per-page state for now — persistence
 * (cookie/path/subdomain) is a handoff decision.
 */
const CARE_LINKS = [
  {
    label: "Perimenopause",
    href: "/care/perimenopause",
    body: "The years before your last period, and what to do about them now.",
  },
  {
    label: "Menopause",
    href: "/care/menopause",
    body: "Specialist-led care, hormonal and non-hormonal, built around you.",
  },
  {
    label: "Urology & Pelvic Health",
    href: "/care/urology-pelvic-health",
    body: "Bladder, pelvic floor and intimate health, treated properly.",
  },
  {
    label: "Nutrition & Healthy Aging",
    href: "/care/nutrition-healthy-aging",
    body: "Strength, metabolism and long-term health in midlife.",
  },
  // Kept per rafay's instruction — page to be wired later.
  { label: "Postpartum", href: "/care/postpartum", body: null },
];

const VALUE_LINKS = [
  {
    label: "ROI Calculator",
    href: "/roi-calculator",
    body: "Model the saving for a self-insured plan, by headcount.",
  },
  {
    label: "Case Studies",
    href: "/for-teams#case-studies",
    body: "What happened at the employers already running Blair.",
  },
  {
    label: "Where the savings come from",
    href: "/for-teams#savings",
    body: "Fewer visits to an answer, at the generalist rate.",
  },
];

const REGIONS = ["CA", "US"] as const;
type Region = (typeof REGIONS)[number];
type Audience = "individual" | "employer";
type Menu = "care" | "value" | "region" | "audience" | null;

function Trigger({
  label,
  active,
  onEnter,
  onClick,
}: {
  label: string;
  active: boolean;
  onEnter: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={active}
      onMouseEnter={onEnter}
      onClick={onClick}
      className={`type-button flex h-8 cursor-pointer items-center justify-center gap-1 border-b px-2 py-2 whitespace-nowrap transition-[opacity,border-color] ${
        active
          ? "border-current opacity-100"
          : "border-transparent opacity-75 hover:border-current hover:opacity-100"
      }`}
    >
      {label}
      <CaretDown className={`size-4 transition-transform ${active ? "rotate-180" : ""}`} />
    </button>
  );
}

export function Nav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState<Menu>(null);
  const [region, setRegion] = useState<Region>("CA");
  const [audience, setAudience] = useState<Audience>("individual");
  const [drawer, setDrawer] = useState(false);

  const isOpen = open === "care" || open === "value";
  const onDark = !dark && !isOpen;
  const employer = audience === "employer";

  const plainLinks = employer
    ? [
        { label: "Why Blair", href: "/for-teams" },
        { label: "Resources", href: "/for-teams#resources" },
        { label: "About Us", href: "/about" },
      ]
    : [
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Pricing", href: region === "CA" ? "/pricing/ca" : "/pricing/us" },
        { label: "About Us", href: "/about" },
      ];

  const closePanels = () => setOpen(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50" onMouseLeave={closePanels}>
      <div
        className={`transition-colors duration-300 ${
          isOpen ? "rounded-b-large bg-white shadow-[0_24px_48px_rgba(41,11,18,0.12)]" : ""
        } ${onDark ? "text-white" : "text-espresso"}`}
      >
        <Container className="flex h-16 items-center justify-between px-6 py-4 xl:h-[74px] xl:px-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-[15.8px]" aria-label="Blair Health — home">
              <Image src={onDark ? "/brand/blair-logomark.svg" : "/brand/blair-logomark-dark.svg"} alt="" width={23} height={28} priority />
              <Image src={onDark ? "/brand/blair-wordmark.svg" : "/brand/blair-wordmark-dark.svg"} alt="Blair" width={84} height={25} priority />
            </Link>
            <div className="relative hidden xl:block">
              <button
                type="button"
                aria-expanded={open === "region"}
                onMouseEnter={() => setOpen("region")}
                onClick={() => setOpen(open === "region" ? null : "region")}
                className={`type-body-sm flex cursor-pointer items-center gap-1 rounded-circle border px-3 py-1.5 transition-colors ${
                  onDark ? "border-white/40" : "border-border-taupe"
                }`}
              >
                {region}
                <CaretDown className={`size-3.5 transition-transform ${open === "region" ? "rotate-180" : ""}`} />
              </button>
              {open === "region" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="flex flex-col overflow-hidden rounded-small border border-border-taupe bg-white text-espresso shadow-[0_12px_32px_rgba(41,11,18,0.14)]">
                    {REGIONS.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setRegion(r);
                          closePanels();
                        }}
                        className={`type-body-sm cursor-pointer px-4 py-2 text-left whitespace-nowrap transition-colors hover:bg-primrose-pale ${
                          r === region ? "bg-cream" : ""
                        }`}
                      >
                        {r === "CA" ? "Canada" : "United States"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <nav className="hidden items-center gap-0.5 xl:flex xl:gap-4">
            {employer && (
              <Link
                href="/for-teams"
                onMouseEnter={closePanels}
                className="type-button flex h-8 items-center border-b border-transparent px-2 py-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100"
              >
                Why Blair
              </Link>
            )}
            <Trigger
              label="Areas of Care"
              active={open === "care"}
              onEnter={() => setOpen("care")}
              onClick={() => setOpen(open === "care" ? null : "care")}
            />
            {employer && region === "US" && (
              <Trigger
                label="Value"
                active={open === "value"}
                onEnter={() => setOpen("value")}
                onClick={() => setOpen(open === "value" ? null : "value")}
              />
            )}
            {employer && region === "CA" && (
              <Link
                href="/for-teams#proof"
                onMouseEnter={closePanels}
                className="type-button flex h-8 items-center gap-1 border-b border-transparent px-2 py-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100"
              >
                Proof
                <CaretDown className="size-4" />
              </Link>
            )}
            {(employer ? plainLinks.slice(1) : plainLinks).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onMouseEnter={closePanels}
                className="type-button flex h-8 items-center justify-center border-b border-transparent px-2 py-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            {/* Audience selector — shows the current audience, switches the nav */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={open === "audience"}
                onMouseEnter={() => setOpen("audience")}
                onClick={() => setOpen(open === "audience" ? null : "audience")}
                className="type-button flex cursor-pointer items-center gap-1 opacity-75 transition-opacity hover:opacity-100"
              >
                {employer ? "For Employers" : "For Individuals"}
                <CaretDown className={`size-4 transition-transform ${open === "audience" ? "rotate-180" : ""}`} />
              </button>
              {open === "audience" && (
                <div className="absolute top-full right-0 pt-2">
                  <div className="flex flex-col overflow-hidden rounded-small border border-border-taupe bg-white text-espresso shadow-[0_12px_32px_rgba(41,11,18,0.14)]">
                    {(["individual", "employer"] as const).map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAudience(a);
                          closePanels();
                        }}
                        className={`type-body-sm cursor-pointer px-4 py-2 text-left whitespace-nowrap transition-colors hover:bg-primrose-pale ${
                          a === audience ? "bg-cream" : ""
                        }`}
                      >
                        {a === "individual" ? "For Individuals" : "For Employers"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/login" className="type-button opacity-75 transition-opacity hover:opacity-100">
              Login
            </Link>
            <Button
              href={employer ? "/for-teams/demo" : "/signup"}
              variant="espresso"
              className={onDark ? "!bg-white !text-espresso" : ""}
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
            onClick={() => setDrawer((v) => !v)}
            className="flex size-6 cursor-pointer items-center justify-center xl:hidden"
          >
            {drawer ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </Container>

        {/* Areas of Care panel */}
        <div
          className={`hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out xl:grid ${
            open === "care" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <Container className="flex items-stretch gap-0 px-12 pt-8 pb-10">
              {CARE_LINKS.filter((l) => l.body).map(({ label, href, body }, i) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closePanels}
                  className={`group flex min-w-px flex-1 flex-col gap-2 px-7 text-espresso ${
                    i > 0 ? "border-l border-border-taupe/60" : "pl-0"
                  }`}
                >
                  <span className="type-body-medium group-hover:underline">{label}</span>
                  <span className="type-body-sm text-secondary">{body}</span>
                </Link>
              ))}
              {employer ? (
                <Link
                  href="/for-teams/demo"
                  onClick={closePanels}
                  className="relative ml-7 flex w-[224px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-medium p-4"
                >
                  <Image src="/images/urology/final-cta.png" alt="" fill sizes="224px" className="object-cover object-bottom" />
                  <div aria-hidden className="absolute inset-0 bg-black/35" />
                  <span className="type-body-medium relative text-white">Not sure where to start?</span>
                  <span className="type-button relative mt-6 rounded-circle bg-primrose px-5 py-2.5 text-espresso">
                    Book a demo
                  </span>
                </Link>
              ) : (
                <Link
                  href="/assessment"
                  onClick={closePanels}
                  className="relative ml-7 flex w-[224px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-medium p-4"
                >
                  <Image src="/images/hero.jpg" alt="" fill sizes="224px" className="object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-black/35" />
                  <span className="type-body-medium relative text-white">Not sure where to start?</span>
                  <span className="type-button relative mt-6 rounded-circle bg-primrose px-5 py-2.5 text-espresso">
                    Take the free assessment
                  </span>
                </Link>
              )}
            </Container>
          </div>
        </div>

        {/* Value panel (Employer, US) */}
        <div
          className={`hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out xl:grid ${
            open === "value" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <Container className="flex items-stretch gap-0 px-12 pt-8 pb-10 xl:pl-[164px]">
              {VALUE_LINKS.map(({ label, href, body }, i) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closePanels}
                  className={`group flex w-[218px] flex-col gap-2 px-7 text-espresso ${
                    i > 0 ? "border-l border-border-taupe/60" : "pl-0"
                  }`}
                >
                  <span className="type-body-medium group-hover:underline">{label}</span>
                  <span className="type-body-sm text-secondary">{body}</span>
                </Link>
              ))}
              <Link
                href="/for-teams/demo"
                onClick={closePanels}
                className="relative ml-12 flex w-[262px] shrink-0 flex-col items-center justify-center gap-4 overflow-hidden rounded-medium p-6"
              >
                <Image src="/images/urology/final-cta.png" alt="" fill sizes="262px" className="object-cover object-bottom" />
                <div aria-hidden className="absolute inset-0 bg-black/35" />
                <span className="type-body-medium relative text-white">Not sure where to start?</span>
                <span className="type-button relative rounded-circle bg-primrose px-6 py-2.5 text-espresso">
                  Book a demo
                </span>
              </Link>
            </Container>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawer && (
        <div className="border-t border-white/15 bg-espresso px-6 pt-2 pb-6 text-white xl:hidden">
          <div className="border-b border-white/10 py-1">
            <p className="type-caps py-3 text-taupe">Areas of Care</p>
            <div className="flex flex-col pb-2">
              {CARE_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} onClick={() => setDrawer(false)} className="type-body py-2 pl-4 opacity-75">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {plainLinks.map(({ label, href }) => (
            <div key={label} className="border-b border-white/10 py-1 last:border-0">
              <Link href={href} onClick={() => setDrawer(false)} className="type-button flex items-center justify-between py-3">
                {label}
              </Link>
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <Button href="/signup" variant="white">Get Started</Button>
            <Button href="/login" variant="ghost">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
}
