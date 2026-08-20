"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Figma's "Image Carousel Button" list. Selecting a row expands it with its
 * description and is meant to swap the phone screen alongside it.
 *
 * Only the "Track and understand" state exists in the design — the other two
 * rows are drawn collapsed, so neither their body copy nor their phone screens
 * have been designed yet. They are wired to the same screen until they are.
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
    <section className="flex w-full items-center py-6">
      <div className="relative h-[777px] w-[700px] shrink-0 overflow-clip rounded-r-large">
        <div
          aria-hidden
          className="absolute h-[948.385px] w-[846.577px] blur-[10px]"
          style={{ left: -37.11, top: -67.52 }}
        >
          <Image
            src="/images/pocket/plate.jpg"
            alt=""
            fill
            sizes="847px"
            className="object-cover"
          />
        </div>
        <div
          className="absolute left-1/2 h-[701.401px] w-[333.752px] -translate-x-1/2 overflow-hidden rounded-[54px]"
          style={{ top: 48.91 }}
        >
          <Image
            src={ROWS[active].screen}
            alt={ROWS[active].title}
            fill
            sizes="334px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 self-stretch">
        <div className="flex min-w-px flex-1 flex-col justify-between p-18">
          <div className="flex w-full flex-col gap-6">
            <h2 className="type-h2 w-full text-espresso">
              Your care,
              <br />
              in your pocket
            </h2>
            <p className="type-body-lg w-full text-charcoal">
              Track how you feel, message your provider, and watch your plan
              evolve
              <br />— all in one place.
            </p>
          </div>

          <div className="flex w-full flex-col items-end gap-[25px]">
            {ROWS.map(({ id, icon, title, body }, i) => (
              <button
                key={id}
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`flex w-full cursor-pointer items-center gap-4 p-px text-left transition-opacity ${
                  i === active ? "" : "opacity-30"
                }`}
              >
                <span className="relative size-8 shrink-0 rounded-small">
                  <Image src={icon} alt="" fill sizes="32px" />
                </span>
                <span className="flex min-w-px flex-1 flex-col items-start gap-1">
                  <span className="type-h5 w-full text-espresso">{title}</span>
                  {i === active && body && (
                    <span className="type-body w-full text-charcoal">
                      {body}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
