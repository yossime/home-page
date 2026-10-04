// ---------------------------------------------------------------------------
// All editable site content lives in this file.
// ---------------------------------------------------------------------------

/**
 * Contact and profile links.
 * LinkedIn is hidden everywhere while the string is empty — paste your
 * profile URL here to show it.
 */
export const LINKS = {
  github: "https://github.com/yossime",
  email: "yossimendelovitz@gmail.com",
  linkedin: "https://www.linkedin.com/in/yossi-mendelovitz",
};

/**
 * Public URL of the deployed site (used for OpenGraph/canonical metadata).
 * Update after deploying to Vercel.
 */
export const SITE_URL = "https://home-page-one-blue.vercel.app";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  /**
   * Repo or product link. Use null for work that cannot be shared.
   */
  href: string | null;
  /** Short status line shown under the title (e.g. "Live product"). */
  note?: string;
  /** Spans the full grid width — for the headline project. */
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Keranto",
    description:
      "Hebrew AI phone secretary for Israeli small businesses — answers missed calls, holds a real Hebrew conversation, captures the lead and pushes it to the owner on WhatsApp. Live product.",
    tags: ["Python", "Twilio Media Streams", "Hebrew STT/TTS", "LLM agents", "Postgres"],
    href: "https://keranto.com",
    note: "Live product · code private",
    featured: true,
  },
  {
    name: "StoryConnect",
    description:
      "Hebrew-first ephemeral stories app, RTL-aware from the first screen — mobile client on Expo with row-level-secured Postgres behind it.",
    tags: ["Expo", "React Native", "Supabase", "Postgres + RLS"],
    href: "https://github.com/yossime/StoryConnect",
  },
  {
    name: "Togedo",
    description:
      "Collaborative group task management — one TypeScript type system from database to UI, with realtime sync across every member's board.",
    tags: ["Next.js", "NestJS", "tRPC", "Prisma", "Socket.IO"],
    href: "https://github.com/yossime/Togedo",
  },
  {
    name: "Community Platform",
    description:
      "RTL-first community and marketplace platform: payments for sellers, typo-tolerant Hebrew search, and vector-backed discovery.",
    tags: ["Next.js", "tRPC", "Prisma + pgvector", "Stripe Connect", "Meilisearch"],
    href: "https://github.com/yossime/community-platform",
  },
  {
    name: "AI Phone Agent",
    description:
      "Hebrew voice-AI experiments on Twilio ConversationRelay — wiring Hebrew speech-to-text and text-to-speech into a live phone call.",
    tags: ["Twilio ConversationRelay", "Hebrew STT/TTS", "WebRTC"],
    href: "https://github.com/yossime/ai-phone",
  },
  {
    name: "Industrial IoT — Modbus transport",
    description:
      "Custom Modbus TCP/RTU transport layer and register-mapping tooling, built on an open-source IoT platform — protocol framing, polling, and device onboarding.",
    tags: ["Java", "Netty", "Spring"],
    href: null,
    note: "Professional work · proprietary",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages & runtimes",
    items: ["TypeScript", "Node.js", "Java"],
  },
  {
    label: "Frontend & mobile",
    items: ["React", "Next.js", "React Native / Expo"],
  },
  {
    label: "APIs & data",
    items: [
      "tRPC",
      "NestJS",
      "Express",
      "Spring Boot",
      "Prisma",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    label: "Realtime, infra & tooling",
    items: ["WebSockets / Socket.IO", "Docker", "AWS (basics)", "CI/CD"],
  },
];

export const SPECIALTIES: { title: string; detail: string }[] = [
  {
    title: "Hebrew / RTL-first product engineering",
    detail:
      "Layout, typography, data, and search designed for right-to-left from the first commit — not patched in later.",
  },
  {
    title: "IoT protocol work",
    detail:
      "Modbus TCP/RTU transport and register-mapping tooling on an open-source IoT platform.",
  },
  {
    title: "AI-assisted development",
    detail:
      "One person shipping end to end — product thinking, frontend, backend, data, and infra — by directing AI coding agents through the work. The engineering judgment to review, test, and own everything that ships stays with me.",
  },
];
