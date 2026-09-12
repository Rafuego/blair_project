import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Media | Blair Health",
};

/** Stand-in until the real destination exists. */
export default function Page() {
  return (
    <Placeholder
      title="Media inquiries."
      body="Our press kit and media contact are being finalized. Check back soon."
    />
  );
}
