import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site";

export function StatementSection() {
  return (
    <section className="statement-section" aria-labelledby="statement-title">
      <div className="section-container statement-container">
        <div>
          <h2 id="statement-title" className="statement-title">
            I&apos;m an engineer.
            <br />
            A <em>builder.</em>
          </h2>
          <Image
            src="/assets/poster/motif-underline.webp"
            alt=""
            width={1540}
            height={134}
            sizes="12.5rem"
            className="statement-rule"
            aria-hidden
          />
          <p className="statement-copy">
            I work across the whole surface — front end, APIs, admin tooling, and
            mobile — on systems where the users are citizens, vendors, students,
            and administrators rather than a demo audience.
          </p>
          <div className="statement-actions">
            <Link href="/#about" className="ds-button ds-button-invert">
              <span>More about me</span>
              <span className="cta-line-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <figure className="statement-portrait">
          <div className="statement-portrait-frame">
            <Image
              src="/assets/portrait-poster.jpg"
              alt={`Portrait of ${siteConfig.name}`}
              width={1000}
              height={1250}
              sizes="(max-width: 1020px) 20rem, 21rem"
              className="statement-portrait-image"
            />
            <span className="statement-portrait-strike" aria-hidden="true" />
          </div>
          <figcaption>
            {siteConfig.name}
            <span>{siteConfig.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
