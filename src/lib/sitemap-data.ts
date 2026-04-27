import { posts } from "./blog";
import { services } from "./services";
import heroImg from "@/assets/hero-driveway.jpg";
import patio from "@/assets/patio-sandstone.jpg";
import landscaping from "@/assets/landscaping.jpg";
import decking from "@/assets/decking-pergola.jpg";
import fencing from "@/assets/fencing.jpg";
import grass from "@/assets/artificial-grass.jpg";

export type SitemapEntry = {
  url: string;
  title: string;
  image?: string;
  lastModified: string; // ISO date
};

// Static pages with last modified dates (update when pages change)
const PAGES_LAST_MOD = "2025-04-01";

export const pageEntries: SitemapEntry[] = [
  { url: "/", title: "Home", image: heroImg, lastModified: PAGES_LAST_MOD },
  { url: "/about", title: "About Us", image: landscaping, lastModified: PAGES_LAST_MOD },
  { url: "/services", title: "Our Services", image: patio, lastModified: PAGES_LAST_MOD },
  { url: "/gallery", title: "Gallery", image: decking, lastModified: PAGES_LAST_MOD },
  { url: "/testimonials", title: "Testimonials", image: fencing, lastModified: PAGES_LAST_MOD },
  { url: "/blog", title: "Blog", image: grass, lastModified: PAGES_LAST_MOD },
  { url: "/contact", title: "Contact", image: heroImg, lastModified: PAGES_LAST_MOD },
];

export const postEntries: SitemapEntry[] = posts.map((p) => ({
  url: `/blog/${p.slug}`,
  title: p.title,
  image: p.image,
  lastModified: p.date,
}));

export const serviceEntries: SitemapEntry[] = services.map((s) => ({
  url: `/services/${s.slug}`,
  title: s.name,
  image: s.image,
  lastModified: PAGES_LAST_MOD,
}));

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
