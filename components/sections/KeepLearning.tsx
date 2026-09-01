import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/social/instagram.svg", href: "https://instagram.com" },
  { name: "Facebook", icon: "/icons/social/facebook.svg", href: "https://facebook.com" },
  { name: "X", icon: "/icons/social/x.svg", href: "https://x.com" },
  { name: "YouTube", icon: "/icons/social/youtube.svg", href: "https://youtube.com" },
];

export function KeepLearning() {
  return (
    <section className="w-full px-0 pt-18 pb-4">
      <Container className="px-6 xl:px-8">
        <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-large px-6 py-10 xl:flex-row xl:gap-16 xl:px-12">
          <Image
            src="/images/bands/lead-capture.png"
            alt=""
            fill
            sizes="1376px"
            className="pointer-events-none rounded-large object-cover"
          />

          <div className="relative flex min-w-px flex-1 flex-col gap-8">
            <div className="flex w-full flex-col gap-4">
              <h2 className="type-h2 w-full text-espresso">
                Keep learning with us
              </h2>
              <p className="type-body w-full text-charcoal">
                Women&rsquo;s health is finally getting the attention it
                deserves. Get expert-backed guidance, new features, and honest
                answers in your inbox.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="type-caps text-charcoal">Follow along</p>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ name, icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex size-12 items-center justify-center rounded-circle bg-espresso text-white"
                  >
                    <Image src={icon} alt="" width={24} height={24} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <form className="relative flex min-w-px flex-1 flex-col gap-6 rounded-medium bg-white p-10">
            <p className="type-h5 w-full text-espresso">Stay in the loop</p>
            <div className="flex w-full flex-col gap-1.5">
              <label htmlFor="newsletter-email" className="type-caps text-espresso">
                email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="name@email.com"
                className="type-body h-10 w-full border-b border-border-taupe bg-transparent text-espresso placeholder:text-secondary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="type-button flex w-full cursor-pointer items-center justify-center gap-1 rounded-circle bg-primrose px-7 py-3 text-espresso"
            >
              Join the list
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
