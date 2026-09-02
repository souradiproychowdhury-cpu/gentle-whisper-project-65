import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { profile, projects, type Project } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects | Souradip Roy Chowdhury" },
      {
        name: "description",
        content:
          "Mochi AI companion, GestureAI, HealthAI smart healthcare platform and a modern chat interface — projects by Souradip Roy Chowdhury.",
      },
      { property: "og:title", content: "Featured Projects | Souradip Roy Chowdhury" },
      {
        property: "og:description",
        content: "AI assistants, gesture interfaces, health tech and messaging UIs.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section>
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Select a project to open the full case study — problem, solution, features and stack."
      />

      <div className="mt-10 grid gap-7 lg:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="glass glass-hover group overflow-hidden rounded-3xl">
            <button
              type="button"
              onClick={() => setActive(p)}
              className="block w-full text-left"
              aria-label={`Open details for ${p.title}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-accent">{p.no}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <li
                      key={t}
                      className="font-mono rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
            <div className="flex gap-3 px-6 pb-6">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Open Project <ExternalLink className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.tagline}</DialogDescription>
              </DialogHeader>
              <img
                src={active.image}
                alt={`${active.title} screenshot`}
                loading="lazy"
                width={1280}
                height={800}
                className="mt-2 w-full rounded-xl object-cover"
              />
              <div className="mt-4 space-y-5 text-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Overview
                  </h4>
                  <p className="mt-2 text-muted-foreground">{active.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      Problem
                    </h4>
                    <p className="mt-2 text-muted-foreground">{active.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      Solution
                    </h4>
                    <p className="mt-2 text-muted-foreground">{active.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Key features
                  </h4>
                  <ul className="mt-2 grid gap-1 text-muted-foreground sm:grid-cols-2">
                    {active.features.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Technology stack
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <li
                        key={t}
                        className="font-mono rounded-md border border-border px-2 py-1 text-[11px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Future improvements
                  </h4>
                  <ul className="mt-2 text-muted-foreground">
                    {active.future.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-4 py-2 text-sm font-semibold text-primary"
                >
                  <ExternalLink className="size-4" /> Open project
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
