import {
  LOCATION,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREA_LABEL,
} from "@/lib/constants";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { MessageButtons } from "@/components/ui/MessageButtons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="kontakt" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Zakažite termin"
          title="Pozovite za dogovor i besplatnu procenu"
          description="Opišite mi posao telefonom ili porukom – radove, dimenzije, lokaciju – i dogovaramo izlazak na teren."
          light
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-white/10 bg-white/5 p-8 text-center">
            <p className="font-heading text-sm font-semibold tracking-[0.2em] text-brick uppercase">
              Pozovite odmah
            </p>
            <a
              href={PHONE_HREF}
              className="font-heading text-3xl font-bold tracking-tight text-paper sm:text-4xl"
            >
              {PHONE_DISPLAY}
            </a>
            <PhoneButton className="mt-2" label="Pozovi" />
            <MessageButtons />
            <p className="mt-2 text-sm text-stone-dark">
              {LOCATION} · {SERVICE_AREA_LABEL}
            </p>
          </div>

          <div className="min-h-[280px] overflow-hidden rounded-sm border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Ripanj,+Srbija&output=embed"
              title={`Lokacija – ${LOCATION}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
