import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Book a nutrition visit | Blair Health",
};

/** Stand-in for the nutrition booking flow until its URL exists. */
export default function NutritionVisitPage() {
  return (
    <Placeholder
      title="Nutrition visits open soon."
      body="Booking for one-on-one nutrition visits is being connected. Both programs are live — check the programs section for what each covers."
    />
  );
}
