import heroImg from "@/assets/hero-driveway.jpg";
import patio from "@/assets/patio-sandstone.jpg";
import grass from "@/assets/artificial-grass.jpg";
import decking from "@/assets/decking-pergola.jpg";
import fencing from "@/assets/fencing.jpg";
import gravel from "@/assets/gravel-driveway.jpg";
import porcelain from "@/assets/porcelain-paving.jpg";
import landscaping from "@/assets/landscaping.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  intro: string;
  benefits: string[];
  process: { title: string; text: string }[];
  category: string;
};

const baseProcess = [
  { title: "Free On-Site Consultation", text: "We visit your property to discuss your vision, take measurements and recommend the best materials for your space and budget." },
  { title: "Detailed Written Quote", text: "You receive a clear, no-obligation quote with materials, timeline and pricing — no hidden costs." },
  { title: "Expert Installation", text: "Our experienced team prepares the ground properly and installs to the highest standard with quality materials." },
  { title: "Final Walk-Through & Clean-Up", text: "We tidy the site, walk you through the finished work and stand behind every job we complete." },
];

export const services: Service[] = [
  {
    slug: "artificial-grass", name: "Artificial Grass", category: "Landscaping",
    image: grass,
    short: "Lush, low-maintenance lawns that look great all year round.",
    intro: "Modern artificial grass gives Dublin homeowners a perfectly green, mud-free lawn 365 days a year. Ideal for busy families, pet owners and shaded gardens where natural grass struggles, our installations look and feel remarkably real.",
    benefits: [
      "No mowing, watering or fertilising required",
      "Soft, child- and pet-friendly surfaces",
      "Excellent drainage — no puddles or muddy patches",
      "UV-stable fibres that stay green year-round",
      "Premium underlay for comfort and longevity",
    ],
    process: baseProcess,
  },
  {
    slug: "sandstone-paving", name: "Sandstone Paving", category: "Patios",
    image: patio,
    short: "Natural Indian sandstone patios with a warm, timeless finish.",
    intro: "Sandstone is one of the most beautiful natural materials for an Irish patio. Each slab carries its own colour and texture, creating a warm, characterful outdoor space that pairs perfectly with traditional and modern homes alike.",
    benefits: [
      "Naturally non-slip riven surface",
      "Warm earthy tones that suit Irish weather",
      "Hard-wearing and frost-resistant",
      "Sealed to protect against staining and weathering",
      "A timeless finish that ages beautifully",
    ],
    process: baseProcess,
  },
  {
    slug: "block-paving", name: "Block Paving", category: "Driveways",
    image: heroImg,
    short: "Strong, attractive block paved driveways built to last.",
    intro: "Block paving is the most popular choice for driveways across Dublin and Leinster. With a properly prepared sub-base and quality blocks, your new driveway will look fantastic and stay flat and stable for decades.",
    benefits: [
      "Wide range of colours, sizes and patterns",
      "Heavy-duty sub-base built to take vehicle loads",
      "Easy to repair — individual blocks can be lifted",
      "Excellent kerb appeal and home value",
      "Suitable for driveways, paths and entrances",
    ],
    process: baseProcess,
  },
  {
    slug: "limestone-paving", name: "Limestone Paving", category: "Patios",
    image: patio,
    short: "Cool grey and silver limestone for a refined modern patio.",
    intro: "Limestone paving offers crisp, contemporary tones in soft greys and silvers. It's an elegant choice for modern Irish homes, giving a clean and sophisticated finish around patios, garden paths and entrance areas.",
    benefits: [
      "Smooth honed or natural riven finishes",
      "Cool, calm colour palette",
      "Dense, hard-wearing natural stone",
      "Pairs beautifully with planting and lawns",
      "Sealed for long-lasting protection",
    ],
    process: baseProcess,
  },
  {
    slug: "gravel-driveways", name: "Gravel Driveways", category: "Driveways",
    image: gravel,
    short: "Cost-effective, attractive gravel driveways with proper drainage.",
    intro: "A well-built gravel driveway is one of the most affordable ways to transform the front of an Irish home. We install with proper sub-base, weed membrane and edging so the gravel stays put and drains beautifully.",
    benefits: [
      "Excellent natural drainage",
      "Wide choice of stone colours and sizes",
      "Quick to install with minimal disruption",
      "Adds a charming, country-home feel",
      "Easy to top up and maintain over time",
    ],
    process: baseProcess,
  },
  {
    slug: "decorative-stone", name: "Decorative Stone", category: "Garden Features",
    image: gravel,
    short: "Decorative stone borders, beds and finishing touches.",
    intro: "Decorative stone is the perfect way to finish a garden or driveway project. From cobbles and pebbles to chippings in every colour, we supply and install decorative stone to complement your paving, planting and overall design.",
    benefits: [
      "Huge range of colours, textures and sizes",
      "Suppresses weeds and reduces maintenance",
      "Defines borders, beds and feature areas",
      "Combines well with paving and planting",
      "Long-lasting, fade-resistant materials",
    ],
    process: baseProcess,
  },
  {
    slug: "driveways-concrete", name: "Concrete Driveways", category: "Driveways",
    image: heroImg,
    short: "Tough, smooth concrete driveways with a clean modern finish.",
    intro: "Concrete driveways are extremely durable and require very little maintenance. With a properly compacted base and the right mix, a concrete driveway will give you decades of reliable service in Irish weather.",
    benefits: [
      "Exceptional strength and lifespan",
      "Smooth, easy-to-clean surface",
      "Optional brushed, patterned or coloured finishes",
      "Low long-term maintenance",
      "Excellent for modern Irish homes",
    ],
    process: baseProcess,
  },
  {
    slug: "natural-stone-patios", name: "Natural Stone Patios", category: "Patios",
    image: patio,
    short: "Bespoke natural stone patios for a unique outdoor space.",
    intro: "Nothing beats the character of a natural stone patio. We work with sandstone, limestone, granite and slate to create patios that feel completely unique to your home and garden.",
    benefits: [
      "One-of-a-kind colours and textures",
      "Hard-wearing and frost-resistant",
      "Suits both period and modern homes",
      "Bespoke layouts and bonding patterns",
      "Sealed for long-term protection",
    ],
    process: baseProcess,
  },
  {
    slug: "decking", name: "Decking", category: "Decking",
    image: decking,
    short: "Hardwood and composite decking for relaxed outdoor living.",
    intro: "A well-built deck creates a beautiful, raised outdoor living space — perfect for entertaining or relaxing with the family. We install treated hardwood and modern composite decking to suit any Irish garden.",
    benefits: [
      "Hardwood, softwood and composite options",
      "Slip-resistant, family-friendly surface",
      "Built on a strong, level sub-frame",
      "Ideal for sloped or uneven gardens",
      "Optional balustrades, steps and lighting",
    ],
    process: baseProcess,
  },
  {
    slug: "porcelain-paving", name: "Porcelain Paving", category: "Patios",
    image: porcelain,
    short: "Modern porcelain slabs — sleek, low-maintenance and stunning.",
    intro: "Porcelain paving is the premium modern choice for patios. Incredibly hard, virtually stain-proof and available in stunning stone-effect and concrete-effect finishes, porcelain delivers a contemporary look with minimal upkeep.",
    benefits: [
      "Extremely hard-wearing and stain-resistant",
      "No sealing required — virtually maintenance-free",
      "Crisp, large-format slab finishes",
      "Frost-proof and colourfast",
      "Perfect for modern Irish homes",
    ],
    process: baseProcess,
  },
  {
    slug: "tarmacadam-resin-brickwork", name: "Tarmacadam, Resin & Brickwork", category: "Driveways",
    image: heroImg,
    short: "Tarmac, resin-bound and brickwork driveway specialists.",
    intro: "From classic tarmacadam to modern resin-bound surfaces and decorative brickwork, we install hard-wearing driveway surfaces that look great and stand up to Irish weather and daily use.",
    benefits: [
      "Smooth tarmacadam for clean, classic driveways",
      "Permeable resin-bound for a high-end finish",
      "Decorative brickwork edging and detailing",
      "Strong, properly drained sub-base",
      "Long-lasting, low-maintenance results",
    ],
    process: baseProcess,
  },
  {
    slug: "turfing", name: "Turfing", category: "Landscaping",
    image: landscaping,
    short: "Fresh roll-out lawns delivered and installed for instant green.",
    intro: "Skip the long wait for grass to grow. Our turfing service delivers a beautiful, mature-looking lawn in a single day, properly prepared and laid for strong root establishment.",
    benefits: [
      "Instant lawn — usable within weeks",
      "Premium quality, hard-wearing turf",
      "Full ground preparation and levelling",
      "Aftercare advice for a long-lasting lawn",
      "Ideal for new homes and tired gardens",
    ],
    process: baseProcess,
  },
  {
    slug: "fencing", name: "Fencing", category: "Fencing",
    image: fencing,
    short: "Strong timber fencing for privacy, security and style.",
    intro: "A new fence transforms a garden — adding privacy, security and a clean, finished look. We install closeboard, panel, picket and post-and-rail fencing to suit any Irish property.",
    benefits: [
      "Pressure-treated timber for long life",
      "Concrete-set posts for stability",
      "Closeboard, panel and decorative styles",
      "Custom heights and finishes",
      "Tidy installation and waste removal",
    ],
    process: baseProcess,
  },
  {
    slug: "graveling", name: "Graveling", category: "Landscaping",
    image: gravel,
    short: "Garden gravel paths, beds and feature areas.",
    intro: "Graveling adds a clean, low-maintenance finish to paths, beds and side passages. We supply and install in any colour or grade with proper edging and weed membrane for a long-lasting result.",
    benefits: [
      "Wide colour range to match your home",
      "Membrane-backed to suppress weeds",
      "Tidy edging keeps gravel in place",
      "Excellent drainage",
      "Fast, affordable transformation",
    ],
    process: baseProcess,
  },
  {
    slug: "drainage-pressure-cleaning", name: "Drainage & Pressure Cleaning", category: "Maintenance",
    image: heroImg,
    short: "Drainage solutions and professional pressure washing.",
    intro: "Proper drainage protects your driveway, patio and home from water damage. We install channel drains, soakaways and gulleys, and offer professional pressure cleaning to bring tired paving back to life.",
    benefits: [
      "Channel drains, soakaways and gulleys",
      "Pressure washing for paving, patios and driveways",
      "Removes moss, algae and ground-in dirt",
      "Re-sanding and re-sealing available",
      "Protects your investment long-term",
    ],
    process: baseProcess,
  },
  {
    slug: "seating-area-flowerbeds", name: "Seating Areas & Flowerbeds", category: "Garden Features",
    image: landscaping,
    short: "Bespoke garden seating areas, raised beds and planting features.",
    intro: "Turn an underused corner of the garden into a stunning seating area. We design and build patios, raised flowerbeds, retaining walls and planters to create welcoming outdoor rooms.",
    benefits: [
      "Tailored to your garden and lifestyle",
      "Raised beds and retaining walls",
      "Coordinated paving and planting",
      "Built-in benches and feature walls",
      "Defined outdoor zones for relaxing",
    ],
    process: baseProcess,
  },
  {
    slug: "landscaping", name: "All Types of Landscaping", category: "Landscaping",
    image: landscaping,
    short: "Full-garden landscaping — design, build and finish.",
    intro: "From small garden makeovers to full-scale landscaping projects, our team handles everything from initial design through to the final planting. One trusted team, one beautiful finished garden.",
    benefits: [
      "Complete design-and-build service",
      "Lawns, paving, planting and features",
      "Project-managed from start to finish",
      "Skilled, experienced team",
      "Tidy, professional workmanship",
    ],
    process: baseProcess,
  },
  {
    slug: "wooden-cladded-walls", name: "Wooden Cladded Walls", category: "Garden Features",
    image: decking,
    short: "Stylish timber cladded walls and screens for modern gardens.",
    intro: "Timber cladded walls and slatted screens add warmth, texture and modern style to any garden. They're perfect for hiding fences, defining zones or creating a striking backdrop for planting.",
    benefits: [
      "Modern slatted and board-on-board styles",
      "Treated timber for Irish weather",
      "Great for screening and zoning",
      "Beautiful contrast with planting",
      "Custom heights and finishes",
    ],
    process: baseProcess,
  },
  {
    slug: "pergola-design", name: "Pergola Design", category: "Garden Features",
    image: decking,
    short: "Bespoke pergolas for shade, structure and outdoor living.",
    intro: "A pergola creates a beautiful focal point and a sheltered spot to enjoy the garden. We design and build bespoke timber pergolas to fit your space — from simple over-patio structures to full outdoor living rooms.",
    benefits: [
      "Bespoke design to suit your garden",
      "Solid timber construction",
      "Optional roofing, lighting and planting",
      "Defines outdoor living and dining zones",
      "Adds value and kerb appeal",
    ],
    process: baseProcess,
  },
  {
    slug: "rendering-services", name: "Rendering Services", category: "Landscaping",
    image: heroImg,
    short: "Smooth and textured rendering for walls, plinths and features.",
    intro: "Refresh tired garden walls, boundary walls and house plinths with a clean modern render. We deliver smooth, textured and coloured render finishes that protect and beautify masonry surfaces.",
    benefits: [
      "Smooth, scraped and textured finishes",
      "Coloured render options",
      "Weatherproof, long-lasting protection",
      "Great for boundary and feature walls",
      "Tidy preparation and finish",
    ],
    process: baseProcess,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const galleryCategories = [
  "Driveways",
  "Patios",
  "Landscaping",
  "Fencing",
  "Decking",
  "Artificial Grass",
  "Garden Features",
] as const;
