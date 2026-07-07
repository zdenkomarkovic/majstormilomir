import {
  LOCATION,
  OWNER_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREA_LABEL,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-stone-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-paper uppercase">
              {OWNER_NAME}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Građevinski mali radovi – zidanje, šalovanje i armiranje,
              rušenje – i razni poslovi u okviru domaćinstva. Sve manje
              radove, kao i one koje veće građevinske firme ne prihvataju.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold tracking-wide text-paper uppercase">
              Kontakt
            </p>
            <a
              href={PHONE_HREF}
              className="mt-2 block text-sm hover:text-brick"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-sm">{LOCATION}</p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold tracking-wide text-paper uppercase">
              Radno područje
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              {SERVICE_AREA_LABEL}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-muted">
          © {year} {OWNER_NAME}. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
