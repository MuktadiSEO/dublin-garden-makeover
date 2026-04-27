import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact M&J Paving and Gardening | Free Quote Dublin" },
      { name: "description", content: "Get in touch for a free paving, driveway or landscaping quote in Dublin or Leinster. Call 085 283 4956 or request a callback." },
      { property: "og:title", content: "Contact M&J Paving and Gardening" },
      { property: "og:description", content: "Free quotes for paving, driveways and landscaping across Dublin and Leinster." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Please tell us a little about your project").max(1500),
});

const faqs = [
  { q: "Do you offer free quotes?", a: "Yes — we offer free, no-obligation on-site quotes anywhere in Dublin and Leinster." },
  { q: "What areas do you cover?", a: `We cover ${SITE.area} — from Dublin city and suburbs out to Kildare, Meath, Wicklow, Louth, Wexford and beyond.` },
  { q: "How long does a typical driveway take?", a: "Most residential driveways take 3–7 working days depending on size, ground conditions and finish." },
  { q: "Do you handle the full project?", a: "Yes. From design and ground works through to paving, planting and clean-up — one team handles it all." },
  { q: "Are your quotes fixed?", a: "Our written quotes are fixed unless the scope of work changes. No surprises later." },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">Get a free quote — Dublin & Leinster</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Tell us about your project and we'll get back to you quickly with a free, no-obligation quote. Prefer to chat? Give us a call any time.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-10 py-16 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="font-display text-2xl font-bold">Request a Free Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields are required. We respond within one working day.</p>

            {submitted ? (
              <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-5 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Thanks — we've received your request.</div>
                    <p className="mt-1 text-muted-foreground">A member of the team will be in touch shortly. For anything urgent please call <a className="font-semibold text-primary" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <Field label="Your Name" name="name" error={errors.name} />
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Service Needed</label>
                  <select name="service" defaultValue=""
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30">
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Tell us about your project</label>
                  <textarea name="message" rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
                  Send Quote Request
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Service area map"
                src="https://www.google.com/maps?q=Dublin,Ireland&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-lg font-bold">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-primary" /><a href={SITE.phoneHref} className="font-semibold">{SITE.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-primary" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /><span>{SITE.area}</span></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-primary" /><span>{SITE.hours}</span></li>
            </ul>
            <a href={SITE.phoneHref} className="mt-5 flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60">
        <div className="container-tight py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input name={name} type={type}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
