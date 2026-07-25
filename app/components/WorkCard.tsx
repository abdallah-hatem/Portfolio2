import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "../work/work-content";

type WorkCardProps = {
  project: WorkProject;
  index: number;
  /** The scribble motif straddles one card's corner, like the reference comp. */
  withScribble?: boolean;
};

export function WorkCard({ project, index, withScribble = false }: WorkCardProps) {
  return (
    <article className="work-card">
      {withScribble ? (
        <Image
          src="/assets/poster/motif-scribble.webp"
          alt=""
          width={1473}
          height={682}
          sizes="4.6rem"
          className="work-card-scribble"
          aria-hidden
        />
      ) : null}

      <p className="work-card-index">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="work-card-title">{project.title}</h3>

      <div className="work-card-frame">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 700px) 92vw, (max-width: 1180px) 46vw, 30vw"
          className="work-card-shot"
        />
      </div>

      <p className="work-card-copy">{project.cardLine}</p>

      {project.stack.length > 0 ? (
        <ul className="work-card-stack" aria-label={`${project.title} stack`}>
          {project.stack.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <Link href={`/work/${project.slug}`} className="work-card-link">
        <span>Case notes</span>
        <span className="cta-line-arrow" aria-hidden="true" />
      </Link>
    </article>
  );
}
