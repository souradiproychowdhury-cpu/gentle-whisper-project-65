import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { AiCore } from "@/components/ai-core";
import { Section, SectionHeading } from "@/components/section";
import { profile, projects, services } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Souradip Roy Chowdhury | AI & Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Souradip Roy Chowdhury — CSE student building AI assistants, chatbots, gesture interfaces and modern web applications.",
      },
      { property: "og:title", content: "Souradip Roy Chowdhury | AI & Web Developer" },
      {
        property: "og:description",
        content:
          "Building intelligent digital experiences with AI & code — assistants, chatbots, gesture interfaces and web apps.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-rise min-w-0">
            <span className="glass font-mono inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Available for opportunities
            </span>
            <p className="font-mono mt-6 text-sm text-muted-foreground">
              Hi, I&apos;m {profile.name}
            </p>
            <h1 className="text-glow mt-3 text-4xl font-bold leading-[1.05] md:text-6xl">
              Building Intelligent Digital Experiences with AI &amp; Code.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Computer Science &amp; Engineering student focused on AI, web development,
              interactive applications, and next-generation digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                Let&apos;s Connect
              </Link>
              <a
                href={`mailto:${profile.email}?subject=Resume%20request`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>

            <p className="font-mono mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Code. Intelligence. Interaction.
            </p>
          </div>

          <AiCore />
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "Focus", v: "AI · Web · Interaction" },
            { k: "Stack", v: "React · Python · Node" },
            { k: "Highlight", v: "Hackathon Winner 2025" },
          ].map((s) => (
            <div key={s.k} className="glass glass-hover rounded-2xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                {s.k}
              </p>
              <p className="mt-2 font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What I Build"
          title="Services"
          subtitle="Four ways I turn ideas into working, intelligent software."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.no} className="glass glass-hover group rounded-2xl p-6">
              <p className="font-mono text-xs text-accent">{s.no}</p>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <p className="mt-2 max-h-0 overflow-hidden text-sm text-primary/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                {s.more}
              </p>
            </article>
          ))}
        </div>
        <Link
          to="/services"
          className="font-mono mt-8 inline-flex items-center gap-2 text-sm text-primary"
        >
          All services <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="AI companions, gesture interfaces, healthcare tech and messaging UIs."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              className="glass glass-hover group block overflow-hidden rounded-2xl"
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1280}
                height={800}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-5">
                <p className="font-mono text-xs text-accent">{p.no}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass rounded-3xl p-8 text-center md:p-14">
          <Sparkles className="mx-auto size-6 text-primary" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Building. Experimenting. Learning.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Follow the work in progress, or reach out about internships, freelance projects and
            collaborations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
