/**
 * Edit site copy here.
 * All headlines, body text, and section content live in this file.
 * Do not hardcode copy in components—import from site.
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
      { href: "/submit", label: "Evaluate a Building" },
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
    headline: "Evaluate your rooftop solar potential.",
    subhead:
      "Get a clear estimate of system size and savings for warehouses, schools, and industrial roofs—installed at no capital cost through a long-term power agreement.",
    cta: "Submit a Building",
    ctaSecondary: "How it works",
    trustLine: "Fast turnaround. Clear next steps.",
  },

  process: {
    headline: "From review to operation",
    intro: "We handle the complexity. You make informed decisions at every stage—with zero obligation until contract signing.",
    steps: [
      {
        title: "Initial property review",
        description:
          "Share your address and basic details. We confirm roof fit and project direction.",
      },
      {
        title: "Technical + utility review",
        description:
          "We estimate layout, shading, and interconnection path using satellite and utility information.",
      },
      {
        title: "Savings summary",
        description:
          "You receive a clear estimate of size, savings, and pricing options.",
      },
      {
        title: "Engineering + construction",
        description:
          "If you proceed, we manage engineering, utility coordination, permits, and installation.",
      },
      {
        title: "Monitoring + support",
        description:
          "We provide ongoing system monitoring and reporting.",
      },
    ],
  },

  whatWeEvaluate: {
    headline: "What we evaluate",
    intro: "We review the key factors that shape system size, savings, and next steps.",
    items: [
      "Usable roof area and structural layout",
      "Roof condition and loading considerations",
      "Utility interconnection requirements",
      "Shading and obstructions",
      "Rate structure and energy usage if shared",
      "Incentives and project economics",
    ],
  },

  whySolar: {
    headline: "Why property owners choose us",
    intro:
      "We cut energy costs and keep your involvement minimal. No capital outlay, no financing headaches, no ongoing oversight. You get savings without the complexity.",
    items: [
      {
        title: "Lower energy costs",
        desc: "Lock in below-market electricity rates over the long term. Reduce operating expenses without adding work.",
      },
      {
        title: "Clear pricing",
        desc: "You see the numbers upfront. No surprises or hidden fees—just transparent terms.",
      },
      {
        title: "Tenant appeal and sustainability",
        desc: "Solar helps attract tenants and supports sustainability goals. A win for leasing and reputation.",
      },
      {
        title: "Stronger asset value",
        desc: "Add a revenue-generating improvement with minimal operational lift.",
      },
      {
        title: "Financing handled",
        desc: "We structure third-party financing and power purchase options. Install solar with no capital outlay.",
      },
      {
        title: "Hands-off execution",
        desc: "We manage project development, financing, and ongoing oversight. You stay focused on your property—not on running a solar project.",
      },
    ],
  },

  ctaBand: {
    headline: "Submit a Building",
    subhead: "See your solar savings potential. Results in 48 hours.",
  },

  about: {
    headline: "About Huge Solar Solutions",
    body: [
      "Huge Solar Solutions develops and finances commercial and institutional rooftop solar projects. We help building owners and asset managers understand whether solar is a good fit early in the process, before time or capital is committed.",
      "Our approach is straightforward. Owners submit basic building information, and we review roof capacity, utility structure, and overall project value. We then provide a clear estimate of system size, potential savings, and practical next steps.",
      "If a project moves forward, we manage financing and development from start to finish. This allows owners and tenants to access long-term energy savings with no upfront installation cost and minimal operational involvement.",
    ],
  },

  contactPage: {
    headline: "Contact",
    body: "Have a question before submitting a building? Send a note.",
    cta: "Submit a Building",
    reassurance: "We respond within 1–2 business days.",
  },

  footer: {
    disclaimer: "",
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
