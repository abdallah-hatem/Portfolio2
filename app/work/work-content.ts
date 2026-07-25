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
    slug: "masareef",
    title: "Masareef",
    navLabel: "Masareef",
    eyebrow: "Solo product · Design, app, backend, and infrastructure",
    stamp: "PERSONAL PRODUCT / iOS + ANDROID",
    headline: "An expense tracker you talk to instead of filling in forms.",
    summary:
      "My own money app, built end to end and running on my phone against real data. Say what you spent, type it in plain language, or let it read the bank SMS itself — an LLM turns any of those into a categorised transaction. Egyptian pounds, a native home-screen widget, and live gold prices, because that is how saving actually works here.",
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
      "Built solo: interface, app, database, edge functions, and release pipeline",
      "Native iOS home-screen widget in SwiftUI, sharing state through an App Group",
      "Three LLM-backed edge functions for transcription, categorisation, and SMS parsing",
      "Sign in with Apple on iOS, native Google sign-in on Android",
      "Shipped over the air with EAS Update; monitored with Sentry and an AI event log",
      "Runs as my daily driver on real spending",
    ],
    liveUrl: null,
    image: {
      src: "/assets/work/masareef.webp",
      alt: "Masareef expense tracker: dashboard, voice capture, and transaction list",
      width: 1800,
      height: 1125,
    },
    relatedSlugs: ["polt", "trash4goods"],
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
    relatedSlugs: ["trash4goods", "masareef"],
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
];

export function getProjectBySlug(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
