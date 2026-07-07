import Image from "next/image";
import { LOCATION, OWNER_NAME, SERVICE_AREA_LABEL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="o-nama" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-sm">
            <Image
              src="/IMG-7b9c73bdfb5662f8d85f28d9ebe3c03a-V.jpg"
              alt={`${OWNER_NAME} na gradilištu`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="O majstoru"
              title={OWNER_NAME}
              align="left"
              className="mx-0"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
              <p>
                Zidarski, tesarski i građevinski zanat radim godinama: zidanje,
                šalovanje i armiranje, rušenje zidova i betona. Fokus mi
                je na poslovima koji se često nađu „između“ – premali
                za velike građevinske firme, a prezahtevni da bi ih
                domaćin sam odradio. Kod mene takav posao ima svoje
                mesto.
              </p>
              <p>
                Bazu imam u Ripnju, a radim u široj okolini Beograda i
                širom Srbije. Svaki posao, od sitne zidarske intervencije
                do nove kapije ili potpornog zida, dogovaramo unapred –
                rok, materijal i cenu, bez iznenađenja.
              </p>
              <p>
                Ako imate zahtev koji drugima deluje neuobičajeno ili
                previše specifično, slobodno pozovite – zajedno ćemo
                naći rešenje.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-stone-dark pt-6">
              <div>
                <dt className="font-heading text-sm font-semibold tracking-wide text-brick uppercase">
                  Sedište
                </dt>
                <dd className="mt-1 text-ink">{LOCATION}</dd>
              </div>
              <div>
                <dt className="font-heading text-sm font-semibold tracking-wide text-brick uppercase">
                  Radno područje
                </dt>
                <dd className="mt-1 text-ink">{SERVICE_AREA_LABEL}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
