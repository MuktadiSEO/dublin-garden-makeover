import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-bold leading-tight md:text-lg">
          <img src={logoIcon} alt="M&J Paving and Gardening logo" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10 object-contain" />
          <span className="whitespace-nowrap">MJ Paving &amp; Gardening</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">
            Home
          </Link>
          <Link to="/about" activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">
            About
          </Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link to="/services" activeProps={{ className: "text-primary" }}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-soft">
                  {services.map((s) => (
                    <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                      className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">Gallery</Link>
          <Link to="/testimonials" activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">Testimonials</Link>
          <Link to="/blog" activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">Blog</Link>
          <Link to="/contact" activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 md:inline-flex">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90 md:inline-flex"
          >
            Get Quote
          </Link>
          <button onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-tight space-y-1 py-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <Link to="/services" onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary">All Services</Link>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
            >
              Browse all services
              <ChevronDown className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="mt-1 space-y-1 pl-3">
                {services.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)}
                    className={cn("block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary")}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <a href={SITE.phoneHref} className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
