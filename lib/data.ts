export type SubBrand = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  number: string;
  hue: string;
  accent: string;
  image: string;
};

export const subBrands: SubBrand[] = [
  {
    id: "nav",
    name: "NAV",
    tagline: "Home, Reimagined.",
    description:
      "A new era of home care. Engineered formulations, sculpted bottles, neutral architecture for the modern Indian home.",
    number: "01",
    hue: "from-forest-900 via-forest-800 to-forest-700",
    accent: "#d8b25e",
    image:
      "https://images.unsplash.com/photo-1585999949269-be84e4ea2bf5?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "prana",
    name: "PRANA",
    tagline: "Vitality, Distilled.",
    description:
      "Snacks, tonics, daily wellness. A new vocabulary for energy — rooted in moringa, ashwagandha, slow food rituals.",
    number: "02",
    hue: "from-[#0c1f12] via-[#1d4329] to-[#406b36]",
    accent: "#ecd187",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "sada",
    name: "SADA",
    tagline: "The Pantry, Refined.",
    description:
      "Rice. Atta. Dal. The quiet staples of every Indian kitchen, presented with editorial restraint and traceable origin.",
    number: "03",
    hue: "from-[#0a1408] via-[#14301c] to-[#3d2809]",
    accent: "#a87425",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80"
  }
];

export type Product = {
  slug: string;
  name: string;
  subBrand: "NAV" | "PRANA" | "SADA";
  category: string;
  shortLine: string;
  description: string;
  price: number;
  weight: string;
  edition: string;
  image: string;
  palette: string[];
  notes: string[];
};

export const products: Product[] = [
  {
    slug: "moringa-vitality-tonic",
    name: "Moringa Vitality Tonic",
    subBrand: "PRANA",
    category: "Wellness",
    shortLine: "Cold-pressed moringa, ashwagandha, vetiver.",
    description:
      "A daily ritual distilled from sun-cured moringa leaves harvested in the Nilgiri foothills. Cold-pressed at low temperature to preserve a clean, mineral profile.",
    price: 1480,
    weight: "250ml",
    edition: "Edition · 01",
    image:
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1400&q=80",
    palette: ["#1d4329", "#d8b25e", "#f0e4cf"],
    notes: ["Moringa Oleifera", "Ashwagandha", "Vetiver Root", "Spring Water"]
  },
  {
    slug: "linen-floor-elixir",
    name: "Linen Floor Elixir",
    subBrand: "NAV",
    category: "Home Care",
    shortLine: "Plant-derived surfactants. Cedar, sandalwood.",
    description:
      "A floor cleanser composed like a fragrance. Plant-derived surfactants suspended in a quiet base of cedar and Mysore sandalwood.",
    price: 2240,
    weight: "500ml",
    edition: "Edition · 02",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1400&q=80",
    palette: ["#14301c", "#ecd187", "#f0e4cf"],
    notes: ["Plant Surfactants", "Cedarwood", "Sandalwood", "Mineral Salt"]
  },
  {
    slug: "single-origin-basmati",
    name: "Single-Origin Basmati",
    subBrand: "SADA",
    category: "Pantry",
    shortLine: "12-month aged. Karnal terroir. Traceable lot.",
    description:
      "An aged Basmati from a single farm cooperative in Karnal. Twelve months of dry storage, milled to order, lot-numbered.",
    price: 1820,
    weight: "1 kg",
    edition: "Lot · 0042",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1400&q=80",
    palette: ["#5a3b1c", "#d8b25e", "#e2d4ba"],
    notes: ["Aged Basmati", "Karnal Terroir", "Lot Traceable", "Slow Milled"]
  },
  {
    slug: "moringa-protein-bites",
    name: "Moringa Protein Bites",
    subBrand: "PRANA",
    category: "Snacks",
    shortLine: "Slow-roasted. 14g protein. Indian cacao.",
    description:
      "Stone-rolled bites of moringa, jaggery, peanut and a finish of Karnataka cacao. A clean, dense, daily snack.",
    price: 640,
    weight: "180g",
    edition: "Edition · 03",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1400&q=80",
    palette: ["#1d4329", "#a87425", "#f0e4cf"],
    notes: ["Moringa", "Karnataka Cacao", "Jaggery", "Stone Peanut"]
  },
  {
    slug: "cedar-dish-essence",
    name: "Cedar Dish Essence",
    subBrand: "NAV",
    category: "Home Care",
    shortLine: "Concentrated. Refillable glass architecture.",
    description:
      "An ultra-concentrated dish essence built around a refillable glass vessel. One bottle, a hundred uses, zero waste.",
    price: 1480,
    weight: "300ml",
    edition: "Edition · 02",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
    palette: ["#0c1f12", "#d8b25e", "#e2d4ba"],
    notes: ["Cedar Oil", "Plant Surfactant", "Refillable Glass", "Low pH"]
  },
  {
    slug: "stone-milled-atta",
    name: "Stone-Milled Atta",
    subBrand: "SADA",
    category: "Pantry",
    shortLine: "Heritage wheat. Cold-stone milled in small batches.",
    description:
      "A high-fibre whole wheat atta milled on traditional stone wheels, in small batches, kept cold to preserve the natural oils.",
    price: 720,
    weight: "2 kg",
    edition: "Lot · 0118",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80",
    palette: ["#5a3b1c", "#ecd187", "#e2d4ba"],
    notes: ["Heritage Wheat", "Cold-Stone Milled", "Small Batch", "Lot Traceable"]
  }
];

export const journals = [
  {
    slug: "field-notes-moringa",
    chapter: "Field Notes · 01",
    title: "On Moringa, And The Quiet Discipline Of A Daily Leaf",
    excerpt:
      "A return to the Nilgiri foothills, where moringa is harvested before sunrise and dried in low, still air.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80",
    date: "MAR · 2026"
  },
  {
    slug: "phygital-india",
    chapter: "Manifesto · 02",
    title: "Phygital India: Designing For The Senses And The Server",
    excerpt:
      "Why the next generation of Indian FMCG will live in the kitchen, in the cloud, and on the page — at once.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
    date: "FEB · 2026"
  },
  {
    slug: "architecture-of-a-bottle",
    chapter: "Studio Notes · 03",
    title: "The Architecture Of A Bottle, And Why It Took Two Years",
    excerpt:
      "Inside the NAV studio: how a refillable glass vessel was sculpted across eighteen prototypes.",
    image:
      "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?auto=format&fit=crop&w=1600&q=80",
    date: "JAN · 2026"
  }
];

export const testimonials = [
  {
    quote:
      "Vriksh has changed the way our pantry looks — and the way it feels to cook. Every object is considered, every label is quiet.",
    name: "Ananya Mehta",
    role: "Architect · Bombay"
  },
  {
    quote:
      "It is the first time in years a daily product has felt designed for me — not for a category.",
    name: "Rohan Khanna",
    role: "Founder · Bengaluru"
  },
  {
    quote:
      "There is a calm to the brand. The bottles sit on the shelf like sculpture. The tonic actually works.",
    name: "Ishaan Verma",
    role: "Editor · Delhi"
  }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
