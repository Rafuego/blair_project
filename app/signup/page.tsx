import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Sign up | Blair Health",
};

/** Stand-in for the app's signup flow until its URL exists. */
export default function SignupPage() {
  return (
    <Placeholder
      title="Signup is almost ready."
      body="The Blair app's signup flow is being connected. Check back shortly — or explore the areas of care while you're here."
    />
  );
}
