import type { Metadata } from "next";
import { marlfield, neueMontreal } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blair Health",
  description:
    "Specialist care that keeps up with you. Blair connects you to specialist-level care across women's health.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marlfield.variable} ${neueMontreal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
