import localFont from "next/font/local";

// Display face — headings only (H2–H4 in the Figma type system).
export const marlfield = localFont({
  src: [{ path: "./fonts/Marlfield-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
});

// Text face — all body, UI and button copy.
export const neueMontreal = localFont({
  src: [
    { path: "./fonts/NeueMontreal-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/NeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
