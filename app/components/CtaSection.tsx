import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site";

export function CtaSection() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="cta-title">
      <div className="section-container cta-container">
        <h2 id="cta-title" className="display-title cta-title poster-ink-type">
          Ready to build <em>what&apos;s next?</em>
        </h2>

        <div className="cta-copy">
          <p>Tell me what you&apos;re building. I&apos;ll tell you how I&apos;d ship it.</p>
          <Link href={`mailto:${siteConfig.email}`} className="ds-button cta-button">
            <span>Start a project</span>
            <span className="cta-line-arrow" aria-hidden="true" />
          </Link>
          <a href={siteConfig.phoneHref} className="cta-secondary">
            or call {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="cta-mega-arrow" aria-hidden="true">
          <Image
            src="/assets/poster/cta-arrow.webp"
            alt=""
            fill
            sizes="(max-width: 1180px) 22rem, 34rem"
            className="cta-mega-arrow-art"
          />
        </div>
      </div>
    </section>
  );
}
