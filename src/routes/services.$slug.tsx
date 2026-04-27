import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import { getService, services } from "@/lib/services";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/site/CTASection";
import { ServiceCard } from "@/components/site/ServiceCard";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service Not Found" }] };
    return {
      meta: [
        { title: `${s.name} Dublin & Leinster | M&J Paving and Gardening` },
        { name: "description", content: `${s.name} services across Dublin and Leinster. ${s.short} Free quote — call ${SITE.phoneDisplay}.` },
        { property: "og:title", content: `${s.name} | M&J Paving and Gardening` },
        { property: "og:description", content: s.short },
        { property: "og:image", content: s.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-flex text-primary hover:underline">View all services</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const fallback = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const show = related.length ? related : fallback;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={service.image} alt={service.name} width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="container-tight py-24 text-white md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Dublin & all Leinster
          </span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold md:text-5xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-white/85">{service.short}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-charcoal hover:bg-white/90">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-tight grid gap-10 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Professional {service.name.toLowerCase()} across Dublin & Leinster</h2>
          <p className="mt-4 text-muted-foreground">{service.intro}</p>
          <p className="mt-3 text-muted-foreground">
            At M&amp;J Paving and Gardening, we treat every {service.name.toLowerCase()} project with the same care — from honest advice and clear quoting through to careful preparation, expert installation and a clean, tidy finish. Whether you're upgrading a busy driveway, refreshing a back-garden patio or building something new from scratch, we're here to help you get a result you'll enjoy for years.
          </p>

          <h3 className="mt-10 font-display text-xl font-semibold md:text-2xl">Benefits</h3>
          <ul className="mt-3 grid gap-2">
            {service.benefits.map((b: string) => (
              <li key={b} className="flex items-start gap-2 text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {b}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-semibold md:text-2xl">Our process</h3>
          <ol className="mt-3 grid gap-4">
            {service.process.map((p: { title: string; body: string }, i: number) => (
              <li key={p.title} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-10 font-display text-xl font-semibold md:text-2xl">Why choose M&amp;J Paving and Gardening</h3>
          <p className="mt-3 text-muted-foreground">
            We're a local Dublin team with years of hands-on experience in paving, driveways and landscaping. We use quality materials, prepare every job properly, and finish to a standard that lasts. You'll deal with the same friendly people from your first call through to the final walk-through.
          </p>
          <p className="mt-3 text-muted-foreground">
            We work right across <strong>{SITE.area}</strong>, so wherever you are in the region, we can come and see your project, give you an honest quote and get the work done to a high standard.
          </p>
        </div>

        {/* Sidebar CTA */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl font-bold">Get your free quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your project and we'll come out, take a look, and give you a clear written quote — with no pressure.
            </p>
            <Link to="/contact" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
              Request a Free Quote
            </Link>
            <a href={SITE.phoneHref} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 font-semibold hover:bg-secondary">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
            <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Serving Dublin & all Leinster
            </div>
          </div>
        </aside>
      </section>

      {/* Related */}
      <section className="bg-secondary/60">
        <div className="container-tight py-16">
          <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">Related services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {show.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
