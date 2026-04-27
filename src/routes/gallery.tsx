import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { galleryCategories } from "@/lib/services";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-driveway.jpg";
import patio from "@/assets/patio-sandstone.jpg";
import grass from "@/assets/artificial-grass.jpg";
import decking from "@/assets/decking-pergola.jpg";
import fencing from "@/assets/fencing.jpg";
import gravel from "@/assets/gravel-driveway.jpg";
import porcelain from "@/assets/porcelain-paving.jpg";
import landscaping from "@/assets/landscaping.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | M&J Paving and Gardening Dublin" },
      { name: "description", content: "Browse our recent paving, driveway, patio, decking, fencing and landscaping projects across Dublin and Leinster." },
      { property: "og:title", content: "Project Gallery | M&J Paving and Gardening" },
      { property: "og:description", content: "Recent paving and landscaping work across Dublin and Leinster." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; category: string };

const items: Item[] = [
  { src: heroImg, alt: "Block paving driveway", category: "Driveways" },
  { src: gravel, alt: "Gravel driveway", category: "Driveways" },
  { src: heroImg, alt: "Resin driveway", category: "Driveways" },
  { src: patio, alt: "Sandstone patio", category: "Patios" },
  { src: porcelain, alt: "Porcelain patio", category: "Patios" },
  { src: patio, alt: "Natural stone patio", category: "Patios" },
  { src: landscaping, alt: "Garden landscaping", category: "Landscaping" },
  { src: landscaping, alt: "Flowerbeds and lawn", category: "Landscaping" },
  { src: fencing, alt: "Timber fence panels", category: "Fencing" },
  { src: fencing, alt: "Closeboard fencing", category: "Fencing" },
  { src: decking, alt: "Hardwood decking", category: "Decking" },
  { src: decking, alt: "Decking with pergola", category: "Decking" },
  { src: grass, alt: "Artificial grass lawn", category: "Artificial Grass" },
  { src: grass, alt: "Artificial grass garden", category: "Artificial Grass" },
  { src: landscaping, alt: "Raised flower beds", category: "Garden Features" },
  { src: decking, alt: "Pergola seating area", category: "Garden Features" },
];

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</span>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold md:text-5xl">Recent paving & landscaping projects</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">A small selection of recent work across Dublin and Leinster — from driveways and patios to fencing, decking and full garden makeovers.</p>
        </div>
      </section>

      <section className="container-tight py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", ...galleryCategories].map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-secondary"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((it, i) => (
            <div key={i} className="group aspect-square overflow-hidden rounded-lg shadow-card">
              <img src={it.src} alt={it.alt} loading="lazy" width={1280} height={896}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Like what you see?" subtitle="Get a free quote for your own driveway, patio or garden project." />
    </>
  );
}
