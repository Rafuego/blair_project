import Image from "next/image";

/**
 * Device mockup (Figma component "Mockup", e.g. node 3323:11366).
 *
 * The frame PNG is opaque, so the app screen composites on top of it and the
 * dynamic island is then re-stamped over the screen from the frame artwork —
 * the same stacking Figma uses. The screen's corner radius is derived from the
 * frame artwork (outer corner 292/1612 of the source, less the bezel), not
 * from Figma's exported 68px, which is the value at the master scale.
 *
 * `fit="top"` is for screens exported as tall scrolling captures, which Figma
 * anchors to the top rather than covering.
 */
export function PhoneMockup({
  screen,
  alt,
  fit = "cover",
  className = "",
}: {
  screen: string;
  alt: string;
  fit?: "cover" | "top";
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[340.79/706.1] w-full xl:h-[706.1px] xl:w-[340.79px] xl:shrink-0 ${className}`}
    >
      <Image
        src="/images/mockup/phone-frame.png"
        alt=""
        fill
        sizes="341px"
        className="object-contain"
      />
      <div className="absolute inset-[1.55%_3.98%_1.62%_3.92%] overflow-hidden rounded-[27px] xl:rounded-[48px]">
        {fit === "top" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={screen}
            alt={alt}
            className="absolute top-0 left-0 w-full max-w-none"
          />
        ) : (
          <Image
            src={screen}
            alt={alt}
            fill
            sizes="341px"
            className="object-cover"
          />
        )}
      </div>
      {/* Home indicator */}
      <div className="absolute inset-[96.96%_34.27%_2.49%_34.06%] overflow-hidden rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mockup/screen-period.png"
          alt=""
          className="absolute max-w-none"
          style={{
            height: "17767.38%",
            width: "292.76%",
            left: "-96.13%",
            top: "-17507.15%",
          }}
        />
      </div>
      {/* Dynamic island */}
      <div className="absolute inset-[3.11%_35.7%_92.91%_35.74%] overflow-hidden rounded-[19.68px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mockup/phone-frame.png"
          alt=""
          className="absolute max-w-none"
          style={{
            height: "2510.28%",
            width: "350.17%",
            left: "-125.05%",
            top: "-78.1%",
          }}
        />
      </div>
    </div>
  );
}
