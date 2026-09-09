"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { PhoneMockup } from "../../PhoneMockup";
import { CA_VISIT_TABS } from "@/lib/employers-ca";

/**
 * "The visit is where care starts. Not where it ends." (node 3224:5601):
 * blurred photo band with phone mockup on the left, heading + five icon tabs
 * on the right. The active tab reveals its description; copy for every state
 * comes from the "All" frame (3224:5798).
 */
export function CaVisit() {
  const [tab, setTab] = useState(0);

  return (
    <section className="w-full py-6">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch xl:flex-row">
        <div className="relative hidden h-[777px] w-[670px] shrink-0 overflow-hidden rounded-r-large xl:block">
          <Image
            src="/images/employers/stat-bg.png"
            alt=""
            fill
            sizes="670px"
            className="scale-110 object-cover blur-[10px]"
          />
          <div className="absolute top-1/2 left-1/2 w-[341px] -translate-x-1/2 -translate-y-1/2">
            <PhoneMockup screen="/images/employers/screen-billed.png" alt="Blair app" />
          </div>
        </div>
        <div className="flex min-w-px flex-1 flex-col justify-between gap-12 px-6 py-10 xl:p-18">
          <div className="flex flex-col gap-6">
            <h2 className="type-h2 text-espresso">
              The visit is where care starts. Not where it ends.
            </h2>
            <p className="type-body-lg text-secondary">
              Blair pairs specialist clinicians with clinical intelligence built into the platform —
              so care is continuous, personalized, and measurable, not a one-off appointment.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4">
            {CA_VISIT_TABS.map((t, i) => {
              const active = tab === i;
              return (
                <button
                  key={t.title}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`flex w-full cursor-pointer items-center gap-6 text-left transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-30 hover:opacity-60"
                  }`}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center self-stretch rounded-small bg-primrose-pale">
                    <img src={t.icon} alt="" className="size-8" />
                  </span>
                  <span className="flex min-w-px flex-1 flex-col gap-1">
                    <span className="type-h5 text-espresso">{t.title}</span>
                    <span
                      className={`type-body grid text-secondary transition-[grid-template-rows,opacity] duration-300 ${
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">{t.body}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
