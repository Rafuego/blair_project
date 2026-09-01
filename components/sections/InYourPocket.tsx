"use client";

import Image from "next/image";
import { useState } from "react";
import { PhoneMockup } from "../PhoneMockup";
import { Container } from "../ui/Container";

/**
 * Figma's "Image Carousel Button" list (default state 3224:4122, the other two
 * to its right at 3323:11537 and 3323:11568). Selecting a row expands it with
 * its description and swaps the phone screen.
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
    screen: "/images/mockup/screen-period.png",
  },
  {
    id: "message",
    icon: "/icons/message.svg",
    title: "Message your provider",
    body: "Ongoing support between appointments, no waiting room.",
    screen: "/images/mockup/screen-message.png",
  },
  {
    id: "plan",
    icon: "/icons/pill.svg",
    title: "Your plan, evolving",
    body: "Prescriptions and follow-ups that adapt as you do.",
    screen: "/images/mockup/screen-plan.png",
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
          <div className="absolute top-1/2 left-1/2 w-[191px] -translate-x-1/2 -translate-y-1/2 xl:w-[340.79px]">
            {/* Screens are stacked and cross-faded so switching rows dissolves
                rather than cutting. */}
            <div className="relative">
              {ROWS.map(({ id, screen, title }, i) => (
                <div
                  key={id}
                  aria-hidden={i !== active}
                  className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    i === 0 ? "" : "absolute inset-0"
                  } ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  <PhoneMockup screen={screen} alt={`${title} app screen`} />
                </div>
              ))}
            </div>
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
      {ROWS.map(({ id, icon, title, body }, i) => {
        const isActive = i === active;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(i)}
            className={`flex w-full cursor-pointer items-start gap-4 p-px text-left transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              isActive ? "hover:opacity-80" : "opacity-30 hover:opacity-60"
            }`}
          >
            <span className="relative mt-0.5 size-8 shrink-0 rounded-small">
              <Image src={icon} alt="" fill sizes="32px" />
            </span>
            <span className="flex min-w-px flex-1 flex-col items-start">
              <span className="type-h5 w-full text-espresso">{title}</span>
              {/* The body reveals by growing its own row rather than being
                  mounted, so the list eases instead of jumping. */}
              <span
                className={`grid w-full transition-[grid-template-rows,opacity] duration-400 ease-out motion-reduce:transition-none ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="overflow-hidden">
                  <span className="type-body block w-full pt-1 text-secondary">
                    {body}
                  </span>
                </span>
              </span>
            </span>
          </button>
        );
      })}
    </>
  );
}
