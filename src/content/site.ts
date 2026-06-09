import {
  Bot,
  ClipboardCheck,
  FileSearch,
  Inbox,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  PlugZap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  businessName: "ZZESK Consulting",
  shortName: "ZZESK",
  domain: "zzesk.com",
  url: "https://zzesk.com",
  email: "zack@zzesk.com",
  founder: "Zachary Skinner",
  defaultTitle: "ZZESK Consulting | Custom AI Dashboards and Business Automation",
  defaultDescription:
    "ZZESK Consulting builds custom dashboards powered by AI agents to automate repetitive work, connect business tools, and keep teams in control.",
  tagline: "Custom dashboards. Connected AI agents. Less repetitive work.",
  bookingLabel: "Discuss Your Workflow",
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

export const home = {
  hero: {
    eyebrow: "CUSTOM DASHBOARDS POWERED BY AI AGENTS",
    heading: "Automate the repetitive work. Keep the human judgement.",
    body:
      "ZZESK Consulting builds custom dashboards with connected AI agents that automate repetitive work, organise business workflows, and keep your team in control through clear approval steps.",
    trust: "Founder-led consulting. Tailored solutions. Clear implementation plans.",
    dashboardLine: "Custom dashboards. Connected AI agents. Human oversight.",
  },
  values: {
    heading: "AI is only useful when it solves a real problem.",
    body:
      "Most businesses do not need another generic chatbot. They need carefully designed systems that save time, reduce manual handling, and fit their existing processes.",
    cards: [
      {
        title: "Reduce repetitive admin",
        body: "Automate routine tasks while keeping important decisions in human hands.",
        icon: ClipboardCheck,
      },
      {
        title: "Connect existing tools",
        body: "Work with the platforms your team already relies on instead of replacing everything.",
        icon: PlugZap,
      },
      {
        title: "Build for real operations",
        body: "Create practical systems with clear approval steps, safeguards, and measurable outcomes.",
        icon: ShieldCheck,
      },
    ],
  },
  services: {
    heading: "Dashboards that put AI agents to work.",
    body:
      "ZZESK Consulting builds custom dashboards that bring your workflows, approvals, customer enquiries, and AI-powered automations into one practical interface.",
    cards: [
      {
        title: "Custom AI Operations Dashboards",
        body: "Give your team one clear place to monitor workflows, review actions, manage exceptions, and stay in control.",
        icon: LayoutDashboard,
      },
      {
        title: "AI Agents for Repetitive Work",
        body: "Automate routine tasks such as enquiry handling, follow-ups, document processing, booking updates, and internal admin.",
        icon: Bot,
      },
      {
        title: "Human Approval Workflows",
        body: "Keep important decisions in human hands with clear review, approval, and escalation steps built into the dashboard.",
        icon: UserCheck,
      },
      {
        title: "Business Tool Integrations",
        body: "Connect email, calendars, documents, CRMs, forms, and internal systems into one coordinated workflow.",
        icon: PlugZap,
      },
    ],
  },
  process: {
    heading: "A clear path from idea to working system",
    steps: [
      {
        number: "01",
        title: "Discovery",
        body: "Identify the highest-value bottlenecks and define a practical first dashboard project.",
      },
      {
        number: "02",
        title: "System Design",
        body: "Map the dashboard views, connected tools, agent actions, approval points, and safeguards.",
      },
      {
        number: "03",
        title: "Implementation",
        body: "Build, test, and refine the dashboard and AI agents around real-world usage.",
      },
      {
        number: "04",
        title: "Handover and Improvement",
        body: "Document the system, support adoption, and improve the workflow over time.",
      },
    ],
  },
  founder: {
    heading: "Direct access to the person designing your solution.",
    body:
      "ZZESK Consulting is founder-led. You work directly with the person assessing the workflow, designing the dashboard, and building the connected AI agents. That means fewer handovers, clearer communication, and a system shaped around the way your business actually operates.",
  },
  useCase: {
    heading: "What a ZZESK dashboard can manage.",
    body:
      "A custom dashboard can bring your business workflows and AI agents into one controlled interface.",
    note:
      "Every dashboard is tailored to the business, its existing tools, and the level of human oversight required.",
  },
  finalCta: {
    heading: "Start with one workflow worth fixing.",
    body:
      "Discuss a repetitive workflow and whether a custom AI agent dashboard could make a practical difference in your business.",
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
    title: "Custom AI Operations Dashboards",
    description:
      "Bring your workflows, approvals, customer activity, tasks, and AI agents into one clear operational interface.",
    goodFit: [
      "Businesses juggling multiple tools",
      "Teams managing repetitive admin",
      "Owners who want visibility over automated workflows",
      "Processes that need clear escalation and oversight",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "AI Agent Workflow Automation",
    description:
      "Use connected AI agents to complete repetitive tasks, prepare actions, organise information, and move work forward automatically.",
    goodFit: [
      "Enquiry handling",
      "Follow-up workflows",
      "Appointment and booking admin",
      "Internal task routing",
      "Data entry and document handling",
      "Routine customer communication",
    ],
    icon: Bot,
  },
  {
    title: "Human-in-the-Loop Approvals",
    description:
      "Automate the routine work while keeping important decisions in human hands.",
    goodFit: [
      "Draft approvals",
      "Customer communication reviews",
      "Booking confirmations",
      "Escalations",
      "Exception handling",
      "Sensitive or high-value decisions",
    ],
    icon: UserCheck,
  },
  {
    title: "AI Receptionist Dashboards",
    description:
      "Manage incoming enquiries, prepare replies, check availability, track bookings, and escalate complex cases from one dashboard.",
    goodFit: [
      "Clinics",
      "Trades",
      "Service businesses",
      "Professional firms",
      "Booking-based businesses",
      "Teams receiving high volumes of enquiries",
    ],
    icon: Inbox,
  },
  {
    title: "Document and Knowledge Dashboards",
    description:
      "Extract, organise, review, and search business information through a tailored interface.",
    goodFit: [
      "Forms",
      "PDFs",
      "Internal documents",
      "Customer records",
      "Knowledge bases",
      "Compliance workflows",
    ],
    icon: FileSearch,
  },
  {
    title: "Business Tool Integrations",
    description:
      "Connect the platforms your business already uses so the dashboard becomes a practical control centre.",
    goodFitLabel: "Possible integrations",
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
    title: "Private and Local AI Options",
    description:
      "Explore deployment options designed for businesses with stricter privacy, security, or data-handling requirements.",
    goodFit: [
      "Sensitive documents",
      "Internal business knowledge",
      "Regulated workflows",
      "On-premises or local deployment needs",
    ],
    icon: LockKeyhole,
  },
];

export const about = {
  intro:
    "ZZESK Consulting builds custom dashboards powered by AI agents. The goal is not to add technology for its own sake. It is to create a clear operational interface that reduces repetitive work, connects existing tools, and gives businesses better visibility and control.",
  implementationHeading: "What ZZESK builds",
  principles: [
    {
      title: "One clear interface",
      body: "Bring workflows, tasks, approvals, and business information into one practical dashboard.",
      icon: LayoutDashboard,
    },
    {
      title: "Agents that handle repetitive work",
      body: "Use AI agents to complete routine tasks, prepare actions, and keep work moving.",
      icon: Bot,
    },
    {
      title: "Humans stay in control",
      body: "Build in approval steps, escalation rules, and clear visibility over what the system is doing.",
      icon: UserCheck,
    },
  ],
  founderBio:
    "Since beginning his programming studies, Zachary Skinner has spent the past two years building practical systems and demos across custom dashboards, workflow automation, and AI-assisted tools. He founded ZZESK Consulting to turn that hands-on work into useful business systems: clear interfaces that connect existing tools, reduce repetitive admin, and keep people in control through review and approval steps.",
};

export const contact = {
  heading: "Let's discuss the workflow you want to automate.",
  body:
    "The first conversation is about identifying a repetitive process, understanding the tools your business already uses, and assessing whether a custom dashboard with AI agents would make sense.",
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
    "Custom AI dashboards",
    "AI agent dashboards",
    "Business workflow automation",
    "Human-in-the-loop approvals",
    "AI receptionist dashboards",
    "Business systems integration",
    "Practical AI automation",
  ],
};
