const stackGroups = [
  {
    title: "Web",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "Redux", "next-intl · RTL"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "EAS Build & Update", "Push notifications", "Background location", "Maps"],
  },
  {
    title: "Backend & data",
    items: ["NestJS", "Prisma", "PostgreSQL", "Row-level security", "Supabase", "Laravel", "MySQL", "MongoDB", "Docker"],
  },
  {
    title: "Platform",
    items: ["Vercel", "Neon", "Turborepo", "Jest", "Playwright", "Sentry", "Claude Code"],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-container stack-container">
        <div>
          <h2 id="stack-title" className="stack-title">
            The stack
          </h2>
          <p className="stack-note">
            What I reach for, and what the work above was actually built with.
          </p>
        </div>

        <div className="stack-groups">
          {stackGroups.map((group) => (
            <div key={group.title} className="stack-group">
              <h3>{group.title}</h3>
              <ul className="stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
