import { useEffect, useRef, useState } from "react";
import coreImg from "@/assets/ai-core.jpg";

export function AiCore() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      setTilt({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[24rem]"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-4 rounded-full border border-border" />
      <div className="animate-pulse-ring absolute inset-0 rounded-full border border-foreground/10" />
      <div
        className="animate-float-slow relative h-full w-full"
        style={{
          transform: `rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 260ms ease-out",
        }}
      >
        <img
          src={coreImg}
          alt="Glowing neural AI core visualisation"
          width={1024}
          height={1024}
          className="h-full w-full rounded-full object-cover opacity-80 grayscale [mask-image:radial-gradient(circle,black_56%,transparent_74%)]"
        />
      </div>
      <div className="absolute -left-1 top-10 rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur-md md:left-0">
        <p className="font-mono text-[10px] text-muted-foreground">neural.core</p>
      </div>
      <div className="absolute bottom-12 -right-1 rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur-md md:right-0">
        <p className="font-mono text-[10px] text-muted-foreground">gesture.stream</p>
      </div>
    </div>
  );

}
