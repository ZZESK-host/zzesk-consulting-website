import {
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  Search,
  UserCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  businessName: "ZZESK Consulting",
  shortName: "ZZESK",
  domain: "zzesk.com",
  url: "https://zzesk.com",
  email: "zack@zzesk.com",
  founder: "Zachary Skinner",
  defaultTitle: "ZZESK Consulting | Dashboards and Workflow Automation",
  defaultDescription:
    "ZZESK Consulting builds custom dashboards and automations that cut down repetitive admin and bring business information into one place.",
  tagline: "Custom dashboards and automation for businesses that want less admin and clearer information.",
  bookingLabel: "Book a Discovery Call",
  bookingHref: "/contact",
  social: {
    // Swap this config value if the LinkedIn profile changes; leave it empty to hide the footer link until the real URL is known.
    linkedinUrl: "https://www.linkedin.com/in/zachary-skinner-9a32361b3/",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type CaseStudy = {
  projectName: string;
  categories: string[];
  imageSrc: string;
  imageAlt: string;
  replacementPath: string;
  logoLabel?: string;
  problem: string;
  solution: string;
  before: string;
  after: string;
  processImprovement: string;
  result: string;
  results: string[];
  testimonial?: string;
  caseStudyHref?: string;
  isPlaceholder?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logoLabel?: string;
  portraitSrc?: string;
  portraitAlt?: string;
  isPlaceholder?: boolean;
};

export type ServicePackage = {
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  cta: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type RoiExample = {
  heading: string;
  hoursRecovered: string;
  hourlyRate: string;
  annualValue: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const home = {
  hero: {
    eyebrow: "DASHBOARDS AND WORKFLOW AUTOMATION",
    heading: "Bring your business information into one clear place.",
    body:
      "ZZESK Consulting builds custom dashboards and automations that cut down repetitive admin, show what needs attention and help growing businesses save time.",
    trust:
      "For small and medium-sized businesses that are tired of chasing updates across spreadsheets, emails and disconnected tools.",
    dashboardLine: "Built around the way your business actually works.",
  },
  outcomes: {
    note: "Results depend on the task, team and setup.",
    cards: [
      {
        title: "Cut down repetitive admin",
        icon: ClipboardCheck,
      },
      {
        title: "Automate tasks your team does manually",
        icon: Workflow,
      },
      {
        title: "See important information in one place",
        icon: LayoutDashboard,
      },
      {
        title: "Know what needs attention sooner",
        icon: Gauge,
      },
    ],
  },
  problems: {
    heading: "Does this sound familiar?",
    body:
      "Many growing businesses lose time because important information is spread across spreadsheets, inboxes, tools and people's heads. These are the kinds of problems ZZESK Consulting helps simplify.",
    cards: [
      {
        title: "Too many spreadsheets",
        body: "Important information is spread across different files and difficult to review quickly.",
        icon: FileSearch,
      },
      {
        title: "Repetitive admin",
        body: "Your team spends hours each week completing tasks that could be automated.",
        icon: ClipboardCheck,
      },
      {
        title: "Disconnected systems",
        body: "Information has to be copied manually between tools, increasing the chance of errors.",
        icon: Link2,
      },
      {
        title: "Limited visibility",
        body: "It is difficult to quickly see what is happening across the business and what needs attention.",
        icon: Gauge,
      },
      {
        title: "Slow reporting",
        body: "Preparing updates and reports takes longer than it should.",
        icon: BarChart3,
      },
      {
        title: "Processes that rely on one person",
        body: "Important tasks become difficult to manage when knowledge only exists in someone's head.",
        icon: Users,
      },
    ],
    cta: "Let's simplify how your business runs",
  },
  customers: {
    heading: "Built for businesses that have outgrown manual work",
    body:
      "ZZESK Consulting is best suited to small and medium-sized businesses with repeated tasks, multiple tools and unclear reporting. The goal is simple: spend less time chasing information and more time running the business.",
    cards: [
      {
        title: "Growing SMEs",
        body: "Replace scattered spreadsheets, disconnected tools and repeated admin with a clearer way to work.",
        icon: Building2,
      },
      {
        title: "Professional Services",
        body: "Make client work, internal reporting, task tracking and team updates easier to manage.",
        icon: Briefcase,
      },
      {
        title: "Busy Teams",
        body: "Give managers a simple overview of jobs, clients, tasks and priorities.",
        icon: Users,
      },
    ],
  },
  proof: {
    heading: "Examples built around real business problems",
    body:
      "Every business works differently. That is why each dashboard or automation is built around a real process, whether that means reducing admin, improving visibility or bringing scattered information into one place.",
    categories: [
      "Professional Services",
      "Trades and Field Services",
      "Healthcare and Allied Health",
      "Growing SMEs",
      "Internal Operations",
    ],
    // Placeholder case studies: replace image files, results, quotes, logos and links once approved content is available.
    caseStudies: [
      {
        projectName: "Fusion Operations Dashboard",
        categories: ["Growing SMEs", "Internal Operations"],
        imageSrc: "/images/case-studies/fusion-dashboard-placeholder.jpg",
        imageAlt: "Placeholder screenshot for the Fusion operations dashboard case study",
        replacementPath: "public/images/case-studies/fusion-dashboard-placeholder.jpg",
        logoLabel: "Fusion logo placeholder",
        problem:
          "Important business information was spread across different processes, making it hard to quickly see what needed attention.",
        solution:
          "A single dashboard that brought key information together, showed priorities and reduced the need to check multiple places manually.",
        before: "Staff manually checked multiple spreadsheets and systems to understand what needed attention.",
        after: "One dashboard brought the key information together and highlighted the next priority.",
        processImprovement:
          "The day-to-day process became easier to review because the important updates were visible in one place.",
        result: "[Insert approved time saving, cost saving or improvement metric]",
        results: [
          "[Insert approved hours saved per week]",
          "[Insert approved reduction in manual admin]",
          "One dashboard for key business updates",
        ],
        testimonial: "Add approved Fusion testimonial here.",
        isPlaceholder: true,
      },
      {
        projectName: "Workflow Automation",
        categories: ["Professional Services", "Trades and Field Services", "Internal Operations"],
        imageSrc: "/images/case-studies/workflow-automation-placeholder.jpg",
        imageAlt: "Placeholder screenshot for a workflow automation case study",
        replacementPath: "public/images/case-studies/workflow-automation-placeholder.jpg",
        problem: "A repeated internal task took unnecessary manual handling, follow-up and checking.",
        solution:
          "An automation that moved the task through the right steps, reduced manual copying and made the process easier to follow.",
        before: "Staff copied information between tools and followed up manually to keep the work moving.",
        after: "The task moved through a clearer process with fewer manual steps and better visibility.",
        processImprovement:
          "The team could spend less time on repeated admin and more time on the work that needed human judgement.",
        result: "[Insert approved time saving, cost saving or improvement metric]",
        results: [
          "[Insert approved manual steps removed]",
          "[Insert approved hours saved per month]",
          "Fewer missed handoffs and follow-ups",
        ],
        isPlaceholder: true,
      },
      {
        projectName: "Reporting Dashboard",
        categories: ["Professional Services", "Healthcare and Allied Health", "Growing SMEs", "Internal Operations"],
        imageSrc: "/images/case-studies/reporting-dashboard-placeholder.jpg",
        imageAlt: "Placeholder screenshot for a reporting dashboard case study",
        replacementPath: "public/images/case-studies/reporting-dashboard-placeholder.jpg",
        problem: "Reports took too long to prepare because important information lived across spreadsheets and separate tools.",
        solution:
          "A custom reporting dashboard that brought the key numbers and updates into one simple view.",
        before: "Managers had to pull information from separate files before they could understand the latest status.",
        after: "The dashboard showed the latest information in one place, making updates faster to prepare.",
        processImprovement:
          "Managers could review jobs, clients, tasks or priorities without rebuilding reports from scratch.",
        result: "[Insert approved time saving, cost saving or improvement metric]",
        results: ["One place to review key information", "[Insert approved reporting speed improvement]", "Clearer visibility across key updates"],
        isPlaceholder: true,
      },
    ] satisfies CaseStudy[],
  },
  testimonials: {
    heading: "What people are saying",
    // Placeholder testimonials: replace all names, roles, companies and quotes only after approval.
    cards: [
      {
        quote:
          "The website clearly explains what ZZESK Consulting does without relying on technical jargon. It is easy to understand, navigate and see the practical value.",
        name: "[Add approved name]",
        role: "[Add approved role]",
        company: "[Add approved company]",
        logoLabel: "Attribution placeholder",
        isPlaceholder: true,
      },
      {
        quote:
          "The strongest opportunity is adding more case studies for specific businesses and industries, so owners can see examples that relate directly to their own work.",
        name: "[Add approved name]",
        role: "[Add approved role]",
        company: "[Add approved company]",
        logoLabel: "Attribution placeholder",
        isPlaceholder: true,
      },
    ] satisfies Testimonial[],
  },
  packages: {
    heading: "Choose the right place to start",
    body:
      "Start small with a review, automate one repeated task, or build a dashboard that gives you a clearer view of the business.",
    cards: [
      {
        title: "Dashboard Audit",
        subtitle: "Find where time is being lost before building anything.",
        description:
          "Review your current tasks, tools and reports to see where your team is losing time and where a dashboard or automation would help most.",
        includes: [
          "Review repeated tasks",
          "List the tools your team uses",
          "Find where time is being lost",
          "Clear list of next steps",
          "Dashboard and automation plan",
        ],
        cta: "Start With an Audit",
        href: "/contact?service=dashboard-audit",
        icon: Search,
      },
      {
        title: "Workflow Automation Build",
        subtitle: "Remove repetitive work from your day.",
        description:
          "Build an automation for tasks your team currently does by hand, such as copying information, sending follow-ups or updating records.",
        includes: [
          "Map the task from start to finish",
          "Build the automation",
          "Connect the tools involved",
          "Test and improve the process",
          "Documentation and handover",
        ],
        cta: "Automate a Workflow",
        href: "/contact?service=workflow-automation-build",
        icon: Workflow,
      },
      {
        title: "Operations Dashboard",
        subtitle: "See the important parts of your business in one place.",
        description:
          "Create a dashboard that brings together key information, highlights what needs attention and uses AI only where it genuinely saves time or improves clarity.",
        includes: [
          "Custom dashboard built around your work",
          "Bring information together",
          "Key numbers and status views",
          "Alerts and priority lists",
          "AI help where it saves time",
          "Support and improvements after launch",
        ],
        cta: "Build a Dashboard",
        href: "/contact?service=ai-operations-dashboard",
        icon: LayoutDashboard,
        featured: true,
      },
    ] satisfies ServicePackage[],
  },
  roi: {
    heading: "What could a better process save your business?",
    body:
      "Small improvements to repeated work add up quickly. A task that saves only a few hours each week can recover hundreds of hours each year.",
    examples: [
      {
        heading: "5 hours saved per week",
        hoursRecovered: "260 hours recovered per year",
        hourlyRate: "$50/hour",
        annualValue: "$13,000 in annual time value",
      },
      {
        heading: "10 hours saved per week",
        hoursRecovered: "520 hours recovered per year",
        hourlyRate: "$50/hour",
        annualValue: "$26,000 in annual time value",
      },
      {
        heading: "20 hours saved per week",
        hoursRecovered: "1,040 hours recovered per year",
        hourlyRate: "$50/hour",
        annualValue: "$52,000 in annual time value",
      },
    ] satisfies RoiExample[],
  },
  process: {
    heading: "A clear path from messy process to useful dashboard",
    steps: [
      {
        number: "01",
        title: "Understand",
        body: "Understand the task, the people involved and what the business needs to improve.",
        icon: FileSearch,
      },
      {
        number: "02",
        title: "Map",
        body: "Map the current tools, steps and places where time is being lost.",
        icon: Workflow,
      },
      {
        number: "03",
        title: "Build",
        body: "Build a dashboard or automation around the way your team actually works.",
        icon: Wrench,
      },
      {
        number: "04",
        title: "Refine",
        body: "Test it with real use, improve it and support the handover.",
        icon: CheckCircle2,
      },
    ] satisfies ProcessStep[],
  },
  founder: {
    heading: "Practical tools, built around real work",
    imageSrc: "/images/founder/founder-photo-placeholder.jpg",
    imageAlt: "Placeholder portrait for Zachary Skinner, founder of ZZESK Consulting",
    body: [
      "ZZESK Consulting was founded by Zachary Skinner to help businesses replace scattered information and repeated manual work with clearer tools.",
      "The focus is not on adding technology for the sake of it. Each project begins with the real business problem: where time is being lost, where information is hard to find and where a better process could make the business easier to run.",
      "From custom dashboards to task automation and AI-assisted tools, every build is designed to be useful in day-to-day work.",
    ],
    attributes: ["Focused on real tasks", "Built around your business", "Practical build", "Clear handover and support"],
  },
  finalCta: {
    heading: "Start with one process worth fixing.",
    body:
      "Book a discovery call to talk through one repeated task, report or process that takes too much time, then decide whether a dashboard or automation could help.",
  },
};

export type Service = {
  title: string;
  description: string;
  goodFit: string[];
  goodFitLabel?: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Dashboard Audit",
    description:
      "Review repeated tasks, reports and tools before committing to a build. The outcome is a clear plan for what to fix first.",
    goodFit: [
      "Businesses unsure where time is being lost",
      "Teams relying on spreadsheets and manual reporting",
      "Owners who want a clear plan before building",
      "Processes that need prioritising before work begins",
    ],
    icon: Search,
  },
  {
    title: "Workflow Automation Build",
    description:
      "Build automations that remove repeated manual steps, connect the tools involved and make recurring work easier to manage.",
    goodFit: [
      "Internal admin tasks",
      "Follow-up and handoff processes",
      "Moving information between tools",
      "Task routing and status updates",
      "Document or form processing",
    ],
    icon: Workflow,
  },
  {
    title: "Operations Dashboard",
    description:
      "Create one dashboard for tasks, priorities, key numbers and practical AI help where it saves time or improves clarity.",
    goodFit: [
      "Growing businesses with multiple systems",
      "Teams that need one clear view",
      "Processes with missed tasks or unclear priorities",
      "Owners who want better visibility without expensive software",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Reporting Dashboard Build",
    description:
      "Bring key information from spreadsheets and separate tools into one simple reporting view.",
    goodFit: [
      "Manual weekly or monthly reporting",
      "Tracking key business numbers",
      "Management dashboards",
      "One place to review important updates",
    ],
    icon: BarChart3,
  },
  {
    title: "Connect Business Tools",
    description:
      "Connect the platforms your business already uses so information does not need to be copied by hand.",
    goodFitLabel: "Tools that may be connected",
    goodFit: [
      "Microsoft 365",
      "Outlook",
      "Google Workspace",
      "Calendars",
      "Email inboxes",
      "CRMs",
      "Forms",
      "Cloud storage",
      "Internal databases",
      "Accounting and booking platforms where appropriate",
    ],
    icon: Link2,
  },
  {
    title: "Practical AI Help",
    description:
      "Use AI only where it has a clear job, such as helping sort information, draft updates or summarise repeated work.",
    goodFit: [
      "Sensitive business information",
      "Internal knowledge and documents",
      "Tasks that still need review",
      "Teams that need clear safeguards",
    ],
    icon: LockKeyhole,
  },
];

export const about = {
  intro:
    "ZZESK Consulting builds practical dashboards and automations for growing businesses that have outgrown scattered spreadsheets, manual admin and disconnected tools.",
  implementationHeading: "What ZZESK builds",
  principles: [
    {
      title: "One clear business view",
      body: "Bring tasks, priorities and business information into one practical dashboard.",
      icon: LayoutDashboard,
    },
    {
      title: "Automation for repeated tasks",
      body: "Reduce manual copying, follow-ups and status updates.",
      icon: Workflow,
    },
    {
      title: "Humans stay in control",
      body: "Keep approval steps and clear checks in place for important actions.",
      icon: UserCheck,
    },
  ],
  founderBio:
    "Zachary Skinner founded ZZESK Consulting to help businesses turn scattered information and repeated manual work into clearer tools. The focus is practical: understand the process, find where time is being lost, build a dashboard or automation, then support handover and improvement.",
};

export const contact = {
  heading: "Let's talk about the process taking too much time.",
  body:
    "The first conversation is about the task, report or process your team repeats often, the tools involved and whether a dashboard or automation could save time.",
  emailLine: `Prefer email? Contact ${site.email}`,
};

export const footerLinks = [
  ...navItems,
  { label: "Privacy Policy", href: "/privacy" },
];

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.businessName,
  url: site.url,
  email: site.email,
  description: site.defaultDescription,
  areaServed: "Australia",
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  sameAs: site.social.linkedinUrl ? [site.social.linkedinUrl] : [],
  serviceType: [
    "Business dashboards",
    "Workflow automation",
    "Dashboard audits",
    "Reporting dashboards",
    "Business tool connections",
    "Practical AI-assisted business tools",
  ],
};
