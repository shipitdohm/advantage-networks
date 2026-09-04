"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface">
      <div className="container-content grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr] md:py-12">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG mark, no optimization needed */}
          <img src="/brand/logo/Logo-White.svg" alt="Advantage Networks" className="h-8 w-auto" />
        </div>

        {t.footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg/80 transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-surface-2">
        <div className="container-content flex flex-col gap-3 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {t.footer.legal}
          </span>
          <div className="flex items-center gap-5">
            {t.footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
