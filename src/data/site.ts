export const SITE = {
  name: "Mamadou Lamine Diallo",
  title: "Web & Mobile Developer",
  tagline: "I build clean, performant, user-focused web and mobile interfaces.",
  resumeUrl: "cv/resume.pdf",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    // { label: "Writing", href: "#writing" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/alaminediallo",
      icon: "github" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mamadoulaminediallo",
      icon: "linkedin" as const,
    },
    {
      label: "GitLab",
      href: "https://gitlab.com/LamineDiallo",
      icon: "gitlab" as const,
    },
  ],
} as const;

export type SocialIcon = "github" | "linkedin" | "gitlab";
