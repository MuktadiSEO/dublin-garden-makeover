import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTASection({
  title = "Ready to Transform Your Outdoor Space?",
  subtitle = "Get a free, no-obligation quote from a trusted Dublin paving and landscaping team.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-section text-primary-foreground">
      <div className="container-tight grid gap-6 py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold md:text-5xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-base text-primary-foreground/85 md:text-lg">{subtitle}</p>
        <div className="mt-2 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">
            <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
