import type { Profile } from "@/components/about/ProfileGrid";

export const FOUNDERS: Profile[] = [
  {
    name: "Madge Rumman",
    role: "Co-Founder and CEO",
    photo: "/images/about/people/madge.png",
    // Bio verbatim from the expanded-card design (node 3327:7858).
    bio: "Madge is a product and business leader who built her career in fintech, with leadership roles at Affirm and Cadre, building and scaling technology used by millions and reshaping how people access financial services. She founded Blair Health after seeing the same problem from every angle: the specialist care women need exists, but the system cannot deliver it. At Blair she leads vision, product, and growth, bringing the scale playbook from fintech to healthcare's hardest infrastructure problem.",
    // Placeholder until the real profile URL is provided.
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dr. Lindsay Shirreff",
    role: "MD, FRCSC. Co-Founder and Chief Medical Officer",
    photo: "/images/about/people/lindsay-founder.png",
    bio: "Menopause and perimenopause lead. One of Canada's few fellowship-trained menopause subspecialists, with an active research program at Mount Sinai Hospital and the University of Toronto and over 40 peer-reviewed publications.",
    linkedin: "https://www.linkedin.com",
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
    bio: "Menopause and perimenopause lead. One of Canada's few fellowship-trained menopause subspecialists, with an active research program at Mount Sinai Hospital and the University of Toronto and over 40 peer-reviewed publications.",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dr. Sarah Peltz",
    role: "MD, FRCSC. Urology Lead",
    photo: "/images/specialists/sarah.png",
    photoPosition: "center 30%",
    bio: "Urology and pelvic health lead. Royal College certified urologist practising at Mackenzie Health and Cortellucci Vaughan Hospital, focused on making pelvic and bladder care easier to talk about and easier to get.",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dr. Pooja Singhal",
    role: "MD, FACG, DABOM. Weight Loss Lead",
    photo: "/images/specialists/pooja.png",
    photoPosition: "center 20%",
    bio: "Nutrition and weight management lead. Board-certified gastroenterologist and Diplomate of the American Board of Obesity Medicine, trained at Georgetown, founder of Oklahoma Gastro Health and Wellness.",
    linkedin: "https://www.linkedin.com",
  },
];

/** Photos not yet exported from the file — pending treatment renders. */
export const ADVISORY: Profile[] = [
  { name: "Kelly Davis", role: "Advisory Board" },
  { name: "Michael Ventrone", role: "Advisory Board" },
  { name: "Robin Rees", role: "Advisory Board" },
];
