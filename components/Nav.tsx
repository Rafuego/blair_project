"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretDown, CloseIcon, MenuIcon } from "./icons";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

type NavItem = {
  label: string;
  href: string;
  menu?: { label: string; href: string }[];
};

const LINKS: NavItem[] = [
  { label: "What Is Blair", href: "#what-is-blair" },
  { label: "How It Works", href: "#how-it-works" },
  {
    label: "Areas of Care",
    href: "#areas-of-care",
    menu: [
      { label: "Perimenopause & Menopause", href: "/care/perimenopause" },
      { label: "Urology & Pelvic Health", href: "/care/urology-pelvic-health" },
      { label: "Nutrition & Healthy Aging", href: "/care/nutrition-healthy-aging" },
      { label: "Postpartum", href: "/care/postpartum" },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
    menu: [
      { label: "Plans for individuals", href: "#pricing" },
      { label: "Compare plans", href: "/pricing" },
      { label: "For employers", href: "/for-teams/pricing" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    menu: [
      { label: "Our story", href: "/about" },
      { label: "Blair in the media", href: "/media" },
    ],
  },
];

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 text-white"
      onMouseLeave={() => setOpen(null)}
    >
      <Container className="flex h-16 items-center justify-between px-6 py-4 xl:h-[74px] xl:px-18">
        <Link
          href="/"
          className="flex items-center gap-[15.8px] transition-opacity duration-200 hover:opacity-80"
          aria-label="Blair Health — home"
        >
          <Image src="/brand/blair-logomark.svg" alt="" width={23} height={28} priority />
          <Image src="/brand/blair-wordmark.svg" alt="Blair" width={84} height={25} priority />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex xl:gap-4">
          {LINKS.map(({ label, href, menu }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setOpen(menu ? label : null)}
            >
              <Link
                href={href}
                aria-expanded={menu ? open === label : undefined}
                className="type-button flex h-8 shrink-0 items-center justify-center gap-1 border-b border-transparent px-1.5 py-2 whitespace-nowrap opacity-75 transition-[opacity,border-color] hover:border-current hover:opacity-100 xl:px-2"
              >
                {label}
                {menu && (
                  <CaretDown
                    className={`size-4 transition-transform ${open === label ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {menu && open === label && (
                <div className="absolute top-full left-1/2 w-max -translate-x-1/2 pt-4">
                  <div className="flex flex-col gap-1 rounded-medium bg-cream p-3 shadow-[0_12px_32px_rgba(41,11,18,0.18)]">
                    {menu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="type-body rounded-small px-4 py-2 whitespace-nowrap text-espresso transition-colors hover:bg-primrose-pale"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Button href="/signup" variant="white">Sign Up</Button>
          <Button href="/login" variant="ghost">Login</Button>
        </div>
        <button
          type="button"
          aria-label={drawer ? "Close menu" : "Open menu"}
          aria-expanded={drawer}
          onClick={() => setDrawer((v) => !v)}
          className="flex size-6 cursor-pointer items-center justify-center text-white transition-opacity duration-200 hover:opacity-75 xl:hidden"
        >
          {drawer ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      {drawer && (
        <div className="border-t border-white/15 bg-espresso px-6 pt-2 pb-6 xl:hidden">
          {LINKS.map(({ label, href, menu }) => (
            <div key={label} className="border-b border-white/10 py-1 last:border-0">
              <Link
                href={href}
                onClick={() => setDrawer(false)}
                className="type-button flex items-center justify-between py-3 text-white"
              >
                {label}
              </Link>
              {menu && (
                <div className="flex flex-col pb-2">
                  {menu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setDrawer(false)}
                      className="type-body py-2 pl-4 text-white opacity-75"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <Button href="/signup" variant="white">Sign Up</Button>
            <Button href="/login" variant="ghost">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
}
