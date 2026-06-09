import Link from "next/link";
import { footerLinks, site } from "@/content/site";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-400/[0.16] bg-ink-950">
      <Container className="grid gap-12 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-mist-200">{site.tagline}</p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-2.5 text-[0.95rem]">
          <p className="font-medium text-mist-50">Navigation</p>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit rounded text-mist-200 transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="grid content-start gap-2.5 text-[0.95rem] text-mist-200">
          <p className="font-medium text-mist-50">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="w-fit rounded transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
          >
            {site.email}
          </a>
          <p>{site.domain}</p>
          {site.social.linkedinUrl ? (
            <a
              href={site.social.linkedinUrl}
              className="w-fit rounded transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
              aria-label={`${site.founder} on LinkedIn`}
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </Container>
      <Container className="border-t border-slate-400/[0.14] py-5 text-xs text-mist-400">
        <p>
          &copy; {currentYear} {site.businessName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
