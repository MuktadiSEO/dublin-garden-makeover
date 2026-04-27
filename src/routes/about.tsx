import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/site/CTASection";
import landscapingImg from "@/assets/landscaping.jpg";
import patioImg from "@/assets/patio-sandstone.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About M&J Paving and Gardening | Dublin Landscapers" },
      { name: "description", content: "Meet M&J Paving and Gardening — a trusted local team delivering quality paving, driveways and landscaping across Dublin and Leinster." },
      { property: "og:title", content: "About M&J Paving and Gardening" },
      { property: "og:description", content: "A trusted local Dublin paving and landscaping team." },
      { property: "og:image", content: "/og-about.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16 md:py-24">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            A local Dublin paving and landscaping team you can rely on
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            M&amp;J Paving and Gardening is a trusted local outdoor improvement company serving homeowners across Dublin and the wider Leinster area.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img src={landscapingImg} alt="Beautifully landscaped garden" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Who we are</h2>
          <p className="mt-3 text-muted-foreground">
            We're a local team of paving, driveway and landscaping specialists based in Dublin, working with homeowners right across Leinster. We've built our reputation on doing things properly — preparing the ground correctly, using quality materials, and finishing every job to the same standard we'd want at our own homes.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold md:text-3xl">What we do</h2>
          <p className="mt-3 text-muted-foreground">
            From new driveways and patios to fencing, decking, artificial grass, planting, pergolas and full garden landscaping, we deliver complete outdoor improvements under one trusted team. Whether you need a small refresh or a full back-garden transformation, we're set up to deliver.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-tight grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Our approach</h2>
            <p className="mt-3 text-muted-foreground">
              Every project starts with a free, no-pressure on-site visit. We listen, take measurements, and recommend the right materials and approach for your space and budget. You then get a clear, written quote — no surprises later.
            </p>
            <p className="mt-3 text-muted-foreground">
              Once work begins, we keep the site tidy, communicate clearly, and stay until the job is properly finished. We always do a final walk-through with you so you're 100% happy before we leave.
            </p>
            <h2 className="mt-8 font-display text-2xl font-bold md:text-3xl">Why homeowners choose us</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {[
                "Experienced, full-time paving and landscaping crew",
                "Honest, transparent pricing with free quotations",
                "Quality materials and clean, lasting finishes",
                "Punctual, tidy and respectful on-site",
                "Full project support from planning to completion",
                "Local team — easy to reach, easy to work with",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-soft lg:order-2">
            <img src={patioImg} alt="Sandstone patio installation" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-tight py-16">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Areas we cover</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          We're proud to work with homeowners across <strong>{SITE.area}</strong>. That includes Dublin city and all surrounding suburbs, as well as Kildare, Meath, Wicklow, Louth, Wexford, Carlow, Kilkenny, Laois, Offaly, Westmeath and Longford.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Dublin</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Kildare</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Meath</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Wicklow</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Louth</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Wexford & all Leinster</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Get a Free Quote
          </Link>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 font-semibold hover:bg-secondary">
            <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
