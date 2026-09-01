import Image from "next/image";
import { Container } from "../ui/Container";

export type PostCard = { icon: string; title: string; body: string; wide?: boolean };

/** "Menopause has an end date" (node 3224:5976) — two cards then a wide one. */
export function PostMenopause({
  title,
  intro,
  cards,
}: {
  title: string;
  intro: string;
  cards: PostCard[];
}) {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-[54px] px-6 pt-20 pb-20 xl:px-18 xl:pt-[150px] xl:pb-25">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 whitespace-pre-line text-espresso">{title}</h2>
          <p className="type-body text-secondary xl:w-[714px]">{intro}</p>
        </div>

        <div className="flex w-full flex-wrap content-start items-start justify-center gap-2 xl:w-[988px]">
          {cards.map(({ icon, title: name, body, wide }) => (
            <div
              key={name}
              className={`flex flex-col gap-6 rounded-medium bg-white/70 p-6 ${
                wide
                  ? "w-full items-start xl:w-[896px] xl:flex-row xl:items-center xl:gap-8"
                  : "w-full items-center xl:w-[448px]"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-small bg-primrose-pale ${
                  wide ? "h-12 w-12 xl:h-[114px]" : "size-12"
                }`}
              >
                <span className="relative block size-8">
                  <Image src={icon} alt="" fill sizes="32px" />
                </span>
              </span>
              <div
                className={`flex min-w-px flex-col gap-1 ${wide ? "flex-1 text-left" : "w-full text-center"}`}
              >
                <p className="type-h5 w-full text-espresso">{name}</p>
                <p className="type-body w-full text-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
