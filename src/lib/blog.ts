import heroImg from "@/assets/hero-driveway.jpg";
import grass from "@/assets/artificial-grass.jpg";
import patio from "@/assets/patio-sandstone.jpg";
import gravel from "@/assets/gravel-driveway.jpg";
import landscaping from "@/assets/landscaping.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string; // ISO date e.g. "2025-03-12"
  author?: string;
  /**
   * Article body. Each string is a paragraph.
   * For headings, prefix the line with "## " (h2) or "### " (h3).
   * For bullet lists, prefix lines with "- ".
   */
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "best-driveway-options-dublin",
    title: "Best Driveway Options for Homes in Dublin",
    excerpt:
      "Block paving, tarmac, resin or gravel? Here's how to choose the right driveway for your Dublin home — looks, cost and longevity compared.",
    image: heroImg,
    date: "2025-02-10",
    author: "M&J Paving and Gardening",
    content: [
      "Choosing a driveway in Dublin comes down to four practical materials: block paving, tarmac, resin-bound and gravel. Each has trade-offs in price, looks and how well it copes with Irish weather.",
      "## Block paving",
      "Block paving is the most popular choice in Dublin. It's hard-wearing, looks smart for decades and individual blocks can be lifted and replaced if a vehicle leaks oil or a service trench is needed.",
      "## Tarmac",
      "Tarmac is the most affordable option per square metre and goes down quickly. It suits longer driveways where block paving would push the budget too high.",
      "## Resin-bound",
      "Resin gives a clean, modern, seamless finish and drains water through the surface — useful for SuDS compliance on new builds.",
      "## Gravel",
      "Gravel is the cheapest and quickest install. It needs occasional topping-up but offers great natural drainage and a softer, country-house look.",
      "If you'd like a free comparison quote for your home, get in touch and we'll talk you through what works best for your space.",
    ],
  },
  {
    slug: "artificial-grass-vs-natural-turf",
    title: "Artificial Grass vs Natural Turf: Which Is Right for Your Garden?",
    excerpt:
      "Both have their place. We break down the maintenance, cost and lifestyle factors that decide which works best for your garden.",
    image: grass,
    date: "2025-01-22",
    author: "M&J Paving and Gardening",
    content: [
      "Artificial grass has come a long way — modern products look and feel close to the real thing. But natural turf still wins in some situations. Here's how to decide.",
      "## When artificial grass wins",
      "- Shaded gardens where real grass struggles",
      "- Busy households with kids and pets",
      "- Homeowners who want a tidy lawn year-round with minimal effort",
      "## When natural turf wins",
      "- Larger gardens where the cost of artificial becomes significant",
      "- Households that enjoy gardening and want a biodiverse space",
      "- South-facing gardens with good drainage",
      "Either way, proper ground prep is what makes a lawn last. Skipping the base is the most common reason both options fail early.",
    ],
  },
  {
    slug: "choosing-the-right-paving-for-your-patio",
    title: "How to Choose the Right Paving for Your Patio",
    excerpt:
      "Sandstone, limestone, porcelain or concrete? A practical guide to picking patio paving that suits your home and budget.",
    image: patio,
    date: "2024-12-18",
    author: "M&J Paving and Gardening",
    content: [
      "Your patio paving sets the tone for the whole back garden. Here's a quick guide to the four most common options.",
      "## Sandstone",
      "Warm, natural tones and a riven surface. Great value and very popular for traditional Irish homes.",
      "## Limestone",
      "Cooler, more uniform finish than sandstone. Excellent for contemporary extensions and grey-tone houses.",
      "## Porcelain",
      "The premium option — extremely low maintenance, stain-resistant and dimensionally perfect. Best for modern designs.",
      "## Concrete",
      "Affordable and consistent. Newer manufactured concrete slabs imitate natural stone convincingly at a fraction of the cost.",
    ],
  },
  {
    slug: "why-proper-drainage-matters",
    title: "Why Proper Drainage Matters for Your Driveway",
    excerpt:
      "Skipping drainage is the #1 reason driveways fail early. Here's what proper drainage looks like and why it pays off.",
    image: gravel,
    date: "2024-11-30",
    author: "M&J Paving and Gardening",
    content: [
      "A beautifully laid driveway will still fail within a few years if water has nowhere to go. In Ireland, with our rainfall, drainage is not optional.",
      "## What good drainage looks like",
      "- A clear fall away from the house (typically 1:60 to 1:80)",
      "- Linear ACO channel drains across the entry to the property",
      "- Permeable sub-base with the correct depth of MOT type 1",
      "- For non-permeable surfaces, runoff directed to a soakaway or gully",
      "## Regulations",
      "Driveways over 5m² that drain to the public road typically need planning permission unless they use a permeable surface or drain to a soakaway. We can advise on what applies to your home.",
    ],
  },
  {
    slug: "garden-landscaping-ideas-leinster",
    title: "Garden Landscaping Ideas for Leinster Homes",
    excerpt:
      "From low-maintenance lawns to bespoke seating areas — practical landscaping ideas perfectly suited to Leinster gardens.",
    image: landscaping,
    date: "2024-11-05",
    author: "M&J Paving and Gardening",
    content: [
      "A well-designed garden adds real value to your home and gives you somewhere to actually enjoy the few sunny weeks we get. Here are a handful of ideas that work well in Leinster gardens.",
      "## Zoning the garden",
      "Split the space into clear zones: a paved seating area near the house, a lawn or play area in the middle, and planted borders or a shed at the back.",
      "## Low-maintenance planting",
      "Hardy evergreens (laurel, box, photinia) give year-round structure with minimal work.",
      "## Outdoor living",
      "A simple porcelain patio with a pergola or sail shade extends the usable months of the year significantly.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
