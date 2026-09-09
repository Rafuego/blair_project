"use client";

import { useEffect, useState } from "react";
import { FAQ_CA, FAQ_US } from "@/lib/faq";
import { Faq } from "./Faq";

/** Homepage FAQ that follows the nav's region selection, same contract as
 *  RegionalPricing: persisted choice on mount, live swap on the region event. */
export function RegionalFaq() {
  const [region, setRegion] = useState<"CA" | "US">("CA");

  useEffect(() => {
    const stored = window.localStorage.getItem("blair.region");
    if (stored === "US") setRegion("US");
    const onRegion = (e: Event) => {
      const r = (e as CustomEvent<string>).detail;
      if (r === "CA" || r === "US") setRegion(r);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === "blair.region" && (e.newValue === "CA" || e.newValue === "US"))
        setRegion(e.newValue);
    };
    window.addEventListener("blair:region", onRegion);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("blair:region", onRegion);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <Faq
      items={region === "US" ? FAQ_US : FAQ_CA}
      title="Your questions, answered."
    />
  );
}
