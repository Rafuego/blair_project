const SWATCHES = [
  ["cream", "bg-cream"],
  ["white", "bg-white"],
  ["espresso", "bg-espresso"],
  ["primrose", "bg-primrose"],
  ["primrose-pale", "bg-primrose-pale"],
  ["charcoal", "bg-charcoal"],
  ["secondary", "bg-secondary"],
  ["taupe", "bg-taupe"],
  ["peach-100", "bg-peach-100"],
];

const TYPE = [
  ["type-h2", "Specialist care", "Marlfield 64/1"],
  ["type-h3", "Areas of care", "Marlfield 40/1"],
  ["type-h4", "How it works", "Marlfield 32/1"],
  ["type-h5", "Your care, in your pocket", "Neue Montreal Medium 24/1.35"],
  ["type-body-lg", "Blair connects you to specialist-level care.", "NM Regular 20/1.4"],
  ["type-body", "No referrals. No waitlists.", "NM Regular 16/1.6"],
  ["type-body-sm", "Book a free intro call", "NM Regular 14/1.6"],
  ["type-caps", "For employers", "NM Medium 12/1.6"],
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-18 py-16">
      <p className="type-caps text-secondary">Foundations</p>
      <h1 className="type-h2 mt-2">Blair Health design tokens</h1>
      <p className="type-body-lg mt-4 max-w-[560px] text-secondary">
        Specimen page — verifies fonts and Figma variables are wired before any
        section is built. This gets replaced by the real homepage.
      </p>

      <section className="mt-16">
        <h2 className="type-h4">Typography</h2>
        <div className="mt-6 divide-y" style={{ borderColor: "var(--color-border-taupe)" }}>
          {TYPE.map(([cls, sample, spec]) => (
            <div key={cls} className="flex items-baseline gap-8 py-5">
              <span className={cls as string}>{sample}</span>
              <span className="type-body-sm ml-auto shrink-0 text-secondary">{spec}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="type-h4">Color</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {SWATCHES.map(([name, cls]) => (
            <div key={name}>
              <div
                className={`${cls} h-24 rounded-medium`}
                style={{ border: "1px solid var(--color-border-taupe)" }}
              />
              <p className="type-body-sm mt-2 text-secondary">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="type-h4">Radii</h2>
        <div className="mt-6 flex gap-4">
          {["rounded-small", "rounded-medium", "rounded-large", "rounded-circle"].map((r) => (
            <div key={r} className="text-center">
              <div className={`${r} bg-primrose h-24 w-40`} />
              <p className="type-body-sm mt-2 text-secondary">{r}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
