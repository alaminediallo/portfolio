export const languages = {
  en: "English",
  fr: "Français",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "site.title": "Web & Mobile Developer",
    "site.tagline":
      "I build clean, performant, user-focused web and mobile interfaces.",
    "html.locale": "en_US",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.aria": "In-page links",
    "section.about.heading": "About",
    "section.experience.heading": "Experience",
    "section.experience.viewResume": "View Full Résumé",
    "section.experience.viewResume.aria":
      "View Full Résumé (opens in a new tab)",
    "section.projects.heading": "Projects",
    "section.projects.viewArchive": "View Full Project Archive",
    "archive.title": "All Projects",
    "archive.meta.title": "All Projects | Mamadou Lamine Diallo",
    "archive.meta.description":
      "A complete archive of all projects built by Mamadou Lamine Diallo.",
    "archive.col.year": "Year",
    "archive.col.project": "Project",
    "archive.col.madeAt": "Made at",
    "archive.col.builtWith": "Built with",
    "archive.col.links": "Links",
    "footer.designedBy": "Loosely designed & built by",
    "footer.brittany": "Brittany Chiang.",
    "footer.recreated": "Recreated with inspiration using",
    "footer.and": "&",
    "error.returnHome": "Return home",
    "error.404.headTitle": "404 | Page Not Found",
    "error.404.headDescription": "The page you're looking for doesn't exist.",
    "error.404.message.line1": "You've navigated to a page that doesn't exist.",
    "error.404.message.line2": "Let's get you back on track.",
    "error.500.headTitle": "500 | Server Error",
    "error.500.headDescription": "Something went wrong on our end.",
    "error.500.message.line1": "Something unexpected happened on our end.",
    "error.500.message.line2":
      "The server couldn't fulfill your request right now.",
    "social.aria": "Social media",
    "social.email.aria": "Email {label} (opens email client)",
    "social.link.aria": "{label} (opens in a new tab)",
    "tech.aria": "Technologies used",
    "card.github.aria": "{title} GitHub",
    "card.live.aria": "{title} live site (opens in a new tab)",
    "card.repo.aria": "{title} source code on GitHub",
    "lang.aria": "Switch language",
  },
  fr: {
    "site.title": "Développeur Web & Mobile",
    "site.tagline":
      "Je construis des interfaces web et mobiles propres, rapides et faciles à utiliser.",
    "html.locale": "fr_FR",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.aria": "Liens dans la page",
    "section.about.heading": "À propos",
    "section.experience.heading": "Expérience",
    "section.experience.viewResume": "Voir le CV complet",
    "section.experience.viewResume.aria":
      "Voir le CV complet (s'ouvre dans un nouvel onglet)",
    "section.projects.heading": "Projets",
    "section.projects.viewArchive": "Voir l'archive complète des projets",
    "archive.title": "Tous les projets",
    "archive.meta.title": "Tous les projets | Mamadou Lamine Diallo",
    "archive.meta.description":
      "Archive complète de tous les projets réalisés par Mamadou Lamine Diallo.",
    "archive.col.year": "Année",
    "archive.col.project": "Projet",
    "archive.col.madeAt": "Réalisé chez",
    "archive.col.builtWith": "Construit avec",
    "archive.col.links": "Liens",
    "footer.designedBy": "Inspiré du design de",
    "footer.brittany": "Brittany Chiang.",
    "footer.recreated": "Refait avec",
    "footer.and": "&",
    "error.returnHome": "Retour à l'accueil",
    "error.404.headTitle": "404 | Page introuvable",
    "error.404.headDescription": "La page que vous cherchez n'existe pas.",
    "error.404.message.line1":
      "Vous avez atterri sur une page qui n'existe pas.",
    "error.404.message.line2": "On vous remet sur le bon chemin.",
    "error.500.headTitle": "500 | Erreur serveur",
    "error.500.headDescription": "Quelque chose s'est mal passé de notre côté.",
    "error.500.message.line1": "Une erreur inattendue est survenue.",
    "error.500.message.line2":
      "Le serveur n'arrive pas à traiter votre requête pour l'instant.",
    "social.aria": "Réseaux sociaux",
    "social.email.aria":
      "Envoyer un e-mail à {label} (ouvre le client de messagerie)",
    "social.link.aria": "{label} (s'ouvre dans un nouvel onglet)",
    "tech.aria": "Technologies utilisées",
    "card.github.aria": "{title} GitHub",
    "card.live.aria":
      "Site en ligne de {title} (s'ouvre dans un nouvel onglet)",
    "card.repo.aria": "Code source de {title} sur GitHub",
    "lang.aria": "Changer de langue",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
