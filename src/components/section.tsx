import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-5xl px-5 py-14 md:py-20", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="animate-rise max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 max-w-lg text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
