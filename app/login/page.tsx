import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Log in | Blair Health",
};

/** Stand-in until the real destination exists. */
export default function Page() {
  return (
    <Placeholder
      title="Member login is on its way."
      body="The Blair app login will live here once the platform connects. If you're mid-assessment or expecting results, hold tight — we'll email you."
    />
  );
}
