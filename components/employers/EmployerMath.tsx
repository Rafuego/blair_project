/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "../ui/Button";
import { MATH_POINTS } from "@/lib/employers-us";

/**
 * "How the math works" (node 3224:5211) + the photo/points pair
 * (node 3377:14097): primrose-pale intro card with the ROI-calculator CTA,
 * then a full-bleed photo card beside the three numbered mechanics.
 */
export function EmployerMath() {
  return (
    <section className="w-full px-4 xl:px-8">
      <div className="flex w-full flex-col gap-0">
        <div className="flex flex-col items-center gap-10 rounded-large bg-primrose-pale px-6 py-16 xl:gap-14 xl:px-18 xl:py-25">
          <div className="flex w-full flex-col items-center gap-6 text-center xl:w-[736px]">
            <h2 className="type-h2 text-espresso">How the math works</h2>
            <p className="type-body-lg text-espresso">
              Specialist care is one of the biggest cost drivers in your plan — not because
              specialists are wrong for the job, but because the road to the right one is unmanaged.
              Here&rsquo;s the journey your claims data can&rsquo;t show you:
            </p>
          </div>
          <Button href="/roi-calculator" variant="espresso">
            Try our ROI calculator
          </Button>
        </div>
        <div className="mt-0 flex w-full flex-col items-stretch gap-4 pt-0 xl:h-[794px] xl:flex-row xl:gap-0">
          <div className="relative hidden overflow-hidden rounded-large xl:block xl:w-[850px] xl:shrink-0">
            <Image
              src="/images/employers/math-photo.png"
              alt=""
              fill
              sizes="850px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-l from-espresso/44 from-[36%] to-espresso/0 to-[68%]"
            />
          </div>
          <div className="flex min-w-px flex-1 flex-col justify-center gap-9 rounded-large bg-espresso px-6 py-10 xl:px-14">
            {MATH_POINTS.map((p, i) => (
              <div key={p.n} className="flex flex-col gap-3">
                {i > 0 && <div aria-hidden className="mb-6 border-t border-dashed border-white/20" />}
                <div className="flex items-end gap-3">
                  <p className="font-display text-[32px] leading-[normal] text-taupe">{p.n}</p>
                  <p className="type-h5 min-w-px flex-1 text-white">{p.title}</p>
                </div>
                <p className="type-body text-white">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
