import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Book a free intro call | Blair Health",
};

/** Stand-in for the booking system until its URL exists. */
export default function IntroCallPage() {
  return (
    <Placeholder
      title="Booking opens soon."
      body="Free intro calls are being scheduled through our booking partner shortly. In the meantime, the assessment is the fastest way to get started."
    />
  );
}
