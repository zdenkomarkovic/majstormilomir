const POINTS = [
  {
    label: "Besplatna procena",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Dogovor pre početka radova",
    path: "M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 012-2z",
  },
  {
    label: "Radovi širom Srbije",
    path: "M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11zm0-9a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "Bez skrivenih troškova",
    path: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  },
];

export function TrustBar() {
  return (
    <section className="bg-ink py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {POINTS.map((point) => (
            <div
              key={point.label}
              className="flex flex-col items-center gap-2 text-center sm:px-4"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 shrink-0 text-brick"
              >
                <path
                  d={point.path}
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-heading text-sm font-semibold tracking-wide text-paper uppercase">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
