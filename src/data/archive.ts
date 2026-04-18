export type ArchiveEntry = {
  year: number;
  title: string;
  org: string;
  tech: string[];
  url?: string;
  repo?: string;
};

export const archive: ArchiveEntry[] = [
  {
    year: 2024,
    title: "Desserts App",
    org: "",
    tech: ["React", "TypeScript", "TailwindCSS", "Zustand"],
    url: "https://desserts-app-six.vercel.app/",
    repo: "https://github.com/alaminediallo/desserts-app",
  },
  {
    year: 2024,
    title: "IP Address Tracker",
    org: "",
    tech: ["TypeScript", "CSS", "LeafletJS", "IPify API"],
    url: "https://ip-address-tracker-mu-plum.vercel.app/",
    repo: "https://github.com/alaminediallo/ip-address-tracker",
  },
  {
    year: 2024,
    title: "Currencies Conversion",
    org: "",
    tech: ["JavaScript", "HTML", "CSS"],
    url: "https://alaminediallo.github.io/Currencies_Conversion/",
    repo: "https://github.com/alaminediallo/Currencies_Conversion",
  },
  {
    year: 2023,
    title: "Age Calculator App",
    org: "",
    tech: ["TypeScript", "HTML", "CSS"],
    url: "https://alaminediallo.github.io/Age-calculator-app/",
    repo: "https://github.com/alaminediallo/Age-calculator-app",
  },
  {
    year: 2022,
    title: "Fylo Landing Page",
    org: "",
    tech: ["SCSS", "HTML", "Flexbox"],
    url: "https://alaminediallo.github.io/fylo/",
    repo: "https://github.com/alaminediallo/fylo",
  },
  {
    year: 2022,
    title: "Swatch",
    org: "",
    tech: ["SCSS", "HTML"],
    url: "https://alaminediallo.github.io/Swatch/",
    repo: "https://github.com/alaminediallo/Swatch",
  },
];
