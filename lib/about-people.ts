import type { Profile } from "@/components/about/ProfileGrid";

export const FOUNDERS: Profile[] = [
  {
    name: "Madge Rumman",
    role: "Co-Founder and CEO",
    photo: "/images/about/people/madge.png",
  },
  {
    name: "Dr. Lindsay Shirreff",
    role: "MD, FRCSC. Co-Founder and Chief Medical Officer",
    photo: "/images/about/people/lindsay-founder.png",
  },
];

export const TEAM: Profile[] = [
  { name: "Maiku Nakajima", role: "Senior Engineer", photo: "/images/about/people/maiku.png" },
  { name: "Savannah Onley", role: "Business Development Manager", photo: "/images/about/people/savannah.png", photoPosition: "center 20%" },
  { name: "Abdu Karim", role: "Engineer" },
  { name: "Serhii Pohorielev", role: "Engineer" },
  { name: "Liza Kovalchuk", role: "Product designer" },
];

export const MEDICAL_BOARD: Profile[] = [
  {
    name: "Dr. Lindsay Shirreff",
    role: "MD, FRCSC. Co-Founder and Chief Medical Officer",
    photo: "/images/about/people/lindsay-founder.png",
  },
  {
    name: "Dr. Sarah Peltz",
    role: "MD, FRCSC. Urology Lead",
    photo: "/images/specialists/sarah.png",
    photoPosition: "center 30%",
  },
  {
    name: "Dr. Pooja Singhal",
    role: "MD, FACG, DABOM. Weight Loss Lead",
    photo: "/images/specialists/pooja.png",
    photoPosition: "center 20%",
  },
];

/** Photos not yet exported from the file — pending treatment renders. */
export const ADVISORY: Profile[] = [
  { name: "Kelly Davis", role: "Advisory Board" },
  { name: "Michael Ventrone", role: "Advisory Board" },
  { name: "Robin Rees", role: "Advisory Board" },
];
