import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Star, MapPin, Hammer, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-driveway.jpg";
import landscapingImg from "@/assets/landscaping.jpg";
import patioImg from "@/assets/patio-sandstone.jpg";
import deckingImg from "@/assets/decking-pergola.jpg";
import grassImg from "@/assets/artificial-grass.jpg";
import fencingImg from "@/assets/fencing.jpg";
import porcelainImg from "@/assets/porcelain-paving.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M&J Paving and Gardening | Driveways, Patios & Landscaping Dublin" },
      { name: "description", content: "Expert paving, driveways, patios, decking, fencing and garden landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { property: "og:title", content: "M&J Paving and Gardening | Dublin & Leinster" },
      { property: "og:description", content: "Expert paving, driveways, patios and landscaping across Dublin and Leinster." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  "Free quotations",
  "Local Dublin team",
  "Quality workmanship",
  "Dublin & Leinster coverage",
];

const whyUs = [
  { icon: Hammer, title: "Experienced Team", text: "Years of hands-on paving and landscaping experience across Dublin and Leinster." },
  { icon: Sparkles, title: "Quality Materials & Clean Finishes", text: "We use proven materials and finish every job to a high, lasting standard." },
  { icon: CheckCircle2, title: "Free Quotations", text: "Honest, on-site quotes with no pressure and no hidden costs." },
  { icon: ShieldCheck, title: "Residential Specialists", text: "Trusted by Irish homeowners for driveways, patios, gardens and outdoor improvements." },
  { icon: MapPin, title: "Dublin & Leinster Coverage", text: "We work right across Dublin and the wider Leinster area." },
  { icon: Star, title: "Reliable & Friendly", text: "Punctual, tidy and easy to deal with — from first call to final walk-through." },
];

const reviews = [
  { name: "Sarah O'Connor", area: "Lucan, Dublin", text: "Absolutely thrilled with our new block paving driveway. The team were on time, tidy and incredibly professional. Highly recommend." },
  { name: "Michael Byrne", area: "Maynooth, Kildare", text: "M&J transformed our back garden — patio, decking and fencing in under two weeks. Fantastic finish and great value." },
  { name: "Aoife Kelly", area: "Swords, Dublin", text: "From the free quote to the final clean-up, everything was spot on. Our garden has never looked better." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Premium block paving driveway and landscaped front garden" width={1920} height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="container-tight grid gap-8 py-24 text-white md:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Dublin & all Leinster
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Expert Paving, Driveways &amp; Landscaping Across Dublin and Leinster
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              M&amp;J Paving and Gardening provides reliable paving, driveway, patio, fencing, decking, artificial grass and landscaping services for homes and outdoor spaces across Dublin and the wider Leinster area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-charcoal hover:bg-white/90">
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-white/85 sm:grid-cols-4">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-tight py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Everything you need for a beautiful outdoor space</h2>
            <p className="mt-3 text-muted-foreground">From driveways and patios to fencing, decking and full garden landscaping — one experienced local team for every outdoor project.</p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-secondary/60">
        <div className="container-tight grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img src={landscapingImg} alt="Landscaped Irish garden" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About M&amp;J</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">A local outdoor improvement team you can trust</h2>
            <p className="mt-4 text-muted-foreground">
              M&amp;J Paving and Gardening helps Dublin and Leinster homeowners transform their gardens, patios, driveways and outdoor areas. We combine durable workmanship with attractive finishes, so every project is built to last and built to look great.
            </p>
            <p className="mt-3 text-muted-foreground">
              From small garden refreshes to full driveway and landscaping projects, we're on hand from your first call to the final clean-up.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:opacity-90">
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 font-semibold hover:bg-secondary">
                Request a Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-tight py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Reliable, friendly and finished to a high standard</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-secondary/60">
        <div className="container-tight py-20">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Work</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">A glimpse at recent projects</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              See full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[heroImg, patioImg, deckingImg, grassImg, fencingImg, porcelainImg, landscapingImg, heroImg].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-card">
                <img src={src} alt={`Project ${i + 1}`} loading="lazy" width={1280} height={896}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="container-tight py-20 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Service Areas</span>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Covering Dublin &amp; all of Leinster</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          We work with homeowners across Dublin city, the surrounding suburbs and the wider Leinster area — including Kildare, Meath, Wicklow, Louth, Wexford, Carlow, Kilkenny, Laois, Offaly, Westmeath and Longford.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/60">
        <div className="container-tight py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">What our customers say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-foreground/90">"{r.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
