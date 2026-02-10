import type { Locale } from "./i18n-config";

const dictionaries: Record<string, () => Promise<Record<string, unknown>>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale | string) => {
  const loader = dictionaries[locale] ?? dictionaries.en;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return loader() as Promise<any>;
};
