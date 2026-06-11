import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "spotlight-card rounded-lg border border-slate-400/[0.16] bg-ink-800/78 p-7 shadow-edge transition duration-200 hover:-translate-y-1 hover:border-accent-300/40 hover:bg-ink-800 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]",
        className,
      )}
      {...props}
    />
  );
}
