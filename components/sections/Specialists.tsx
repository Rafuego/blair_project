"use client";

import { useState } from "react";
import { Minus, Plus } from "../icons";
import { Container } from "../ui/Container";

/**
 * Portraits are cut out on white and the subject fills ~95% of each source
 * image's height, so the card fits them by height over its white background
 * rather than cropping. Figma's exported fill percentages (158%/219% etc.)
 * do not match how the file actually renders — they zoom past the top of the
 * head — so the render is the reference here, not the generated numbers.
 *
 * Clicking the badge swaps the card in place for the bio (Figma frames
 * "Expanded - Lindsay / Sarah / Pooja"): the same portrait, blurred behind an
 * espresso scrim, with the badge becoming a minus.
 */
const SPECIALISTS = [
  {
    name: "Dr. Lindsay Shirreff",
    credentials: "MD, FRCSC",
    image: "/images/specialists/lindsay.png",
    bio: "Menopause and perimenopause lead. One of Canada's few fellowship-trained menopause subspecialists, with an active research program at Mount Sinai Hospital and the University of Toronto and over 40 peer-reviewed publications.",
  },
  {
    name: "Dr. Sarah Peltz",
    credentials: "MD, FRCSC",
    image: "/images/specialists/sarah.png",
    bio: "Urology and pelvic health lead. Royal College certified urologist practising at Mackenzie Health and Cortellucci Vaughan Hospital, focused on making pelvic and bladder care easier to talk about and easier to get.",
  },
  {
    name: "Dr. Pooja Singhal",
    credentials: "MD, FACG, DABOM",
    image: "/images/specialists/pooja.png",
    bio: "Nutrition and weight management lead. Board-certified gastroenterologist and Diplomate of the American Board of Obesity Medicine, trained at Georgetown, founder of Oklahoma Gastro Health and Wellness.",
  },
];

export function Specialists() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20 xl:py-25">
      <Container className="flex flex-col items-center gap-[72px] px-4 xl:gap-18 xl:px-[73px]">
        <div className="flex w-full flex-col gap-4 text-left xl:items-center xl:text-center">
          <h2 className="type-h2 w-full text-espresso">
            Care designed by specialists who lead their fields.
          </h2>
          <p className="type-body-lg max-w-[788px] text-secondary">
            Every Blair care plan follows clinical protocols built by our
            specialist leads.
            <br />
            They designed the care; licensed NPs and MDs deliver it, held to the
            same clinical standard.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 xl:flex-row xl:items-start">
          {SPECIALISTS.map(({ name, credentials, image, bio }, i) => {
            const isOpen = open === i;
            return (
              <article
                key={name}
                className="group relative flex h-[388px] w-full shrink-0 flex-col justify-end overflow-hidden rounded-medium bg-white xl:h-[450px] xl:min-w-px xl:flex-1"
              >
                {isOpen ? (
                  <div aria-hidden className="absolute inset-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt=""
                      className="absolute top-1/2 left-1/2 h-[130%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 scale-125 blur-[12px]"
                    />
                    <div className="absolute inset-0 bg-[rgba(33,8,14,0.75)]" />
                  </div>
                ) : (
                  /* Height-fit at 112% and anchored to the top: the subject fills
                     the card as it does in Figma, and the only thing the overflow
                     crops is the lower chest, which the name plate covers anyway.
                     eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={image}
                    alt={name}
                    className="absolute top-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2"
                  />
                )}

                {isOpen && (
                  <div className="relative flex min-h-px flex-1 flex-col items-start p-6">
                    <p className="type-body-lg w-full max-w-[317px] text-white">
                      {bio}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen ? `Hide ${name}'s bio` : `Read ${name}'s bio`
                  }
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="absolute top-5 right-4 flex size-12 cursor-pointer items-center justify-center rounded-circle bg-primrose text-charcoal transition-colors duration-200 hover:bg-espresso hover:text-primrose"
                >
                  {isOpen ? (
                    <Minus className="size-6" />
                  ) : (
                    <Plus className="size-6" />
                  )}
                </button>

                <div className="relative p-1">
                  <div className="flex w-full items-center justify-between rounded-medium bg-espresso-40 px-6 py-4 whitespace-nowrap text-white backdrop-blur-[9px]">
                    <p className="type-h5">{name}</p>
                    <p className="type-body-medium">{credentials}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
