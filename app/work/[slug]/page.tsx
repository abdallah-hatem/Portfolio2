import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/app/components/CtaSection";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteNavbar } from "@/app/components/SiteNavbar";
import { getAbsoluteUrl, siteConfig } from "@/app/site";
import { getProjectBySlug, workProjects, type WorkProject } from "../work-content";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: getAbsoluteUrl(`/work/${project.slug}`),
      siteName: siteConfig.name,
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [{ url: project.image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [project.image.src],
    },
  };
}

function isWorkProject(project: WorkProject | undefined): project is WorkProject {
  return Boolean(project);
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedSlugs
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter(isWorkProject);

  return (
    <div className="work-detail-page">
      <div className="work-detail-ink-top" aria-hidden="true" />
      <SiteNavbar />

      <main id="page-scroll-root" className="work-detail-main">
        <section className="work-detail-hero" aria-labelledby="work-detail-title">
          <div className="section-container work-detail-hero-grid">
            <div>
              <nav className="work-detail-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/work">Work</Link>
              </nav>

              <p className="work-detail-eyebrow">{project.eyebrow}</p>
              <h1
                id="work-detail-title"
                className="display-title work-detail-title poster-ink-type"
                data-title-density={project.title.length > 24 ? "compact" : "normal"}
              >
                {project.title}
              </h1>
              <p className="work-detail-headline">{project.headline}</p>
              <p className="work-detail-summary">{project.summary}</p>

              <div className="work-detail-actions">
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    className="ds-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>See live</span>
                    <span className="cta-line-arrow" aria-hidden="true" />
                  </Link>
                ) : (
                  <Link href={`mailto:${siteConfig.email}`} className="ds-button">
                    <span>Ask me about it</span>
                    <span className="cta-line-arrow" aria-hidden="true" />
                  </Link>
                )}
                <Link href="/work" className="text-link">
                  Back to work
                </Link>
              </div>
            </div>

            <figure className="work-detail-art-card">
              <Image
                src="/assets/poster/motif-scribble.webp"
                alt=""
                width={1473}
                height={682}
                sizes="6.5rem"
                className="work-detail-scribble"
                aria-hidden
              />
              <div className="work-detail-art-frame">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  priority
                  sizes="(max-width: 1020px) 92vw, 34vw"
                  className="work-detail-art-image"
                />
              </div>
              <figcaption>{project.stamp}</figcaption>
            </figure>
          </div>
        </section>

        <section className="work-detail-body" aria-label={`${project.title} details`}>
          <div className="section-container">
            <div className="work-detail-grid">
              <div>
                <p className="work-detail-section-label">The build</p>
                <h2 className="work-detail-section-title">What it does</h2>
              </div>
              <ul className="work-fact-list">
                {project.whatItDoes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="work-detail-grid">
              <div>
                <p className="work-detail-section-label">Decisions</p>
                <h2 className="work-detail-section-title">How it&apos;s built</h2>
              </div>
              <div>
                <div className="work-build-grid">
                  {project.buildNotes.map((note) => (
                    <article key={note.title} className="work-build-note">
                      <h3>{note.title}</h3>
                      <p>{note.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="work-detail-grid">
              <div>
                <p className="work-detail-section-label">Scope</p>
                <h2 className="work-detail-section-title">What it carries</h2>
              </div>
              <div className="work-detail-meta">
                <ul className="work-highlight-list">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.stack.length > 0 ? (
                  <div>
                    <h3>Stack</h3>
                    <ul className="work-stack-list">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="work-related-section" aria-labelledby="work-related-title">
            <div className="section-container work-related-container">
              <div>
                <p className="work-related-note">Next up</p>
                <h2 id="work-related-title">Related work</h2>
              </div>
              <div className="work-related-links">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/work/${relatedProject.slug}`}
                    className="work-related-link"
                  >
                    <span>{relatedProject.navLabel}</span>
                    <span className="cta-line-arrow" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
