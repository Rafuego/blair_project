"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll reveal. Mounted once in the root layout.
 *
 * Deliberately conservative:
 * - The hidden state is applied by JS on mount, so with JS disabled or slow
 *   every section renders normally. Nothing can get stuck invisible.
 * - Only statically positioned, non-decorative children are animated.
 *   Background plates and glows are absolute or aria-hidden, and moving them
 *   would drag the artwork out of place.
 * - Uses `transform`, not Tailwind v4's standalone `translate` property, so it
 *   can never collide with a utility class on the same element.
 * - Anything already on screen at load reveals immediately, so the first
 *   viewport never animates in after the fact.
 */
const SHIFT = 18; // px
const STAGGER = 70; // ms between siblings

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Never hide content while the page is not being looked at. A hidden
    // document throttles rAF and IntersectionObserver, and getBoundingClientRect
    // reports nothing in view — so setting up here risks content that is
    // hidden with no reliable event to bring it back. Wait for visibility.
    if (document.hidden) {
      const start = () => {
        if (document.hidden) return;
        document.removeEventListener("visibilitychange", start);
        setup();
      };
      document.addEventListener("visibilitychange", start);
      return () => document.removeEventListener("visibilitychange", start);
    }
    return setup();

    function setup() {

    const animatable = (el: Element) => {
      const s = getComputedStyle(el);
      return (
        s.position !== "absolute" &&
        s.position !== "fixed" &&
        el.getAttribute("aria-hidden") !== "true" &&
        // Skip anything deliberately translucent (footer rule, faded carousel
        // rows) — revealing it would overwrite its designed opacity.
        parseFloat(s.opacity) === 1 &&
        (el as HTMLElement).offsetHeight > 0
      );
    };

    // Pick content-sized targets.
    //
    // Descend through single-child wrappers (Container etc.) so the stagger
    // lands on real content, then break up anything still taller than most of
    // the viewport. A very tall block reveals as soon as its top edge nears the
    // fold, which means it has finished animating long before you look at it —
    // the reason the first version read as no effect at all.
    const TALL = () => window.innerHeight * 0.6;

    const collect = (el: Element, depth = 0): HTMLElement[] => {
      const kids = Array.from(el.children).filter(animatable) as HTMLElement[];
      if (!kids.length) return [el as HTMLElement];
      // Single wrapper: keep descending, it carries no visual weight of its own.
      if (kids.length === 1 && depth < 4) return collect(kids[0], depth + 1);
      // Otherwise take the children, splitting any that are still too tall.
      return kids.flatMap((kid) =>
        kid.offsetHeight > TALL() && depth < 4 ? collect(kid, depth + 1) : [kid],
      );
    };

    const targetsFor = (section: Element) => {
      const kids = collect(section);
      return kids.filter((el) => el !== section);
    };

    const groups = Array.from(
      document.querySelectorAll("main > section, footer > *"),
    ).map(targetsFor);

    const all = groups.flat();
    if (!all.length) return;

    for (const el of all) {
      el.style.opacity = "0";
      el.style.transform = `translateY(${SHIFT}px)`;
      el.style.transition =
        "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)";
      el.style.willChange = "opacity, transform";
    }

    const show = (el: HTMLElement, delay: number) => {
      el.style.transitionDelay = `${delay}ms`;
      // Clear rather than assign, so the stylesheet's own values win once the
      // transition lands and nothing is left pinned by inline styles.
      el.style.opacity = "";
      el.style.transform = "";
      window.setTimeout(() => {
        el.style.willChange = "";
        el.style.transitionDelay = "";
        el.style.transition = "";
      }, 750 + delay);
    };

    const indexInGroup = new Map<HTMLElement, number>();
    for (const group of groups)
      group.forEach((el, i) => indexInGroup.set(el, i));

    const pending = new Set<HTMLElement>(all);

    const reveal = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      show(el, (indexInGroup.get(el) ?? 0) * STAGGER);
    };

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    // Sweep is the safety net. IntersectionObserver does not fire reliably
    // while the document is hidden (background tab, throttled preview), and a
    // missed callback would leave content permanently invisible. Scroll,
    // resize and visibilitychange all re-check, so the worst case is that a
    // section appears without animating rather than never appearing.
    const sweep = () => {
      for (const el of Array.from(pending)) if (inView(el)) reveal(el);
      if (!pending.size) teardown();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    for (const el of all) observer.observe(el);

    // rAF for smoothness, plus a timer fallback: rAF is paused entirely in
    // hidden documents, and a scroll that arrives while hidden (restored tab,
    // embedded preview) must still eventually reveal content.
    let raf = 0;
    let timer = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          sweep();
        });
      }
      if (!timer) {
        timer = window.setTimeout(() => {
          timer = 0;
          sweep();
        }, 150);
      }
    };

    function teardown() {
      window.clearTimeout(failsafe);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", sweep);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", sweep);

    // Commit the hidden state before the first sweep. Without a forced reflow
    // the browser coalesces "hide" and "show" into one style recalculation and
    // skips the transition, so the opening screen would snap in rather than
    // animate.
    void document.body.offsetHeight;
    requestAnimationFrame(sweep);

    // Last-resort guarantee. If nothing at all has revealed shortly after
    // setup, the detection is not working in this environment — show
    // everything rather than leave the page blank. Degrades to "no animation",
    // never to "no content".
    const failsafe = window.setTimeout(() => {
      if (pending.size === all.length) {
        for (const el of Array.from(pending)) reveal(el);
        teardown();
      }
    }, 2500);

    return teardown;
    }
  }, []);

  return null;
}
