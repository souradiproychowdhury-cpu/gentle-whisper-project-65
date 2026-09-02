export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="animate-drift absolute -left-40 top-[-12rem] h-[36rem] w-[36rem] rounded-full bg-foreground/[0.05] blur-[140px]" />
      <div
        className="animate-drift absolute right-[-14rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-foreground/[0.04] blur-[150px]"
        style={{ animationDelay: "-9s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_25%,var(--background)_92%)]" />
    </div>
  );
}
