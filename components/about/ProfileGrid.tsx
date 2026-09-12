"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { Plus } from "../icons";
import { Container } from "../ui/Container";

export type Profile = {
  name: string;
  role: string;
  /** Omitted = the design's photo-pending treatment: grey gradient + ghost. */
  photo?: string;
  photoPosition?: string;
  /** Present = the card expands to the designed bio state (node 3327:7858). */
  bio?: string;
  linkedin?: string;
};

const EASE = "cubic-bezier(0.22,1,0.36,1)";

/**
 * Shared profile-card sections on About (nodes 3327:7804, 3377:14198,
 * 3327:8595, 3327:8647). Cards are 487 tall with the espresso-40 blur name
 * plate and primrose + badge; `wide` renders the two-up founder size.
 *
 * Cards with a bio expand in place (node 3327:7737) to the designed 822px
 * split. Everything stays mounted so every change tweens instead of
 * cutting: the card's flex-basis and the photo's width glide together,
 * the collapsed name plate crossfades out, and the bio panel fades in over
 * the moving geometry. Card height never changes, so the row never
 * reflows. On mobile the bio panel fades in over the full card.
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
  const [open, setOpen] = useState<number | null>(null);

  // Designed proportions (nodes 3327:7737 / 3409:8995): the expanded card
  // takes 822/1272 of a wide row or 826/1296 of a 3-up row, and only its
  // SAME-ROW siblings compress (to 211px in a 3-up row) — other rows keep
  // their default widths.
  const perRow = wide ? 2 : 3;
  const basis = (i: number) => {
    const def = wide ? "calc(50% - 12px)" : "calc(33.33% - 16px)";
    if (open === null) return def;
    if (open === i) return wide ? "calc(64.6% - 12px)" : "calc(63.7% - 16px)";
    const sameRow = Math.floor(i / perRow) === Math.floor(open / perRow);
    if (!sameRow) return def;
    return wide ? "calc(35.4% - 12px)" : "calc(16.3% - 16px)";
  };

  return (
    <section className="w-full py-14 xl:py-18">
      <Container className="flex flex-col gap-12 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:max-w-[1141px]">{title}</h2>
          {intro && <p className="type-body-lg text-secondary">{intro}</p>}
        </div>

        <div className={`flex w-full flex-col gap-6 ${wide ? "xl:px-[114px]" : ""}`}>
          {/* Explicit rows, no flex-wrap: during the close tween the growing
              siblings transiently overflow the row by a few percent, and a
              wrapping container bounces the last card to the next line and
              back — the "spazz". In a fixed row the overflow just compresses
              for a few frames instead. */}
          {Array.from({ length: Math.ceil(profiles.length / perRow) }, (_, r) =>
            profiles.slice(r * perRow, r * perRow + perRow),
          ).map((row, r) => (
            <div key={r} className="flex w-full flex-col gap-6 xl:flex-row">
              {row.map(({ name, role, photo, photoPosition, bio, linkedin }, j) => {
                const i = r * perRow + j;
                const isOpen = open === i;
                const expandable = Boolean(bio);
                return (
              <article
                key={name}
                style={{ flexBasis: basis(i), transitionTimingFunction: EASE }}
                className={`relative h-[487px] w-full min-w-0 overflow-clip transition-[flex-basis,border-radius] duration-[550ms] xl:grow-0 ${
                  isOpen ? "rounded-large" : "rounded-medium"
                } ${photo ? "bg-white" : "bg-gradient-to-b from-[#cdd1d4] to-[#d0d6db]"}`}
              >
                {/* Photo — one element in both states; its width glides
                    between full-card and the expanded 47% column. */}
                <div
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-[550ms] ${
                    isOpen ? "w-full xl:w-[47%]" : "w-full"
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
                      <img
                        src="/images/specialists/pooja.png"
                        alt=""
                        className="absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 grayscale"
                      />
                    </div>
                  )}
                </div>

                {/* Collapsed chrome: name plate + expand control. */}
                <div
                  aria-hidden={isOpen}
                  className={`absolute inset-0 flex items-end p-2 transition-opacity duration-300 ease-out ${
                    isOpen ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  {expandable && (
                    <button
                      type="button"
                      aria-label={`Read ${name}'s bio`}
                      onClick={() => setOpen(i)}
                      className="absolute top-5 right-5 flex size-12 cursor-pointer items-center justify-center rounded-circle bg-primrose text-charcoal transition-transform duration-300 hover:scale-105"
                    >
                      <Plus className="size-6" />
                    </button>
                  )}
                  <div className="flex min-w-px flex-1 flex-col items-start gap-1 rounded-medium bg-espresso-40 p-4 text-white backdrop-blur-[9px]">
                    <p className="type-body-lg-medium">{name}</p>
                    <p className="type-caps">{role}</p>
                  </div>
                </div>

                {/* Expanded bio panel: fades in over the moving geometry.
                    Full-card on mobile, right column on xl. */}
                {expandable && (
                  <div
                    aria-hidden={!isOpen}
                    className={`absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-white p-6 transition-opacity duration-[350ms] ease-out xl:w-[53%] ${
                      isOpen ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="flex w-full shrink-0 items-center justify-end">
                      <button
                        type="button"
                        aria-label={`Close ${name}'s bio`}
                        onClick={() => setOpen(null)}
                        tabIndex={isOpen ? 0 : -1}
                        className="flex size-12 cursor-pointer items-center justify-center rounded-circle bg-primrose text-charcoal"
                      >
                        <Plus className="size-6 rotate-45" />
                      </button>
                    </div>
                    <div className="flex min-h-px w-full flex-1 flex-col justify-center gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="type-h5 text-espresso">{name}</p>
                        <p className="type-caps text-secondary">{role}</p>
                      </div>
                      <p className="type-body text-espresso">{bio}</p>
                      {linkedin && (
                        <div className="flex w-full items-center pt-4">
                          <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${name} on LinkedIn`}
                            tabIndex={isOpen ? 0 : -1}
                            className="flex size-12 items-center justify-center rounded-circle bg-cream transition-colors hover:bg-primrose-pale"
                          >
                            <img src="/icons/social/linkedin.svg" alt="" className="size-6" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </article>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
