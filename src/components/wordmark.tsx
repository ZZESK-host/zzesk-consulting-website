import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.businessName} home`}
      className={cn(
        "inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300",
        className,
      )}
    >
      <span className="leading-none">
        <span className="block text-xl font-semibold tracking-[0.17em] text-mist-50">
          <span className="text-accent-300">ZZ</span>ESK
        </span>
        <span className="mt-1.5 block text-[0.72rem] font-medium tracking-[0.27em] text-mist-300">CONSULTING</span>
      </span>
    </Link>
  );
}
