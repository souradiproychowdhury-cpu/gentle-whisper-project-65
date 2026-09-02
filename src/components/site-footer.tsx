import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 px-4 pb-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-surface/40 p-8 md:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Available for work
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-muted-foreground">intelligent together.</span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Start a conversation
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Souradip Roy Chowdhury
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-border p-2.5 transition-colors hover:bg-secondary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-border p-2.5 transition-colors hover:bg-secondary"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="rounded-full border border-border p-2.5 transition-colors hover:bg-secondary"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
