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
    {
      title: "Menopausal Hormone Therapy (MHT)",
      body: "Estrogen and progesterone in the form that fits you: patch, gel, or pill. For example, estradiol with micronized progesterone. Most effective when started within 10 years of menopause, prescribed when it's right for you, and monitored over time.",
    },
    {
      title: "Non-hormonal prescriptions",
      body: "Evidence-based options when hormones aren't the right fit. For example, venlafaxine, gabapentin, or fezolinetant for hot flashes, and vaginal estrogen for dryness.",
    },
    {
      title: "Supplements",
      body: "Guidance on what's evidence-informed and what's just marketing.",
    },
    {
      title: "Lifestyle",
      body: "Sleep, nutrition, and movement changes that actually move the needle.",
    },
  ],
};

export const PERI_TRACKING = {
  titleLead: "Perimenopause changes month to month.",
  titleAccent: "Your care keeps up.",
  body: "Once your plan starts, tracking is how we know it's working. Log your cycle and symptoms in the Blair app and your care team sees the trends, so your plan adjusts as your hormones do.",
  rows: [
    {
      icon: "/icons/track/calendar-dots.svg",
      title: "Period tracker",
      body: "Built for cycles that no longer follow the rules. Spot the pattern inside the unpredictability.",
      screen: "/images/mockup/screen-period.png",
    },
    {
      icon: "/icons/track/list-star.svg",
      title: "Menopause Rating Scale",
      body: "Your symptoms, scored with the Menopause Rating Scale, a validated clinical measure. Watch your score improve as your plan takes effect.",
      screen: "/images/mockup/screen-mrs.png",
    },
    {
      icon: "/icons/track/asclepius.svg",
      title: "Your providers see it too",
      body: "Changes show up between visits, not just at them, so adjustments happen sooner.",
      screen: "/images/mockup/screen-plan.png",
    },
  ],
};

export const PERI_ASSESSMENT = {
  title: "Wondering if this is perimenopause?",
  paragraphs: [
    "Take the free assessment and we will tell you right away if you are in peri. No bloodwork needed.",
    "Prefer to talk it through first? Book a free call with one of our nurse practitioners to see if Blair is right for you.",
  ],
  image: "/images/care/assessment.png",
};

export const PERI_TESTIMONIALS = {
  title: "From women who stopped waiting for answers.",
  rating: "Rated 5.0 on Google reviews.",
  quotes: [
    {
      quote:
        "“Prescribed me MHT that same day and it's been life-changing — I'm sleeping better than I have since I was a teenager.”",
      name: "Skye W.",
    },
    {
      quote:
        "“I was on an 18-month waitlist to see a specialist. So grateful for the support as I began my HRT journey.”",
      name: "Richelle L.",
    },
    {
      quote:
        "“I have never felt better. I feel so much more like me again. They actually cared about how I was feeling.”",
      name: "Amy W.",
    },
  ],
};

export const PERI_SPECIALIST = {
  title: "Care designed by one of Canada's leading menopause specialists.",
  intro:
    "Your care is delivered by licensed nurse practitioners and physicians. Whoever you see, the care is the same: every plan is expert-built on the same specialist-designed protocols, with specialist oversight at every step.",
  image: "/images/care/specialist-lindsay.png",
  lead: "Blair's perimenopause care was built by ",
  leadName: "Dr. Lindsay Shirreff, MD, FRCSC, ",
  leadRest:
    "one of Canada's few fellowship-trained menopause subspecialists, with an active research program at Mount Sinai Hospital and the University of Toronto and over 40 peer-reviewed publications.",
  closing:
    "Every Blair care plan follows the clinical protocols she designed.",
  assurance:
    "Every Blair provider, NP or MD, is licensed, specialist-trained, and held to the same clinical standard.",
};

/** Only the first question has answer copy in the design, as on the homepage. */
export const PERI_FAQ = [
  {
    question: "Can I be in perimenopause if my periods are still regular?",
    answer:
      "Yes. Hormones can begin fluctuating before your cycle changes noticeably, so symptoms like poor sleep, mood shifts, or brain fog sometimes show up first. If something feels different, it's worth exploring. You don't need irregular periods to seek support.",
  },
  { question: "Do I need blood work to confirm perimenopause?", answer: null },
  {
    question: "Can I start treatment now, or do I have to wait until menopause?",
    answer: null,
  },
  { question: "How long does perimenopause last?", answer: null },
  {
    question: "Do I still need contraception during perimenopause?",
    answer: null,
  },
];

export const PERI_FINAL_CTA = {
  title: "Understand your stage. Get a plan. Stay ahead of the change.",
  body: "Specialist-designed care, personal tracking, and follow-up that keeps up with you, all in one place.",
  image: "/images/care/peri-final-cta.png",
  panelHeight: 574,
};
