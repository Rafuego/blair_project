"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";

/**
 * Figma's "Image Carousel Button" list. Selecting a row expands it with its
 * description and is meant to swap the phone screen alongside it.
 *
 * Only the "Track and understand" state exists in the design — the other two
 * rows are drawn collapsed, so neither their body copy nor their phone screens
 * have been designed yet. They are wired to the same screen until they are.
 *
 * Mobile stacks title -> plate -> rows; desktop puts the plate on the left with
 * title and rows sharing the right column, so the order is driven by flex
 * ordering rather than duplicated markup.
 */
const ROWS = [
  {
    id: "track",
    icon: "/icons/track.svg",
    title: "Track and understand",
    body: "Log how you feel and see the patterns that make every visit smarter.",
    screen: "/images/pocket/phone-track.png",
  },
  {
    id: "message",
    icon: "/icons/message.svg",
    title: "Message your provider",
    body: null,
    screen: "/images/pocket/phone-track.png",
  },
  {
    id: "plan",
    icon: "/icons/pill.svg",
    title: "Your plan, evolving",
    body: null,
    screen: "/images/pocket/phone-track.png",
  },
];

export function InYourPocket() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full pb-0 xl:py-6">
      <Container className="flex flex-col xl:flex-row xl:items-center">
        {/* Plate: second on mobile, first on desktop */}
        <div className="relative order-2 h-[433px] w-full shrink-0 overflow-clip xl:order-1 xl:h-[777px] xl:w-[48.61%] xl:max-w-[700px] xl:rounded-r-large">
          <div aria-hidden className="absolute inset-0 xl:blur-[10px]">
            <Image
              src="/images/pocket/plate.jpg"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 847px"
              className="scale-110 object-cover"
            />
          </div>
          <div className="absolute top-[17.7px] left-1/2 h-[395.7px] w-[191px] -translate-x-1/2 overflow-hidden rounded-[30px] xl:top-[48.91px] xl:h-[701.401px] xl:w-[333.752px] xl:rounded-[54px]">
            <Image
              src={ROWS[active].screen}
              alt={ROWS[active].title}
              fill
              sizes="(max-width: 1280px) 191px, 334px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Copy: first on mobile, right column on desktop */}
        <div className="order-1 flex min-w-0 flex-1 flex-col px-6 pb-8 xl:order-2 xl:justify-between xl:self-stretch xl:p-18">
          <div className="flex w-full flex-col gap-6">
            <h2 className="type-h2 w-full text-espresso">
              Your care,
              <br className="hidden xl:inline" />
              in your pocket
            </h2>
            <p className="type-body-lg w-full text-charcoal">
              Track how you feel, message your provider, and watch your plan
              evolve — all in one place.
            </p>
          </div>
          <div className="mt-10 hidden w-full flex-col items-end gap-[25px] xl:flex">
            <RowList active={active} setActive={setActive} />
          </div>
        </div>

        {/* Rows: last on mobile only */}
        <div className="order-3 flex w-full flex-col gap-6 px-6 py-12 xl:hidden">
          <RowList active={active} setActive={setActive} />
        </div>
      </Container>
    </section>
  );
}

function RowList({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <>
      {ROWS.map(({ id, icon, title, body }, i) => (
        <button
          key={id}
          type="button"
          aria-pressed={i === active}
          onClick={() => setActive(i)}
          className={`flex w-full cursor-pointer items-center gap-4 p-px text-left transition-opacity duration-200 ${
            i === active ? "hover:opacity-80" : "opacity-30 hover:opacity-60"
          }`}
        >
          <span className="relative size-8 shrink-0 rounded-small">
            <Image src={icon} alt="" fill sizes="32px" />
          </span>
          <span className="flex min-w-px flex-1 flex-col items-start gap-1">
            <span className="type-h5 w-full text-espresso">{title}</span>
            {i === active && body && (
              <span className="type-body w-full text-charcoal">{body}</span>
            )}
          </span>
        </button>
      ))}
    </>
  );
}
