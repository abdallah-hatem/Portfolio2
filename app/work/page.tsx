import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "../components/CtaSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { WorkCard } from "../components/WorkCard";
import { getAbsoluteUrl, siteConfig } from "../site";
import { workProjects } from "./work-content";

const description = `Selected work by ${siteConfig.name}: national government platforms, marketplaces, admin systems, and mobile apps built with React, Next.js, and React Native.`;

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: getAbsoluteUrl("/work"),
    siteName: siteConfig.name,
    title: `Work | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `Work | ${siteConfig.name}`,
    description,
  },
};

export default function WorkIndexPage() {
  return (
    <div className="work-index-page">
      <div className="work-detail-ink-top" aria-hidden="true" />
      <SiteNavbar />

      <main id="page-scroll-root">
        <section className="work-index-hero" aria-labelledby="work-index-title">
          <div className="section-container">
            <h1 id="work-index-title" className="display-title work-index-title poster-ink-type">
              All the <em>work.</em>
            </h1>
            <p className="work-index-lede">
              {workProjects.length} projects in production — government platforms
              serving hundreds of thousands of households, marketplaces with
              vendor and delivery ecosystems, admin systems, and mobile apps.
            </p>
          </div>
        </section>

        <section className="work-section" aria-label="Project list">
          <div className="section-container">
            <div className="work-intro">
              <div className="section-heading-wrap">
                <h2 className="section-title">Projects</h2>
                <Image
                  src="/assets/poster/motif-underline.webp"
                  alt=""
                  width={1540}
                  height={134}
                  sizes="14.5rem"
                  className="section-title-rule"
                  aria-hidden
                />
              </div>
              <p className="section-kicker">
                Each one has its own case notes: what it does, how it&apos;s
                built, and what it carries.
              </p>
            </div>

            <div className="work-grid">
              {workProjects.map((project, index) => (
                <WorkCard
                  key={project.slug}
                  project={project}
                  index={index}
                  withScribble={index === 2}
                />
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
