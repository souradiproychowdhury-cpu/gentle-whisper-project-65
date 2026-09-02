import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Souradip Roy Chowdhury" },
      {
        name: "description",
        content:
          "Frontend, programming, web, AI/ML, tooling and database skills of Souradip Roy Chowdhury.",
      },
      { property: "og:title", content: "Skills | Souradip Roy Chowdhury" },
      {
        property: "og:description",
        content: "React, Python, Java, JavaScript, AI/LLM integration, gesture recognition and more.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills"
        subtitle="The technologies and practices I use to design, build and ship intelligent interfaces."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article key={g.title} className="glass glass-hover rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {g.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm"
                >
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
