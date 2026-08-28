import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGroup } from "@/components/ui/ServiceGroup";

const SERVICE_GROUPS = [
  {
    number: "01",
    title: "Građevinski mali radovi",
    subgroups: [
      {
        label: "Zidarski radovi",
        items: ["Zidanje", "Šalovanje i armiranje", "Pregradni zidovi", "Stepeništa"],
      },
      {
        label: "Staze i trotoari",
        items: ["Betoniranje staza i trotoara"],
      },
      {
        label: "Rušenje i razbijanje",
        items: [
          "Razbijanje i rušenje zidova",
          "Razbijanje i rušenje betona",
          "Otvaranje otvora u zidu za prozore i vrata",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Radovi u okviru domaćinstva",
    subgroups: [
      {
        label: "Uređenje dvorišta",
        items: [
          "Betoniranje staza",
          "Manji potporni zidovi",
          "Betoniranje za ograde",
          "Ostali radovi po zahtevu",
        ],
      },
      {
        label: "Garaže i pomoćni objekti",
        items: ["Zidane garaze svih vrsta"],
      },
    ],
  },
];

export function Services() {
  return (
    <section id="usluge" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Šta radim"
          title="Usluge"
          description="Od sitnih građevinskih radova do kompletnog uređenja dvorišta – svaki posao se radi po dogovoru, prilagođeno potrebama i budžetu naručioca."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SERVICE_GROUPS.map((group) => (
            <ServiceGroup key={group.number} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
