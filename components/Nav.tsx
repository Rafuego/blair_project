"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretDown, CloseIcon, MenuIcon } from "./icons";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

/**
 * Consumer navigation per the nav components (Consumer navigation, Canada/US).
 *
 * Opening a dropdown turns the whole bar into a white surface with the panel
 * beneath it — over photo heroes the closed bar stays transparent/white-text,
 * so the open state swaps the entire header to dark-on-white.
 *
 * The region pill switches CA/US; today that routes Pricing to the matching
 * page. "For Individuals" is drawn with a caret in the components but its
 * panel is not designed yet, so it renders without a menu.
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

const REGIONS = ["CA", "US"] as const;

export function Nav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState<"care" | "region" | null>(null);
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("CA");
  const [drawer, setDrawer] = useState(false);

  const isOpen = open !== null;
  const onDark = !dark && !isOpen;

  const CENTER_LINKS = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: region === "CA" ? "/pricing/ca" : "/pricing/us" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header
      className="absolute inset-x-0 top-0 z-50"
      onMouseLeave={() => setOpen(null)}
    >
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
            {/* Region pill */}
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
                          setOpen(null);
                        }}
                        className={`type-body-sm cursor-pointer px-4 py-2 text-left transition-colors hover:bg-primrose-pale ${
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
            <button
              type="button"
              aria-expanded={open === "care"}
              onMouseEnter={() => setOpen("care")}
              onClick={() => setOpen(open === "care" ? null : "care")}
              className={`type-button flex h-8 cursor-pointer items-center justify-center gap-1 border-b px-2 py-2 whitespace-nowrap transition-[opacity,border-color] ${
                open === "care" ? "border-current opacity-100" : "border-transparent opacity-75 hover:border-current hover:opacity-100"
              }`}
            >
              Areas of Care
              <CaretDown className={`size-4 transition-transform ${open === "care" ? "rotate-180" : ""}`} />
            </button>
            {CENTER_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onMouseEnter={() => setOpen(null)}
                className="type-button flex h-8 items-center justify-center border-b border-transparent px-2 py-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <span className="type-button flex items-center gap-1 opacity-75">
              For Individuals
              <CaretDown className="size-4" />
            </span>
            <Link href="/login" className="type-button opacity-75 transition-opacity hover:opacity-100">
              Login
            </Link>
            <Button href="/signup" variant="espresso" className={onDark ? "!bg-white !text-espresso" : ""}>
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
                  onClick={() => setOpen(null)}
                  className={`group flex min-w-px flex-1 flex-col gap-2 px-7 text-espresso ${
                    i > 0 ? "border-l border-border-taupe/60" : "pl-0"
                  }`}
                >
                  <span className="type-body-medium group-hover:underline">{label}</span>
                  <span className="type-body-sm text-secondary">{body}</span>
                </Link>
              ))}
              <Link
                href="/assessment"
                onClick={() => setOpen(null)}
                className="relative ml-7 flex w-[224px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-medium p-4"
              >
                <Image src="/images/hero.jpg" alt="" fill sizes="224px" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-black/35" />
                <span className="type-body-medium relative text-white">Not sure where to start?</span>
                <span className="type-button relative mt-6 rounded-circle bg-primrose px-5 py-2.5 text-espresso">
                  Take the free assessment
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
          {CENTER_LINKS.map(({ label, href }) => (
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
