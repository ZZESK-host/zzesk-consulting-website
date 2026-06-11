import { ButtonLink } from "@/components/button-link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type CtaPanelProps = {
  heading: string;
  body: string;
  buttonLabel?: string;
  className?: string;
};

export function CtaPanel({ heading, body, buttonLabel = site.bookingLabel, className }: CtaPanelProps) {
  return (
    <section
      className={cn(
        "glow-border relative rounded-lg border border-accent-300/15 bg-[linear-gradient(135deg,#132333_0%,#0B1622_55%,#09131D_100%)] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.36)] sm:p-9 lg:p-12",
        className,
      )}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_88%_0%,rgba(45,212,191,0.16),transparent_20rem)]"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-mist-50 sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-[1.03rem] leading-8 text-mist-200">{body}</p>
        </div>
        <ButtonLink href={site.bookingHref} className="min-h-12 shrink-0 px-6 text-base">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
