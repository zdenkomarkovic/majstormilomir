import { SERVICE_PLACES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceArea() {
  return (
    <section className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Radno područje"
          title="Gde radim"
          description={`Zidarski i građevinski radovi izvode se u ${SERVICE_PLACES[0]}, ${SERVICE_PLACES[1]}, ${SERVICE_PLACES[2]} i okolnim mestima – kao i šire, u okolini Beograda i širom Srbije po dogovoru.`}
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {SERVICE_PLACES.map((place) => (
            <span
              key={place}
              className="rounded-full border border-stone-dark bg-paper px-4 py-2 text-sm font-medium text-ink"
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
