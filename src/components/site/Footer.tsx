import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-stone-warm">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 font-display text-xl font-bold text-white">{SITE.name}</div>
          <p className="text-sm text-stone-warm/80">
            Trusted local paving, driveway and landscaping specialists serving {SITE.area}. Free quotes, quality materials and clean finishes — every time.
          </p>
          <a href={SITE.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" }, { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" }, { to: "/gallery", label: "Gallery" },
              { to: "/testimonials", label: "Testimonials" }, { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="text-stone-warm/80 hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Popular Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-stone-warm/80 hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>{SITE.area}</span></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /><span>{SITE.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone-warm/70 md:flex-row">
          <span>© {new Date().getFullYear()} {SITE.domain}. All rights reserved.</span>
          <span>Paving · Driveways · Patios · Landscaping — Dublin & Leinster</span>
        </div>
      </div>
    </footer>
  );
}
