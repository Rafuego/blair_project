import Image from "next/image";
import { Plus } from "../icons";
import { Container } from "../ui/Container";

export type Profile = {
  name: string;
  role: string;
  /** Omitted = the design's photo-pending treatment: grey gradient + ghost. */
  photo?: string;
  photoPosition?: string;
};

/**
 * Shared profile-card sections on About (nodes 3327:7804, 3377:14198,
 * 3327:8595, 3327:8647). Cards are 487 tall with the espresso-40 blur name
 * plate and primrose + badge; `wide` renders the two-up founder size.
 */
export function ProfileGrid({
  title,
  intro,
  profiles,
  wide = false,
}: {
  title: string;
  intro?: string;
  profiles: Profile[];
  wide?: boolean;
}) {
  return (
    <section className="w-full py-14 xl:py-18">
      <Container className="flex flex-col gap-12 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:max-w-[1141px]">{title}</h2>
          {intro && <p className="type-body-lg text-secondary">{intro}</p>}
        </div>

        <div
          className={`grid w-full grid-cols-1 gap-6 ${
            wide ? "xl:grid-cols-2 xl:px-[114px]" : "xl:grid-cols-3"
          }`}
        >
          {profiles.map(({ name, role, photo, photoPosition }) => (
            <article
              key={name}
              className={`relative flex h-[487px] w-full items-end overflow-clip rounded-medium p-2 ${
                photo ? "bg-white" : "bg-gradient-to-b from-[#cdd1d4] to-[#d0d6db]"
              }`}
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="450px"
                  className="object-cover"
                  style={photoPosition ? { objectPosition: photoPosition } : undefined}
                />
              ) : (
                /* Photo pending — ghost silhouette per the design (3377:14211) */
                <div aria-hidden className="absolute inset-0 opacity-20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/specialists/pooja.png"
                    alt=""
                    className="absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 grayscale"
                  />
                </div>
              )}
              <span className="absolute top-5 right-5 flex size-12 items-center justify-center rounded-circle bg-primrose text-charcoal">
                <Plus className="size-6" />
              </span>
              <div className="relative flex min-w-px flex-1 flex-col items-start gap-1 rounded-medium bg-espresso-40 p-4 text-white backdrop-blur-[9px]">
                <p className="type-body-lg-medium">{name}</p>
                <p className="type-caps">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
