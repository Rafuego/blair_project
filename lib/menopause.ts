import type { MenopauseType } from "@/components/care/MenopauseTypes";
import type { PostCard } from "@/components/care/PostMenopause";
import type { Symptom } from "@/components/care/SymptomGrid";

export const MENO_HERO = {
  title: "It's not too late to feel like yourself.",
  body: "Menopause is the point where your ovaries step back from producing estrogen, progesterone, and testosterone. That shift is permanent, and it matters: how you handle this stage shapes your mood, bones, heart, and brain for decades. It's also a window of opportunity, and there's a lot you can do about it.",
  image: "/images/menopause/hero.png",
  padBottom: true,
};

export const MENO_TYPES_COPY = {
  title: "One destination.\nMore than one way to arrive.",
  intro:
    "Menopause isn't only “no period for 12 months.” How you get there changes what it feels like and how we treat it.",
};

export const MENO_TYPES: MenopauseType[] = [
  {
    icon: "/icons/menopause/calendar-dots.svg",
    title: "Natural menopause",
    body: "12 months without a period, on average around age 51. The ovaries retire from producing estrogen, progesterone, and testosterone, and hormones settle at a new, lower baseline.",
  },
  {
    icon: "/icons/menopause/first-aid.svg",
    title: "Surgical menopause",
    body: "If both ovaries are removed, with or without a hysterectomy, menopause begins immediately, at any age. Symptoms often start suddenly and hit harder, and treatment matters even more.",
  },
  {
    icon: "/icons/menopause/calendar-alt.svg",
    title: "Hysterectomy with ovaries kept",
    body: "Your periods stop, but your ovaries keep working, so menopause arrives later on its own schedule. Without periods to go by, symptoms become the signal, and we help you read them.",
  },
];

export const MENO_SYMPTOM_COPY = {
  title: "If this sounds familiar, you're in the right place.",
  intro:
    "Menopause symptoms aren't in your head. They're in your hormones. Every one of these has a biological cause, and most have highly effective treatments.",
  footnoteTitle: "Also common",
  footnoteBody:
    "brain fog, joint aches, hair and skin changes, bladder changes. We treat those too.",
};

export const MENO_SYMPTOMS: Symptom[] = [
  {
    icon: "/icons/symptoms/fire.svg",
    title: "Hot flashes and night sweats",
    body: "A sudden wave of heat, day or night. The most common symptom of menopause, and one of the most treatable.",
  },
  {
    icon: "/icons/symptoms/wave-sawtooth.svg",
    title: "Vaginal dryness and itch",
    body: "Dryness, irritation, or pain with intimacy. Very common, very treatable, and safe to treat at any age.",
  },
  {
    icon: "/icons/symptoms/heart-half.svg",
    title: "Low libido",
    body: "Desire is hormonal too. Estrogen and testosterone both play a role, and there are real options.",
  },
  {
    icon: "/icons/symptoms/scales.svg",
    title: "Abdominal weight gain",
    body: "Lower hormones change how your body stores fat, even when nothing else has changed. Hormonal, not a personal failure.",
  },
  {
    icon: "/icons/symptoms/eye.svg",
    title: "Sleep disruption",
    body: "Trouble falling asleep, staying asleep, or waking unrefreshed. Lower estrogen directly affects sleep quality.",
  },
  {
    icon: "/icons/symptoms/smiley-sad.svg",
    title: "Worsening mood",
    body: "More flat, anxious, or irritable than you used to be? Hormones influence mood. It's not in your head.",
  },
];

export const MENO_TRACKING = {
  titleLead: "Your provider,",
  titleAccent: "a message away.",
  body: "Menopause care isn't one appointment. Between visits, message your provider as often as you need, at no extra cost, and track how you're responding so your plan adjusts sooner.",
  rows: [
    {
      icon: "/icons/menopause/message.svg",
      title: "Unlimited provider messaging",
      body: "New symptom? Side effect question? Message your care team any time. No booking, no waiting room, no per-message fees.",
      screen: "/images/mockup/screen-message.png",
    },
    {
      icon: "/icons/track/list-star.svg",
      title: "Menopause Rating Scale",
      screen: "/images/mockup/screen-mrs.png",
    },
    {
      icon: "/icons/menopause/heartbeat.svg",
      title: "Symptom tracking",
      screen: "/images/mockup/screen-data.png",
    },
  ],
};

export const MENO_POST_COPY = {
  title: "Menopause has an end date.\nYour health plan shouldn't",
  intro:
    "Post-menopause is every year after your final period, and it's where the long game is won: bone strength, heart health, and cognitive function all connect back to hormones.",
};

export const MENO_POST_CARDS: PostCard[] = [
  {
    icon: "/icons/menopause/post-1.svg",
    title: "Symptoms can outlast the transition",
    body: "Hot flashes fade for most women, but some symptoms, like vaginal dryness and bladder changes, tend to persist or appear later. They stay treatable at every age.",
  },
  {
    icon: "/icons/menopause/post-2.svg",
    title: "Prevention is part of the plan",
    body: "Your Blair plan looks past symptom relief to what protects you long-term: bone density, cardiovascular health, strength, and sleep.",
  },
  {
    icon: "/icons/menopause/post-3.svg",
    title: "Over 60? You still have options",
    body: "MHT works best started under 60 or within 10 years of your final period. Starting it later is a case-by-case decision made with your provider based on your health history. Already on MHT? Continuing past 60 can be appropriate with regular review. And vaginal estrogen and non-hormonal treatments are safe and effective at any age.",
    wide: true,
  },
];

export const MENO_ASSESSMENT = {
  title: "Perimenopause, menopause, or post-menopause? Find out.",
  paragraphs: [
    "Take the free assessment and we will tell you your stage right away. No bloodwork needed.",
    "Prefer to talk it through first? Book a free call with one of our nurse practitioners to see if Blair is right for you.",
  ],
  image: "/images/care/assessment.png",
};

/** Only the first question has answer copy in the design. */
export const MENO_FAQ = [
  {
    question: "Do I need blood work to know if I'm in menopause?",
    answer:
      "Yes. Hormones can begin fluctuating before your cycle changes noticeably, so symptoms like poor sleep, mood shifts, or brain fog sometimes show up first. If something feels different, it's worth exploring. You don't need irregular periods to seek support.",
  },
  { question: "Do you prescribe testosterone for low sex drive?", answer: null },
  { question: "Do you offer bioidentical hormone therapy?", answer: null },
  { question: "Is hormone therapy safe?", answer: null },
  { question: "How long do menopause symptoms last?", answer: null },
  {
    question: "It's been years since my last period. Is it too late to get help?",
    answer: null,
  },
];

export const MENO_FINAL_CTA = {
  title: "It's never too late to feel better.",
  body: "Specialist-designed care, unlimited provider messaging, and a plan that looks after the long run, all in one place.",
  image: "/images/menopause/final-cta.png",
};
