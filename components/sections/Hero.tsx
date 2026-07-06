import Image from "next/image";
import { LOCATION, SERVICE_AREA } from "@/lib/constants";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { MessageButtons } from "@/components/ui/MessageButtons";

export function Hero() {
  return (
    <section id="pocetna" className="relative flex min-h-[85vh] items-end overflow-hidden bg-ink">
      <Image
        src="/IMG-d02d3e9414b2aed5354489fa8c321d6c-V.jpg"
        alt="Zavrsen krovni i zidarski rad – metalna konstrukcija i ulaz"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 font-heading text-sm font-semibold tracking-[0.25em] text-white uppercase">
          {LOCATION} · {SERVICE_AREA}
        </p>
        <h1 className="max-w-3xl font-heading text-4xl leading-[1.1] font-bold tracking-tight text-paper uppercase sm:text-5xl md:text-6xl">
          Krovopokrivač i zidar u Beogradu i okolini
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-dark">
          Majstor za sve manje i veće radove oko kuće i imanja – od opravke krova do nove kapije.
          Radim poslove koje veće građevinske firme ne prihvataju, i najneuobičajenije zahteve
          naručioca.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PhoneButton />
          <MessageButtons />
          <a
            href="#usluge"
            className="inline-flex items-center justify-center rounded-sm border-2 border-paper px-6 py-3 font-heading text-base font-semibold tracking-wide text-paper uppercase hover:bg-paper hover:text-ink"
          >
            Pogledaj usluge
          </a>
        </div>
      </div>
    </section>
  );
}
