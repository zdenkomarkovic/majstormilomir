import { buildMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const metadata = buildMetadata({
  title: "Zidarski radovi, dvorišta, ograde i kapije",
  description:
    "Građevinski mali radovi, zidanje i betoniranje, uređenje dvorišta, garaže i reprezentativne kapije. Ripanj, okolina Beograda i cela Srbija.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <ServiceArea />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
