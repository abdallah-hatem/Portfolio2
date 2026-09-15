export type WorkProject = {
  slug: string;
  title: string;
  /** Short label used in nav, footer, and related-work links. */
  navLabel: string;
  /** Role and context, printed above the title. */
  eyebrow: string;
  /** Typewritten caption stamped under the screenshot. */
  stamp: string;
  /** One strong line that carries the project. */
  headline: string;
  summary: string;
  /** Single line shown on the landing grid card. */
  cardLine: string;
  whatItDoes: string[];
  /**
   * Only populated where the stack is confirmed. An empty list hides the
   * stack block instead of guessing.
   */
  stack: string[];
  buildNotes: { title: string; copy: string }[];
  highlights: string[];
  liveUrl: string | null;
  image: { src: string; alt: string; width: number; height: number };
  relatedSlugs: string[];
};

export const workProjects: WorkProject[] = [
  {
    slug: "egypt-real-estate-platform",
    title: "Egypt Real Estate Platform",
    navLabel: "Egypt Real Estate",
    eyebrow: "Development team · National government platform",
    stamp: "GOV / NATIONAL MLS",
    headline: "Egypt's first official digital marketplace for property.",
    summary:
      "A national Multiple Listing Service that puts property seekers, owners, and licensed brokers on one system. Verified supply instead of open classifieds, deep search across the country, and transaction flows that hold up to government process.",
    cardLine: "National MLS platform for verified listings and licensed brokers.",
    whatItDoes: [
      "Searches property across type, location, price, and unit specifics.",
      "Keeps listings verified and tied to licensed brokers, not anonymous posts.",
      "Publishes detailed listing pages with media, specs, and broker contact routes.",
      "Gives brokers and owners the tooling to publish and maintain their inventory.",
      "Carries transactions through a process built to government requirements.",
    ],
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL", "MongoDB", "Docker"],
    buildNotes: [
      {
        title: "Verified supply",
        copy: "Listings are attached to accountable, licensed professionals, which changes what the search results are worth compared to a classifieds board.",
      },
      {
        title: "Search built for how people shop",
        copy: "Property hunting is filter-heavy and comparison-heavy. The search surface had to stay fast and legible across a national inventory.",
      },
      {
        title: "Government-grade process",
        copy: "Transaction steps follow official process rather than a generic e-commerce checkout, so the flows are stricter and the states are explicit.",
      },
    ],
    highlights: [
      "Over 2 million real estate professionals on the platform",
      "Egypt's first official digital real estate marketplace",
      "Verified listings with expert broker services",
    ],
    liveUrl: "https://realestate.gov.eg/",
    image: {
      src: "/assets/work/egypt-real-estate-platform.webp",
      alt: "Egypt Real Estate Platform property listing interface",
      width: 1800,
      height: 950,
    },
    relatedSlugs: ["housing-for-all", "housing-for-all-admin-panel"],
  },
  {
    slug: "housing-for-all",
    title: "Housing For All",
    navLabel: "Housing For All",
    eyebrow: "Development team · National social housing program",
    stamp: "GOV / SOCIAL HOUSING",
    headline: "Applications and reservations for subsidised housing, nationwide.",
    summary:
      "Egypt's national digital platform for the Social Housing Program. Citizens browse government-supported housing projects, submit applications, and track their requests — with the subsidised-loan machinery of the Social Housing and Mortgage Finance Fund behind it.",
    cardLine: "National platform for social housing applications and reservations.",
    whatItDoes: [
      "Browses available housing projects across 283 cities.",
      "Takes applications for government-supported units through a guided flow.",
      "Tracks the status of a housing request end to end.",
      "Integrates with the Social Housing and Mortgage Finance Fund for subsidised loans.",
      "Carries the Green Pyramid Rating System into the project listings.",
    ],
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL", "MongoDB", "Docker"],
    buildNotes: [
      {
        title: "One flow, many eligibility rules",
        copy: "A social housing application is not a form submission. Eligibility, project availability, and reservation state all shape what an applicant can do next.",
      },
      {
        title: "Legibility over polish",
        copy: "The audience is every income bracket the program serves, so the interface leans on clear states and plain steps rather than dense dashboards.",
      },
      {
        title: "National scale from day one",
        copy: "Project inventory spans hundreds of cities, so browsing and filtering had to stay usable at that size instead of assuming a short list.",
      },
    ],
    highlights: [
      "Housing projects across 283 cities",
      "Supports over 400,000 beneficiary households",
      "Subsidised loans up to 30-year terms at reduced interest",
      "First green social housing initiative in the region",
    ],
    liveUrl: "https://reservations.realestate.gov.eg/ar",
    image: {
      src: "/assets/work/housing-for-all.webp",
      alt: "Housing For All social housing reservation platform",
      width: 1800,
      height: 937,
    },
    relatedSlugs: ["housing-for-all-admin-panel", "egypt-real-estate-platform"],
  },
  {
    slug: "housing-for-all-admin-panel",
    title: "Housing For All Admin Panel",
    navLabel: "HFA Admin Panel",
    eyebrow: "Built from scratch · Solo build",
    stamp: "ADMIN / SECURE BY DESIGN",
    headline: "The control room behind the national housing program.",
    summary:
      "The administrative hub for Egypt's Social Housing Program, built from scratch in Next.js. Server-side rendering and API routes keep sensitive government data off the client, while administrators manage applications, reservations, projects, and reporting in one place.",
    cardLine: "Secure Next.js admin hub for the national housing program.",
    whatItDoes: [
      "Manages housing applications and their status across the program.",
      "Monitors reservation processes as they move through their states.",
      "Oversees project developments across 283 cities.",
      "Generates detailed analytics reports for program operations.",
      "Handles user management and financial oversight of subsidised loans.",
    ],
    stack: ["Next.js", "API routes", "Server-side rendering"],
    buildNotes: [
      {
        title: "Sensitive data stays server-side",
        copy: "Next.js API routes and server rendering do the data handling, so government records are not shipped to the browser to be filtered there.",
      },
      {
        title: "Built from an empty repo",
        copy: "Architecture, routing, data access, and the whole admin surface were mine to shape rather than inherited from an existing panel.",
      },
      {
        title: "Operational control, not a dashboard demo",
        copy: "Every screen exists because an administrator has to act on something: an application, a reservation, a project, or a report.",
      },
    ],
    highlights: [
      "Complete operational control over the national housing initiative",
      "Secure API architecture over sensitive government data",
      "Green Pyramid Rating System integration",
    ],
    liveUrl: null,
    image: {
      src: "/assets/work/housing-for-all-admin-panel.webp",
      alt: "Housing For All administrative dashboard",
      width: 1800,
      height: 952,
    },
    relatedSlugs: ["housing-for-all", "welyra-vendor-panel"],
  },
  {
    slug: "equinox-emr",
    title: "Equinox EMR",
    navLabel: "Equinox EMR",
    eyebrow: "Rain Stella Technologies · Backend engineer on the migration",
    stamp: "HEALTHCARE / MONOLITH → MICROSERVICES",
    headline: "Taking a live hospital system apart without switching it off.",
    summary:
      "Equinox is a cloud EMR used by clinicians, nurses, and office staff. I work on decomposing its Java monolith into 22 Spring Boot services — patient records, scheduling, orders, pharmacy, billing, claims, clinical documentation, health information exchange — while the monolith keeps serving real hospitals throughout.",
    cardLine: "Decomposing a live hospital EMR into 22 Spring Boot services.",
    whatItDoes: [
      "Carries a full hospital workflow: patient records, scheduling, orders, pharmacy, inventory, inpatient care, and telehealth.",
      "Handles the money side through billing, claims, and revenue cycle management services.",
      "Moves clinical data through documentation, clinical exchange, health information exchange, and terminology services.",
      "Routes traffic from the monolith to each new service behind feature-flagged proxies, one domain at a time.",
      "Keeps tenants, users, configuration, and an audit trail as services of their own.",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Kafka",
      "MongoDB",
      "Gradle",
      "Docker",
      "Kubernetes",
      "Angular",
      "JFrog Artifactory",
    ],
    buildNotes: [
      {
        title: "Strangler fig, not a rewrite",
        copy: "The monolith stays in production and hands work over domain by domain. Each service goes live behind a proxy route in the old application, so a rollback is a flag flip rather than a redeployment.",
      },
      {
        title: "Shared library, separate repositories",
        copy: "Twenty-two services would drift immediately without common ground, so cross-cutting concerns live in a shared library that every service consumes from an internal artifact registry.",
      },
      {
        title: "Healthcare makes auditing structural",
        copy: "Audit is its own service rather than a logging afterthought, and tenancy is modelled explicitly. In this domain, who touched which record is part of the product.",
      },
      {
        title: "The process is as fixed as the code",
        copy: "Every service branches from its own integration branch, monolith changes target the active release branch, and each pull request references the migration playbook task it came from. On a migration this size, the discipline is what keeps it moving.",
      },
    ],
    highlights: [
      "22 Spring Boot services carved out of one Java monolith",
      "Phased migration playbook with feature-flagged proxy routes",
      "Kafka messaging, MongoDB persistence, Kubernetes deployment",
      "Multi-tenant with a dedicated audit service, as healthcare demands",
      "Angular front end on top of the service layer",
    ],
    liveUrl: "https://rainstellatech.com/equinox/",
    image: {
      src: "/assets/work/equinox-emr.webp",
      alt: "Equinox EMR running on laptop, tablet, and phone, with the service map beneath it",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["washflow", "housing-for-all-admin-panel"],
  },
  {
    slug: "listaops",
    title: "ListaOps",
    navLabel: "ListaOps",
    eyebrow: "E-Systematic · Front end on a real-estate SaaS back office",
    stamp: "REAL-ESTATE SaaS / OPERATOR CONSOLE",
    headline: "The screen a SaaS company runs itself from.",
    summary:
      "ListaOps is the internal operator console behind ListaCRM, a real-estate SaaS platform: one bilingual, right-to-left-aware place to watch revenue, subscriptions, customers, and operations, and to act on them. I worked across the console, with most of my time on the enterprise sales pipeline and operator role management.",
    cardLine: "Bilingual operator console for a real-estate SaaS platform.",
    whatItDoes: [
      "Reports the platform's commercial health across overview, financials, and subscriptions.",
      "Tracks customers and how users engage with the platform.",
      "Runs the enterprise sales pipeline as a funnel-driven board, with stage transitions, lead details, and an operator notes timeline.",
      "Manages operators and their roles from a permission catalog the backend serves.",
      "Covers communications, operations, IDX listing-feed requests, and platform settings.",
      "Works fully in English and Arabic, right to left.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "next-intl",
      "Radix UI",
      "Zustand",
      "Formik + Yup",
      "Chart.js",
    ],
    buildNotes: [
      {
        title: "Server-first by default",
        copy: "Pages fetch on the server and the API layer is server actions. That has a cost the codebase spells out: a toast is browser-only, so a mutation that needs feedback is called from a client boundary rather than straight from a component.",
      },
      {
        title: "The UI does not wait for the API",
        copy: "Each feature module ships a typed service with seeded mock data behind a flag, so a screen is designed, reviewed, and tested before its endpoints exist, then switched over by flipping one value.",
      },
      {
        title: "Permissions come from the backend",
        copy: "Role management reads the permission catalog the API serves instead of a list hard-coded in the client, so a new permission shows up in the roles screen without a front-end release.",
      },
      {
        title: "Right to left is a requirement, not a locale",
        copy: "Arabic changes more than direction. Pipeline cards needed bidirectional-text fixes and fixed heights with line clamping, modal headers needed realigning, and inputs are sized so iOS Safari never zooms in on focus.",
      },
    ],
    highlights: [
      "Eleven operator modules in one console",
      "117 of the repository's 304 commits, on a shared front-end team",
      "Enterprise pipeline board and operator role management",
      "English and Arabic with full RTL",
      "Next.js 16 and React 19 on the App Router",
    ],
    liveUrl: null,
    image: {
      src: "/assets/work/listaops.webp",
      alt: "ListaOps operator console and its eleven modules",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["egypt-real-estate-platform", "housing-for-all-admin-panel"],
  },
  {
    slug: "masareef",
    title: "Masareef",
    navLabel: "Masareef",
    eyebrow: "Solo product · Design, app, backend, and infrastructure",
    stamp: "PERSONAL PRODUCT / ON THE APP STORE",
    headline: "An expense tracker you talk to instead of filling in forms.",
    summary:
      "My own money app, built end to end, shipped on the App Store, and running on my own phone against real spending. Say what you spent, type it in plain language, or let it read the bank SMS itself — an LLM turns any of those into a categorised transaction. Egyptian pounds, a native home-screen widget, and live gold prices, because that is how saving actually works here.",
    cardLine: "Voice, text, and SMS expense capture with an LLM behind it.",
    whatItDoes: [
      "Captures a transaction from speech, from a typed line like \"coffee 50 EGP\", or straight from a bank SMS.",
      "Categorises every capture with an LLM, with user rules and custom categories on top.",
      "Shows the month at a glance: net, accounts, a spend donut, income against expenses, and a category breakdown.",
      "Puts this month's spend, today's spend, and top categories on the iOS home screen, with mic and keyboard quick-add.",
      "Tracks live Egyptian gold prices at 24, 21, and 18 karat as a savings measure.",
      "Fires notifications carrying custom quick actions, so a capture can be confirmed without opening the app.",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "NativeWind",
      "Supabase",
      "PostgreSQL",
      "Deno Edge Functions",
      "Groq",
      "SwiftUI",
      "EAS Update",
      "Sentry",
    ],
    buildNotes: [
      {
        title: "The LLM sits on the server, never the client",
        copy: "Three Deno Edge Functions — transcribe, categorize, and ingest-sms — hold the model and the API key. The app never sees either, so the prompt and the key can be changed without shipping an app update.",
      },
      {
        title: "Capture has to be faster than not bothering",
        copy: "An expense tracker dies the moment logging costs more effort than skipping it. Voice, one typed line, an SMS the app reads on its own, and a widget button all exist to remove that friction.",
      },
      {
        title: "Free tier is a design constraint",
        copy: "Hitting a daily token cap silently dropped captures, so the prompts got slimmer and anything without a digit stops before it reaches the model. Cheap beats clever when the bill is per token.",
      },
      {
        title: "Native code is a release decision",
        copy: "The widget and quick actions are real native targets, so they cannot ride an over-the-air update. Native work stays on its own branch until a build is cut, keeping the main line safe to push to a live phone.",
      },
    ],
    highlights: [
      "Published on the iOS App Store",
      "Built solo: interface, app, database, edge functions, and release pipeline",
      "Native iOS home-screen widget in SwiftUI, sharing state through an App Group",
      "Three LLM-backed edge functions for transcription, categorisation, and SMS parsing",
      "Sign in with Apple on iOS, native Google sign-in on Android",
      "Shipped over the air with EAS Update; monitored with Sentry and an AI event log",
      "Runs as my daily driver on real spending",
    ],
    liveUrl: "https://apps.apple.com/eg/app/masareef-budget-tracker/id6777166627",
    image: {
      src: "/assets/work/masareef.webp",
      alt: "Masareef expense tracker: dashboard, voice capture, and transaction list",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["washflow", "polt"],
  },
  {
    slug: "washflow",
    title: "WashFlow",
    navLabel: "WashFlow",
    eyebrow: "Solo product · Multi-tenant SaaS",
    stamp: "SaaS / MULTI-TENANT · EN + AR",
    headline: "One deployment, many car-wash businesses, one security model holding them apart.",
    summary:
      "A management platform for car washes: the queue, packages, payments, customers, vehicles, branches, and staff. One instance serves many independent businesses, each isolated at the database level rather than by a filter someone remembered to write. Bilingual English and Arabic with full right-to-left, built tablet-first for the counter.",
    cardLine: "Multi-tenant car-wash SaaS, bilingual with full RTL.",
    whatItDoes: [
      "Runs the wash queue across waiting, in progress, and done, branch by branch.",
      "Isolates every tenant's data with Postgres row-level security on every table.",
      "Scopes manager sub-users to specific branches, with view and edit permissions per tab.",
      "Manages branches, packages and pricing, staff, customers, and vehicles per business.",
      "Mirrors the whole console into Arabic, right to left, down to the chart axes.",
      "Sends bilingual invites and resets as secure set-password links instead of temporary passwords.",
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Supabase",
      "PostgreSQL",
      "Row-level security",
      "Edge Functions",
      "i18next",
      "PWA",
    ],
    buildNotes: [
      {
        title: "Tenancy lives in the database",
        copy: "Every operational row carries a tenant id and row-level security enforces it in Postgres. A forgotten filter in the client cannot leak one business's data to another, because the database refuses to return it.",
      },
      {
        title: "Claims are minted at token issue",
        copy: "An auth hook injects tenant, role, branch scope, and permissions into the JWT as it is signed. The app role rides under its own claim so the standard one stays untouched and PostgREST's role switching still resolves a real Postgres role.",
      },
      {
        title: "Rules the interface cannot talk you out of",
        copy: "A wash cannot enter progress without an assigned staff member — enforced by a database check constraint, not only by the dialog. The queue also refuses new washes at a branch with no active staff, so work cannot pile up un-startable.",
      },
      {
        title: "Arabic is a layout, not a translation",
        copy: "Right-to-left flips the entire console, and the parts that fight back are the ones drawn rather than laid out. The last round of work was forcing chart axes to read correctly in Arabic instead of colliding with their bars.",
      },
    ],
    highlights: [
      "Four actor types: platform admin, tenant owner, branch-scoped manager, and washers as records",
      "Row-level security on every table, across 19 migrations",
      "Bilingual English and Arabic with full RTL, tablet-first PWA",
      "Three environments, each with its own database",
      "pgTAP database and security tests alongside unit tests",
    ],
    liveUrl: "https://car-wash-system-testing.vercel.app/login",
    image: {
      src: "/assets/work/washflow.webp",
      alt: "WashFlow car-wash SaaS sign-in, shown in English and in Arabic right-to-left",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["ps-cafe", "masareef"],
  },
  {
    slug: "ps-cafe",
    title: "PS Cafe",
    navLabel: "PS Cafe",
    eyebrow: "Solo product · Multi-tenant SaaS for PlayStation cafes",
    stamp: "SaaS / POS + MINI ERP · AR + EN",
    headline: "Every minute on the console billed right, and the month's profit on one screen.",
    summary:
      "A SaaS for PlayStation cafes in Egypt. The counter runs device sessions and food and drink orders from a live grid; behind it, a mini ERP records rent, salaries, maintenance, assets, and instalments, so the owner can finally see whether a branch made money. Arabic first, English available, built for a counter PC and usable on a phone.",
    cardLine: "POS and mini ERP for PlayStation cafes, multi-tenant, Arabic first.",
    whatItDoes: [
      "Runs a live device grid: start, pause, resume, switch between single and multi mode, and end sessions.",
      "Sells time the way cafes actually do — open sessions counting up, or timed ones counting down and flagged at zero, which can be extended or converted to open.",
      "Prices every session from rate rules by device type, mode, and peak hours through a shared pricing engine.",
      "Adds food and drinks to a running session or a walk-in bill, with stock tracked and low stock flagged.",
      "Checks out with discounts only for permitted cashiers, and payment by cash, InstaPay, or wallet.",
      "Records the money going out — assets, maintenance, salaries, recurring bills, instalment plans — into one expense ledger, and shows revenue, costs, net profit, device utilisation, and upcoming dues on the owner's dashboard.",
    ],
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Row-level security",
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "TanStack Query",
      "next-intl",
      "Turborepo",
      "Jest",
      "Playwright",
    ],
    buildNotes: [
      {
        title: "A forgotten filter returns nothing",
        copy: "Every business table carries a tenant id enforced by Postgres row-level security. The app connects as a role that does not own the tables and each query runs inside a transaction that sets the tenant, so a missing where-clause yields an empty result instead of another cafe's data.",
      },
      {
        title: "The server's clock is the bill's clock",
        copy: "Session events are append-only and stamped with server time. Timers tick in the browser for display, the grid refetches every five seconds so a second screen agrees, and the charge is computed from the events — never from a client clock.",
      },
      {
        title: "Pricing is pure functions",
        copy: "Rate rules, peak hours, and mode switches live in a shared package of pure functions with no database behind them, so the hardest arithmetic in the product is also the easiest part to test.",
      },
      {
        title: "Profit is one query",
        copy: "Every payment the cafe makes writes exactly one expense row in the same transaction as the record behind it, and undoing the payment removes it. Money is stored as integer piasters, so the dashboard never rounds its way into a wrong total.",
      },
    ],
    highlights: [
      "Owner, cashier, and platform-admin roles across tenants and branches",
      "27 API test files and 22 Playwright end-to-end specs",
      "Visual snapshots of every screen in Arabic and English, desktop and phone",
      "Idempotent session start and end",
      "109 commits in its first six days, still in active development",
    ],
    liveUrl: null,
    image: {
      src: "/assets/work/ps-cafe.webp",
      alt: "PS Cafe owner dashboard, checkout dialog, and the Arabic dashboard on a phone",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["wardiya", "washflow"],
  },
  {
    slug: "wardiya",
    title: "Wardiya",
    navLabel: "Wardiya",
    eyebrow: "Solo product · Multi-tenant SaaS for car workshops",
    stamp: "SaaS / WORKSHOP CRM · AR + EN",
    headline: "Every car's full history, from the first job card to the last spark plug.",
    summary:
      "Workshop management for car-service shops in Egypt, sold as a yearly subscription to single garages and chains alike. It is a CRM more than an accounting package: the valuable thing is the record of who the customer is, which cars are theirs, and everything done to and bought for each one.",
    cardLine: "Multi-tenant workshop CRM: job cards, parts, and every car's history.",
    whatItDoes: [
      "Keeps customers and vehicles — plates, changes of ownership, and a full service and purchase history per car.",
      "Runs job cards end to end: estimates approved line by line, service and part lines, payments, and comebacks linked to the original job.",
      "Tracks parts stock per branch at a weighted-average cost fixed on receipt.",
      "Sells parts over the counter, offering to attach a known customer at the moment of sale so the purchase joins their history.",
      "Reports revenue as billed, collected, and unpaid, plus profit on parts, to the owner only.",
      "Vets a workshop before it can use the product, then scopes managers to the branches they run.",
    ],
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Row-level security",
      "Next.js 16",
      "Tailwind CSS",
      "Zustand",
      "next-intl",
      "Jest",
      "Docker",
      "Vercel",
    ],
    buildNotes: [
      {
        title: "Isolation is tested per table",
        copy: "Every tenant-owned table ships in the same change as its row-level security policy, its index, and a case in a dedicated tenant-isolation test suite. A table without that case is not finished.",
      },
      {
        title: "Three revenue numbers that refuse to reconcile",
        copy: "Billed, collected, and unpaid answer different questions — a car can leave with a balance by design — so the report shows all three and labels why they differ, rather than blending them into one figure that answers none.",
      },
      {
        title: "The guard is the control",
        copy: "Owner-only reports sit behind their own guard, because the staff-role guard waves owners through everything and cannot express \"not a manager\". Hiding the tab in the UI is a courtesy, not the security.",
      },
      {
        title: "Serverless changes what a cron is",
        copy: "Scheduled jobs are Vercel Cron calls straight to the API, checked against a secret in constant time and failing closed when it is unset — the URL is public, so that check is the only thing standing in front of the job.",
      },
    ],
    highlights: [
      "Yearly subscription plus an onboarding fee, for single shops and chains",
      "29 API test files, including the tenant-isolation suite",
      "Arabic and English, live on Vercel",
      "Built on my own claude-skills backend and frontend conventions",
      "86 commits between 31 August and 13 September 2026",
    ],
    liveUrl: "https://car-service-web-ahkortam2gmailcoms-projects.vercel.app/auth/login",
    image: {
      src: "/assets/work/wardiya.webp",
      alt: "Wardiya sign-in screen in English and in Arabic",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["ps-cafe", "motoparts"],
  },
  {
    slug: "motoparts",
    title: "MotoParts",
    navLabel: "MotoParts",
    eyebrow: "Solo build · Import and trading ERP",
    stamp: "ERP / IMPORT CYCLES · FIFO · SETTLEMENTS",
    headline: "Did this import make money, and whose money was it?",
    summary:
      "Three partners import motorcycle parts into Egypt and sell them to shops. Money leaves in one currency and comes back in another weeks later, so the system exists to answer one question honestly: what each shipment really earned, and who is owed what. A back office for the partners and a storefront for the shops, both live.",
    cardLine: "Import-cycle ERP with FIFO costing, partner settlements, and a shop storefront.",
    whatItDoes: [
      "Runs each import as a cycle, from planning and funding through the shipping legs to selling, settlement, and close.",
      "Charges each shipping leg per piece, per kilogram, or as a flat amount, and spreads it into the landed cost of the goods it carried.",
      "Costs stock in FIFO batches, so a sale spanning two batches keeps each batch's own cost.",
      "Splits a cycle's profit by what each partner funded, with a temporary investor paid a fee from profit rather than capital.",
      "Handles sales, returns, payments, payment plans, and settlements that write to a ledger and reverse through balancing entries.",
      "Gives shops a storefront: a public catalogue at retail prices, trade prices once verified, order requests that hold stock for 48 hours, and import requests, with notifications when either is answered.",
    ],
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Next.js",
      "TanStack Query",
      "Zustand",
      "next-intl",
      "Jest",
      "Playwright",
      "Vercel Blob",
      "Vercel",
    ],
    buildNotes: [
      {
        title: "Tests that try to break it",
        copy: "The rule came from real bugs: a shop could pay 500 against a 300 balance, money could be received a month in the future, and a large discount produced a sale totalling -9,899. Every feature now ships with tests for the limits, the wrong context, and the second attempt — not only the happy path.",
      },
      {
        title: "A status is a reading of dates",
        copy: "A shipping leg's state is derived from its recorded dates rather than set by hand, and stock exists only once the goods have arrived. A cycle can no longer depart, land, and become sellable in the same click.",
      },
      {
        title: "History is never rewritten",
        copy: "Paying a settlement writes one ledger entry per partner and closes the cycle; reversing it writes balancing entries and reopens the cycle, so the record of what happened survives the correction.",
      },
      {
        title: "What works locally can silently fail on Vercel",
        copy: "Uploads written to local disk would vanish at the next deploy, and interval crons never fire on serverless. Storage moved behind an adapter with a Vercel Blob implementation, and scheduled work moved to Vercel Cron.",
      },
    ],
    highlights: [
      "36 data models across partners, cycles, inventory, sales, and the ledger",
      "Back office and storefront as separate apps on one API",
      "China-via-UAE and UAE-direct import routes",
      "Arabic and English, deployed to Vercel's Frankfurt region",
      "144 commits between August and September 2026",
    ],
    liveUrl: "https://internal-system-store.vercel.app/en",
    image: {
      src: "/assets/work/motoparts.webp",
      alt: "MotoParts import-cycle pipeline, the partners' sign-in, and the shop storefront on a phone",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["wardiya", "equinox-emr"],
  },
  {
    slug: "master-group",
    title: "Master Group",
    navLabel: "Master Group",
    eyebrow: "Freelance · React Native · iOS release owner",
    stamp: "MOBILE / APP STORE + GOOGLE PLAY",
    headline: "Check in only when you are actually at work.",
    summary:
      "An attendance app for Master Group's staff, live on the App Store and Google Play. Employees check in and out within range of their assigned work location, and request time off, advances, and permissions from the same app. I own the iOS side — the App Store release, push notifications, native builds, and over-the-air updates — alongside the team building for Android.",
    cardLine: "Geofenced staff attendance app, live on the App Store and Google Play.",
    whatItDoes: [
      "Checks employees in and out only within 250 metres of their assigned work location.",
      "Tracks location in the background while an employee is checked in.",
      "Lets staff request time off, salary advances, hour permissions, and work trips, and follow each request's history.",
      "Shows custody, deductions, and documents still missing from an employee's file.",
      "Lets managers review their team's time-off requests.",
      "Sends push notifications and ships JavaScript fixes over the air.",
    ],
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "Background location",
      "Expo Notifications",
      "Firebase",
      "Sentry",
      "EAS Build",
      "EAS Update",
    ],
    buildNotes: [
      {
        title: "One repository, two teams",
        copy: "iOS and Android are owned by different teams sharing one codebase. Every merge from upstream keeps the iOS settings, the EAS project, and the push configuration from our side while taking Android's, following a written conflict checklist so a routine pull never breaks a release.",
      },
      {
        title: "The push key decides the project",
        copy: "Upstream repeatedly tried to move the EAS project to another organisation. It stays where it is, because the iOS APNs push key is registered under the current account — moving it would silently stop notifications on every iPhone.",
      },
      {
        title: "Over the air where possible, native when necessary",
        copy: "JavaScript features ship through EAS Update against a pinned runtime version, and a native build is cut only when something like Sentry's native SDK or a new permission demands one.",
      },
      {
        title: "Background location has to justify itself",
        copy: "It is the most sensitive permission the app holds, so its purpose strings say exactly what it is for — recording the attendance location while an employee is checked in — and nothing more.",
      },
    ],
    highlights: [
      "Published on the App Store under my developer account, now at version 4.2",
      "Live on Google Play",
      "Available on the Egyptian and Saudi App Stores",
      "Background location, push notifications, and crash reporting in production",
      "Released February 2026, updated through July 2026",
    ],
    liveUrl: "https://apps.apple.com/eg/app/master-group/id6757957430",
    image: {
      src: "/assets/work/master-group.webp",
      alt: "Master Group attendance app: services menu, check-in, and the distance-to-work-location screen",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["masareef", "polt"],
  },
  {
    slug: "narmer-international-college",
    title: "Narmer International College",
    navLabel: "Narmer College",
    eyebrow: "Front-end team lead",
    stamp: "EDUCATION / STUDENT SYSTEMS",
    headline: "A school platform carrying three curricula and everyone who uses them.",
    summary:
      "The digital presence and student services platform for one of Egypt's leading international schools. Admissions, student management, program information, and parent communication live in one application — across American, British, and IB curricula.",
    cardLine: "Student systems and admissions for an international school.",
    whatItDoes: [
      "Runs online admissions from enquiry through submission.",
      "Carries an integrated student management system.",
      "Showcases academic programs across American, British, and IB curricula.",
      "Opens parent-school communication channels.",
      "Gives students access to educational resources and scheduling tools.",
    ],
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL", "MongoDB", "Docker"],
    buildNotes: [
      {
        title: "Leading the front end",
        copy: "I led the front-end team on this one: structure, conventions, and review, not just feature work.",
      },
      {
        title: "Three curricula, one interface",
        copy: "American, British, and IB programs each carry their own shape. The interface had to hold all three without becoming three separate products.",
      },
      {
        title: "Workflows before pages",
        copy: "Admissions and student services are multi-step processes with real administrative consequences, so the work was in the flows, not the marketing pages.",
      },
    ],
    highlights: [
      "American, British, and IB curricula supported",
      "Front-end team lead on the build",
      "Admissions, student management, and parent engagement in one platform",
    ],
    liveUrl: "https://nic.edu.eg/",
    image: {
      src: "/assets/work/narmer-international-college.webp",
      alt: "Narmer International College education platform",
      width: 1800,
      height: 950,
    },
    relatedSlugs: ["housing-for-all", "keytor"],
  },
  {
    slug: "welyra-vendor-panel",
    title: "WeLyra Vendor Panel",
    navLabel: "WeLyra Vendor Panel",
    eyebrow: "Vendor panel owner · Marketplace ecosystem",
    stamp: "MARKETPLACE / VENDOR TOOLING",
    headline: "The panel vendors actually run their storefront from.",
    summary:
      "WeLyra connects vendors, delivery services, and customers in one marketplace ecosystem. I built the vendor-facing React panel: store presence, inventory, orders, and analytics in real time, wired into the rest of the platform.",
    cardLine: "React panel where marketplace vendors run stores, orders, and stock.",
    whatItDoes: [
      "Manages store presence and product inventory.",
      "Runs a robust order management system in real time.",
      "Reports sales analytics back to the business owner.",
      "Keeps communication open with delivery services.",
      "Plugs into the wider WeLyra ecosystem: customer app, driver app, delivery panel, and admin panel.",
    ],
    stack: ["React", "State management"],
    buildNotes: [
      {
        title: "Real-time is the product",
        copy: "Orders move while the vendor is looking at the screen. Stale state is not a cosmetic problem here — it is a missed order.",
      },
      {
        title: "One surface in a five-app ecosystem",
        copy: "The panel had to agree with the customer app, driver app, delivery panel, and admin panel on what an order means at every step.",
      },
      {
        title: "Built for operators, not analysts",
        copy: "Vendors are running a business, not exploring dashboards, so the panel favours quick action over deep reporting.",
      },
    ],
    highlights: [
      "Vendor-facing surface of a five-app marketplace ecosystem",
      "Real-time order and inventory management",
      "Sales analytics for business owners",
    ],
    liveUrl: "https://vendor.welyra.com",
    image: {
      src: "/assets/work/welyra-vendor-panel.webp",
      alt: "WeLyra vendor panel order management interface",
      width: 1800,
      height: 980,
    },
    relatedSlugs: ["keytor", "housing-for-all-admin-panel"],
  },
  {
    slug: "keytor",
    title: "Keytor",
    navLabel: "Keytor",
    eyebrow: "Collaborative team · Tourism platform",
    stamp: "TOURISM / MULTI-APP SYSTEM",
    headline: "Booking Egypt, across four surfaces at once.",
    summary:
      "A tourism platform where travellers discover and book tours, operators manage their offerings, and administrators oversee the whole marketplace. I worked across several parts of the React ecosystem alongside the rest of the team.",
    cardLine: "Tourism marketplace: traveller web app, vendor panel, admin, and mobile.",
    whatItDoes: [
      "Lists tours interactively for travellers to discover and book.",
      "Checks availability in real time before a booking is taken.",
      "Processes payments securely through the booking flow.",
      "Gives tour operators a vendor panel for their offerings.",
      "Adds an admin panel for platform oversight and a mobile app for on-the-go access.",
    ],
    stack: ["React"],
    buildNotes: [
      {
        title: "Shared components, many owners",
        copy: "Working across different parts of the system meant shared components and services had to stay coherent while several people moved through them.",
      },
      {
        title: "Availability is the hard part",
        copy: "Tour inventory changes underneath the traveller. Real-time availability checks matter more than any part of the booking UI.",
      },
      {
        title: "Four audiences, one platform",
        copy: "Travellers, operators, administrators, and mobile users all get their own surface without the system fragmenting into four products.",
      },
    ],
    highlights: [
      "Traveller web app, vendor panel, admin panel, and mobile app",
      "Real-time availability and secure payment processing",
      "Vendor analytics for tour operators",
    ],
    liveUrl: "https://keytor.com",
    image: {
      src: "/assets/work/keytor.webp",
      alt: "Keytor tourism booking platform",
      width: 1800,
      height: 974,
    },
    relatedSlugs: ["bask", "welyra-vendor-panel"],
  },
  {
    slug: "bask",
    title: "Bask",
    navLabel: "Bask",
    eyebrow: "React web application",
    stamp: "RENTALS / NORTH COAST",
    headline: "Finding a North Coast rental without the group-chat treasure hunt.",
    summary:
      "A rental platform for Egypt's North Coast, built in React with Redux. Browsing, filtering, and booking vacation properties in one place, for both property owners and the people looking for a getaway.",
    cardLine: "React rental platform for North Coast vacation properties.",
    whatItDoes: [
      "Browses and books vacation properties through one interface.",
      "Shows detailed listings with high-quality image galleries.",
      "Narrows inventory through an advanced filtering system.",
      "Checks availability in real time.",
      "Takes bookings through a secure process.",
    ],
    stack: ["React", "Redux"],
    buildNotes: [
      {
        title: "Photos carry the decision",
        copy: "Nobody books a beach house off a spec sheet. The gallery had to be the centre of the listing, not an afterthought below the fold.",
      },
      {
        title: "Filtering that survives a full season",
        copy: "Inventory concentrates hard around dates and locations, so filters carry more weight than search text.",
      },
      {
        title: "Redux for a stateful browse",
        copy: "Filters, availability, and booking state persist across the browse, which is exactly the case Redux earns its keep on.",
      },
    ],
    highlights: [
      "Vacation rentals across Egypt's North Coast",
      "Real-time availability checking",
      "Serves both property owners and holiday seekers",
    ],
    liveUrl: "https://baskeg.com",
    image: {
      src: "/assets/work/bask.webp",
      alt: "Bask North Coast property rental platform",
      width: 1800,
      height: 963,
    },
    relatedSlugs: ["keytor", "sereneus"],
  },
  {
    slug: "sereneus",
    title: "Sereneus",
    navLabel: "Sereneus",
    eyebrow: "Next.js web platform · Portugal",
    stamp: "FUNERAL SERVICES / PT",
    headline: "A calm interface for people having their worst week.",
    summary:
      "A platform for funeral agencies in Portugal, built with Next.js and Tailwind. Redux keeps state coherent, Axios handles the asynchronous work, and server components carry the rendering weight.",
    cardLine: "Next.js platform for Portuguese funeral agencies.",
    whatItDoes: [
      "Presents funeral agency services through a responsive, considered interface.",
      "Keeps state coherent across the flow with Redux.",
      "Handles asynchronous requests efficiently with Axios.",
      "Uses Next.js server components for rendering performance.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Redux", "Axios", "Server components"],
    buildNotes: [
      {
        title: "Tone is a requirement",
        copy: "The subject matter sets the design constraints. Restraint, clarity, and short paths matter more than personality here.",
      },
      {
        title: "Server components where they pay",
        copy: "Rendering on the server keeps the pages fast and the client bundle small, which is the whole reason to reach for them.",
      },
      {
        title: "Tailwind for a consistent surface",
        copy: "A utility layer kept the visual system tight across the platform without a growing pile of one-off stylesheets.",
      },
    ],
    highlights: [
      "Built for funeral agencies operating in Portugal",
      "Server-rendered for performance and scalability",
    ],
    liveUrl: "https://sereneus.pt",
    image: {
      src: "/assets/work/sereneus.webp",
      alt: "Sereneus funeral services platform",
      width: 1800,
      height: 870,
    },
    relatedSlugs: ["bask", "narmer-international-college"],
  },
  {
    slug: "polt",
    title: "Polt",
    navLabel: "Polt",
    eyebrow: "React Native · iOS and Android",
    stamp: "MOBILE / SURVEYS",
    headline: "Surveys that survive the app being closed.",
    summary:
      "A cross-platform survey app built with React Native and Expo. Redux Persist keeps a half-finished survey intact between sessions, and Expo's notifications bring people back to finish it.",
    cardLine: "React Native survey app with persisted progress and reminders.",
    whatItDoes: [
      "Runs surveys across iOS and Android from one codebase.",
      "Persists answers with Redux Persist so a closed app does not lose progress.",
      "Sends timely reminders and updates through Expo notifications.",
      "Keeps survey-taking visually clear rather than form-heavy.",
    ],
    stack: ["React Native", "Expo", "Redux Persist"],
    buildNotes: [
      {
        title: "Persistence is the feature",
        copy: "Survey abandonment is mostly interruption, not disinterest. Keeping state across sessions is what gets responses finished.",
      },
      {
        title: "Notifications with a job",
        copy: "Reminders exist to bring someone back to an unfinished survey, not to manufacture engagement.",
      },
      {
        title: "One codebase, two platforms",
        copy: "Expo carried the build and release path, so the work stayed on the survey experience instead of platform plumbing.",
      },
    ],
    highlights: [
      "Published on the App Store",
      "Cross-platform iOS and Android from one codebase",
    ],
    liveUrl: "https://apps.apple.com/in/app/polt/id6479333110?platform=iphone",
    image: {
      src: "/assets/work/polt.webp",
      alt: "Polt survey mobile app screens",
      width: 1080,
      height: 1080,
    },
    relatedSlugs: ["master-group", "trash4goods"],
  },
  {
    slug: "trash4goods",
    title: "Trash4Goods",
    navLabel: "Trash4Goods",
    eyebrow: "React Native · Connected hardware",
    stamp: "MOBILE / RECYCLING",
    headline: "Recycling that pays you back, wired to real bins.",
    summary:
      "A React Native app that turns recycling into an incentive loop. It talks to networked e-trashbins over their APIs, puts them on a map, and reports back on what a user has actually recycled.",
    cardLine: "React Native recycling app wired to networked e-trashbins.",
    whatItDoes: [
      "Locates e-trashbins on an integrated map.",
      "Talks to e-trashbin APIs through Axios for real-time recycling updates.",
      "Keeps user state intact between sessions with Redux Persist.",
      "Rewards recycling through an incentive loop.",
      "Sends notifications tied to recycling activity.",
    ],
    stack: ["React Native", "Expo", "Redux Persist", "Axios", "Maps"],
    buildNotes: [
      {
        title: "The app is a client to hardware",
        copy: "E-trashbins are the source of truth. The app's job is to reflect their state honestly and quickly, not to model it separately.",
      },
      {
        title: "Maps are the primary navigation",
        copy: "A recycling bin you cannot find is a recycling bin you do not use, so the map is the main surface rather than a supporting screen.",
      },
      {
        title: "Incentives need trustworthy counts",
        copy: "If recycling earns something, the tracking has to be right. Real-time updates from the bins keep the reward credible.",
      },
    ],
    highlights: [
      "Published on the App Store",
      "Integrated with networked e-trashbin hardware",
      "Map-led discovery of nearby bins",
    ],
    liveUrl: "https://apps.apple.com/sa/app/trash4good/id6479216654?platform=iphone",
    image: {
      src: "/assets/work/trash4goods.webp",
      alt: "Trash4Goods recycling mobile app screens",
      width: 1080,
      height: 1080,
    },
    relatedSlugs: ["polt", "masareef"],
  },
  {
    slug: "claude-skills",
    title: "claude-skills",
    navLabel: "claude-skills",
    eyebrow: "Open source · Claude Code plugin",
    stamp: "AI TOOLING / CLAUDE CODE PLUGIN",
    headline: "The conventions I kept re-explaining, written down so the agent reads them instead.",
    summary:
      "A Claude Code plugin that packages how I build software — frontend and backend conventions, a deployment playbook, and a pipeline that takes an app from idea to production — plus hooks that make an AI agent record a correction once instead of needing it again. Wardiya is built on its conventions.",
    cardLine: "Open-source Claude Code plugin: my stack conventions, an agent, and hooks.",
    whatItDoes: [
      "building-frontends: design system, components, forms, loading states, RTL, and data fetching for Next.js and shadcn/ui.",
      "building-backends: NestJS and Prisma layering, one response envelope, DTOs, row-level-security multi-tenancy, Docker, and testing.",
      "deploying-to-vercel: monorepos, Prisma with Neon, uploads, cron, and the failures that look like nothing is wrong.",
      "build-software: an idea-to-production pipeline — business doc, spec, design approval, plan, subagent build, verification, and shipping — run guided or fully autonomous.",
      "capturing-corrections, with hooks that notice a correction, record it, and force-load it into the next session.",
      "A business-alignment reviewer agent that checks plans and diffs against the business-logic document.",
    ],
    stack: [
      "Claude Code plugins",
      "Agent skills",
      "Subagents",
      "Hooks",
      "Bash",
      "Python",
      "Markdown",
    ],
    buildNotes: [
      {
        title: "A skill is a suggestion; a hook is a guarantee",
        copy: "The model decides when to invoke a skill, so anything that must always happen — loading past corrections, warning when usage burns too fast — runs as a hook the harness executes, not as advice the model may skip.",
      },
      {
        title: "Contracts up front, detail on demand",
        copy: "Each SKILL.md is a scannable contract that pushes detail into sibling files loaded only at the stage that needs them, which keeps an agent's context small on long runs.",
      },
      {
        title: "Edge cases belong in the plan",
        copy: "The build pipeline derives edge-case tests from the business document during planning and verifies each one, so a feature is not done just because the happy path works.",
      },
      {
        title: "Versioned like software",
        copy: "Installed through a plugin marketplace and updated by version string, so every change bumps the version in the same commit — otherwise machines silently keep serving the old rules.",
      },
    ],
    highlights: [
      "5 skills, a reviewer agent, and 3 hooks",
      "About 4,500 lines of written conventions",
      "Version 1.11.0, installable with two commands",
      "Wardiya is built to its conventions",
      "Public on GitHub",
    ],
    liveUrl: "https://github.com/abdallah-hatem/claude-skills",
    image: {
      src: "/assets/work/claude-skills.webp",
      alt: "Terminal installing the claude-skills plugin and listing its skills",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["wardiya", "ps-cafe"],
  },
];

export function getProjectBySlug(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
