import Image from "next/image";
import { workProjects } from "../work/work-content";
import { WorkCard } from "./WorkCard";

export function WorkSection() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-container">
        <div className="work-intro">
          <div className="section-heading-wrap">
            <h2 id="work-title" className="section-title">
              Selected work
            </h2>
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
            National platforms, marketplaces, admin systems, and mobile apps —
            all of it running in production.
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
  );
}
