"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PHOTOS = [
  {
    src: "/IMG-dee17bf2cc035ab206d6554e59873cbf-V.jpg",
    alt: "Zidanje objekta sa armirano-betonskom pločom",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/IMG-4b1fda63eaba8c134b3fc8d83c37e6e3-V.jpg",
    alt: "Armirano-betonska ograda sa ugrađenom armaturom",
    span: "",
  },
  {
    src: "/IMG-287b74a3a92408e477a8dc83425d2244-V.jpg",
    alt: "Oplata i armatura za armirano-betonske stubove",
    span: "",
  },
  {
    src: "/IMG-345bc1850c0be9b886de60b22524dd5d-V.jpg",
    alt: "Priprema oplate i armature za betonsku ploču",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/IMG-13c98ad5791e793c18b1ea0e3d0e166f-V.jpg",
    alt: "Izrada armirano-betonskog potpornog zida",
    span: "",
  },

  {
    src: "/IMG-e6e1abc1352195322ec430a8786e4129-V.jpg",
    alt: "Metalna fasada i ulaz u objekat",
    span: "",
  },
  {
    src: "/IMG-7f1ce7c0430df3aad0bd16cb84a7e3a2-V.jpg",
    alt: "Zidanje stuba od opeke sa armaturom",
    span: "",
  },
  {
    src: "/IMG-d02d3e9414b2aed5354489fa8c321d6c-V.jpg",
    alt: "Zidanje pomoćnog objekta od opeke",
    span: "",
  },
  {
    src: "/IMG-b9ecd92edaf16165e333456fb7bcc914-V.jpg",
    alt: "Zidanje objekta sa oplatom za armirani stub",
    span: "",
  },
  {
    src: "/IMG-10f245a27e686ce73c28b0a9128643c6-V.jpg",
    alt: "Izolacija i završna obrada temelja pomoćnog objekta",
    span: "",
  },
  {
    src: "/IMG-bf1efb5dc74944e0e9ffc9fad9843747-V.jpg",
    alt: "Uređen potporni zid sa cvetnim saksijama",
    span: "",
  },
  {
    src: "/IMG-7b9c73bdfb5662f8d85f28d9ebe3c03a-V.jpg",
    alt: "Betoniranje dvorišta i prilaza objektu",
    span: "",
  },
  {
    src: "/IMG-e01bed7698a92a4069f3114eb31d7d54-V.jpg",
    alt: "Završen pomoćni objekat sa nadstrešnicom",
    span: "",
  },
  {
    src: "/IMG-85f39ee8a3e4741cb12ed5ad16b6dc9f-V.jpg",
    alt: "Gradilište u okolini Beograda",
    span: "",
  },
  {
    src: "/IMG-17d485d933edef5ed134b12e4dc3efa7-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-3e9e36f4aab441001dee742b47294939-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-b427e336800bc386e2d0d043c5613050-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-d5af8ce9bc64908fcb16a142110337ff-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-d8ebca7598fa802783ab4f2f354b46dd-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-dc1904b057c3724c93d976837de25ddf-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-e7ca3c822f7d5fa248d1a483d110d341-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-ed72d3719da501753e6c3930c2658df2-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
  {
    src: "/IMG-eff91ab1084c8a34fb7160c25332015f-V.jpg",
    alt: "Radovi na gradilištu",
    span: "",
  },
];

const PAGE_SIZE = 12;
const TOTAL_PAGES = Math.ceil(PHOTOS.length / PAGE_SIZE);

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  const activePhoto = openIndex !== null ? PHOTOS[openIndex] : undefined;
  const pagedPhotos = PHOTOS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goToPage = useCallback((p: number) => {
    setPage(p);
    document.getElementById("galerija")?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <section id="galerija" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sa terena"
          title="Galerija radova"
          description="Nekoliko fotografija sa gradilišta – od pripreme temelja do završnih radova."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-flow-dense sm:gap-5">
          {pagedPhotos.map((photo, i) => {
            const globalIndex = page * PAGE_SIZE + i;
            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpenIndex(globalIndex)}
                aria-label="Prikaži sliku u punoj veličini"
                className={`group relative aspect-4/3 overflow-hidden rounded-sm bg-ink ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>

        {TOTAL_PAGES > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(Math.max(0, page - 1))}
              disabled={page === 0}
              aria-label="Prethodna strana"
              className="flex h-9 w-9 items-center justify-center rounded-sm text-ink transition-colors hover:text-brick disabled:opacity-30 disabled:hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, p) => (
              <button
                key={p}
                type="button"
                onClick={() => goToPage(p)}
                aria-label={`Strana ${p + 1}`}
                aria-current={p === page ? "page" : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-sm text-sm transition-colors ${
                  p === page ? "bg-ink text-paper" : "text-ink hover:text-brick"
                }`}
              >
                {p + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(Math.min(TOTAL_PAGES - 1, page + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Sledeća strana"
              className="flex h-9 w-9 items-center justify-center rounded-sm text-ink transition-colors hover:text-brick disabled:opacity-30 disabled:hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zatvori"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center text-paper hover:text-brick"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Prethodna slika"
            className="absolute left-2 flex h-11 w-11 items-center justify-center text-paper hover:text-brick sm:left-4"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Sledeća slika"
            className="absolute right-2 flex h-11 w-11 items-center justify-center text-paper hover:text-brick sm:right-4"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
