import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EMP_HERO } from "@/lib/employers-us";

/** Hero (node 3224:5047): centred statement, Book a demo + Talk to our team. */
export function EmployerHero() {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-8 px-6 pt-40 pb-16 text-center xl:px-18 xl:pt-50 xl:pb-25">
        <div className="flex w-full flex-col items-center gap-4 text-espresso">
          <h1 className="type-h1 w-full xl:w-[962px]">{EMP_HERO.title}</h1>
          <p className="type-body-lg w-full text-charcoal xl:w-[920px]">{EMP_HERO.body}</p>
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
