import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to="/services/$slug" params={{ slug: service.slug }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={service.image} alt={service.name} loading="lazy" width={1280} height={896}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-primary">{service.category}</span>
        <h3 className="font-display text-xl font-semibold">{service.name}</h3>
        <p className="text-sm text-muted-foreground">{service.short}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-primary">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
