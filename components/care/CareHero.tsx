import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/**
 * Hero for the care-area pages (Figma node 3354:5655 on Perimenopause).
 * Prop-driven because Menopause, Urology and Nutrition share the composition.
 *
 * The plate is inset 32px inside an espresso field and rounds off at the
 * bottom, so the nav sits over dark rather than over the photograph edge.
 */
export function CareHero({
  title,
  body,
  image,
  padBottom = false,
  primary = { label: "Sign up", href: "/signup" },
  secondary = { label: "Book a free intro call", href: "/intro-call" },
}: {
  title: string;
  body: string;
  image: string;
  /** Menopause seats the plate in an espresso well with 32px beneath it. */
  padBottom?: boolean;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="w-full bg-espresso">
      <Container className={`px-4 xl:px-8 ${padBottom ? "pb-8" : ""}`}>
        <div className="relative flex min-h-[490px] w-full flex-col items-start justify-end overflow-clip rounded-b-large xl:h-[810px]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1376px"
            priority
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(200.27deg, rgba(0,0,0,0.1) 51.57%, rgba(0,0,0,0.6) 74.36%), linear-gradient(180deg, rgba(0,0,0,0.304) 0%, rgba(0,0,0,0.076) 42.16%, rgba(0,0,0,0.304) 84.32%)",
            }}
          />
          <div className="relative flex w-full flex-col items-start justify-end px-6 py-12 xl:px-10 xl:py-16">
            <div className="flex w-full flex-col items-start justify-end gap-8 xl:w-[754px] xl:gap-12">
              <div className="flex w-full flex-col items-start gap-6 text-white">
                <h1 className="type-h1 w-full xl:w-[621px]">{title}</h1>
                <p className="type-body-lg-medium w-full xl:w-[685px]">{body}</p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="flex flex-wrap items-center gap-2">
                  <Button href={primary.href} variant="primrose">
                    {primary.label}
                  </Button>
                  <Button href={secondary.href} variant="glass">
                    {secondary.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
