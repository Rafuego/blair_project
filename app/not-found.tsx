import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Branded 404 for uncreated routes (e.g. Resources). */
export default function NotFound() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <section className="flex min-h-screen w-full flex-col justify-center">
          <Container className="flex flex-col items-center gap-8 px-6 py-40 text-center xl:px-18">
            <div className="flex w-full flex-col items-center gap-4 text-espresso">
              <p className="type-caps text-secondary">404</p>
              <h1 className="type-h1 w-full xl:w-[820px]">
                This page isn&rsquo;t here yet.
              </h1>
              <p className="type-body-lg w-full text-secondary xl:w-[560px]">
                The page you&rsquo;re looking for doesn&rsquo;t exist or hasn&rsquo;t been built.
              </p>
            </div>
            <Button href="/" variant="espresso">
              Back to home
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
