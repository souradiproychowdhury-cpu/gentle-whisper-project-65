import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/achievements", label: "Awards" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-border bg-background/70 px-3 py-2 backdrop-blur-xl"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2 pl-1">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-foreground text-[11px] font-bold text-background">
            S
          </span>
          <span className="truncate text-sm font-medium">Souradip</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.slice(1).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-background md:inline-flex"
        >
          Let&apos;s talk
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full border border-border p-2 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="animate-rise mx-auto mt-2 max-w-3xl rounded-3xl border border-border bg-background/95 p-2 backdrop-blur-xl md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
