"use client";

import { useEffect, useState } from "react";
import { PRICING_CA, PRICING_US } from "@/lib/pricing";
import { Pricing } from "./Pricing";

/**
 * Embedded pricing that follows the nav's region selection: CAD content by
 * default, the US variant (frame 3292:28673) when the pill is on US. Reads
 * the persisted choice on mount and reacts live to the nav's region event.
 */
export function RegionalPricing() {
  const [region, setRegion] = useState<"CA" | "US">("CA");

  useEffect(() => {
    const stored = window.localStorage.getItem("blair.region");
    if (stored === "US") setRegion("US");
    const onRegion = (e: Event) => {
      const r = (e as CustomEvent<string>).detail;
      if (r === "CA" || r === "US") setRegion(r);
    };
    window.addEventListener("blair:region", onRegion);
    return () => window.removeEventListener("blair:region", onRegion);
  }, []);

  return <Pricing content={region === "US" ? PRICING_US : PRICING_CA} />;
}
