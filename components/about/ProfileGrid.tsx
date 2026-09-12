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

/**
 * Shared profile-card sections on About (nodes 3327:7804, 3377:14198,
 * 3327:8595, 3327:8647). Cards are 487 tall with the espresso-40 blur name
 * plate and primrose + badge; `wide` renders the two-up founder size.
 *
 * Cards with a bio expand in place (node 3327:7737): the card grows to the
 * designed 822px split — photo left, bio panel right with the close button
 * and a LinkedIn chip — while its row sibling stays collapsed. Widths
 * animate via flex-basis, the same mechanism as the care-plan cards.
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

  // Designed proportions: expanded 822 / row 1272 (wide) or 1296 (3-up).
  const basis = (i: number) => {
    if (open === null) return wide ? "calc(50% - 12px)" : "calc(33.33% - 16px)";
    if (open === i) return wide ? "calc(64.6% - 12px)" : "calc(63.4% - 16px)";
    return wide ? "calc(35.4% - 12px)" : "calc(33.33% - 16px)";
  };

  return (
    <section className="w-full py-14 xl:py-18">
      <Container className="flex flex-col gap-12 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:max-w-[1141px]">{title}</h2>
          {intro && <p className="type-body-lg text-secondary">{intro}</p>}
        </div>

        <div
          className={`flex w-full flex-col gap-6 xl:flex-row xl:flex-wrap ${
            wide ? "xl:px-[114px]" : ""
          }`}
        >
          {profiles.map(({ name, role, photo, photoPosition, bio, linkedin }, i) => {
            const isOpen = open === i;
            const expandable = Boolean(bio);
            return (
              <article
                key={name}
                style={{ flexBasis: basis(i) }}
                className={`relative w-full overflow-clip transition-[flex-basis] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] xl:min-w-px xl:grow-0 ${
                  isOpen
                    ? "flex flex-col rounded-large bg-white xl:h-[487px] xl:flex-row"
                    : `flex h-[487px] items-end rounded-medium p-2 ${
                        photo ? "bg-white" : "bg-gradient-to-b from-[#cdd1d4] to-[#d0d6db]"
                      }`
                }`}
              >
                {isOpen ? (
                  <>
                    <div className="relative h-[260px] w-full shrink-0 xl:h-full xl:w-[47%]">
                      <Image
                        src={photo!}
                        alt={name}
                        fill
                        sizes="450px"
                        className="object-cover"
                        style={photoPosition ? { objectPosition: photoPosition } : undefined}
                      />
                    </div>
                    <div className="flex min-w-px flex-1 flex-col p-6 animate-[fade-in-up_400ms_cubic-bezier(0.22,1,0.36,1)]">
                      <div className="flex w-full items-center justify-end">
                        <button
                          type="button"
                          aria-label={`Close ${name}'s bio`}
                          onClick={() => setOpen(null)}
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
                              className="flex size-12 items-center justify-center rounded-circle bg-cream transition-colors hover:bg-primrose-pale"
                            >
                              <img src="/icons/social/linkedin.svg" alt="" className="size-6" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                    <div className="relative flex min-w-px flex-1 flex-col items-start gap-1 rounded-medium bg-espresso-40 p-4 text-white backdrop-blur-[9px]">
                      <p className="type-body-lg-medium">{name}</p>
                      <p className="type-caps">{role}</p>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
