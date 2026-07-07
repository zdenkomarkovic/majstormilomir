import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  OWNER_NAME,
  PHONE_DISPLAY,
  SERVICE_PLACES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Zidarski, tesarski i građevinski radovi, dvorišta, ograde i kapije`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Zidarski, tesarski i građevinski radovi, dvorišta, ograde i kapije`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: SITE_NAME,
            founder: OWNER_NAME,
            description: SITE_DESCRIPTION,
            telephone: PHONE_DISPLAY,
            url: SITE_URL,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ripanj",
              addressRegion: "Beograd",
              addressCountry: "RS",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.6414,
              longitude: 20.4867,
            },
            areaServed: [
              ...SERVICE_PLACES.map((name) => ({
                "@type": "Place",
                name,
              })),
              { "@type": "Country", name: "Srbija" },
            ],
            priceRange: "$$",
          }}
        />
        {children}
      </body>
    </html>
  );
}
