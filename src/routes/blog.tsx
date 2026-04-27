import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-driveway.jpg";
import grass from "@/assets/artificial-grass.jpg";
import patio from "@/assets/patio-sandstone.jpg";
import gravel from "@/assets/gravel-driveway.jpg";
import landscaping from "@/assets/landscaping.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Paving & Landscaping Tips Dublin | M&J" },
      { name: "description", content: "Helpful guides on driveways, patios, artificial grass, drainage and garden landscaping for Dublin and Leinster homes." },
      { property: "og:title", content: "Blog | M&J Paving and Gardening" },
      { property: "og:description", content: "Practical paving and landscaping advice for Irish homeowners." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { slug: "best-driveway-options-dublin", title: "Best Driveway Options for Homes in Dublin", excerpt: "Block paving, tarmac, resin or gravel? Here's how to choose the right driveway for your Dublin home — looks, cost and longevity compared.", image: heroImg },
  { slug: "artificial-grass-vs-natural-turf", title: "Artificial Grass vs Natural Turf: Which Is Right for Your Garden?", excerpt: "Both have their place. We break down the maintenance, cost and lifestyle factors that decide which works best for your garden.", image: grass },
  { slug: "choosing-the-right-paving-for-your-patio", title: "How to Choose the Right Paving for Your Patio", excerpt: "Sandstone, limestone, porcelain or concrete? A practical guide to picking patio paving that suits your home and budget.", image: patio },
  { slug: "why-proper-drainage-matters", title: "Why Proper Drainage Matters for Your Driveway", excerpt: "Skipping drainage is the #1 reason driveways fail early. Here's what proper drainage looks like and why it pays off.", image: gravel },
  { slug: "garden-landscaping-ideas-leinster", title: "Garden Landscaping Ideas for Leinster Homes", excerpt: "From low-maintenance lawns to bespoke seating areas — practical landscaping ideas perfectly suited to Leinster gardens.", image: landscaping },
];

function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Blog</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">Paving & landscaping tips for Irish homes</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Practical guides on driveways, patios, gardens and outdoor improvements for homeowners across Dublin and Leinster.</p>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
