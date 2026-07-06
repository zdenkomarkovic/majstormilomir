import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-4 text-center">
      <p className="font-heading text-6xl font-bold text-brick">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-paper uppercase">
        Stranica nije pronađena
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-brick px-6 py-3 font-heading text-sm font-semibold tracking-wide text-paper uppercase hover:bg-brick-dark"
      >
        Vrati se na početnu
      </Link>
    </main>
  );
}
