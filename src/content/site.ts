export const brand = {
  displayName: "YOUR FIRM",
  nameStatus: "TEMPORARY BRAND",
  conceptBanner: "DESIGN CONCEPT - Proposed services",
  homeTitle: "Design concept",
  homeDescription:
    "A design concept for a proposed digital-asset market-making practice. Services shown here are not yet operating facts.",
  /** Internal only. Do not render these as public facts. */
  needs: [
    "[NEED] Approved company name and domain",
    "[NEED] Legal entity name and registered location",
    "[NEED] Client regions the firm can actually serve",
    "[NEED] Services that can be contracted",
    "[NEED] How funds, accounts, and assets are owned",
    "[NEED] Exchanges and pairs with completed connectivity tests",
    "[NEED] Named team, roles, and operating hours",
    "[NEED] A real report sample with venue, pair, band, window, and method",
    "[NEED] Inquiry address and how a message is delivered",
    "[NEED] Confirmed leadership names, roles, biographies, and approved portraits",
    "[NEED] Legal entity, jurisdiction, and official business contact before any counterparty panel",
    "[NEED] Registration or license claims only with the exact entity and an official source",
  ],
};

export const navItems = [
  { id: "services", label: "Services", to: "/#services", activePrefix: "/services/" },
  { id: "who", label: "Who We Serve", to: "/who-we-serve/", activePrefix: "/who-we-serve" },
  { id: "approach", label: "Our Approach", to: "/approach/", activePrefix: "/approach" },
  { id: "insights", label: "Insights", to: "/insights/", activePrefix: "/insights" },
  { id: "firm", label: "The Firm", to: "/firm/", activePrefix: "/firm" },
] as const;

export const footer = {
  contactLabel: "Contact",
  contactTo: "/contact/",
  summary: "A proposed website concept. Services and company details require confirmation.",
  entity: "Legal entity: To be supplied. Registered location: To be supplied.",
  claims: "No performance claims, partners, licenses, or operating history are shown.",
  preview: "Local preview only. Inquiry data is not transmitted.",
  brandNote: "Brand name is temporary",
};

export const pages = [
  {
    path: "/",
    id: "home",
    bodyClass: "",
    pageTitle: "",
    description: brand.homeDescription,
  },
  {
    path: "/services/market-making",
    id: "services",
    bodyClass: "page-mm",
    pageTitle: "Market Making",
    description:
      "A proposed market-making service for centralized-exchange spot markets, with defined quoting parameters, inventory limits, and liquidity reporting.",
  },
  {
    path: "/who-we-serve",
    id: "who",
    bodyClass: "page-wws",
    pageTitle: "Who We Serve",
    description:
      "Proposed market-making briefs for exchanges and token issuers. Scope, responsibilities, and reporting stay tied to the market.",
  },
  {
    path: "/approach",
    id: "approach",
    bodyClass: "page-ap",
    pageTitle: "Our Approach",
    description:
      "A proposed engagement process for a market-making mandate: assess, agree, validate, and review. No live operation is described.",
  },
  {
    path: "/firm",
    id: "firm",
    bodyClass: "page-fm",
    pageTitle: "The Firm",
    description:
      "A proposed market-making practice centered on defined scope, risk discipline, and transparent reporting. Leadership and legal identity are not yet confirmed.",
  },
  {
    path: "/insights",
    id: "insights",
    bodyClass: "page-in",
    pageTitle: "Insights",
    description:
      "Editorial draft guides on order-book depth, liquidity reports, and preparing a market-making pilot. These are not published research.",
  },
  {
    path: "/contact",
    id: "contact",
    bodyClass: "page-ct",
    pageTitle: "Contact",
    description: "A preview inquiry form for a proposed market-making conversation. Nothing is sent or stored.",
  },
] as const;

export const inquiryCopy = {
  eyebrow: "Concept inquiry form",
  title: "Tell us about your market.",
  note: "Preview only. No inquiry is sent. Do not include API keys, passwords, wallet keys, or funds.",
  closeLabel: "Close inquiry form",
  company: "Company name",
  email: "Business email",
  clientType: "Client type",
  clientPrompt: "Select a client type",
  clients: ["Exchange", "Token issuer"],
  targets: "Target venue / pairs",
  objective: "Short objective",
  submit: "Preview inquiry",
  success: "Preview validated. Nothing was sent.",
  headerCta: "Talk to our team",
};

export const contactFormCopy = {
  preview: "Preview only. No inquiry is sent.",
  secrets: "Please do not include passwords, API secrets or private keys.",
  submit: "Preview inquiry",
  success: "Preview validated. Nothing was sent.",
  invalid: "Please correct the highlighted fields.",
  serviceNote: "Selected service: Market Making",
  errors: {
    company: "Company name is required.",
    emailRequired: "Work email is required.",
    emailInvalid: "Enter a valid work email.",
    type: "Select a client type.",
    region: "Country or service region is required.",
    website: "Enter a full website address, including https://.",
    message: "Tell us what you would like to discuss.",
  },
};
