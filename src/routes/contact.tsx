import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/section";
import { profile } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Souradip Roy Chowdhury" },
      {
        name: "description",
        content:
          "Get in touch with Souradip Roy Chowdhury about projects, internships, freelance work and collaborations.",
      },
      { property: "og:title", content: "Let's Build Something Intelligent" },
      {
        property: "og:description",
        content: "Have an idea, project, or opportunity? Let's connect.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setSending(false);
    if (error) {
      toast.error("Message could not be sent. Please try again.");
      return;
    }
    setSent(true);
    setValues({ name: "", email: "", subject: "", message: "" });
    toast.success("Message sent — I'll get back to you soon.");
  }

  const field =
    "mt-2 w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60";

  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Intelligent."
        subtitle="Have an idea, project, or opportunity? Let's connect and create something innovative."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="glass h-fit rounded-2xl p-7">
          <ul className="grid gap-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${profile.email}`} className="min-w-0 truncate hover:text-primary">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={`tel:${profile.phone}`} className="hover:text-primary">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-primary" />
              {profile.location}
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:border-primary/50"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:border-primary/50"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.2em]">
                Name
              </label>
              <input
                id="name"
                value={values.name}
                onChange={set("name")}
                className={field}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.2em]">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={set("email")}
                className={field}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="subject" className="font-mono text-xs uppercase tracking-[0.2em]">
              Subject
            </label>
            <input
              id="subject"
              value={values.subject}
              onChange={set("subject")}
              className={field}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.2em]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={set("message")}
              className={field}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
            <Send className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          {sent && (
            <p className="mt-4 text-sm text-primary" role="status">
              Thanks — your message is saved and on its way to me.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
