// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, itd.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Zidar Milomir Isailović";

export const SITE_DESCRIPTION =
  "Građevinski mali radovi – zidanje, šalovanje i armiranje, rušenje, uređenje dvorišta, ograde, garaže i kapije. Milomir Isailović – zidarski majstor iz Ripnja, radi u okolini Beograda i širom Srbije.";

// ─── Podaci o majstoru / firmi ────────────────────────────────────────────────

export const OWNER_NAME = "Milomir Isailović";

export const PHONE_DISPLAY = "062/ 256-610";

/** Bez "+" i razmaka - za Viber link. */
export const PHONE_INTL = "38162256610";

export const PHONE_HREF = `tel:+${PHONE_INTL}`;

export const VIBER_HREF = `viber://chat?number=%2B${PHONE_INTL}`;

export const LOCATION = "Ripanj";

export const SERVICE_AREA = "šira okolina Beograda i cela Srbija";

/** Za upotrebu na pocetku recenice/naslova (veliko pocetno slovo). */
export const SERVICE_AREA_LABEL = "Šira okolina Beograda i cela Srbija";

/** Konkretna mesta gde se najcesce rade poslovi - koristi se u JSON-LD (areaServed) i na sekciji "Gde radim". */
export const SERVICE_PLACES = [
  "Ripanj",
  "Barajevo",
  "Sopot",
  "Mladenovac",
  "Beli Potok",
  "Železnik",
  "Rakovica",
  "Voždovac",
  "Kumodraž",
  "Pinosava",
  "Zuce",
  "Vrčin",
  "Meljak",
  "Umka",
  "Obrenovac",
  "Lazarevac",
];
