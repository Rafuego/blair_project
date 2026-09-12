import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Contact | Blair Health",
};

/** Stand-in until the real destination exists. */
export default function Page() {
  return (
    <Placeholder
      title="We'd love to hear from you."
      body="Our contact desk is being set up. For anything urgent, reach us through the demo form or your usual Blair contact."
    />
  );
}
