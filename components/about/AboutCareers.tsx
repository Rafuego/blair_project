import Link from "next/link";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const ROLES = [
  { title: "VP of Engineering", tags: ["Remote", "USA or NYC", "Full-time"] },
  { title: "Nurse Practitioners", tags: ["Remote", "USA or NYC", "Full-time"] },
  { title: "Customer Support", tags: ["Remote", "USA or NYC", "Full-time"] },
];

/** "Help us build" + open roles list (node 3329:9638). */
export function AboutCareers() {
  return (
    <section id="open-roles" className="w-full py-20 xl:py-25">
      <Container className="flex flex-col gap-14 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:w-[733px]">
            Help us build the next operating system for healthcare.
          </h2>
          <p className="type-body-lg text-secondary">
            The infrastructure we are building will outlast all of us. Join
            early enough to shape it.
          </p>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between border-b border-border-taupe pb-10">
            <h3 className="type-h3 text-espresso">Open Roles</h3>
            <Button href="mailto:hello@blairhealth.ca" variant="espresso">
              General application
            </Button>
          </div>
          {ROLES.map(({ title, tags }) => (
            <div key={title} className="flex w-full flex-col gap-4 border-b border-border-taupe px-0 py-10 xl:flex-row xl:items-center xl:justify-between xl:px-12">
              <div className="flex flex-col items-start gap-3 xl:flex-row xl:items-center xl:gap-4">
                <p className="type-h5 text-espresso">{title}</p>
                <div className="flex items-center gap-2">
                  {tags.map((t) => (
                    <span key={t} className="type-body-sm rounded-circle border border-border-taupe px-4 py-3 whitespace-nowrap text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link href="mailto:hello@blairhealth.ca" className="type-button flex items-center justify-center rounded-circle bg-primrose-pale px-7 py-3 text-espresso transition-colors hover:bg-primrose">
                Apply now
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
