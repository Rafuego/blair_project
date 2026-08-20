import { CalendarSheet } from "../CalendarSheet";

function Stat({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[244px] flex-col items-center gap-4">
      <div className="flex items-center justify-center">{children}</div>
      <p className="type-h5 text-center leading-none font-normal text-espresso">
        {title}
      </p>
      <p className="type-body w-full text-center text-espresso opacity-75">
        {caption}
      </p>
    </div>
  );
}

/**
 * The four-sheet fan. Figma nests each sheet in its own transform cell inside a
 * 180x151 box that is itself mirrored, so the offsets and angles below are the
 * chain verbatim (node 3224:15370) rather than eyeballed values.
 */
const FAN = [
  { left: 0.23, top: -12.73, w: 154.599, h: 162.301, rotate: -17.96 },
  { left: 15.51, top: -27.55, w: 144.591, h: 154.237, rotate: -11.03 },
  { left: 22.05, top: -33.66, w: 157.165, h: 165.618, rotate: -6.1 },
];

function CalendarStack() {
  return (
    <div className="relative h-[151px] w-[180px] scale-x-[-1]">
      {FAN.map(({ left, top, w, h, rotate }, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left, top, width: w, height: h }}
        >
          <div style={{ transform: `rotate(${rotate}deg)` }}>
            <CalendarSheet label="24-56 Weeks" showLabel={false} />
          </div>
        </div>
      ))}
      {/* Front sheet. Its own scaleY(-1) cancels the container mirror, so the
          label reads the right way round and it lands at about +3.8deg. */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 45.38, top: -17.53, width: 133.029, height: 143.795 }}
      >
        <div style={{ transform: "scaleY(-1) rotate(-176.21deg)" }}>
          <CalendarSheet label="24-56 Weeks" ringIndex={0} dotIndex={14} />
        </div>
      </div>
    </div>
  );
}

export function WaitGap() {
  return (
    <section className="flex w-full">
      <div className="flex w-[720.5px] flex-col justify-center gap-6 px-18 py-25">
        <h2 className="type-h2 w-full text-espresso">
          Getting specialist care shouldn&rsquo;t take a year
        </h2>
        <p className="type-body-lg w-full text-charcoal">
          Seeing a specialist means waiting on a referral, then waiting again
          for an appointment, then starting from scratch if your needs change.
          For women&rsquo;s health, that gap is where symptoms go untreated and
          questions go unanswered.
        </p>
        <p className="type-body-lg-medium w-full text-charcoal">
          Blair closes it. You come to us, you see a specialist, and you get
          answers right away.
        </p>
      </div>

      <div className="flex w-[720px] pt-8">
        <div className="flex h-[480px] w-full items-start px-18">
          <div className="mt-[130px] flex h-[220px] w-[576px]">
            <Stat
              title="The Current System"
              caption="Average wait to see a gynecologist"
            >
              <CalendarStack />
            </Stat>

            <div className="flex w-[88px] flex-col items-center justify-center px-4">
              <div className="flex size-14 flex-col items-center justify-center rounded-[28px]">
                <p className="type-body-medium text-espresso">VS</p>
              </div>
            </div>

            <Stat title="With Blair" caption="Specialist consult booking speed.">
              <CalendarSheet label="Tomorrow" ringIndex={0} dotIndex={1} />
            </Stat>
          </div>
        </div>
      </div>
    </section>
  );
}
