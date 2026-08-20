import Image from "next/image";
import Link from "next/link";
import { CaretDown } from "./icons";
import { Button } from "./ui/Button";

const LINKS = [
  { label: "What Is Blair", href: "#what-is-blair", menu: false },
  { label: "How It Works", href: "#how-it-works", menu: false },
  { label: "Areas of Care", href: "#areas-of-care", menu: true },
  { label: "Pricing", href: "#pricing", menu: true },
  { label: "About Us", href: "#about", menu: true },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-[74px] items-center justify-between px-18 py-4 text-white">
      <Link href="/" className="flex items-center gap-[15.8px]" aria-label="Blair Health — home">
        <Image
          src="/brand/blair-logomark.svg"
          alt=""
          width={23}
          height={28}
          priority
        />
        <Image
          src="/brand/blair-wordmark.svg"
          alt="Blair"
          width={84}
          height={25}
          priority
        />
      </Link>

      <nav className="flex items-center gap-4">
        {LINKS.map(({ label, href, menu }) => (
          <Link
            key={label}
            href={href}
            className="type-button flex h-8 shrink-0 items-center justify-center gap-1 p-2 opacity-75 transition-opacity hover:opacity-100"
          >
            {label}
            {menu && <CaretDown className="size-4" />}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button href="/signup" variant="white">
          Sign Up
        </Button>
        <Button href="/login" variant="ghost">
          Login
        </Button>
      </div>
    </header>
  );
}
