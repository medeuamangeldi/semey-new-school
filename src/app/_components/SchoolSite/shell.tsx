"use client";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { FiArrowUpRight, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { copy, publicPaths, type Language } from "./copy";
export function useCopy() {
  const locale = useLocale() as Language;
  return copy[locale] || copy.ru;
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Semey New School">
      <Image src="/logo/sns_logo.jpg" alt="" priority width={56} height={56} />
      <span>
        SEMEY<span>NEW SCHOOL</span>
      </span>
    </Link>
  );
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <FiArrowUpRight aria-hidden="true" />
  ) : (
    <FiArrowRight aria-hidden="true" />
  );
}
export function Cta({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={`button ${secondary ? "button-outline" : ""}`}>
      {children}
      <Arrow />
    </Link>
  );
}
export function Invitation() {
  const c = useCopy();
  return (
    <section className="invitation">
      <div className="wrap invitation-inner">
        <div>
          <span className="eyebrow">{c.invitation}</span>
          <h2>{c.invitationTitle}</h2>
          <p>{c.invitationText}</p>
        </div>
        <Cta href="/contact-us">{c.visit}</Cta>
      </div>
    </section>
  );
}
export default function SchoolShell({ children }: { children: ReactNode }) {
  const c = useCopy();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const portal = pathname.startsWith("/portal");
  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {c.skip}
      </a>
      <header className="site-header">
        <div className="utility">
          <div className="wrap utility-inner">
            <span>{c.eyebrow}</span>
            <div>
              <span className="language-links">
                {(["ru", "kz", "en"] as const).map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    aria-current={locale === l ? "true" : undefined}
                  >
                    {l === "kz" ? "ҚАЗ" : l.toUpperCase()}
                  </Link>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="wrap main-nav">
          <Brand />
          <nav aria-label={c.menu} className="desktop-nav">
            {publicPaths.map((p, i) => (
              <Link
                key={p}
                href={p}
                aria-current={pathname === p ? "page" : undefined}
              >
                {c.nav[i]}
              </Link>
            ))}
          </nav>
          <Link className="nav-visit" href="/contact-us">
            {c.visit}
            <Arrow diagonal />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? c.close : c.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" className="mobile-nav" aria-label={c.menu}>
            {publicPaths.map((p, i) => (
              <Link
                key={p}
                href={p}
                aria-current={pathname === p ? "page" : undefined}
              >
                {c.nav[i]}
                <Arrow diagonal />
              </Link>
            ))}
          </nav>
        )}
      </header>
      {portal ? (
        <div className="portal-layout">
          <aside className="portal-sidebar">
            <span className="eyebrow">MY SNS</span>
            <h2>{c.student}</h2>
            {["schedule", "grades", "profile"].map((p, i) => (
              <Link
                href={`/portal/${p}`}
                key={p}
                aria-current={pathname.endsWith(p) ? "page" : undefined}
              >
                {[c.schedule, c.grades, c.profile][i]}
                <Arrow />
              </Link>
            ))}
            <Link href="/">
              {c.logout}
              <Arrow diagonal />
            </Link>
            <p>{c.demoLabel}</p>
          </aside>
          <main id="main-content" className="portal-main">
            {children}
          </main>
        </div>
      ) : (
        <main id="main-content">{children}</main>
      )}
      {!portal && (
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <Brand />
              <p className="footer-tagline">{c.footer}</p>
            </div>
            <div>
              <span className="eyebrow">{c.explore}</span>
              {publicPaths.map((p, i) => (
                <Link key={p} href={p}>
                  {c.nav[i]}
                </Link>
              ))}
            </div>
            <div>
              <span className="eyebrow">{c.touch}</span>
              <p>{c.address}</p>
              <a href="tel:+77222565813">+7 (7222) 56-58-13</a>
              <a href="mailto:vkkia@mail.kz">vkkia@mail.kz</a>
              <p>{c.hours}</p>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>
              © {new Date().getFullYear()} Semey New School. {c.rights}
            </span>
            <span>СЕМЕЙ · KAZAKHSTAN</span>
          </div>
        </footer>
      )}
    </>
  );
}
export function PageHeading({ index }: { index: number }) {
  const c = useCopy();
  return (
    <section className="page-heading">
      <div className="wrap">
        <div className="breadcrumbs">
          <Link href="/">{c.home}</Link>
          <span>/</span>
          <span>{c.nav[index]}</span>
        </div>
        <span className="eyebrow">SEMEY NEW SCHOOL</span>
        <h1>
          {c.nav[index]}
          <span className="title-dot">.</span>
        </h1>
        <p>{c.subtitles[index]}</p>
      </div>
    </section>
  );
}
