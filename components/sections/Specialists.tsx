import { Plus } from "../icons";
import { Container } from "../ui/Container";

/**
 * Portraits are cut out on white and the subject fills ~95% of each source
 * image's height, so the card fits them by height over its white background
 * rather than cropping. Figma's exported fill percentages (158%/219% etc.)
 * do not match how the file actually renders — they zoom past the top of the
 * head — so the render is the reference here, not the generated numbers.
 */
const SPECIALISTS = [
  {
    name: "Dr. Lindsay Shirreff",
    credentials: "MD, FRCSC",
    image: "/images/specialists/lindsay.png",
  },
  {
    name: "Dr. Sarah Peltz",
    credentials: "MD, FRCSC",
    image: "/images/specialists/sarah.png",
  },
  {
    name: "Dr. Pooja Singhal",
    credentials: "MD, FACG, DABOM",
    image: "/images/specialists/pooja.png",
  },
];

export function Specialists() {
  return (
    <section className="w-full py-20 xl:py-25">
      <Container className="flex flex-col items-center gap-[72px] px-4 xl:gap-18 xl:px-[73px]">
        <div className="flex w-full flex-col gap-4 text-left xl:items-center xl:text-center">
          <h2 className="type-h2 w-full text-espresso">
            Care designed by specialists who lead their fields.
          </h2>
          <p className="type-body-lg max-w-[788px] text-secondary">
            Every Blair care plan follows clinical protocols built by our
            specialist leads.
            <br />
            They designed the care; licensed NPs and MDs deliver it, held to the
            same clinical standard.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 xl:flex-row xl:items-start">
          {SPECIALISTS.map(({ name, credentials, image }) => (
            <article
              key={name}
              className="group relative flex h-[388px] w-full shrink-0 flex-col justify-end overflow-hidden rounded-medium bg-white xl:h-[450px] xl:min-w-px xl:flex-1"
            >
              {/* Height-fit at 112% and anchored to the top: the subject fills
                  the card as it does in Figma, and the only thing the overflow
                  crops is the lower chest, which the name plate covers anyway.
                  eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={name}
                className="absolute top-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2"
              />
              <span className="absolute top-[19.59px] right-4 flex size-12 items-center justify-center rounded-circle bg-primrose text-charcoal transition-colors duration-200 group-hover:bg-espresso group-hover:text-primrose">
                <Plus className="size-6" />
              </span>
              <div className="relative p-1">
                <div className="flex w-full items-center justify-between rounded-medium bg-espresso-40 px-6 py-4 whitespace-nowrap text-white backdrop-blur-[9px]">
                  <p className="type-h5">{name}</p>
                  <p className="type-body-medium">{credentials}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
