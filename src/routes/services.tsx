import { createFileRoute } from "@tanstack/react-router";
import { Bot, Code2, MessageSquare, Layout } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { services } from "@/data/portfolio";

const icons = [Code2, Layout, MessageSquare, Bot];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What I Build | Souradip Roy Chowdhury" },
      {
        name: "description",
        content:
          "Web development, frontend engineering, chatbot development and AI assistant development services.",
      },
      { property: "og:title", content: "What I Build | Souradip Roy Chowdhury" },
      {
        property: "og:description",
        content: "Four ways I turn ideas into intelligent, interactive software products.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="What I Build"
        subtitle="From responsive interfaces to conversational AI systems."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s, idx) => {
          const Icon = icons[idx] ?? Code2;
          return (
            <article key={s.no} className="glass glass-hover group rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
                <span className="font-mono text-xs text-accent">{s.no}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <p className="mt-3 max-h-0 overflow-hidden text-sm text-primary/80 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                {s.more}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
