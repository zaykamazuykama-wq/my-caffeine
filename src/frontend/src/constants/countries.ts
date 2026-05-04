import type { Country } from "@/types/car";

export interface CountryMeta {
  key: Country;
  label: string;
  badgeClass: string;
  cardClass: string;
  emoji: string;
  bgHex: string;
}

export const COUNTRY_META: CountryMeta[] = [
  {
    key: "Japan",
    label: "Япон",
    badgeClass: "country-badge-japan",
    cardClass: "card-country-japan",
    emoji: "🇯🇵",
    bgHex: "oklch(0.60 0.22 40)",
  },
  {
    key: "Korea",
    label: "Солонгос",
    badgeClass: "country-badge-korea",
    cardClass: "card-country-korea",
    emoji: "🇰🇷",
    bgHex: "oklch(0.65 0.18 240)",
  },
  {
    key: "Russia",
    label: "Орос",
    badgeClass: "country-badge-russia",
    cardClass: "card-country-russia",
    emoji: "🇷🇺",
    bgHex: "oklch(0.55 0.20 15)",
  },
  {
    key: "Germany",
    label: "Герман",
    badgeClass: "country-badge-germany",
    cardClass: "card-country-germany",
    emoji: "🇩🇪",
    bgHex: "oklch(0.78 0.20 100)",
  },
  {
    key: "UK",
    label: "Англи",
    badgeClass: "country-badge-uk",
    cardClass: "card-country-uk",
    emoji: "🇬🇧",
    bgHex: "oklch(0.55 0.18 290)",
  },
  {
    key: "USA",
    label: "Америк",
    badgeClass: "country-badge-usa",
    cardClass: "card-country-usa",
    emoji: "🇺🇸",
    bgHex: "oklch(0.55 0.16 140)",
  },
  {
    key: "Electric",
    label: "Цахилгаан",
    badgeClass: "country-badge-china",
    cardClass: "card-country-china",
    emoji: "⚡",
    bgHex: "oklch(0.68 0.18 80)",
  },
  {
    key: "Luxury",
    label: "Тансаг",
    badgeClass: "country-badge-luxury",
    cardClass: "card-country-luxury",
    emoji: "✨",
    bgHex: "oklch(0.60 0.22 280)",
  },
];

export const COUNTRY_MAP = Object.fromEntries(
  COUNTRY_META.map((c) => [c.key, c]),
) as Record<Country, CountryMeta>;

export function getCountryMeta(country: Country): CountryMeta {
  return COUNTRY_MAP[country];
}
