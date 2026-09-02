import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold tracking-[0.28em]">
            SOURADIP ROY CHOWDHURY
          </p>
          <p className="font-mono mt-2 text-xs text-muted-foreground">
            Code. Intelligence. Interaction.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="glass glass-hover rounded-xl p-2.5"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="glass glass-hover rounded-xl p-2.5"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="glass glass-hover rounded-xl p-2.5"
          >
            <Mail className="size-4" />
          </a>
          <Link
            to="/contact"
            className="font-mono rounded-xl border border-primary/40 px-4 py-2 text-xs text-primary transition-colors hover:bg-primary/10"
          >
            Hire me
          </Link>
        </div>
      </div>
    </footer>
  );
}
