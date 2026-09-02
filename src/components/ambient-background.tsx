export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className="animate-drift absolute -left-40 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-primary/12 blur-[120px]" />
      <div
        className="animate-drift absolute right-[-12rem] top-[20rem] h-[30rem] w-[30rem] rounded-full bg-accent/14 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-[140px]"
        style={{ animationDelay: "-15s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_95%)]" />
    </div>
  );
}
