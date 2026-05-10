import { defaultLang, ui, type UIKey } from "./ui";

export type Lang = keyof typeof ui;

export function isLang(value: string): value is Lang {
  return value in ui;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  return maybeLang && isLang(maybeLang) ? maybeLang : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string>): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    const raw = dict[key] ?? fallback[key] ?? key;
    if (!vars) return raw;
    return raw.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  };
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  if (clean === "/") return `/${lang}`;
  return `/${lang}${clean}`;
}

export function alternatePath(currentUrl: URL, targetLang: Lang): string {
  const segments = currentUrl.pathname.split("/").filter(Boolean);
  const stripped = segments[0] && isLang(segments[0]) ? segments.slice(1) : segments;
  const rest = stripped.length === 0 ? "/" : `/${stripped.join("/")}`;
  return localizedPath(targetLang, rest);
}
