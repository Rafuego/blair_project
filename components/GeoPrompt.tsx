"use client";

import { useEffect, useState } from "react";

/**
 * Region prompt: when the visitor's country doesn't match the site region
 * they're browsing, offer the regional site — e.g. a Canadian visitor on
 * the US experience gets "Go to Blair Health Canada". Never re-shown after
 * either choice (localStorage `blair.geoPrompt`), and never shown when
 * location already matches.
 *
 * Country comes from /api/geo (Vercel's x-vercel-ip-country); local dev
 * falls back to a timezone heuristic. Today "go" switches the in-app
 * region; at handoff, when blairhealth.com/.ca exist, point `go()` at the
 * real domain instead (keep the path).
 */
type Region = "CA" | "US";

const COPY: Record<Region, { from: string; cta: string }> = {
  CA: { from: "Canada", cta: "Go to Blair Health Canada" },
  US: { from: "the United States", cta: "Go to Blair Health USA" },
};

// Regional routes whose counterpart should be swapped on switch.
const REGIONAL: Record<string, Record<Region, string>> = {
  "/for-teams": { CA: "/for-teams/ca", US: "/for-teams" },
  "/for-teams/ca": { CA: "/for-teams/ca", US: "/for-teams" },
  "/pricing/ca": { CA: "/pricing/ca", US: "/pricing/us" },
  "/pricing/us": { CA: "/pricing/ca", US: "/pricing/us" },
};

function timezoneGuess(): Region | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (/Toronto|Vancouver|Edmonton|Winnipeg|Halifax|St_Johns|Regina|Moncton|Whitehorse|Yellowknife|Iqaluit/.test(tz))
      return "CA";
    if (/America\//.test(tz)) return "US";
  } catch {
    /* no-op */
  }
  return null;
}

export function GeoPrompt() {
  const [detected, setDetected] = useState<Region | null>(null);

  useEffect(() => {
    if (window.localStorage.getItem("blair.geoPrompt")) return;
    const current: Region =
      window.localStorage.getItem("blair.region") === "US" ? "US" : "CA";

    let cancelled = false;
    (async () => {
      let country: string | null = null;
      try {
        const res = await fetch("/api/geo");
        country = (await res.json()).country;
      } catch {
        /* fall through to heuristic */
      }
      const region: Region | null =
        country === "CA" ? "CA" : country === "US" ? "US" : timezoneGuess();
      if (!cancelled && region && region !== current) setDetected(region);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!detected) return null;

  const dismiss = () => {
    window.localStorage.setItem("blair.geoPrompt", "dismissed");
    setDetected(null);
  };

  const go = () => {
    window.localStorage.setItem("blair.geoPrompt", "accepted");
    window.localStorage.setItem("blair.region", detected);
    // At handoff: window.location.href = detected === "CA"
    //   ? `https://blairhealth.ca${path}` : `https://blairhealth.com${path}`;
    const path = window.location.pathname;
    const target = REGIONAL[path]?.[detected] ?? path;
    window.location.href = target;
  };

  const copy = COPY[detected];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="geo-prompt-title"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-espresso/40 p-4 backdrop-blur-[6px] xl:items-center"
    >
      <div className="w-full max-w-[560px] animate-[fade-in-up_450ms_cubic-bezier(0.22,1,0.36,1)] rounded-large bg-white p-6 shadow-[0_24px_64px_rgba(41,11,18,0.25)] xl:p-10">
        <div className="flex flex-col gap-3">
          <p id="geo-prompt-title" className="font-display text-[28px] leading-[1.1] text-espresso xl:text-[32px]">
            Welcome to Blair Health!
          </p>
          <p className="type-body text-secondary">
            We noticed you&rsquo;re visiting from {copy.from} — let&rsquo;s get you started with
            care and resources available near you.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 xl:flex-row xl:items-center">
          <button
            type="button"
            onClick={dismiss}
            className="type-button cursor-pointer rounded-circle border border-taupe px-7 py-3 text-secondary transition-colors duration-200 hover:bg-cream"
          >
            Stay here
          </button>
          <button
            type="button"
            onClick={go}
            className="type-button cursor-pointer rounded-circle bg-espresso px-7 py-3 text-white transition-colors duration-200 hover:bg-espresso/88"
          >
            {copy.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
