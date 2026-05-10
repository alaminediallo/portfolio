import type { UIKey } from "@/i18n/ui";

export const SITE = {
  name: "Mamadou Lamine Diallo",
  resumeUrl: "cv/resume.pdf",
  nav: [
    { key: "nav.about" as UIKey, href: "#about" },
    { key: "nav.experience" as UIKey, href: "#experience" },
    { key: "nav.projects" as UIKey, href: "#projects" },
    // { key: "nav.writing" as UIKey, href: "#writing" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/alaminediallo",
      icon: "github" as const,
    },
    {
      label: "GitLab",
      href: "https://gitlab.com/LamineDiallo",
      icon: "gitlab" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mamadoulaminediallo",
      icon: "linkedin" as const,
    },
    {
      label: "Email",
      href: "mailto:laminediallo07565@gmail.com?subject=Hello%20Lamine",
      icon: "email" as const,
    },
  ],
} as const;

export type SocialIcon = "github" | "gitlab" | "linkedin" | "email";
