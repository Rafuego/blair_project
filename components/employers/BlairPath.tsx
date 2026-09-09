"use client";

import Image from "next/image";
import { useState } from "react";
import { PhoneMockup } from "../PhoneMockup";
import { Container } from "../ui/Container";
import { PATH_STEPS } from "@/lib/employers-us";

/**
 * "The Blair path" (node 3224:5125): primrose band with four numbered steps
 * above the "$0 billed" stat comparison band (blurred photo, phone mockup,
 * flat-fee statement).
 */
export function BlairPath() {
  const [step, setStep] = useState(0);

  return (
    <section className="w-full px-0 xl:px-0">
      <div className="mx-auto w-full max-w-[1440px] rounded-t-large bg-primrose pt-16 xl:pt-25">
        <Container className="flex flex-col items-center gap-12 px-6 xl:px-18">
          <h2 className="type-h2 text-center text-espresso">The Blair path</h2>
          <div className="flex w-full flex-col items-start gap-6 xl:w-[1280px] xl:flex-row xl:gap-10">
            {PATH_STEPS.map((title, i) => (
              <button
                key={title}
                type="button"
                onClick={() => setStep(i)}
                className={`flex w-full min-w-px cursor-pointer flex-row items-center gap-3 text-left transition-opacity duration-300 xl:flex-1 xl:flex-col xl:gap-2 xl:text-center ${
                  i === step ? "opacity-100" : "opacity-30 hover:opacity-60"
                }`}
              >
                <span className="w-8 shrink-0 font-display text-[32px] leading-[normal] text-secondary">
                  {i + 1}.
                </span>
                <span className="type-h5 w-full text-espresso">{title}</span>
              </button>
            ))}
          </div>
        </Container>
        <div className="relative mt-12 h-[520px] w-full overflow-hidden rounded-t-[40px] xl:mt-18 xl:h-[650px] xl:rounded-t-[64px]">
          <Image
            src="/images/employers/stat-bg.png"
            alt=""
            fill
            sizes="1440px"
            className="scale-105 object-cover blur-[10px]"
          />
          <div aria-hidden className="absolute inset-0 bg-espresso/30" />
          <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-center px-6 xl:px-18">
            <div className="hidden xl:block xl:w-[463px] xl:shrink-0 xl:self-end xl:pl-8">
              <PhoneMockup
                screen="/images/employers/screen-billed.png"
                alt="Blair app"
                className="translate-y-[16%]"
              />
            </div>
            <div className="flex min-w-px flex-1 flex-col items-start gap-8 xl:pl-12">
              <div className="flex flex-col items-start gap-6">
                <p className="type-h2 text-white">What your plan is billed:</p>
                <p className="rounded-medium bg-primrose-pale px-10 py-4 font-display text-[56px] leading-none text-espresso xl:text-[80px]">
                  $0
                </p>
              </div>
              <p className="type-h2 text-white">Blair is one flat fee, outside your claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
