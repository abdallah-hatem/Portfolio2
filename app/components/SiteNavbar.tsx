"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "../site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const getIsCurrent = (label: string) => {
    if (label === "Home") {
      return pathname === "/";
    }

    if (label === "Work") {
      return pathname.startsWith("/work");
    }

    return false;
  };

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        <Link
          href="/"
          className="site-logo"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMenu}
        >
          <Image
            src="/assets/poster/globe-mark.webp"
            alt=""
            width={512}
            height={513}
            sizes="48px"
            className="site-logo-mark"
            priority
            aria-hidden
          />
          <span className="site-logo-text" aria-hidden="true">
            <span>{siteConfig.wordmark.head}</span>
            <span className="site-logo-tail">{siteConfig.wordmark.tail}</span>
          </span>
        </Link>

        <nav className="site-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="site-nav-link"
              aria-current={getIsCurrent(link.label) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-actions">
          <Link href={`mailto:${siteConfig.email}`} className="ds-button site-nav-cta">
            <span>Let&apos;s build</span>
            <span className="cta-line-arrow" aria-hidden="true" />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="site-menu-button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id={menuId} className="site-mobile-menu" data-open={isMenuOpen ? "true" : "false"}>
        <nav className="site-mobile-menu-panel" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="site-mobile-link"
              aria-current={getIsCurrent(link.label) ? "page" : undefined}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? undefined : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`mailto:${siteConfig.email}`}
            className="ds-button site-mobile-cta"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? undefined : -1}
          >
            <span>Let&apos;s build</span>
            <span className="cta-line-arrow" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
