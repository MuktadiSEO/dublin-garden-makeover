import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
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

function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
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
          {sorted.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
