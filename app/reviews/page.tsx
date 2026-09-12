import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Reviews | Blair Health",
};

/** Stand-in until the public reviews profile URL is wired. */
export default function ReviewsPage() {
  return (
    <Placeholder
      title="Rated 5.0 by the women we care for."
      body="Our full reviews profile is being linked here. Every quote on the site comes from a real member or pilot participant."
    />
  );
}
