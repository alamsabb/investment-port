export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "properties", label: "Properties" },
  { id: "insights", label: "Market" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export const statHighlights = [
  { label: "Years in Dubai Market", value: 12, suffix: "+" },
  { label: "Properties Closed", value: 520, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Exclusive Listings", value: 38 },
];

export const services = [
  {
    title: "Luxury Residential",
    description: "Signature villas, penthouses, and sky mansions tailored to UHNWIs.",
    icon: "crown",
  },
  {
    title: "Commercial Real Estate",
    description: "Grade-A offices, hospitality assets, and bespoke retail flagships.",
    icon: "skyscraper",
  },
  {
    title: "Off-Plan Developments",
    description: "Priority allocations with Dubai’s most visionary developers.",
    icon: "compass",
  },
  {
    title: "Investment Advisory",
    description: "Portfolio structuring, ROI modeling, and yield optimization.",
    icon: "coins",
  },
  {
    title: "Buyer & Seller Representation",
    description: "White-glove negotiations, due diligence, and transaction management.",
    icon: "handshake",
  },
  {
    title: "International Client Services",
    description: "Virtual tours, concierge visas, and multilingual support.",
    icon: "globe",
  },
];

export type PropertyCategory = "Residential" | "Commercial" | "Off-Plan";

export type Property = {
  id: number;
  title: string;
  location: string;
  category: PropertyCategory;
  priceAED: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Sky Collection Penthouse",
    location: "Downtown Dubai",
    category: "Residential",
    priceAED: "38,500,000",
    beds: 5,
    baths: 6,
    area: "9,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Palm Signature Villa",
    location: "Palm Jumeirah",
    category: "Residential",
    priceAED: "52,000,000",
    beds: 6,
    baths: 7,
    area: "13,000 sq.ft",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80", // Luxury Villa
  },
  {
    id: 3,
    title: "Elite Marina Residence",
    location: "Dubai Marina",
    category: "Residential",
    priceAED: "14,900,000",
    beds: 4,
    baths: 5,
    area: "5,400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Business Bay Sky Office",
    location: "Business Bay",
    category: "Commercial",
    priceAED: "22,400,000",
    beds: 0,
    baths: 6,
    area: "18,750 sq.ft",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "DIFC Investment Floor",
    location: "DIFC",
    category: "Commercial",
    priceAED: "41,000,000",
    beds: 0,
    baths: 10,
    area: "27,000 sq.ft",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80", // High rise glass
  },
  {
    id: 6,
    title: "Harbour Promenade Retail",
    location: "Dubai Creek Harbour",
    category: "Commercial",
    priceAED: "16,800,000",
    beds: 0,
    baths: 4,
    area: "9,800 sq.ft",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80", // Creek/Sunset
  },
  {
    id: 7,
    title: "Burj Crown Residence",
    location: "Downtown Dubai",
    category: "Off-Plan",
    priceAED: "6,900,000",
    beds: 3,
    baths: 4,
    area: "2,650 sq.ft",
    image:
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 8,
    title: "Atlantis The Royal Sky Home",
    location: "Palm Jumeirah",
    category: "Off-Plan",
    priceAED: "24,300,000",
    beds: 4,
    baths: 5,
    area: "4,950 sq.ft",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80", // Modern Villa/Resort
  },
  {
    id: 9,
    title: "One Za'abeel Residence",
    location: "Za'abeel",
    category: "Off-Plan",
    priceAED: "11,700,000",
    beds: 3,
    baths: 4,
    area: "3,180 sq.ft",
    image:
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 10,
    title: "Alserkal Creative Loft",
    location: "Al Quoz",
    category: "Commercial",
    priceAED: "9,200,000",
    beds: 0,
    baths: 4,
    area: "6,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", // Modern Office
  },
  {
    id: 11,
    title: "Marina Gate Sky Duplex",
    location: "Dubai Marina",
    category: "Residential",
    priceAED: "18,400,000",
    beds: 4,
    baths: 5,
    area: "4,850 sq.ft",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 12,
    title: "Arabian Ranches Estate",
    location: "Arabian Ranches III",
    category: "Residential",
    priceAED: "12,100,000",
    beds: 5,
    baths: 6,
    area: "6,900 sq.ft",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80", // Modern House
  },
];

export const testimonials = [
  {
    quote:
      "Akbar’s command of the Dubai luxury market is unmatched. He secured our Palm villa off-market with impeccable discretion.",
    client: "Lina & Omar Al Rashid",
    location: "Palm Jumeirah, Signature Villa",
    rating: 5,
  },
  {
    quote:
      "From due diligence to final sign-off, Akbar orchestrated our corporate HQ move to DIFC flawlessly.",
    client: "Victor Guo",
    location: "DIFC Commercial Tower",
    rating: 5,
  },
  {
    quote:
      "The investment deck Akbar built allowed us to diversify into high-performing off-plan assets with confidence.",
    client: "Marta Dubois",
    location: "Dubai Creek Harbour Portfolio",
    rating: 5,
  },
];

export const marketStats = [
  { label: "Prime Capital Appreciation YoY", value: 15.4 },
  { label: "Average Rental Yield", value: 7.2 },
  { label: "Foreign Ownership Growth", value: 23.1 },
  { label: "Luxury Inventory Absorption", value: 81.0 },
];

export const insightBullets = [
  "Tax-free rental income with robust tenant demand across prime districts.",
  "Golden Visa pathways for investors with AED 2M+ property acquisitions.",
  "USD-pegged AED ensures currency stability for global portfolios.",
  "Mega-project pipeline across Palm Jebel Ali, The Oasis, and Creek Harbour.",
];

export const tours = [
  {
    title: "Royal Atlantis Sky Terrace",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Address Sky View Duplex",
    image:
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Palm Frond Villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Marina Panoramic Penthouse",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "One Zabeel Sky Suite",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dubai Hills Estate Villa",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
  },
];

