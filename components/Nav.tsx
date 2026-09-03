"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretDown, CloseIcon, MenuIcon } from "./icons";
import { Container } from "./ui/Container";

/**
 * Global nav per the "Consumer navigation" component (node 3003:3580):
 * logo + region pill on the left, four links in the centre (only Areas of
 * Care carries a menu), then For Individuals / divider / Login / Get Started.
 *
 * `dark` renders the cream-page variant (espresso text, dark logo); the
 * default is the over-photo variant in white.
 */
const AREAS = [
  { label: "Perimenopause & Menopause", href: "/care/perimenopause" },
  { label: "Urology & Pelvic Health", href: "/care/urology-pelvic-health" },
  { label: "Nutrition & Healthy Aging", href: "/care/nutrition-healthy-aging" },
  { label: "Postpartum", href: "/care/postpartum" },
];

const LINKS = [
  { label: "Areas of Care", href: "#areas-of-care", menu: AREAS },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing/ca" },
  { label: "About Us", href: "/about" },
];

const REGIONS = [
  { code: "CA", href: "/pricing/ca" },
  { code: "US", href: "/pricing/us" },
];

export function Nav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 ${dark ? "text-espresso" : "text-white"}`}
      onMouseLeave={() => setOpen(null)}
    >
      <Container className="flex h-16 items-center justify-between px-6 py-4 xl:h-[74px] xl:px-18">
        <div className="flex items-center gap-4 xl:w-[260px] xl:gap-8">
          <Link href="/" className="flex items-center gap-[15.8px]" aria-label="Blair Health — home">
            <Image src={dark ? "/brand/blair-logomark-dark.svg" : "/brand/blair-logomark.svg"} alt="" width={23} height={28} priority />
            <Image src={dark ? "/brand/blair-wordmark-dark.svg" : "/brand/blair-wordmark.svg"} alt="Blair" width={84} height={25} priority />
          </Link>
          {/* Region selector */}
          <div className="relative hidden xl:block" onMouseEnter={() => setOpen("region")}>
            <button
              type="button"
              aria-expanded={open === "region"}
              className="type-button flex h-8 cursor-pointer items-center justify-center gap-1 rounded-large border border-taupe py-2 pr-3 pl-3.5"
            >
              CA
              <CaretDown className={`size-4 transition-transform ${open === "region" ? "rotate-180" : ""}`} />
            </button>
            {open === "region" && (
              <div className="absolute top-full left-0 pt-2">
                <div className="flex flex-col rounded-medium bg-cream p-2 shadow-[0_12px_32px_rgba(41,11,18,0.18)]">
                  {REGIONS.map((r) => (
                    <Link key={r.code} href={r.href} className="type-body rounded-small px-4 py-2 text-espresso hover:bg-primrose-pale">
                      {r.code}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <nav className="hidden items-center gap-4 xl:flex">
          {LINKS.map(({ label, href, menu }) => (
            <div key={label} className="relative" onMouseEnter={() => setOpen(menu ? label : null)}>
              <Link
                href={href}
                aria-expanded={menu ? open === label : undefined}
                className="type-button flex h-8 items-center justify-center gap-1 border-b border-transparent p-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100"
              >
                {label}
                {menu && <CaretDown className={`size-4 transition-transform ${open === label ? "rotate-180" : ""}`} />}
              </Link>
              {menu && open === label && (
                <div className="absolute top-full left-1/2 w-max -translate-x-1/2 pt-4">
                  <div className="flex flex-col gap-1 rounded-medium bg-cream p-3 shadow-[0_12px_32px_rgba(41,11,18,0.18)]">
                    {menu.map((item) => (
                      <Link key={item.label} href={item.href} className="type-body rounded-small px-4 py-2 whitespace-nowrap text-espresso transition-colors hover:bg-primrose-pale">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center justify-end xl:flex xl:w-[382px]">
          <Link
            href="/for-teams"
            className="type-button flex h-8 items-center justify-center gap-1 px-4 py-2 whitespace-nowrap opacity-75 transition-opacity hover:opacity-100"
          >
            For Individuals
            <CaretDown className="size-4" />
          </Link>
          <div aria-hidden className={`h-8 w-px ${dark ? "bg-espresso/20" : "bg-white/25"}`} />
          <div className="flex items-center">
            <Link href="/login" className="type-button flex items-center justify-center gap-1 rounded-circle px-5 py-3">
              Login
            </Link>
            <Link
              href="/signup"
              className={`type-button flex items-center justify-center gap-1 rounded-circle px-7 py-3 transition-colors ${
                dark ? "bg-espresso text-white hover:bg-charcoal" : "bg-white text-espresso hover:bg-primrose"
              }`}
            >
              Get Started
            </Link>
          </div>
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

      {drawer && (
        <div className="border-t border-white/15 bg-espresso px-6 pt-2 pb-6 text-white xl:hidden">
          {LINKS.map(({ label, href, menu }) => (
            <div key={label} className="border-b border-white/10 py-1 last:border-0">
              <Link href={href} onClick={() => setDrawer(false)} className="type-button flex items-center justify-between py-3">
                {label}
              </Link>
              {menu && (
                <div className="flex flex-col pb-2">
                  {menu.map((item) => (
                    <Link key={item.label} href={item.href} onClick={() => setDrawer(false)} className="type-body py-2 pl-4 opacity-75">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <Link href="/signup" onClick={() => setDrawer(false)} className="type-button rounded-circle bg-white px-7 py-3 text-espresso">
              Get Started
            </Link>
            <Link href="/login" onClick={() => setDrawer(false)} className="type-button rounded-circle px-5 py-3">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
