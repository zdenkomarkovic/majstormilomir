"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Ovde dodaj logging (Sentry, itd.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-4 text-center">
      <h1 className="font-heading text-2xl font-semibold tracking-tight text-paper uppercase">
        Došlo je do greške
      </h1>
      <p className="mt-2 text-stone-dark">Nešto nije u redu. Pokušaj ponovo.</p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-brick px-6 py-3 font-heading text-sm font-semibold tracking-wide text-paper uppercase hover:bg-brick-dark"
      >
        Pokušaj ponovo
      </button>
    </main>
  );
}
