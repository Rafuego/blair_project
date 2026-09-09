"use client";

import Image from "next/image";
import { useState } from "react";
import { PhoneMockup } from "../PhoneMockup";
import { Container } from "../ui/Container";
import { CATEGORY_TABS } from "@/lib/employers-us";

/**
 * "The specialist categories quietly driving your spend — handled"
 * (node 3323:11980): glass tab menu over a blurred photo card, copy left,
 * phone mockup right. Tabs cross-fade their copy.
 */
export function EmployerCategories() {
  const [tab, setTab] = useState(0);

  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col items-center gap-10 px-6 xl:gap-[54px] xl:px-18">
        <h2 className="type-h2 text-center text-espresso">
          The specialist categories <span className="block">quietly driving your spend — handled</span>
        </h2>
        <div className="relative w-full overflow-hidden rounded-large px-4 py-10 xl:px-10 xl:py-15">
          <Image
            src="/images/employers/categories-bg.png"
            alt=""
            fill
            sizes="1297px"
            className="scale-110 object-cover blur-[10px]"
          />
          <div aria-hidden className="absolute inset-0 bg-espresso/25" />
          <div className="relative flex flex-col items-center gap-10 xl:gap-15">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-circle bg-glass-light-15 p-1 backdrop-blur-[20px]">
              {CATEGORY_TABS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`type-button cursor-pointer rounded-circle px-5 py-3 whitespace-nowrap transition-colors duration-300 xl:px-7 ${
                    tab === i ? "bg-white text-espresso" : "text-white hover:bg-white/15"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:px-[110px]">
              <div className="grid w-full text-white xl:w-[450px]">
                {CATEGORY_TABS.map((t, i) => (
                  <div
                    key={t.label}
                    aria-hidden={tab !== i}
                    className={`col-start-1 row-start-1 flex flex-col gap-6 transition-opacity duration-300 ${
                      tab === i ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <p className="font-display text-[32px] leading-[1.1] xl:text-[40px] xl:leading-[44px]">
                      {t.title}
                    </p>
                    <p className="type-body">{t.body}</p>
                  </div>
                ))}
              </div>
              <div className="w-[240px] xl:w-[341px]">
                <PhoneMockup screen="/images/employers/screen-category.png" alt="Blair app" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
