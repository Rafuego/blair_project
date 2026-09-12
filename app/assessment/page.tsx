import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Take the free assessment | Blair Health",
};

/** Stand-in until the real destination exists. */
export default function Page() {
  return (
    <Placeholder
      title="The assessment is almost ready."
      body="The specialist-designed assessment is being connected to the Blair app. Check back shortly — it takes about 10 minutes and gives you an instant picture of where you are."
    />
  );
}
