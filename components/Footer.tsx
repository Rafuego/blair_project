import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui/Container";

const COLUMNS = [
  {
    heading: "For Patients",
    links: [
      { label: "How Blair works", href: "/roi-calculator" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    heading: "Areas of care",
    links: [
      { label: "Perimenopause", href: "/care/perimenopause" },
      { label: "Menopause", href: "/care/menopause" },
      { label: "Urology & Pelvic Health", href: "/care/urology-pelvic-health" },
      { label: "Nutrition & Healthy Aging", href: "/care/nutrition-healthy-aging" },
    ],
  },
  {
    heading: "About us",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Blair in the media", href: "/media" },
    ],
  },
  {
    heading: "For employers",
    links: [
      { label: "Solutions", href: "/for-teams" },
      { label: "Pricing", href: "/for-teams/pricing" },
      { label: "Book a demo", href: "/for-teams/demo" },
    ],
  },
  {
    heading: "Get help",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Patient referral", href: "/referral" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const SOCIALS = [
  { name: "X", icon: "/icons/social/x-dark.svg", href: "https://x.com" },
  { name: "Instagram", icon: "/icons/social/instagram-dark.svg", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="w-full">
      <Container className="px-0">
        <div className="flex w-full flex-col gap-6 overflow-clip rounded-t-large bg-espresso px-6 pt-14 pb-10 xl:pt-22 xl:pb-12 xl:px-18">
          <div className="flex w-full flex-col items-start justify-between gap-10 xl:flex-row">
            <div className="flex w-full shrink-0 flex-col items-start justify-between gap-6 xl:w-[260px] xl:gap-10 xl:self-stretch">
              <Link
                href="/"
                className="flex items-center gap-[15.8px] transition-opacity duration-200 hover:opacity-80"
                aria-label="Blair Health — home"
              >
                <Image src="/brand/blair-logomark.svg" alt="" width={23} height={28} />
                <Image src="/brand/blair-wordmark-light.svg" alt="Blair" width={84} height={25} />
              </Link>
              <p className="type-body-medium w-[240px] text-white opacity-85">
                Specialist care for every
                <br />
                stage of your life
              </p>
            </div>

            <div className="grid w-full grid-cols-2 items-start gap-x-8 gap-y-8 sm:grid-cols-3 xl:flex xl:w-auto xl:flex-wrap xl:gap-x-14">
              {COLUMNS.map(({ heading, links }) => (
                <div key={heading} className="flex flex-col items-start gap-1">
                  <p className="type-caps px-2 text-taupe">{heading}</p>
                  {links.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="type-button flex min-h-8 items-center gap-1 p-2 text-white opacity-75 transition-opacity hover:opacity-100 xl:whitespace-nowrap"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full rounded-[0.5px] bg-border-taupe opacity-30" />

          <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="type-body-sm whitespace-pre text-white opacity-60">
              Proudly Canadian   ·   © 2026 Blair Health Inc.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ name, icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex size-12 items-center justify-center rounded-circle bg-taupe transition-opacity duration-200 hover:opacity-80"
                >
                  <Image src={icon} alt="" width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
