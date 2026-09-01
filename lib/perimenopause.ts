import type { Symptom } from "@/components/care/SymptomGrid";

export const PERI_HERO = {
  title: "Things are changing. Now you can understand why.",
  body: "Perimenopause can begin in your late 30s or 40s, often years before menopause. Hormone levels rise and fall unpredictably, which is why one month can feel nothing like the last. It's not “just aging.” It's hormones, and there's a lot you can do about it.",
  image: "/images/care/perimenopause-hero.png",
};

export const PERI_INTRO = {
  title: "One destination.\nMore than one way to arrive.",
  body: "Menopause isn't only “no period for 12 months.”\nHow you get there changes what it feels like and how we treat it.",
};

export const PERI_SYMPTOMS: Symptom[] = [
  {
    icon: "/icons/symptoms/drop.svg",
    title: "Period changes",
    body: "Earlier, later, heavier, lighter, sometimes all in the same month. Cycle changes are usually the first sign.",
  },
  {
    icon: "/icons/symptoms/fire.svg",
    title: "Hot flashes and night sweats",
    body: "A sudden wave of heat, day or night. One of the most common and most treatable symptoms.",
  },
  {
    icon: "/icons/symptoms/eye.svg",
    title: "Poor sleep",
    body: "Trouble falling asleep, staying asleep, or waking unrefreshed. Hormonal shifts directly affect sleep.",
  },
  {
    icon: "/icons/symptoms/smiley-sad.svg",
    title: "Mood changes",
    body: "More anxious, irritable, or reactive than usual? Hormones influence mood. It's not in your head.",
  },
  {
    icon: "/icons/symptoms/brain.svg",
    title: "Brain fog",
    body: "Losing words, losing your train of thought. It's hormonal, it's real, and it's treatable.",
  },
  {
    icon: "/icons/symptoms/scales.svg",
    title: "Weight changes",
    body: "Your body processes energy differently now, even when nothing else has changed. It's hormonal, not a personal failure.",
  },
];

export const PERI_SYMPTOM_COPY = {
  title: "If this sounds familiar, you're in the right place.",
  intro:
    "Symptoms vary from woman to woman, and month to month. These are the most common.",
  footnoteTitle: "Also common",
  footnoteBody:
    "breast tenderness, worsening PMS, changes in libido, vaginal dryness. We treat those too.",
};

export const PERI_PLAN = {
  title: "A plan built for you,\nnot a one-size prescription.",
  intro:
    "Complete your assessment, meet your provider, and get a personalized plan guided by clinical practice guidelines.",
  steps: ["Take the assessment", "Meet your specialist", "Start your plan"],
  options: [
    "Menopausal Hormone Therapy (MHT)",
    "Non-hormonal prescriptions",
    "Supplements",
    "Lifestyle",
  ],
};
