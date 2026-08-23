import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Link2,
  ShieldCheck,
  Sparkles,
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
  defaultTitle: "ZZESK Consulting | AI Solutions Consultant",
  defaultDescription:
    "Practical AI, automation and digital transformation consulting for businesses ready to reduce manual work, improve systems and modernise how they operate.",
  tagline: "Practical AI, automation, custom tools and modern websites designed around how your business actually works.",
  bookingLabel: "Book a Consultation",
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

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const home = {
  hero: {
    eyebrow: "AI, AUTOMATION & DIGITAL SYSTEMS",
    heading: "Modernise how your business works.",
    body:
      "Practical AI, automation and digital systems designed around the way your business actually operates.",
    trust:
      "Start with the problem, the outdated process or the system that no longer works. The solution is designed around your business—not around a technology trend.",
    dashboardLine: "Practical solutions. Clear business outcomes. No unnecessary complexity.",
  },
  outcomes: {
    note: "Results depend on the workflow, team, tools and business setup.",
    cards: [
      {
        title: "Save time across everyday operations",
        icon: ClipboardCheck,
      },
      {
        title: "Reduce repetitive manual work",
        icon: Workflow,
      },
      {
        title: "Improve the customer experience",
        icon: LayoutDashboard,
      },
      {
        title: "Modernise outdated systems",
        icon: Gauge,
      },
    ],
  },
  problems: {
    heading: "Bring me the problem.",
    body:
      "You do not need to know which AI tool to buy or how the solution should be built. Start with what is slow, frustrating, disconnected or holding the business back.",
    cards: [
      {
        title: "“Our team wastes hours doing this manually.”",
        body: "A repeated administrative task is consuming time that could be spent on customers, delivery or growth.",
        icon: FileSearch,
      },
      {
        title: "“Our website is outdated and needs to be rebuilt.”",
        body: "The current website no longer reflects the quality of the business or makes it easy for customers to take action.",
        icon: ClipboardCheck,
      },
      {
        title: "“We know AI could help, but do not know where to start.”",
        body: "You want a practical view of the opportunities, risks and priorities before committing to new technology.",
        icon: Link2,
      },
      {
        title: "“Our systems do not communicate properly.”",
        body: "Staff are re-entering information, switching between tools and working around gaps in the current setup.",
        icon: Gauge,
      },
      {
        title: "“We want to automate this process.”",
        body: "A predictable workflow still depends on manual handoffs, follow-ups, data entry or report preparation.",
        icon: BarChart3,
      },
      {
        title: "“We need a custom internal tool or dashboard.”",
        body: "Off-the-shelf software does not fit the workflow, so the team needs a focused tool built around the real process.",
        icon: Users,
      },
    ],
    cta: "Discuss a business problem",
  },
  packages: {
    heading: "Start with the outcome your business needs.",
    body:
      "There is no one-size-fits-all AI package. Choose a focused starting point, then scope the work around the systems, people and outcomes that matter to your business.",
    cards: [
      {
        title: "AI Opportunity Assessment",
        subtitle: "Find the right place to start.",
        description:
          "Review how the business currently operates, identify where AI or automation could create value, and leave with clear priorities instead of a list of tools.",
        includes: [
          "Current systems and workflow review",
          "Manual-work and bottleneck analysis",
          "Practical AI opportunities",
          "Risk and feasibility considerations",
          "Prioritised recommendations",
          "Clear next-step roadmap",
        ],
        cta: "Request an Assessment",
        href: "/contact?service=ai-opportunity-assessment",
        icon: LayoutDashboard,
      },
      {
        title: "Automation & Systems",
        subtitle: "Reduce manual work and connect your tools.",
        description:
          "Design and implement reliable workflows for repetitive administration, reporting, customer enquiries, data handling and internal operations.",
        includes: [
          "Workflow mapping and simplification",
          "Administrative task automation",
          "Software and data integrations",
          "Reporting and notification workflows",
          "Human approval where it matters",
          "Testing, handover and support",
        ],
        cta: "Discuss an Automation",
        href: "/contact?service=workplace-automation",
        icon: Users,
        featured: true,
      },
      {
        title: "AI Tools & Agents",
        subtitle: "Custom software built around your team.",
        description:
          "Build a focused assistant, internal tool or dashboard that helps staff find information, complete work and make better decisions.",
        includes: [
          "Custom AI assistants and agents",
          "Internal dashboards and tools",
          "Business knowledge search",
          "Role-based access where required",
          "Guardrails and activity logging",
          "Ongoing improvement options",
        ],
        cta: "Discuss a Custom Tool",
        href: "/contact?service=ai-agents-internal-tools",
        icon: Workflow,
      },
      {
        title: "Website Modernisation",
        subtitle: "Turn an outdated website into a business asset.",
        description:
          "Redesign and rebuild an ageing business website using modern technology, with a stronger customer journey and a faster, more credible experience.",
        includes: [
          "Content and user-journey review",
          "Professional responsive design",
          "Modern Next.js development",
          "Performance and accessibility",
          "SEO foundations and conversion focus",
          "Launch support and handover",
        ],
        cta: "Discuss a Website Rebuild",
        href: "/contact?service=website-redesign-development",
        icon: Wrench,
      },
    ] satisfies ServicePackage[],
  },
  roi: {
    heading: "What could a better workflow save your business?",
    body:
      "Small improvements to repeated work add up quickly. A task that saves only a few hours each week can recover hundreds of hours over a year.",
  },
  process: {
    heading: "From operational problem to practical solution.",
    steps: [
      {
        number: "01",
        title: "Understand the Operation",
        body: "Look at the people, tools, information and steps involved in how the work gets done today.",
        icon: FileSearch,
      },
      {
        number: "02",
        title: "Identify the Opportunity",
        body: "Find the bottlenecks, repeated work and outdated systems with the strongest case for improvement.",
        icon: Workflow,
      },
      {
        number: "03",
        title: "Design and Implement",
        body: "Create the right solution using AI, automation, software or modern web technology.",
        icon: Wrench,
      },
      {
        number: "04",
        title: "Measure and Refine",
        body: "Test the solution in real work, improve what matters and support confident adoption by the team.",
        icon: CheckCircle2,
      },
    ] satisfies ProcessStep[],
  },
  founder: {
    heading: "Practical technology, grounded in how businesses operate",
    imageSrc: "/images/founder/zachary-skinner-founder.png",
    imageAlt: "Portrait of Zachary Skinner, founder of ZZESK Consulting",
    body: [
      "ZZESK Consulting was founded by Zachary Skinner to help businesses modernise the way they work without turning technology into another source of complexity.",
      "The focus is not on selling AI for the sake of AI. Each project begins with the real business problem: where time is being lost, where systems are creating friction and where a better process could improve the operation.",
      "From consulting and workflow automation to custom AI tools and modern websites, every solution is designed to be useful, understandable and maintainable in day-to-day work.",
    ],
    attributes: ["Problem-first advice", "Built around your business", "Technically capable delivery", "Clear handover and support"],
  },
  finalCta: {
    heading: "Tell me what is slowing your business down.",
    body:
      "Book a consultation to discuss an inefficient process, disconnected system, outdated website or idea for a custom tool. You do not need to arrive with the solution—just the problem worth solving.",
  },
};

