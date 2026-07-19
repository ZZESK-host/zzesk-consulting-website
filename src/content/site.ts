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
  tagline: "A branded business dashboard with custom AI agents, integrations and automation built around the customer's workflow.",
  bookingLabel: "Start a Conversation",
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
  replacementPath?: string;
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
  hoursPerWeek: number;
  hoursPerYear: number;
  hourlyRate: number;
  annualValue: number;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const home = {
  hero: {
    eyebrow: "BRANDED AI DASHBOARDS + WORKFLOW AUTOMATION",
    heading: "A clearer way to run the work behind your business.",
    body:
      "ZZESK Consulting builds branded business dashboards with custom AI agents, integrations and automation designed around the way your team actually works.",
    trust:
      "For growing businesses that want less repetitive admin, clearer information and better visibility across day-to-day operations.",
    dashboardLine: "Your workflow, your dashboard, your AI team.",
  },
  outcomes: {
    note: "Results depend on the workflow, team, tools and business setup.",
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
      "Every business works differently. That is why each Branded AI Dashboard is built around a real process, whether that means reducing admin, improving visibility, connecting AI agents or bringing scattered information into one place.",
    categories: [
      "Professional Services",
      "Trades and Field Services",
      "Healthcare and Allied Health",
      "Growing SMEs",
      "Internal Operations",
    ],
    caseStudies: [
      {
        projectName: "TechDrivePlay Automation Operator Desk",
        categories: ["Growing SMEs", "Internal Operations"],
        imageSrc: "/images/case-studies/techdriveplay-operator-desk.png",
        imageAlt: "TechDrivePlay automation operator desk showing installed bots, statuses and operating groups",
        logoLabel: "TechDrivePlay",
        problem:
          "TechDrivePlay needed a clearer way to review, launch and monitor multiple automation bots that supported publishing, research and approval workflows.",
        solution:
          "An operator desk that grouped always-running and task-based bots, exposed live statuses and made each workflow easier to review from one place.",
        before: "Bot activity, queue status and review steps were harder to see across separate scripts and workflows.",
        after: "Nine connected bots could be reviewed from one operating desk with status, queue and task information visible at a glance.",
        processImprovement:
          "The publishing operation became easier to supervise because review, approval and automation status were collected in one practical interface.",
        result: "9 bots organised across 2 operating groups",
        results: ["9 connected bots", "Always-running and task-based workflows", "Central review and approval visibility"],
      },
      {
        projectName: "TechDrivePlay PressCore Operator",
        categories: ["Professional Services", "Growing SMEs", "Internal Operations"],
        imageSrc: "/images/case-studies/techdriveplay-presscore-operator.png",
        imageAlt: "PressCore Operator dashboard showing live neural routing, bot status and recent orchestration work",
        logoLabel: "TechDrivePlay",
        problem: "The publishing system needed an orchestration layer that could coordinate specialist bots, track recent work and accept operator instructions.",
        solution:
          "PressCore Operator gave the team a live command centre for connected bots, including cognitive routing, direct instructions, task memory and operating rules.",
        before: "Automation runs needed more manual context switching between bot actions, queues and task history.",
        after: "The operator could talk to PressCore, review recent work and coordinate the connected bot network from a single screen.",
        processImprovement:
          "Research, outreach and publishing actions became easier to coordinate because the system kept operator context and task state visible.",
        result: "9 bots and 76 actions connected through PressCore",
        results: ["Live neural routing view", "Operator chat and task memory", "Guarded execution posture"],
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
    heading: "Choose the Branded AI Dashboard package that fits your team.",
    body:
      "Every package gives you a branded business dashboard with custom AI agents, connected tools and automation built around your workflow. Start with one focused setup, then add more agents, users, integrations and safeguards as your needs grow.",
    cards: [
      {
        title: "Starter",
        subtitle: "A focused dashboard for one high-value workflow.",
        description:
          "Start with a branded dashboard and a small set of AI agents built around one repeated process, such as lead intake, follow-up, document sorting or internal administration.",
        includes: [
          "Branded business dashboard",
          "1-2 custom AI agents",
          "Core workflow setup",
          "Basic tool connection",
          "Usage cap and activity logs",
          "Handover and support",
        ],
        cta: "Ask About Starter",
        href: "/contact?service=starter-ai-dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Growth",
        subtitle: "A connected dashboard for busy operations.",
        description:
          "Add more specialist AI agents and connect them to the systems your team already uses, so repeated work can be managed from one clear interface.",
        includes: [
          "3-5 custom AI agents",
          "Lead, support or admin workflows",
          "CRM, email, calendar or form integrations",
          "Approval steps for important actions",
          "Per-customer usage monitoring",
          "Ongoing improvements",
        ],
        cta: "Ask About Growth",
        href: "/contact?service=growth-agent-team",
        icon: Users,
        featured: true,
      },
      {
        title: "Pro",
        subtitle: "A broader dashboard for multiple workflows.",
        description:
          "Build a more capable Branded AI Dashboard for teams with multiple workflows, more users, stronger reporting needs and higher automation volume.",
        includes: [
          "6+ custom AI agents",
          "Multiple connected workflows",
          "Advanced integrations",
          "Role-based dashboard access",
          "Guardrails and action logging",
          "Priority support options",
        ],
        cta: "Ask About Pro",
        href: "/contact?service=pro-operations-hub",
        icon: Workflow,
      },
      {
        title: "Enterprise",
        subtitle: "A private or customer-controlled AI dashboard deployment.",
        description:
          "For organisations with stricter data, security or infrastructure requirements, ZZESK Consulting can scope a private-cloud, on-premises or customer-controlled Branded AI Dashboard.",
        includes: [
          "Private-cloud or on-prem option",
          "Custom agent and integration scope",
          "Data-sovereignty planning",
          "Compliance add-ons where needed",
          "Custom usage and support terms",
          "Separate deployment quote",
        ],
        cta: "Discuss Enterprise",
        href: "/contact?service=enterprise-ai-dashboard",
        icon: LockKeyhole,
      },
    ] satisfies ServicePackage[],
  },
  roi: {
    heading: "What could a better workflow save your business?",
    body:
      "Small improvements to repeated work add up quickly. A task that saves only a few hours each week can recover hundreds of hours over a year.",
    examples: [
      { hoursPerWeek: 5, hoursPerYear: 260, hourlyRate: 50, annualValue: 13000 },
      { hoursPerWeek: 10, hoursPerYear: 520, hourlyRate: 50, annualValue: 26000 },
      { hoursPerWeek: 20, hoursPerYear: 1040, hourlyRate: 50, annualValue: 52000 },
    ] satisfies RoiExample[],
  },
  process: {
    heading: "A clear path from messy process to useful dashboard.",
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
        body: "Build a Branded AI Dashboard, AI agents and automations around the way your team actually works.",
        icon: Wrench,
      },
      {
        number: "04",
        title: "Refine",
        body: "Test it with real use, improve it and support the handover into day-to-day operations.",
        icon: CheckCircle2,
      },
    ] satisfies ProcessStep[],
  },
  founder: {
    heading: "Practical tools, built around real work",
    imageSrc: "/images/founder/zachary-skinner-founder.png",
    imageAlt: "Portrait of Zachary Skinner, founder of ZZESK Consulting",
    body: [
      "ZZESK Consulting was founded by Zachary Skinner to help businesses replace scattered information and repeated manual work with clearer tools.",
      "The focus is not on adding technology for the sake of it. Each project begins with the real business problem: where time is being lost, where information is hard to find and where a better process could make the business easier to run.",
      "From custom dashboards to task automation and AI-assisted tools, every build is designed to be useful in day-to-day work.",
    ],
    attributes: ["Focused on real tasks", "Built around your business", "Practical build", "Clear handover and support"],
  },
  finalCta: {
    heading: "Start with one process worth improving.",
    body:
      "Send an enquiry to talk through one repeated task, report or workflow that takes too much time, then decide by email whether a Branded AI Dashboard could help.",
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
    title: "Branded AI Dashboard",
    description:
      "Each customer gets their own dashboard, branded with their logo and styling, where their team can run and manage the AI agents built for their business.",
    goodFitLabel: "Includes",
    goodFit: [
      "A tailored dashboard UI",
      "Customer-specific users and roles",
      "Agent status and activity views",
      "One place to manage the work",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Custom AI Agent Builds",
    description:
      "Agents are built to the customer's spec, so they can support real tasks such as lead intake, scheduling, customer support, document handling and internal admin.",
    goodFitLabel: "Example agents",
    goodFit: [
      "Lead-intake agents",
      "Scheduling and follow-up agents",
      "Customer-support agents",
      "Document-processing agents",
      "Internal operations agents",
    ],
    icon: Workflow,
  },
  {
    title: "Tool and Data Integrations",
    description:
      "Connect agents to the software and information the business already uses, so the dashboard becomes useful in day-to-day work instead of sitting beside it.",
    goodFitLabel: "Tools that may be connected",
    goodFit: [
      "Email and calendars",
      "Forms and intake tools",
      "CRMs and booking systems",
      "Cloud storage and documents",
      "Internal databases where appropriate",
    ],
    icon: Link2,
  },
  {
    title: "Cloud or On-Prem Deployment",
    description:
      "Most customers can use a managed cloud-hosted setup. Businesses with strict data-sovereignty, privacy or infrastructure needs can scope a private or on-premises deployment.",
    goodFitLabel: "Deployment options",
    goodFit: [
      "Managed cloud hosting",
      "Private-cloud setup",
      "On-premises deployment",
      "Customer-controlled infrastructure",
    ],
    icon: Building2,
  },
  {
    title: "Usage Metering and Guardrails",
    description:
      "AI usage is monitored per customer so subscriptions, usage caps and token costs stay visible. Important actions can be logged, limited or routed through human approval.",
    goodFitLabel: "Controls available",
    goodFit: [
      "Usage caps and overage planning",
      "Per-customer usage reporting",
      "Agent action logs",
      "Human approval steps",
      "Model choice by task complexity",
    ],
    icon: Gauge,
  },
  {
    title: "Ongoing Support and Add-ons",
    description:
      "After delivery, customers stay on a subscription for access, hosting, monitoring and support. New agents, custom integrations and compliance modules can be added as the business grows.",
    goodFitLabel: "Available add-ons",
    goodFit: [
      "Priority support",
      "New agent builds",
      "Custom integrations",
      "Compliance modules",
      "Ongoing dashboard improvements",
    ],
    icon: ClipboardCheck,
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
    "The first conversation is about the task, report or process your team repeats often, the tools involved and whether a Branded AI Dashboard could help.",
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
    "Productised AI dashboards",
    "Custom AI agent teams",
    "AI workflow automation",
    "Business system integrations",
    "Cloud-hosted AI dashboards",
    "On-premises AI deployments",
    "AI usage metering and guardrails",
  ],
};
