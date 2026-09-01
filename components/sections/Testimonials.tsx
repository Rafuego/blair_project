"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Chevron } from "../icons";
import { Container } from "../ui/Container";

/**
 * Where a testimonial's arrow sends people. Single constant so it is one edit
 * when the real destination (Google review profile) is confirmed.
 */
const REVIEWS_URL = "/reviews";

const QUOTES = [
  {
    quote:
      "“Prescribed me MHT that same day and it's been life-changing — I'm sleeping better than I have since I was a teenager.”",
    name: "Skye W.",
  },
  {
    quote:
      "“I was on an 18-month waitlist to see a specialist. So grateful for the support as I began my HRT journey.”",
    name: "Richelle L.",
  },
  {
    quote:
      "“I have never felt better. I feel so much more like me again — they actually cared about how I was feeling.”",
    name: "Amy W.",
  },
  {
    quote:
      "“Excellent care and incredible convenience. I'd recommend Blair to any busy woman.”",
    name: "Carolyn A.",
  },
  {
    quote:
      "“Kind, caring, and highly trained in menopause care. Finally, better access to women's hormone health in Canada.”",
    name: "JoAnna V.",
  },
];

const STEP = 359; // card 328 + gap 31
const SPEED = 28; // px per second

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  // Continuous drift. The list is rendered twice, so when the first copy has
  // fully passed we subtract its width and the loop is seamless.
  //
  // The offset is accumulated in a float ref rather than read back from
  // scrollLeft each frame: scrollLeft rounds to whole pixels, so a sub-pixel
  // per-frame step would be discarded every time and never move.
  const offset = useRef(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const loop = STEP * QUOTES.length;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!paused.current) {
        offset.current = (offset.current + SPEED * dt) % loop;
        el.scrollLeft = offset.current;
        setIndex(Math.floor(offset.current / STEP) % QUOTES.length);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  function nudge(delta: number) {
    const el = track.current;
    if (!el) return;
    const loop = STEP * QUOTES.length;
    offset.current = (offset.current + delta * STEP + loop) % loop;
    el.scrollTo({ left: offset.current, behavior: "smooth" });
    setIndex(Math.floor(offset.current / STEP) % QUOTES.length);
  }

  return (
    <section id="testimonials" className="w-full overflow-hidden py-20">
      <Container className="px-6 xl:px-18">
        <div className="flex w-full flex-col gap-6 xl:gap-[22px]">
          <div className="flex w-full flex-col-reverse items-start gap-3 xl:flex-row xl:justify-between xl:gap-8">
            <h2 className="type-h2 max-w-[1100px] text-espresso">
              From women who stopped waiting for answers.
            </h2>
            <p className="type-h3 shrink-0 text-espresso">★★★★★</p>
          </div>
          <div className="flex w-full items-center justify-between gap-8">
            <p className="type-body text-espresso">Rated 5.0 on Google.</p>
            <div className="flex shrink-0 items-center gap-9">
              <p className="type-body text-espresso">
                {index + 1}/{QUOTES.length}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => nudge(-1)}
                  className="flex size-8 cursor-pointer items-center justify-center rounded-circle border border-border-taupe text-espresso transition-colors hover:bg-espresso hover:text-white"
                >
                  <Chevron className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => nudge(1)}
                  className="flex size-8 cursor-pointer items-center justify-center rounded-circle border border-border-taupe text-espresso transition-colors hover:bg-espresso hover:text-white"
                >
                  <Chevron className="size-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-bleed track so cards run past the container edges, with the
          cream fades Figma places over both ends. */}
      <div className="relative mt-[26px]">
        <div
          ref={track}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocusCapture={() => (paused.current = true)}
          onBlurCapture={() => (paused.current = false)}
          className="flex gap-[31px] overflow-x-auto px-6 [scrollbar-width:none] xl:px-[max(24px,calc((100vw-1440px)/2+72px))] [&::-webkit-scrollbar]:hidden"
        >
          {[...QUOTES, ...QUOTES].map(({ quote, name }, i) => (
            <article
              key={`${name}-${i}`}
              aria-hidden={i >= QUOTES.length}
              className="group flex h-[250px] w-[328px] shrink-0 flex-col justify-between rounded-medium bg-primrose-pale p-6"
            >
              <div className="type-body flex w-full flex-col gap-3 text-espresso">
                <p className="w-full">★★★★★</p>
                <p className="w-full">{quote}</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="type-caps text-espresso">{name}</p>
                <Link
                  href={REVIEWS_URL}
                  aria-label={`Read more reviews — ${name}`}
                  tabIndex={i >= QUOTES.length ? -1 : undefined}
                  className="flex size-12 items-center justify-center rounded-circle bg-cream text-espresso transition-colors group-hover:bg-espresso group-hover:text-cream"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent"
        />
      </div>
    </section>
  );
}
