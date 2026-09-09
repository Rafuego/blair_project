"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "../ui/Button";

/**
 * Lead capture & closing (node 3224:5304): photo card with the closing
 * statement + a white "Request a Consultation" form. The form has no backend
 * yet (matching the site's other forms) — submit is inert.
 */
const FIELDS = [
  { label: "Name", placeholder: "Your name", type: "text" },
  { label: "Work email", placeholder: "name@company.ca", type: "email" },
];

function Field({
  label,
  placeholder,
  type,
  select = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  select?: boolean;
}) {
  return (
    <label className="flex w-full min-w-px flex-1 flex-col gap-1.5">
      <span className="type-caps text-espresso">{label}</span>
      {select ? (
        <span className="relative flex h-10 w-full items-center border-b border-taupe">
          <select
            defaultValue=""
            className="type-body w-full cursor-pointer appearance-none bg-transparent text-secondary outline-none"
          >
            <option value="" disabled>
              Select
            </option>
            <option>Self-insured</option>
            <option>Fully insured</option>
            <option>Not sure</option>
          </select>
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="pointer-events-none absolute right-0 size-4 text-espresso"
          >
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="type-body h-10 w-full border-b border-taupe bg-transparent text-espresso outline-none placeholder:text-secondary focus:border-espresso"
        />
      )}
    </label>
  );
}

export function EmployerLeadCapture() {
  return (
    <section id="demo" className="w-full px-4 pb-8 xl:px-8">
      <div className="relative mx-auto w-full max-w-[1376px] overflow-hidden rounded-b-large">
        <Image
          src="/images/employers/lead-bg.png"
          alt=""
          fill
          sizes="1376px"
          className="object-cover"
        />
        <div className="relative flex flex-col items-start gap-10 p-6 xl:flex-row xl:items-center xl:gap-16 xl:p-20">
          <div className="flex min-w-px flex-1 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="type-h2 text-espresso">
                Your people stayed through the hard years. Help them thrive through the next ones.
              </h2>
              <p className="type-body-lg w-full text-charcoal xl:w-[455px]">
                See the platform, the clinical model, and the reporting in one 30-minute demo.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button href="#demo" variant="espresso">
                Book a demo
              </Button>
              <Button href="/roi-calculator" variant="white">
                Get the ROI overview
              </Button>
            </div>
          </div>
          <form
            className="flex w-full min-w-px flex-col gap-6 rounded-medium bg-white p-6 xl:flex-1 xl:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="type-h5 text-espresso">Request a Consultation</p>
            <div className="flex flex-col gap-4">
              {FIELDS.map((f) => (
                <Field key={f.label} {...f} />
              ))}
              <div className="flex w-full flex-col gap-4 xl:flex-row">
                <Field label="Company" placeholder="Company name" type="text" />
                <Field label="# of employees" placeholder="500" type="text" />
              </div>
              <Field label="Funding model" placeholder="Select" select />
              <label className="flex w-full flex-col gap-1.5">
                <span className="type-caps text-espresso">Role</span>
                <span className="relative flex h-10 w-full items-center border-b border-taupe">
                  <select
                    defaultValue=""
                    className="type-body w-full cursor-pointer appearance-none bg-transparent text-secondary outline-none"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>HR / People</option>
                    <option>Benefits leader</option>
                    <option>Broker / Consultant</option>
                    <option>Executive</option>
                    <option>Other</option>
                  </select>
                  <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    className="pointer-events-none absolute right-0 size-4 text-espresso"
                  >
                    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="type-button w-full cursor-pointer rounded-circle bg-primrose px-7 py-3 text-espresso transition-colors duration-200 hover:bg-primrose-pale"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