export type Service = {
  number: string;
  title: string;
  description: string;
  goodFit: string[];
  goodFitLabel?: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI Strategy, Advisory & Governance",
    description:
      "Set a clear, responsible direction for AI. We help you identify priorities, assess maturity and risk, establish governance and make confident procurement and policy decisions.",
    goodFitLabel: "Useful when you need to",
    goodFit: [
      "Create an AI strategy and practical roadmap",
      "Assess AI maturity, risk and readiness",
      "Develop responsible AI governance and policy",
      "Get independent AI procurement advice",
    ],
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Generative AI & AI Productivity",
    description:
      "Give teams practical, secure ways to create, find and work with information using copilots, ChatGPT and tailored large-language-model solutions.",
    goodFitLabel: "Solutions may include",
    goodFit: [
      "Copilots and AI assistants",
      "ChatGPT and LLM solutions",
      "Knowledge management and search",
      "Content and productivity tools",
    ],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "AI Automation & Intelligent Agents",
    description:
      "Turn repetitive, multi-step work into reliable intelligent workflows that combine automation, AI decision support and human review where it matters.",
    goodFitLabel: "Solutions may include",
    goodFit: [
      "Workflow automation and AI agents",
      "RPA combined with AI",
      "Document processing and extraction",
      "Business-process automation",
    ],
    icon: Bot,
  },
  {
    number: "04",
    title: "AI Data, Analytics & Business Intelligence",
    description:
      "Make better decisions with data that is useful, connected and understandable—from dashboards and forecasting to machine learning and computer vision.",
    goodFitLabel: "Capabilities include",
    goodFit: [
      "Data analytics and business intelligence",
      "Predictive analytics and forecasting",
      "Machine learning and computer vision",
      "Data platforms and reporting dashboards",
    ],
    icon: Database,
  },
  {
    number: "05",
    title: "AI Business Solutions & Applications",
    description:
      "Apply AI to the business functions where it can make a measurable difference, with solutions shaped around your industry, customers and operations.",
    goodFitLabel: "Applications across",
    goodFit: [
      "Customer service, finance and HR",
      "Marketing and sales operations",
      "Compliance, planning and reporting",
      "Operational and industry-specific workflows",
    ],
    icon: BriefcaseBusiness,
  },
  {
    number: "06",
    title: "AI Implementation, Integration & Managed Services",
    description:
      "Move from an AI idea to a dependable working solution, integrated with the systems you already use and supported after launch.",
    goodFitLabel: "Delivery includes",
    goodFit: [
      "Custom development and system integration",
      "Deployment and migration",
      "Support and managed AI services",
      "Secure, maintainable technical delivery",
    ],
    icon: Cable,
  },
  {
    number: "07",
    title: "AI Training, Capability & Change",
    description:
      "Help your people use AI with confidence and purpose, building the practical capability and operating model needed for lasting adoption.",
    goodFitLabel: "Support for your team",
    goodFit: [
      "AI literacy and workforce training",
      "Leadership education and decision support",
      "Adoption and change management",
      "AI operating models and ways of working",
    ],
    icon: GraduationCap,
  },
];

