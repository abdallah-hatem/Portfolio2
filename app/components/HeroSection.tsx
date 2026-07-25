import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site";
import { workProjects } from "../work/work-content";
import { SiteNavbar } from "./SiteNavbar";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-nav-ink" aria-hidden="true" />
      <SiteNavbar />

      <div className="hero-stage">
        <div className="hero-paper-field" aria-hidden="true" />

        <div className="section-container hero-container">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              {siteConfig.role} · {siteConfig.location}
            </p>
            <h1 id="hero-title" className="display-title hero-title poster-ink-type">
              <span>I build</span>
              <span>software</span>
              <span>
                that <em>works.</em>
              </span>
            </h1>
            <p className="hero-subtitle">
              Government platforms. Marketplaces. Admin systems.
              <br />
              <span className="hero-subtitle-mark">
                Shipped, not demoed.
                <Image
                  src="/assets/poster/motif-underline.webp"
                  alt=""
                  width={1540}
                  height={134}
                  sizes="(max-width: 520px) 9rem, 12.5rem"
                  className="hero-subtitle-scribble"
                  aria-hidden
                />
              </span>
            </p>
            <div className="hero-actions">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="ds-button hero-primary-cta"
              >
                <span>Start a project</span>
                <span className="cta-line-arrow" aria-hidden="true" />
              </Link>
              <Link href="/#work" className="text-link">
                See the work
              </Link>
            </div>
          </div>

          <div className="hero-collage">
            <div className="hero-laptop-wrap" aria-hidden="true">
              <Image
                src="/assets/poster/hero-laptop.webp"
                alt=""
                width={989}
                height={926}
                priority
                sizes="(max-width: 620px) 22rem, (max-width: 1020px) 34rem, 44rem"
                className="hero-laptop"
              />
            </div>
            <Image
              src="/assets/poster/hero-globe.webp"
              alt=""
              width={1073}
              height={746}
              sizes="(max-width: 1020px) 13rem, 19rem"
              className="hero-globe"
              aria-hidden
            />
            <p className="hero-stat">
              <span>In production</span>
              <strong>{workProjects.length}</strong>
              <span>Shipped projects</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
