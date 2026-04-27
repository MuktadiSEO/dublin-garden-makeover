import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Newspaper, Wrench, ChevronRight } from "lucide-react";
import { pageEntries, postEntries, serviceEntries } from "@/lib/sitemap-data";

export const Route = createFileRoute("/sitemap/")({
  head: () => ({
    meta: [
      { title: "Sitemap | M&J Paving and Gardening" },
      { name: "description", content: "Browse all pages, services and blog posts on M&J Paving and Gardening." },
    ],
  }),
  component: SitemapIndex,
});

const sections = [
  { to: "/sitemap/pages", label: "Page Sitemap", icon: FileText, count: pageEntries.length, desc: "Main website pages" },
  { to: "/sitemap/services", label: "Service Sitemap", icon: Wrench, count: serviceEntries.length, desc: "All service pages" },
  { to: "/sitemap/posts", label: "Post Sitemap", icon: Newspaper, count: postEntries.length, desc: "All blog articles" },
] as const;

function SitemapIndex() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sitemap</span>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Site Index</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A directory of every page, service and article on our website.
          </p>
        </div>
      </section>

      <section className="container-tight py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition hover:shadow-lg hover:border-primary/40"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-bold">{s.label}</h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-2 text-xs font-semibold text-primary">{s.count} entries</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
