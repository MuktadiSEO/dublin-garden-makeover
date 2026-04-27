import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | M&J Paving and Gardening Dublin" },
      { name: "description", content: "Real reviews from Dublin and Leinster homeowners about our paving, driveway and landscaping work." },
      { property: "og:title", content: "Customer Testimonials | M&J Paving and Gardening" },
      { property: "og:description", content: "What our Dublin and Leinster customers say about us." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Sarah O'Connor", area: "Lucan, Dublin", text: "Absolutely thrilled with our new block paving driveway. The team were on time, tidy and incredibly professional. Highly recommend." },
  { name: "Michael Byrne", area: "Maynooth, Kildare", text: "M&J transformed our back garden — patio, decking and fencing in under two weeks. Fantastic finish and great value." },
  { name: "Aoife Kelly", area: "Swords, Dublin", text: "From the free quote to the final clean-up, everything was spot on. Our garden has never looked better." },
  { name: "Liam Murphy", area: "Naas, Kildare", text: "Top-class job on our gravel driveway. Honest pricing and the lads worked hard from morning to evening." },
  { name: "Caoimhe Doyle", area: "Bray, Wicklow", text: "We had artificial grass installed and couldn't be happier. Looks brilliant and our kids love it." },
  { name: "Patrick Walsh", area: "Drogheda, Louth", text: "Lovely sandstone patio, beautifully laid. Great communication throughout the project." },
  { name: "Niamh Brennan", area: "Dundrum, Dublin", text: "Pergola, decking and lighting — they totally changed how we use the back garden. Worth every cent." },
  { name: "Conor Reilly", area: "Navan, Meath", text: "Quoted quickly, started on time, finished on schedule. Fence and turfing both look spotless." },
  { name: "Emma Lynch", area: "Tallaght, Dublin", text: "Pressure cleaning and re-sanding of our paving was night and day. Looks like new again." },
];

function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">Trusted by homeowners across Dublin & Leinster</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We're proud of the work we do — and even prouder of the local families who recommend us to their neighbours, friends and family.
          </p>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <CTASection title="Join our happy customers" subtitle="Get your own free quote and find out why local homeowners choose M&J Paving and Gardening." />
    </>
  );
}
