"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";

export type MenopauseType = { icon: string; title: string; body?: string };

/**
 * "One destination. More than one way to arrive." (node 3224:5842).
 *
 * A selectable list of routes into menopause beside the estrogen-over-time
 * chart. The chart is composed from Figma's own vectors rather than exported
 * flat, so it stays crisp and its labels remain real text.
 */
export function MenopauseTypes({
  title,
  intro,
  types,
}: {
  title: string;
  intro: string;
  types: MenopauseType[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white">
      <Container className="flex flex-col items-start justify-center gap-14 px-6 py-20 xl:px-18 xl:py-25">
        <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
          <h2 className="type-h2 whitespace-pre-line text-espresso xl:w-[1020px]">
            {title}
          </h2>
          <p className="type-body-lg w-full text-secondary">{intro}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-14 xl:flex-row">
          <div className="flex w-full min-w-px flex-col items-end gap-[25px] xl:flex-1">
            {types.map(({ icon, title: name, body }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(i)}
                  className={`flex w-full cursor-pointer items-start gap-4 p-px text-left transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                    isActive ? "hover:opacity-80" : "opacity-30 hover:opacity-60"
                  }`}
                >
                  <span className="flex w-12 shrink-0 items-center justify-center self-stretch rounded-small bg-primrose-pale py-2">
                    <span className="relative block size-8">
                      <Image src={icon} alt="" fill sizes="32px" />
                    </span>
                  </span>
                  <span className="flex min-w-px flex-1 flex-col items-start">
                    <span className="type-h5 w-full text-espresso">{name}</span>
                    {body && (
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
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <EstrogenChart />
        </div>
      </Container>
    </section>
  );
}

/** Estrogen level across life stages (node 3302:11998). */
function EstrogenChart() {
  const marks = [13.7, 29.96, 51.44, 76.8];
  return (
    <div className="flex w-full shrink-0 items-center justify-center rounded-[24px] p-4 xl:w-[620px]">
      <div className="relative w-full">
        <div className="relative h-[236px] w-full">
          {/* Menopause band */}
          <div className="absolute top-0 left-[74.66%] h-full w-[4.25%] bg-primrose" />
          {/* Stage dividers */}
          {marks.map((left) => (
            <div
              key={left}
              className="absolute top-0 h-full w-px bg-border-taupe/60"
              style={{ left: `${left}%` }}
            />
          ))}
          {/* Baseline + curve */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decor/chart/axis.svg"
            alt=""
            className="absolute top-0 left-[4.46%] h-full w-[95.54%]"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decor/chart/curve.svg"
            alt=""
            className="absolute left-[4.46%] w-[95.23%]"
            style={{ top: 8.26, height: 214.7 }}
          />
          <p className="type-caps absolute top-1/2 -left-1 -translate-y-1/2 -rotate-90 whitespace-nowrap text-secondary">
            estrogen levels
          </p>
          <p className="type-body-medium absolute top-[79px] left-[78.4%] -rotate-90 origin-left whitespace-nowrap text-secondary">
            Menopause
          </p>
        </div>
        <div className="type-body-medium mt-2 ml-[4.41%] flex w-[95.42%] items-center justify-between text-[10px] whitespace-nowrap text-secondary-on-dark xl:text-[16px]">
          <span>Birth</span>
          <span>Puberty</span>
          <span className="opacity-0">Menopause</span>
          <span>Perimenopause</span>
          <span>Postmenopause</span>
        </div>
      </div>
    </div>
  );
}
