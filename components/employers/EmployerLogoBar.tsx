/* eslint-disable @next/next/no-img-element */
import { Container } from "../ui/Container";

/** Bordered logo strip (nodes 3224:5055 / 3224:5293). */
export function EmployerLogoBar({ title, logos }: { title: string; logos: string[] }) {
  return (
    <section className="w-full border-y-[0.5px] border-taupe">
      <Container className="flex flex-col items-start gap-4 px-6 py-6 xl:h-[120px] xl:flex-row xl:items-center xl:gap-18 xl:px-18 xl:py-0">
        <p className="type-h5 shrink-0 text-espresso">{title}</p>
        <div className="flex h-[80px] min-w-px flex-1 items-center self-stretch xl:h-full">
          {logos.map((src) => (
            <div
              key={src}
              className="flex h-full min-w-px flex-1 items-center justify-center border-[0.5px] border-taupe"
            >
              <img src={src} alt="" className="h-12 w-24 object-contain xl:h-16 xl:w-32" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
