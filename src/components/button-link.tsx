import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300",
        variant === "primary" &&
          "border border-accent-300/50 bg-accent-300 text-ink-950 shadow-[0_18px_60px_rgba(45,212,191,0.18)] hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-[0_24px_80px_rgba(45,212,191,0.22)]",
        variant === "secondary" &&
          "border border-slate-400/[0.18] bg-white/[0.035] text-mist-50 hover:-translate-y-0.5 hover:border-accent-300/50 hover:bg-white/[0.065]",
        variant === "ghost" &&
          "text-mist-100 hover:text-accent-300",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="ml-2 h-4 w-4 transition duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
