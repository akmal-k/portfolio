export type CaseStudy = {
  slug: string;
  name: string;
  period: string;
  role: string;
  company: string;
  location: string;
  accent: { bg: string; text: string; border: string };
  tagline: string;
  problem: string;
  solution: string[];
  results: string[];
  tags: string[];
  storeLinks?: { appStore: string; playStore: string } | null;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "goodoc",
    name: "Goodoc (굿닥)",
    period: "Jul 2022 — Apr 2025",
    role: "Frontend Engineer",
    company: "Goodoc",
    location: "Seoul, South Korea",
    accent: { bg: "#E1F5EE", text: "#085041", border: "#9FE1CB" },
    tagline: "Telemedicine for millions of Korean patients.",
    problem:
      "Goodoc needed to expand its patient-facing mobile app with video consultations, real-time health notifications, and National Health Insurance integration — all while maintaining a seamless experience across a fragmented Android + iOS user base.",
    solution: [
      "Built the full video consultation flow using React Native — scheduling, pre-call checks, in-call UI, and post-call summary screens.",
      "Implemented real-time push notification infrastructure and the in-app notification center with badge counts and read/unread state.",
      "Developed autocomplete search with debounced API calls and a ranked results UI across clinics, doctors, and procedures.",
      "Led UI delivery across 5 major tab surfaces: Home, Search, Alerts, Health Magazine, and the Healthcare tab.",
      "Integrated the National Health Insurance API to surface checkup history directly in the patient profile.",
      "Shipped 'Health Magazine' — a content-driven feature with reusable card components, pagination, and deep-link support.",
    ],
    results: [
      "Goodoc serves 10M+ registered users on both App Store and Play Store.",
      "Video consultation feature launched successfully with zero critical post-launch bugs.",
      "Notification open-rate increased measurably after real-time system launch.",
      "Health Insurance integration became one of the most-used features within 30 days of shipping.",
    ],
    tags: ["React Native", "GraphQL", "Apollo Client", "REST APIs", "TypeScript"],
    storeLinks: {
      appStore: "https://apps.apple.com/kr/app/%EA%B5%BF%EB%8B%A5-%EA%B5%B3%EB%8B%A5/id1490937488",
      playStore: "https://play.google.com/store/apps/details?id=com.goodoc.android",
    },
  },
  {
    slug: "shaftoli",
    name: "Shaftoli App",
    period: "Oct 2023 — May 2025",
    role: "Frontend Lead",
    company: "Shaftoli",
    location: "Seoul, South Korea",
    accent: { bg: "#EEEDFE", text: "#534AB7", border: "#AFA9EC" },
    tagline: "A marketplace built on trust and speed.",
    problem:
      "Shaftoli needed a scalable marketplace where buyers and sellers could transact safely with real-time negotiation — requiring a frontend architecture that could handle complex state, live chat, and secure payment flows simultaneously.",
    solution: [
      "Led frontend architecture decisions — folder structure, state management patterns, component library setup, and API contract design.",
      "Built secure transaction flows including escrow-style confirmation screens, payment status polling, and error recovery UX.",
      "Developed real-time chat with WebSocket integration, message status indicators (sent/delivered/read), and media attachment support.",
      "Implemented smart recommendation interfaces using collaborative filtering outputs from the backend API.",
      "Optimized performance via code splitting, lazy loading of heavy screens, and component memoization to hit 60fps scrolling.",
    ],
    results: [
      "Marketplace launched on schedule with full transaction and chat functionality.",
      "App performance benchmarked at 60fps across mid-range Android devices.",
      "Architecture patterns established were adopted by the full team and scaled without rewrites.",
    ],
    tags: ["React Native", "TypeScript", "Redux", "WebSockets"],
    storeLinks: null,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
