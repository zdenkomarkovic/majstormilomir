import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    title: "Poziv",
    text: "Pozovete i ukratko opišete posao – radove, dimenzije, lokaciju.",
  },
  {
    title: "Izlazak na teren",
    text: "Dolazim na lice mesta, pregledam i dajem procenu – besplatno i bez obaveze.",
  },
  {
    title: "Dogovor",
    text: "Utvrđujemo rok, materijal i cenu unapred, bez iznenađenja.",
  },
  {
    title: "Izvođenje radova",
    text: "Posao se radi kvalitetno i u dogovorenom roku.",
  },
];

export function Process() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kako radimo"
          title="Od poziva do gotovog posla"
          description="Jednostavan proces, bez sitnih slova."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brick font-heading text-xl font-bold text-brick">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-ink uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
