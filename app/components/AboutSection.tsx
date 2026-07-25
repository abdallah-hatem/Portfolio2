import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site";

const capabilities = [
  { label: "Front end", image: "/assets/poster/capability-frontend.webp", width: 691, height: 631 },
  { label: "Mobile", image: "/assets/poster/capability-mobile.webp", width: 678, height: 654 },
  { label: "Back end", image: "/assets/poster/capability-backend.webp", width: 843, height: 693 },
  { label: "Delivery", image: "/assets/poster/capability-delivery.webp", width: 561, height: 766 },
];

export function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-container about-container">
        <div className="about-art" aria-hidden="true">
          <Image
            src="/assets/poster/about-collage.webp"
            alt=""
            width={781}
            height={941}
            sizes="(max-width: 1020px) 30rem, 38rem"
            className="about-collage"
          />
        </div>

        <div className="about-copy">
          <h2 id="about-title" className="display-title about-title poster-ink-type">
            I build systems for <em>ambitious</em> teams.
          </h2>
          <p>
            Three-plus years of shipping software, with a background across web
            platforms and mobile apps. I&apos;ve worked on national government
            systems serving hundreds of thousands of households, marketplaces
            with vendor and delivery ecosystems, and admin panels built from an
            empty repo — and I&apos;ve led a front-end team through one of them.
          </p>
          <p>
            I like the collaborative end of the job: contributing what I know,
            picking up what I don&apos;t, and leaving the codebase easier to work
            in than I found it. Outside of code you&apos;ll find me on the
            football field, in the gym, or somewhere new.
          </p>
          <div className="about-actions">
            <Link
              href={siteConfig.resumeUrl}
              className="ds-button ds-button-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <span>View resume</span>
              <span className="cta-line-arrow" aria-hidden="true" />
            </Link>
            <Link href="/work" className="text-link">
              Browse the work
            </Link>
          </div>
          <ul className="about-capabilities" aria-label="Capabilities">
            {capabilities.map((item) => (
              <li key={item.label} className="about-capability">
                <span className="about-capability-icon" aria-hidden="true">
                  <Image
                    src={item.image}
                    alt=""
                    width={item.width}
                    height={item.height}
                    sizes="4.7rem"
                    className="about-capability-art"
                    aria-hidden
                  />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
