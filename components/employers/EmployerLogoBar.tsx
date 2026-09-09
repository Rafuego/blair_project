/* eslint-disable @next/next/no-img-element */
import { Container } from "../ui/Container";

/**
 * Bordered logo strip (nodes 3224:5055 / 3224:5293).
 *
 * Logos ship on a shared 128×64 canvas but their drawn artwork fills wildly
 * different amounts of it (CNN fills the canvas; others float small inside).
 * A per-logo `h` lets each render at the height that puts its drawn artwork
 * at the same optical size.
 */
type Logo = string | { src: string; h: number };

export function EmployerLogoBar({ title, logos }: { title: string; logos: Logo[] }) {
  return (
    <section className="w-full border-y-[0.5px] border-taupe">
      <Container className="flex flex-col items-start gap-4 px-6 py-6 xl:h-[120px] xl:flex-row xl:items-center xl:gap-18 xl:px-18 xl:py-0">
        <p className="type-h5 shrink-0 text-espresso">{title}</p>
        <div className="flex h-[80px] min-w-px flex-1 items-center self-stretch xl:h-full">
          {logos.map((logo) => {
            const src = typeof logo === "string" ? logo : logo.src;
            const h = typeof logo === "string" ? undefined : logo.h;
            return (
              <div
                key={src}
                className="flex h-full min-w-px flex-1 items-center justify-center border-[0.5px] border-taupe"
              >
                {h ? (
                  <img src={src} alt="" style={{ height: h }} className="w-auto max-w-[80%] object-contain" />
                ) : (
                  <img src={src} alt="" className="h-12 w-24 object-contain xl:h-16 xl:w-32" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
