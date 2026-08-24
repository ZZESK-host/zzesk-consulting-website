"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

type HeaderProps = {
  serviceLinks: ReadonlyArray<{ slug: string; shortTitle: string; number: string }>;
};

export function Header({ serviceLinks = [] }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    if (servicesMenuRef.current) servicesMenuRef.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        if (servicesMenuRef.current) servicesMenuRef.current.open = false;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 8);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, scrollTop / max) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    }

    function onScrollOrResize() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-slate-400/[0.16] bg-ink-950/80 shadow-[0_14px_44px_rgba(0,0,0,0.3)]"
          : "border-transparent bg-ink-950/30",
      )}
    >
      <Container className="flex min-h-20 items-center justify-between gap-5 sm:px-8 lg:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.href === "/services") {
              return (
                <details key={item.href} ref={servicesMenuRef} className="group/services relative">
                  <summary
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex cursor-pointer list-none items-center gap-1 rounded-md px-4 py-2.5 text-[0.96rem] font-medium text-mist-200 transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 [&::-webkit-details-marker]:hidden",
                      active && "text-mist-50",
                    )}
                  >
                    Services
                    <ChevronDown className="h-4 w-4 transition group-open/services:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[25rem] -translate-x-1/2 rounded-lg border border-slate-400/[0.18] bg-ink-900/98 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                    <Link
                      href="/services"
                      className="flex items-center justify-between rounded-lg border border-accent-300/18 bg-accent-300/[0.06] px-4 py-3 text-sm font-semibold text-mist-50 transition hover:border-accent-300/40 hover:bg-accent-300/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-300"
                    >
                      All AI services
                      <span className="font-mono text-xs text-accent-300">07</span>
                    </Link>
                    <div className="mt-2 grid gap-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-mist-200 transition hover:bg-white/[0.05] hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-300"
                        >
                          <span className="w-6 shrink-0 font-mono text-[0.65rem] font-semibold text-accent-300">{service.number}</span>
                          <span>{service.shortTitle}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <span
                    className={cn("absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-accent-300 transition-transform duration-200", active && "scale-x-100")}
                    aria-hidden="true"
                  />
                </details>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-md px-4 py-2.5 text-[0.96rem] font-medium text-mist-200 transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300",
                  active && "text-mist-50",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-accent-300 transition-transform duration-200 group-hover:scale-x-100",
                    active && "scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={site.bookingHref} showArrow={false} className="min-h-10 px-4 text-[0.92rem] shadow-none">
            {site.bookingLabel}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-400/[0.18] bg-white/[0.04] text-mist-50 transition hover:border-accent-300/50 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden border-t border-slate-400/[0.16] bg-ink-950/95">
          <Container className="py-3">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                if (item.href === "/services") {
                  return (
                    <div key={item.href} className="grid">
                      <div className="flex items-center gap-1">
                        <Link
                          href="/services"
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex-1 rounded-lg px-3 py-3 text-base font-medium text-mist-200 transition hover:bg-white/[0.05] hover:text-mist-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300",
                            active && "bg-white/[0.06] text-mist-50",
                          )}
                        >
                          Services
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((value) => !value)}
                          aria-label={servicesOpen ? "Collapse service links" : "Expand service links"}
                          aria-expanded={servicesOpen}
                          aria-controls="mobile-service-links"
                          className="flex h-11 w-11 items-center justify-center rounded-lg text-mist-200 transition hover:bg-white/[0.05] hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
                        >
                          <ChevronDown className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")} aria-hidden="true" />
                        </button>
                      </div>
                      <div id="mobile-service-links" hidden={!servicesOpen} className="ml-3 grid gap-1 border-l border-slate-400/[0.16] py-1 pl-3">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-lg px-3 py-2.5 text-sm text-mist-300 transition hover:bg-white/[0.05] hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
                          >
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium text-mist-200 transition hover:bg-white/[0.05] hover:text-mist-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300",
                      active && "bg-white/[0.06] text-mist-50",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ButtonLink href={site.bookingHref} className="mt-2 w-full" showArrow={false}>
                {site.bookingLabel}
              </ButtonLink>
            </nav>
          </Container>
        </div>
      </div>

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-300 via-cobalt-300 to-accent-300"
      />
    </header>
  );
}
