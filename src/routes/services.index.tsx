import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Paving, Driveways & Landscaping Dublin" },
      { name: "description", content: "Full-service paving, driveways, patios, fencing, decking, artificial grass and landscaping across Dublin and Leinster." },
      { property: "og:title", content: "Our Services | M&J Paving and Gardening" },
      { property: "og:description", content: "Paving, driveways and landscaping across Dublin and Leinster." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            Complete paving, driveway and landscaping services
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            One trusted team for every outdoor project — from new block paving driveways and natural stone patios to decking, fencing, artificial grass and full garden landscaping across Dublin and Leinster.
          </p>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      <CTASection />
    </>
  );
}
