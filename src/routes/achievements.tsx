import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements | Souradip Roy Chowdhury" },
      {
        name: "description",
        content:
          "Internal Hackathon Winner 2025 — collaboration, creativity and practical problem-solving under time constraints.",
      },
      { property: "og:title", content: "Achievements | Souradip Roy Chowdhury" },
      {
        property: "og:description",
        content: "Hackathon win and the engineering habits behind it.",
      },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        subtitle="Proof of building fast, collaborating well and shipping under pressure."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr]">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center">
          <div className="animate-pulse-ring absolute left-1/2 top-16 size-28 -translate-x-1/2 rounded-full border border-accent/40" />
          <Trophy className="animate-float-slow relative mx-auto size-14 text-primary drop-shadow-[0_0_25px_var(--primary)]" />
          <h3 className="mt-6 text-2xl font-bold">Internal Hackathon Winner — 2025</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Won an internal hackathon by turning an idea into a working solution inside a tight
            deadline.
          </p>
        </div>
        <div className="glass rounded-3xl p-8">
          <h3 className="text-lg font-semibold">What it demonstrates</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <li>· Collaboration in a small, fast-moving engineering team</li>
            <li>· Creative problem framing under real time constraints</li>
            <li>· Ability to scope, build and demo a practical solution</li>
            <li>· Competitive engineering ability against strong peers</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
