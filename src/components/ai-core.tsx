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
      className="relative mx-auto aspect-square w-full max-w-[26rem]"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-6 rounded-full border border-primary/20" />
      <div className="animate-pulse-ring absolute inset-2 rounded-full border border-accent/25" />
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
          className="h-full w-full rounded-full object-cover opacity-95 [mask-image:radial-gradient(circle,black_58%,transparent_74%)]"
        />
      </div>
      <div className="glass absolute -left-2 top-10 rounded-xl px-3 py-2 md:left-0">
        <p className="font-mono text-[10px] text-primary">neural.core</p>
      </div>
      <div className="glass absolute bottom-12 -right-2 rounded-xl px-3 py-2 md:right-0">
        <p className="font-mono text-[10px] text-accent">gesture.stream</p>
      </div>
    </div>
  );
}
