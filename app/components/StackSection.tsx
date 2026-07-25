const stackGroups = [
  {
    title: "Web",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Server components"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Redux Persist", "Push notifications", "Maps"],
  },
  {
    title: "Backend & data",
    items: ["Laravel", "MySQL", "MongoDB", "Docker", "Next.js API routes", "REST APIs"],
  },
  {
    title: "Platform",
    items: ["Server-side rendering", "Axios", "Admin tooling"],
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
