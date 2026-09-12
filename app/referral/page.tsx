import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Refer a patient | Blair Health",
};

/** Stand-in until the real destination exists. */
export default function Page() {
  return (
    <Placeholder
      title="Referrals open soon."
      body="Provider referrals are being wired up. Blair doesn't require a referral — patients can start with the assessment today."
    />
  );
}