export const about = {
  intro:
    "ZZESK Consulting helps businesses turn AI from an emerging opportunity into practical, responsible improvements across strategy, productivity, operations, data and capability.",
  implementationHeading: "A practical approach to modernisation",
  principles: [
    {
      title: "Start with the problem",
      body: "Understand the operation, the people involved and the outcome before choosing the technology.",
      icon: LayoutDashboard,
    },
    {
      title: "Use technology with a purpose",
      body: "Apply AI, automation or custom software only where it will make the work measurably better.",
      icon: Workflow,
    },
    {
      title: "Make the change sustainable",
      body: "Build in clear controls, documentation and handover so the solution works beyond launch day.",
      icon: UserCheck,
    },
  ],
  founderBio:
    "Zachary Skinner founded ZZESK Consulting to help businesses modernise the systems and workflows behind their day-to-day work. His approach combines operational thinking with hands-on technical delivery: understand the problem, identify the right intervention, build it well and make it straightforward for the team to use.",
};

export const contact = {
  heading: "Bring me the problem.",
  body:
    "Tell me what is taking too long, what is not connecting, what feels outdated or what your team wishes worked differently. The first consultation is about understanding the business problem and deciding whether there is a practical way to solve it.",
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
    "AI consulting",
    "Workplace automation",
    "AI agents and internal tools",
    "Website redesign and development",
    "Systems and workflow consulting",
    "Custom AI solutions",
  ],
};
