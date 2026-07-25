import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-main">
      <div className="section-container not-found-container">
        <p className="work-detail-eyebrow">Error 404</p>
        <h1 className="display-title poster-ink-type">Page not found.</h1>
        <p>
          That route does not exist. The work is still where you left it.
        </p>
        <div className="work-detail-actions">
          <Link href="/" className="ds-button">
            <span>Back home</span>
            <span className="cta-line-arrow" aria-hidden="true" />
          </Link>
          <Link href="/work" className="text-link">
            Browse the work
          </Link>
        </div>
      </div>
    </main>
  );
}
