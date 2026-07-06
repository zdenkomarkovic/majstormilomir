import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQ_ITEMS = [
  {
    question: "Da li radite i manje poslove, ili samo veće projekte?",
    answer:
      "Radim bukvalno sve, od sitne opravke krova do kompletne rekonstrukcije. Nema posla koji je „premali“ za mene.",
  },
  {
    question: "Da li dolazite na besplatnu procenu?",
    answer:
      "Da. Izlazak na teren, pregled i procena posla su besplatni i ne obavezuju vas ni na šta.",
  },
  {
    question: "Koliko brzo mogu da očekujem izlazak na teren?",
    answer:
      "Obično u roku od par dana od poziva, u zavisnosti od trenutnog rasporeda poslova.",
  },
  {
    question: "Da li obezbeđujete materijal ili radite samo uslugu?",
    answer:
      "Može oboje – dogovaramo se unapred da li materijal nabavljate vi ili ja, u zavisnosti šta vam više odgovara.",
  },
  {
    question: "Da li radite van Ripnja i okoline Beograda?",
    answer:
      "Da, radim širom Srbije po dogovoru – udaljenost nije prepreka za ozbiljan posao.",
  },
  {
    question: "Da li radite tokom zime?",
    answer:
      "Manji radovi i opravke mogu se raditi tokom cele godine. Veći radovi na krovu zavise od vremenskih uslova, pa se termin prilagođava vremenskoj prognozi.",
  },
];

export function FAQ() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pitanja i odgovori"
          title="Često postavljana pitanja"
        />

        <div className="mt-10 divide-y divide-stone-dark border-t border-b border-stone-dark">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink sm:text-lg">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-brick transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
