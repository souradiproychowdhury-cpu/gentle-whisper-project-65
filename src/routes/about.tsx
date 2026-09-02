import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Trophy } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { timeline } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Souradip Roy Chowdhury | CSE Student & AI Developer" },
      {
        name: "description",
        content:
          "Souradip Roy Chowdhury is a CSE student passionate about AI, web development, chatbots, gesture recognition and health technology.",
      },
      { property: "og:title", content: "About Souradip Roy Chowdhury" },
      {
        property: "og:description",
        content: "Education, interests and the journey of an emerging AI & web developer.",
      },
    ],
  }),
  component: About,
});

const interests = [
  "Artificial Intelligence",
  "Web Development",
  "Frontend Engineering",
  "AI Assistants",
  "Chatbot Development",
  "Gesture Recognition",
  "Interactive Computing",
  "Health Technology",
];

const coursework = [
  "Data Structures & Algorithms",
  "Web Technologies",
  "Artificial Intelligence",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
];

function About() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        subtitle="Motivated and detail-oriented Computer Science & Engineering student with a strong foundation in web development, artificial intelligence and software engineering."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass rounded-2xl p-7">
          <p className="text-muted-foreground">
            Souradip is proficient in Python, Java, JavaScript, HTML, CSS and React.js, with
            hands-on experience developing AI-powered applications, health-tech platforms,
            chatbots, virtual assistants and gesture-based interfaces.
          </p>
          <p className="mt-4 text-muted-foreground">
            He is passionate about solving problems through technology and building innovative,
            interactive digital experiences — spanning AI assistants, healthcare technology, 3D
            gesture interaction, intelligent Q&amp;A systems and modern web applications. As an
            emerging developer, his portfolio grows with every project he ships.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {interests.map((i) => (
              <li
                key={i}
                className="font-mono rounded-full border border-primary/25 px-3 py-1.5 text-xs text-primary/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6">
          <div className="glass rounded-2xl p-7">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">Education</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Tech — Computer Science &amp; Engineering
              <br />
              Techno Institute of Engineering and Management
              <br />
              Ashoknagar, West Bengal
              <br />
              Expected Graduation: 2028
            </p>
            <p className="font-mono mt-4 text-[11px] uppercase tracking-[0.2em] text-accent">
              Relevant coursework
            </p>
            <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
              {coursework.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-7">
            <Trophy className="size-5 text-accent" />
            <h3 className="mt-3 text-lg font-semibold">Internal Hackathon Winner — 2025</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Collaboration, creativity and practical problem-solving under time constraints.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold">Journey</h3>
        <ol className="mt-6 border-l border-border pl-6">
          {timeline.map((t) => (
            <li key={t.year + t.title} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[1.72rem] top-1.5 size-3 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
              <p className="font-mono text-xs text-primary">{t.year}</p>
              <p className="mt-1 font-semibold">{t.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
