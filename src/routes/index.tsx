import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const marquee = [
  "React.js",
  "Python",
  "AI / LLM",
  "Gesture Recognition",
  "Chatbots",
  "Node.js",
  "Java",
  "REST APIs",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-rise min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] text-muted-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-foreground" />
              Available for internships & freelance
            </span>

            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[0.98] tracking-tight md:text-[4.2rem]">
              Design that
              <br />
              <span className="text-muted-foreground">thinks for itself.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              I&apos;m {profile.name} — a Computer Science &amp; Engineering student building AI
              assistants, chatbots, gesture interfaces and modern web products that feel alive.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                View my work
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`mailto:${profile.email}?subject=Resume%20request`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>

          <AiCore />
        </div>
      </Section>

      {/* Marquee */}
      <div className="border-y border-border py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="font-mono whitespace-nowrap text-xs uppercase tracking-[0.25em] text-muted-foreground"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Work */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I've shipped."
            subtitle="AI companions, gesture interfaces, healthcare tech and messaging products."
          />
          <Link
            to="/projects"
            className="rounded-full border border-border px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.slug} to="/projects" className="group block">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-52 w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-sm font-medium">{p.title}</h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{p.tagline}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  View <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What I do"
          title="Services, kept simple."
          subtitle="Four ways I turn ideas into working, intelligent software."
        />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <div
              key={s.no}
              className="group grid gap-2 py-6 transition-colors md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline md:gap-6"
            >
              <p className="font-mono text-xs text-muted-foreground">{s.no}</p>
              <h3 className="text-lg font-medium transition-transform duration-500 md:group-hover:translate-x-1">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="pb-4">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {[
            { k: "Focus", v: "AI · Web · Interaction" },
            { k: "Stack", v: "React · Python · Node" },
            { k: "Highlight", v: "Hackathon Winner 2025" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.k}
              </p>
              <p className="mt-2 text-sm font-medium">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
