/**
 * Content source of truth for Huge Solar Solutions
 * Edit copy, headlines, and contact info here.
 */

export const site = {
  brand: "Huge Solar Solutions",
  tagline: "Solar Infrastructure & Energy Development",
  legalEntity: "HUGE Solutions LLC",
  domain: "hugesolarsolutions.com",

  contact: {
    email: "brennan@hugesolarsolutions.com",
    phone: "(202) 525-7476",
  },

  nav: {
    main: [
      { href: "/", label: "Home" },
      { href: "/submit", label: "Submit a Building" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    future: [
      { href: "/portal", label: "Partner Portal", enabled: false },
      { href: "/admin", label: "Admin", enabled: false },
      { href: "/calculator", label: "Calculator", enabled: false },
    ],
  },

  hero: {
    headline: "Commercial rooftop solar—evaluated fast.",
    subhead:
      "Preliminary roof + utility feasibility for warehouses, schools, and industrial roofs. Designed for clarity, not paperwork.",
    cta: "Submit a Building",
    ctaSecondary: "How it works",
    trustLine: "Preliminary evaluation. No obligation.",
  },

  process: {
    headline: "How it works",
    intro: "From submission to installation, we guide you through each step with clarity and no obligation.",
    steps: [
      {
        title: "Submit building details",
        description: "Tell us about your property. We capture key details for an initial feasibility screen.",
      },
      {
        title: "We review roof + utility feasibility",
        description: "Imaging + data you share. We assess roof area, shading, utility rates, and interconnection.",
      },
      {
        title: "You get a summary + next steps",
        description: "Receive a preliminary savings estimate and discuss PPA or ownership options.",
      },
      {
        title: "Engineering + interconnection support",
        description: "Full engineering review and utility interconnection planning.",
      },
      {
        title: "Install + monitoring",
        description: "Installation and ongoing monitoring—partner dashboard access included.",
      },
    ],
  },

  whatWeEvaluate: {
    headline: "What we evaluate",
    intro: "Our preliminary assessment covers the key factors that shape feasibility and savings.",
    items: [
      "Roof area & layout",
      "Shading/obstructions (high level)",
      "Structural flags (non-engineering screening only)",
      "Utility rates/usage (if shared)",
      "Interconnection constraints (high level)",
      "Incentives & economics (high level)",
    ],
  },

  whySolar: {
    headline: "Why owners & tenants like it",
    intro: "Commercial solar delivers clear benefits for property owners and their tenants.",
    items: [
      { title: "Lower energy costs", desc: "Reduce electricity spend with predictable solar generation." },
      { title: "Predictable pricing", desc: "PPA and ownership options with no jargon." },
      { title: "Tenant attraction / ESG", desc: "Meet sustainability goals and attract tenants." },
      { title: "Long-term asset value", desc: "Build equity through a modern energy asset." },
    ],
  },

  ctaBand: {
    headline: "Submit a Building",
    subhead: "Get a preliminary evaluation and a clear next step.",
  },

  about: {
    headline: "About Huge Solar Solutions",
    body: "Huge Solar Solutions focuses on commercial and institutional solar development. We provide clear, no-obligation preliminary evaluations so building owners and representatives can understand feasibility early—without lengthy PDF forms or back-and-forth. Our process is straightforward: submit your building, we assess feasibility, and you get a preliminary savings estimate and structure options. We emphasize process clarity and commercial focus.",
  },

  contactPage: {
    headline: "Contact",
    body: "Have a question before submitting a building? Send a note.",
    cta: "Submit a Building",
    reassurance: "We respond within 1–2 business days.",
  },

  footer: {
    disclaimer:
      "Preliminary estimates only. Subject to site conditions, structural review, and utility interconnection.",
  },

  form: {
    buildingTypes: [
      "Warehouse / Distribution",
      "School / University",
      "Office",
      "Retail",
      "Multifamily",
      "Industrial",
      "Other",
    ],
    roofAge: [
      "<5 years",
      "5–10 years",
      "10–20 years",
      "20+ years",
      "Unknown",
    ],
    roofType: ["Flat", "Metal", "Shingle", "Tile", "Unknown"],
    motivations: [
      "Cost savings",
      "Budget predictability",
      "Sustainability / ESG",
      "Tenant attraction",
      "Other",
    ],
    batteryInterest: ["Yes", "Open", "No"],
    communitySolarInterest: ["Yes", "Open", "No"],
    willingToShare: ["Yes", "Maybe", "No"],
    contactMethod: ["Email", "Phone"],
    preferredTime: ["Morning", "Afternoon", "Anytime"],
  },
} as const;
