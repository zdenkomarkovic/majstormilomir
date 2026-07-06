// Ova komponenta se prikazuje dok se stranica ucitava (Suspense fallback).
// Prilagodi je dizajnu konkretnog sajta.

export default function LoadingPage() {
  return (
    <div
      aria-label="Učitavanje..."
      role="status"
      className="flex min-h-screen items-center justify-center bg-stone"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-stone-dark border-t-brick" />
    </div>
  );
}
