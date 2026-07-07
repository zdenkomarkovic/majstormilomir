import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = [
  {
    title: "Svi manji radovi",
    text: "Radim sve manje radove oko kuće i dvorišta – zidanje, šalovanje, rušenje, staze i trotoare – bez obzira na to koliko posao izgleda sitno ili nezanimljivo za druge.",
  },
  {
    title: "Poslovi koje veliki ne prihvataju",
    text: "Baš oni radovi za koje veće građevinske firme nisu zainteresovane – meni su dobrodošli, radim ih ozbiljno i kvalitetno.",
  },
  {
    title: "Neuobičajeni zahtevi",
    text: "Svaki zahtev naručioca se razmatra, koliko god bio specifičan ili neuobičajen. Rešenje se traži zajedno, po dogovoru.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kome je ovo namenjeno"
          title="Vlasnicima imanja i vikendica"
          description="Sajt je napravljen za vlasnike imanja u okolini Beograda i vikend imanja, kojima treba pouzdan majstor za poslove koji se lako izgube između velikih firmi."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {POINTS.map((point, i) => (
            <div
              key={point.title}
              className="rounded-sm border border-white/10 bg-white/5 p-6"
            >
              <span className="font-heading text-2xl font-bold text-brick">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-paper uppercase">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
