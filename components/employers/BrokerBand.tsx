import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/** "Bringing Blair to your clients?" broker band (node 3224:5286). */
export function BrokerBand() {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-8 px-6 pt-16 pb-20 text-center xl:px-18 xl:pt-20 xl:pb-25">
        <div className="flex flex-col items-center gap-6">
          <h2 className="type-h2 text-espresso">Bringing Blair to your clients?</h2>
          <p className="type-body w-full text-charcoal xl:w-[496px]">
            Simple implementation, no disruption to existing benefits, fixed annual cost, dedicated
            onboarding — and reporting your clients will actually read.
          </p>
        </div>
        <Button href="#demo" variant="espresso">
          Partner with us
        </Button>
      </Container>
    </section>
  );
}
