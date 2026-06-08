"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-400/[0.16] bg-ink-950/78 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-5 sm:px-8 lg:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
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

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-400/[0.16] bg-ink-950/96 md:hidden"
          >
            <Container className="py-3">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
