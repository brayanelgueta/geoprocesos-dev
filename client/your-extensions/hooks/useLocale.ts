import { useMemo } from "react";

export function useLocale(translations) {
  // Detecta locale desde la URL (?locale=en) o fallback a "es"
  const searchParams = new URLSearchParams(window.location.search);
  const locale = searchParams.get("locale") || "es";

  const t = useMemo(() => {
    return (key: keyof typeof translations["es"]) =>
      translations[locale as "es" | "en"][key] ?? key;
  }, [locale]);

  return { t, locale };
}