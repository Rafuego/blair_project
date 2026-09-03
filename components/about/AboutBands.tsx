import { Container } from "../ui/Container";

/** The full-width statement between sections (node 3324:7064). */
export function AboutStatement() {
  return (
    <section className="w-full py-8 xl:py-18">
      <Container className="px-6 xl:px-[136px]">
        <h2 className="type-h2 w-full text-center text-espresso">
          Telehealth put a video call on top of a broken system. We rebuilt the
          layer underneath.
        </h2>
      </Container>
    </section>
  );
}

/** Media inquiries strip (node 3329:9747). */
export function AboutMedia() {
  return (
    <section className="w-full py-8 xl:py-18">
      <Container className="px-4 xl:px-8">
        <div className="flex w-full flex-col items-start justify-between gap-6 rounded-large bg-primrose-pale px-6 py-10 xl:flex-row xl:items-center xl:px-20">
          <h2 className="type-h2 text-espresso">Media inquiries.</h2>
          <p className="type-body-lg text-charcoal xl:w-[751px]">
            For press and interview requests, contact{" "}
            <a href="mailto:hello@blairhealth.ca" className="underline decoration-current">
              hello@blairhealth.ca
            </a>
            . We are glad to talk about women&rsquo;s health, clinical AI, and
            rebuilding care infrastructure.
          </p>
        </div>
      </Container>
    </section>
  );
}
