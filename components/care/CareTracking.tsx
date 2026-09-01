"use client";

import Image from "next/image";
import { useState } from "react";
import { PhoneMockup } from "../PhoneMockup";
import { Container } from "../ui/Container";

export type TrackingRow = {
  icon: string;
  title: string;
  body?: string;
  screen: string;
};

/**
 * The dark tracking panel (node 3224:4299) — heading with its second line in
 * primrose, a selectable list of app features, and the phone alongside.
 * Rows behave like the homepage carousel: selecting one reveals its copy and
 * cross-fades the screen.
 */
export function CareTracking({
  titleLead,
  titleAccent,
  body,
  rows,
}: {
  titleLead: string;
  titleAccent: string;
  body: string;
  rows: TrackingRow[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full">
      <Container className="px-4 xl:px-8">
        <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-clip rounded-large p-6 xl:p-10">
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/images/care/tracking-plate.png"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1376px"
              className="scale-110 object-cover object-bottom blur-[20px]"
            />
          </div>

          <div className="relative flex w-full flex-col items-center justify-between gap-10 xl:flex-row">
            <div className="flex w-full flex-col items-start justify-center gap-8 xl:w-[716px] xl:pl-12">
              <div className="flex w-full flex-col items-start gap-6 text-white xl:w-[574px]">
                <h2 className="type-h2 w-full">
                  {titleLead}
                  <br className="hidden xl:inline" />{" "}
                  <span className="text-primrose">{titleAccent}</span>
                </h2>
                <p className="type-body-lg w-full xl:w-[547px]">{body}</p>
              </div>

              <div className="flex w-full flex-col items-end gap-[25px]">
                {rows.map(({ icon, title, body: rowBody }, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActive(i)}
                      className={`flex w-full cursor-pointer items-center gap-6 text-left transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                        isActive ? "hover:opacity-80" : "opacity-30 hover:opacity-60"
                      }`}
                    >
                      <span className="flex shrink-0 items-center rounded-small bg-white-on-dark-10 p-2">
                        <span className="relative block size-8">
                          <Image src={icon} alt="" fill sizes="32px" />
                        </span>
                      </span>
                      <span className="flex min-w-px flex-1 flex-col items-start">
                        <span className="type-h5 w-full text-white">{title}</span>
                        {rowBody && (
                          <span
                            className={`grid w-full transition-[grid-template-rows,opacity] duration-400 ease-out motion-reduce:transition-none ${
                              isActive
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <span className="overflow-hidden">
                              <span className="type-body block w-full pt-1 text-secondary-on-dark">
                                {rowBody}
                              </span>
                            </span>
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex w-[220px] shrink-0 justify-center xl:h-[701px] xl:w-[580px] xl:items-center">
              <div className="relative w-full xl:w-[306.47px]">
                {rows.map(({ screen, title }, i) => (
                  <div
                    key={title}
                    aria-hidden={i !== active}
                    className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                      i === 0 ? "" : "absolute inset-0"
                    } ${i === active ? "opacity-100" : "opacity-0"}`}
                  >
                    <PhoneMockup
                      screen={screen}
                      alt={`${title} screen`}
                      className="xl:h-[635px] xl:w-[306.47px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
