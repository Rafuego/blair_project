import type { DiagnosisStep } from "@/components/care/DiagnosisFlow";
import type { Symptom } from "@/components/care/SymptomGrid";
import type { TreatmentTab } from "@/components/care/TreatmentTabs";

export const URO_HERO = {
  title: "Not something to live with. Something to treat.",
  body: "Bladder leaks, urgency, recurrent UTIs, dryness, discomfort with sex. They're some of the most common and least talked about health issues women face, at every age. They can be diagnosed and treated, and you can start today.",
  image: "/images/urology/hero.png",
};

export const URO_INTRO = {
  title: "Different symptoms.\nOften, one connected cause.",
  body: "The bladder, urethra, pelvic floor, and vaginal tissue all work as one system. Childbirth, sport, hormones, and age each change that system in different ways, which is why leaks, urgency, UTIs, and dryness so often show up together. “Just drink more water.”",
  accent: "There's more to the story.",
};

export const URO_CONDITIONS_COPY = {
  title: "We diagnose 6 of the most common bladder conditions.",
  intro:
    "One free assessment tells you which one fits your symptoms, so you stop guessing and start treating.",
  cta: {
    text: "Is your bladder health on track? Find out in minutes.",
    label: "Take the free assessment",
    href: "/assessment",
  },
};

export const URO_CONDITIONS: Symptom[] = [
  {
    icon: "/icons/urology/calendar-dots.svg",
    title: "Recurrent UTIs",
    body: "Two or more infections in six months, or three in a year? That's a pattern with a cause, not bad luck. We break the cycle.",
  },
  {
    icon: "/icons/urology/drop-a.svg",
    title: "Urge incontinence",
    body: "The urge arrives and won't wait. Different cause than stress leaks, different treatment, same result: fixable.",
  },
  {
    icon: "/icons/urology/drop-b.svg",
    title: "Mixed incontinence",
    body: "Leaks from both pressure and urgency. Very common, and the treatment plan changes when we know it's both",
  },
  {
    icon: "/icons/urology/heart-half.svg",
    title: "Genitourinary Syndrome of Menopause (GSM)",
    body: "Dryness, irritation, discomfort with sex, and urinary changes driven by declining estrogen. Highly treatable.",
  },
  {
    icon: "/icons/urology/clock-countdown.svg",
    title: "Overactive bladder (OAB)",
    body: "Sudden urges, frequent trips, mapping your day around bathrooms. A recognized, treatable condition.",
  },
  {
    icon: "/icons/urology/barbell.svg",
    title: "Stress urinary incontinence",
    body: "Leaking when you laugh, cough, sneeze, or exercise. About pelvic floor support, not something to be embarrassed about.",
  },
];

export const URO_DIAGNOSIS = {
  title: "From “what is this?” to a diagnosis, fast.",
  intro:
    "No referral, no waitlist, no repeating your story to three different doctors.",
  steps: [
    {
      title: "Complete the pelvic health assessment",
      body: "A specialist-designed intake that captures your symptoms, history, and triggers, in minutes.",
    },
    {
      title: "Get an immediate diagnosis",
      body: "Your answers are screened against clinical criteria and we tell you right away which bladder condition fits your symptoms.",
    },
    {
      title: "Meet your provider right away",
      body: "Book your video visit on the spot, confirm your diagnosis, and leave with a personalized treatment plan.",
    },
  ] satisfies DiagnosisStep[],
  panel: {
    eyebrow: "After your visit",
    body: "Unlimited provider messaging and symptom tracking, so your plan adjusts as you improve.",
    label: "Start the free assessment",
    href: "/assessment",
  },
};

export const URO_TREATMENT = {
  title: "Treatment that fits the diagnosis, and your life.",
  intro: "Guided by clinical practice guidelines, personalized by your provider.",
  // Only the first tab carries copy in the design. Fill the rest in here —
  // the component reads straight from this array.
  tabs: [
    {
      label: "Antimicrobial options",
      body: "Local, low-dose treatment that restores bladder, urethral, and vaginal tissue. Safe for most women, at any age.",
    },
    { label: "Vaginal treatments", body: null },
    { label: "Bladder relaxants", body: null },
    { label: "Dietary recommendations", body: null },
    { label: "Lifestyle suggestions", body: null },
  ] satisfies TreatmentTab[],
  cta: {
    text: "Is your bladder health on track? Find out in minutes.",
    label: "Take the free assessment",
    href: "/assessment",
  },
};

export const URO_ASSESSMENT = {
  title: "Wondering if what you're experiencing is normal?",
  paragraphs: [
    "Take the free assessment and find out in minutes if your bladder health is on track, and what to do if it isn't.",
    "Prefer to talk it through first? Book a free call with one of our nurse practitioners.",
  ],
  image: "/images/care/assessment.png",
};

export const URO_TESTIMONIALS = {
  title: "From women who stopped putting up with it.",
  rating: "Rated 5.0 on Google reviews.",
  quotes: [
    {
      quote:
        "“Excellent care and incredible convenience. I'd recommend Blair to any busy woman.”",
      name: "Carolyn A.",
    },
    {
      quote:
        "“I have never felt better. I feel so much more like me again. They actually cared about how I was feeling.”",
      name: "Amy W.",
    },
    {
      quote:
        "“I was on an 18-month waitlist to see a specialist. So grateful for the support as I began my HRT journey.”",
      name: "Richelle L.",
    },
  ],
};

export const URO_SPECIALIST = {
  title: "Care designed by a specialist in women's urology.",
  image: "/images/urology/specialist-peltz.png",
  lead: "Blair's pelvic health care was designed by ",
  leadName: "Dr. Sarah Peltz, MD, FRCSC",
  leadRest:
    ", our Medical Lead for Urology. Sarah is a urologist who has spent her career helping women with bladder and pelvic conditions, in hospital and in clinic, and she's built that experience into every Blair pelvic health plan. Warm, practical, and impossible to embarrass: exactly who you want on this topic.",
  closing: "",
  assurance:
    "Every Blair provider, NP or MD, is licensed, specialist-trained, and held to the same clinical standard.",
};

/** Only the first question has answer copy in the design. */
export const URO_FAQ = [
  {
    question: "Is leaking when I laugh, sneeze, or work out normal?",
    answer:
      "It's common, affecting about 1 in 3 women at some point, but common isn't the same as something you have to accept. Stress incontinence is a well-understood, treatable condition, and avoiding the trigger isn't the only option.",
  },
  { question: "Can you really diagnose a bladder condition online?", answer: null },
  { question: "I keep getting UTIs. Why does this keep happening?", answer: null },
  { question: "Do I need a referral to see a specialist?", answer: null },
  { question: "I'm in my 20s or 30s. Isn't this a menopause thing?", answer: null },
  { question: "Is vaginal estrogen safe?", answer: null },
];

export const URO_FINAL_CTA = {
  title: "Stop working around it.\nFind out what it is.",
  body: "Take the free assessment, get your diagnosis, and meet a provider right away, all in one place.",
  image: "/images/urology/final-cta.png",
  panelHeight: 574,
  primaryLabel: "Check your bladder health",
  primaryHref: "/assessment",
};
