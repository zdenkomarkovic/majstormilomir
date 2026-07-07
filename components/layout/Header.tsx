"use client";

import { useState } from "react";
import { OWNER_NAME } from "@/lib/constants";
import { PhoneButton } from "@/components/ui/PhoneButton";

const NAV_LINKS = [
  { href: "#usluge", label: "Usluge" },
  { href: "#galerija", label: "Galerija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-dark bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#pocetna"
          className="font-heading text-lg font-semibold tracking-tight text-ink uppercase sm:text-xl"
        >
          {OWNER_NAME}
          <span className="block text-xs font-normal tracking-[0.2em] text-brick">
            Zidarski i građevinski radovi
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium tracking-wide text-ink uppercase hover:text-brick"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PhoneButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Otvori meni"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-dark bg-paper px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 font-heading text-sm font-medium tracking-wide text-ink uppercase hover:bg-stone"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <PhoneButton className="mt-4 w-full" />
        </div>
      )}
    </header>
  );
}
