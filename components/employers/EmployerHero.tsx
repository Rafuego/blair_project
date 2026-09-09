import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EMP_HERO } from "@/lib/employers-us";

/**
 * Employer hero (nodes 3224:5047 US / 3224:5516 CA — same layout, different
 * copy). Both CTAs anchor to the lead-capture form.
 */
export function EmployerHero({
  title = EMP_HERO.title,
  body = EMP_HERO.body,
  bodyTone = "charcoal",
}: {
  title?: string;
  body?: string;
  bodyTone?: "charcoal" | "secondary";
}) {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-8 px-6 pt-40 pb-16 text-center xl:px-18 xl:pt-50 xl:pb-25">
        <div className="flex w-full flex-col items-center gap-4 text-espresso">
          <h1 className="type-h1 w-full xl:w-[962px]">{title}</h1>
          <p
            className={`type-body-lg w-full xl:w-[920px] ${
              bodyTone === "secondary" ? "text-secondary" : "text-charcoal"
            }`}
          >
            {body}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button href="#demo" variant="espresso">
            Book a demo
          </Button>
          <Button href="#demo" variant="primrose">
            Talk to our team
          </Button>
        </div>
      </Container>
    </section>
  );
}
