"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/content";

const SHOP_OPTIONS = [
  { label: "Helium Shop", href: "/shop" },
  { label: "Founders League Shop", href: "/shop" },
  { label: "Alumni Shop", href: "/shop" },
];

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shopOpen && !langOpen) return;
    function handleClick(e: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) setShopOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [shopOpen, langOpen]);

  useEffect(() => {
    function onLenisScroll(e: Event) {
      const scroll = (e as CustomEvent<number>).detail;
      setScrolled(scroll > 24);
    }
    function onNativeScroll() {
      setScrolled(window.scrollY > 24);
    }
    setScrolled(window.scrollY > 24);
    window.addEventListener("lenis-scroll", onLenisScroll);
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    return () => {
      window.removeEventListener("lenis-scroll", onLenisScroll);
      window.removeEventListener("scroll", onNativeScroll);
    };
  }, []);

  const languages: { value: Locale; label: string; code: string }[] =
    locale === "en"
      ? [
          { value: "en", label: "English", code: "EN" },
          { value: "de", label: "German", code: "DE" },
        ]
      : [
          { value: "en", label: "Englisch", code: "EN" },
          { value: "de", label: "Deutsch", code: "DE" },
        ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-content pt-3 md:pt-4">
      <div
        className={`liquid-glass relative flex h-12 items-center justify-between rounded-pill px-4 md:h-14 md:px-6 ${
          scrolled ? "liquid-glass-scrolled" : ""
        }`}
      >
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG mark, no optimization needed */}
          <img src="/brand/logo/IconWhite.svg" alt="Advantage Networks" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Switch language"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-pill border border-border-strong text-muted transition-colors hover:border-fg hover:text-fg"
            >
              <GlobeIcon />
            </button>

            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-card border border-border bg-surface p-1.5 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLocale(lang.value);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface-2 ${
                      locale === lang.value ? "text-fg" : "text-muted"
                    }`}
                  >
                    <span className="flex items-baseline gap-2">
                      {lang.label}
                      <span className="text-muted opacity-50">{lang.code}</span>
                    </span>
                    {locale === lang.value && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            ref={shopRef}
            className="relative hidden sm:block"
            onMouseLeave={() => setShopOpen(false)}
          >
            <div className="flex items-stretch rounded-pill bg-accent">
              <Link
                href="/shop"
                className="flex items-center rounded-l-pill px-6 py-3 text-sm font-semibold text-accent-on"
              >
                {t.nav.shop}
              </Link>
              <span className="my-2 w-px shrink-0 bg-white/25" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setShopOpen((v) => !v)}
                onMouseEnter={() => setShopOpen(true)}
                aria-haspopup="menu"
                aria-expanded={shopOpen}
                aria-label="Show shop options"
                className="flex items-center rounded-r-pill px-3 text-accent-on"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform duration-300 ease-out ${shopOpen ? "rotate-180" : ""}`}
                >
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {shopOpen && (
              <div className="absolute inset-x-0 top-full pt-2">
                <div
                  role="menu"
                  className="overflow-hidden rounded-card border border-border bg-surface shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]"
                >
                  {SHOP_OPTIONS.map((option) => (
                    <Link
                      key={option.label}
                      href={option.href}
                      role="menuitem"
                      onClick={() => setShopOpen(false)}
                      className="block whitespace-nowrap px-6 py-2.5 text-center text-sm font-medium text-fg transition-colors hover:bg-surface-2"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-pill border border-border-strong text-fg md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {open ? (
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="liquid-glass mt-2 rounded-card md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-1 pt-3">
              {SHOP_OPTIONS.map((option) => (
                <Link
                  key={option.label}
                  href={option.href}
                  onClick={() => setOpen(false)}
                  className="rounded-pill bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
                >
                  {option.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 pt-3">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  type="button"
                  onClick={() => setLocale(lang.value)}
                  className={`h-9 flex-1 rounded-pill border px-3 text-xs font-semibold tracking-wide transition-colors ${
                    locale === lang.value
                      ? "border-fg text-fg"
                      : "border-border-strong text-muted"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
