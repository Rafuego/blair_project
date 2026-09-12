import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

/**
 * Branded stand-in for destinations that live outside this site (the app's
 * signup flow, the booking system, the Google reviews profile). Each route
 * renders this until the real URL exists — then the route becomes a redirect
 * or the links get repointed at handoff.
 */
export function Placeholder({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <section className="flex min-h-screen w-full flex-col justify-center">
          <Container className="flex flex-col items-center gap-8 px-6 py-40 text-center xl:px-18">
            <div className="flex w-full flex-col items-center gap-4 text-espresso">
              <h1 className="type-h1 w-full xl:w-[860px]">{title}</h1>
              <p className="type-body-lg w-full text-secondary xl:w-[620px]">{body}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button href="/" variant="espresso">
                Back to home
              </Button>
              <Button href="/#faq" variant="primrose">
                Read the FAQ
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
