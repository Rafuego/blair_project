import { Container } from "../../ui/Container";
import { CA_WAIT_STATEMENT, CA_WAIT_STATS } from "@/lib/employers-ca";

/**
 * "In Canada, the most expensive part of healthcare is the wait."
 * (node 3224:5535) — espresso-dark band with six primrose stats, followed by
 * the espresso statement card (node 3224:5558).
 */
export function CaWait() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="rounded-b-large bg-espresso-dark px-6 py-16 xl:px-10 xl:py-30">
          <div className="flex flex-col gap-12 xl:gap-18">
            <h2 className="type-h2 text-center text-white">
              In Canada, the most expensive <span className="block">part of healthcare is the wait.</span>
            </h2>
            <div className="grid w-full grid-cols-1 gap-x-0 gap-y-10 text-center sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-14">
              {CA_WAIT_STATS.map((s) => (
                <div key={s.stat} className="flex flex-col items-center gap-3">
                  <p className="font-display text-[32px] leading-none text-primrose xl:text-[40px]">
                    {s.stat}
                  </p>
                  <p className="type-body text-white" style={{ maxWidth: s.width }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Container className="px-4 xl:px-8">
          <div className="flex w-full flex-col items-start justify-between gap-8 rounded-b-[40px] bg-espresso px-6 py-12 xl:flex-row xl:items-end xl:rounded-b-[64px] xl:px-18 xl:py-22">
            <p className="type-h5 w-full text-white xl:w-[550px]">{CA_WAIT_STATEMENT.lead}</p>
            <p className="type-body w-full text-taupe xl:w-[592px]">{CA_WAIT_STATEMENT.sub}</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
