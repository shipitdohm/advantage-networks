import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { de } from "./de";

export const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary, Locale } from "./types";
