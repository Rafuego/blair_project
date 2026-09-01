"use client";

import Image from "next/image";
import { Container } from "../ui/Container";

export type ComingSoonFeature = { icon: string; title: string; body: string };

/**
 * "Something big is coming: Medical Weight Management" (node 3293:5038).
 * Dark blurred feature panel on the left, espresso mailing-list card on the
 * right. All three feature rows are active — this is not a carousel.
 */
export function ComingSoon({
  titleLead,
  titleAccent,
  body,
  features,
  form,
}: {
  titleLead: string;
  titleAccent: string;
  body: string;
  features: ComingSoonFeature[];
  form: { title: string; buttonLabel: string; footnote: string };
}) {
  return (
    <section className="w-full bg-white">
      <Container className="flex flex-col items-stretch gap-2 px-4 xl:flex-row xl:gap-0 xl:px-8">
        <div className="relative flex w-full flex-col items-start gap-10 overflow-clip rounded-large px-6 py-12 xl:w-[850px] xl:shrink-0 xl:gap-14 xl:px-14 xl:py-20">
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/images/care/tracking-plate.png"
              alt=""
              fill
              sizes="850px"
              className="scale-110 object-cover object-bottom blur-[20px]"
            />
          </div>

          <div className="relative flex w-full flex-col items-start gap-6 text-white xl:w-[646px]">
            <h2 className="type-h2 w-full">
              {titleLead} <span className="text-primrose">{titleAccent}</span>
            </h2>
            <p className="type-body-lg w-full">{body}</p>
          </div>

          <div className="relative flex w-full flex-col items-end gap-[25px]">
            {features.map(({ icon, title, body: rowBody }) => (
              <div key={title} className="flex w-full items-center gap-6">
                <span className="flex h-[88px] shrink-0 items-center rounded-small bg-white-on-dark-10 px-2">
                  <span className="relative block size-8">
                    <Image src={icon} alt="" fill sizes="32px" />
                  </span>
                </span>
                <span className="flex min-w-px flex-1 flex-col gap-1">
                  <span className="type-h5 w-full text-white">{title}</span>
                  <span className="type-body w-full text-cream">{rowBody}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <form
          className="flex min-w-px flex-1 flex-col justify-center gap-6 self-stretch rounded-large bg-espresso px-6 py-10 xl:px-14"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full flex-col gap-2">
            <p className="type-h5 w-full text-white">{form.title}</p>
            <div className="flex w-full flex-col gap-6 pt-4">
              <div className="flex w-full flex-col gap-1.5">
                <label
                  htmlFor="mwm-email"
                  className="type-caps text-taupe"
                >
                  email
                </label>
                <input
                  id="mwm-email"
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className="type-body h-10 w-full border-b border-border-taupe bg-transparent text-white placeholder:text-taupe focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="type-button flex w-full cursor-pointer items-center justify-center gap-1 rounded-circle bg-primrose px-7 py-3 text-espresso transition-colors duration-200 hover:bg-primrose-pale"
              >
                {form.buttonLabel}
              </button>
            </div>
          </div>
          <p className="type-body w-full text-taupe">{form.footnote}</p>
        </form>
      </Container>
    </section>
  );
}
