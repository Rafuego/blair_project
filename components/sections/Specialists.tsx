import Image from "next/image";
import { Plus } from "../icons";
import { Container } from "../ui/Container";

/** Each portrait is cropped differently in Figma; the object-position values
 *  below reproduce those crops rather than defaulting everything to centre. */
const SPECIALISTS = [
  {
    name: "Dr. Lindsay Shirreff",
    credentials: "MD, FRCSC",
    image: "/images/specialists/lindsay.png",
    position: "38% 12%",
  },
  {
    name: "Dr. Sarah Peltz",
    credentials: "MD, FRCSC",
    image: "/images/specialists/sarah.png",
    position: "center bottom",
  },
  {
    name: "Dr. Pooja Singhal",
    credentials: "MD, FACG, DABOM",
    image: "/images/specialists/pooja.png",
    position: "30% 20%",
  },
];

export function Specialists() {
  return (
    <section className="w-full py-25">
      <Container className="flex flex-col items-center gap-18 px-6 xl:px-[73px]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
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

        <div className="flex w-full items-start gap-6">
          {SPECIALISTS.map(({ name, credentials, image, position }) => (
            <article
              key={name}
              className="relative flex h-[450px] min-w-px flex-1 flex-col justify-end overflow-hidden rounded-medium bg-white"
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 1440px) 33vw, 415px"
                className="object-cover"
                style={{ objectPosition: position }}
              />
              <span className="absolute top-[19.59px] right-4 flex size-12 items-center justify-center rounded-circle bg-primrose text-charcoal">
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
