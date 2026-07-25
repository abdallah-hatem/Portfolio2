import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site";
import { workProjects } from "../work/work-content";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "All work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
];

const featuredWork = workProjects.slice(0, 4);

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="section-container site-footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark" aria-label={`${siteConfig.name} home`}>
            <span>{siteConfig.wordmark.head}</span>
            <span>{siteConfig.wordmark.tail}</span>
          </Link>
          <p>
            Software that works.
            <br />
            Built to stay maintained.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <Link
              href={siteConfig.linkedinUrl}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href={siteConfig.githubUrl}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div className="footer-link-group">
            <h2>Site</h2>
            {siteLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-link-group">
            <h2>Work</h2>
            {featuredWork.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`}>
                {project.navLabel}
              </Link>
            ))}
          </div>

          <div className="footer-link-group">
            <h2>Elsewhere</h2>
            <Link href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </Link>
          </div>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href={`mailto:${siteConfig.email}`} className="footer-contact-row">
            <MailIcon />
            <span>{siteConfig.email}</span>
          </a>
          <a href={siteConfig.phoneHref} className="footer-contact-row">
            <PhoneIcon />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
          <p className="footer-contact-row">
            <LocationIcon />
            <span>{siteConfig.location}</span>
          </p>
          <Image
            src="/assets/poster/contact-scribble.svg"
            alt=""
            width={284}
            height={46}
            className="footer-contact-scribble"
            aria-hidden
            unoptimized
          />
        </div>

        <Image
          src="/assets/poster/globe-footer.webp"
          alt=""
          width={1160}
          height={750}
          sizes="11.5rem"
          className="footer-globe"
          aria-hidden
        />

        <small className="footer-copyright">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
