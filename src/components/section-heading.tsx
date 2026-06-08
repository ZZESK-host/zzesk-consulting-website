import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, body, children, align = "left", className, as = "h2" }: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={cn("max-w-[45rem]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.22em] text-accent-300">{eyebrow}</p> : null}
      <Heading className="text-[2rem] font-semibold leading-tight text-mist-50 sm:text-[2.45rem]">{title}</Heading>
      {body ? <p className="mt-5 text-[1.02rem] leading-8 text-mist-200 sm:text-lg">{body}</p> : null}
      {children}
    </div>
  );
}
