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

    // One level down when a section wraps everything in a single container,
    // so the stagger lands on real content rather than the wrapper.
    const targetsFor = (section: Element) => {
      let kids = Array.from(section.children).filter(animatable);
      if (kids.length === 1) {
        const inner = Array.from(kids[0].children).filter(animatable);
        if (inner.length > 1) kids = inner;
      }
      return kids as HTMLElement[];
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

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sweep();
      });
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
    sweep();

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
