import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  LayoutDashboard,
  Network,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/content/services";

export const site = {
  businessName: "ZZESK Consulting",
  shortName: "ZZESK",
  domain: "zzesk.com",
  url: "https://zzesk.com",
  email: "zack@zzesk.com",
  founder: "Zachary Skinner",
  defaultTitle: "ZZESK Consulting | Practical AI Consulting for Australian SMEs",
  defaultDescription:
    "Practical AI strategy, implementation, automation, data and workforce adoption for Australian SMEs ready to put AI to work responsibly.",
  tagline: "Practical AI advice and delivery—from strategy and governance through implementation, integration and adoption.",
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
    eyebrow: "PRACTICAL AI FOR AUSTRALIAN SMEs",
    heading: "Put AI to work across your business.",
    body:
      "Strategy, implementation and adoption support designed around your goals, people, systems and responsibilities.",
    trust:
      "We help you decide where AI fits, build what is useful and introduce it responsibly—from the first priority through to ongoing improvement.",
  },
  outcomes: {
    note: "Results depend on the workflow, team, tools and business setup.",
    cards: [
      {
        title: "Set a responsible AI direction",
        icon: ShieldCheck,
      },
      {
        title: "Improve team productivity",
        icon: Sparkles,
      },
      {
        title: "Automate complex business processes",
        icon: BrainCircuit,
      },
      {
        title: "Make better decisions with data",
        icon: BarChart3,
      },
    ],
  },
  useCases: {
    heading: "Where AI can create practical value.",
    body:
      "These representative examples show the kinds of business needs we can explore. The right solution depends on your workflow, information, systems and risk requirements.",
    cards: [
      {
        title: "Customer service",
        body: "Help staff find approved information, understand enquiries, prepare responses and route work consistently.",
        icon: FileSearch,
      },
      {
        title: "Finance",
        body: "Organise documents, support reporting, identify exceptions and prepare recurring work for review.",
        icon: BarChart3,
      },
      {
        title: "People and HR",
        body: "Improve access to internal guidance, prepare role-based content and support controlled administrative workflows.",
        icon: Users,
      },
      {
        title: "Marketing and sales",
        body: "Support research, content preparation, customer context and consistent follow-up processes.",
        icon: Sparkles,
      },
      {
        title: "Operations and planning",
        body: "Connect information, automate handoffs and provide clearer forecasts or decision support.",
        icon: Network,
      },
      {
        title: "Compliance and governance",
        body: "Make approved requirements easier to use while preserving review, traceability and human accountability.",
        icon: ClipboardCheck,
      },
    ],
    cta: "Discuss an AI priority",
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
        href: "/contact?service=ai-strategy-governance",
        icon: LayoutDashboard,
      },
      {
        title: "Copilot & Productivity Launch",
        subtitle: "Give your team a useful, responsible starting point.",
        description:
          "Identify practical generative AI use cases, prepare the environment and help a defined group begin using approved tools with confidence.",
        includes: [
          "Team and workflow discovery",
          "Use-case prioritisation",
          "Copilot or ChatGPT guidance",
          "Prompt and workflow resources",
          "Responsible-use boundaries",
          "Practical launch session",
        ],
        cta: "Discuss a Productivity Launch",
        href: "/contact?service=generative-ai-productivity",
        icon: Users,
        featured: true,
      },
      {
        title: "Automation & Agent Pilot",
        subtitle: "Prove one valuable workflow with the right controls.",
        description:
          "Design and test a focused AI-assisted workflow before expanding automation across the organisation.",
        includes: [
          "Current workflow mapping",
          "Pilot solution design",
          "AI, automation and integrations",
          "Human approvals and exceptions",
          "Testing with real scenarios",
          "Handover and next-step backlog",
        ],
        cta: "Discuss an Agent Pilot",
        href: "/contact?service=ai-automation-agents",
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
        href: "/contact?service=website-modernisation",
        icon: Wrench,
      },
    ] satisfies ServicePackage[],
  },
  roi: {
    heading: "What could one automated workflow save your business?",
    body:
      "This illustrative calculator applies to suitable automation opportunities only. It is a simple way to explore the potential time value of repeated work—not a forecast or promised result.",
  },
  process: {
    heading: "From AI priority to practical adoption.",
    steps: [
      {
        number: "01",
        title: "Discover",
        body: "Understand the business priority, people, information, systems and responsibilities involved.",
        icon: FileSearch,
      },
      {
        number: "02",
        title: "Prioritise",
        body: "Assess value, feasibility, risk and readiness so effort is directed to the right opportunity.",
        icon: Workflow,
      },
      {
        number: "03",
        title: "Design and Deliver",
        body: "Create the strategy, solution, controls and working practices needed for the agreed outcome.",
        icon: Wrench,
      },
      {
        number: "04",
        title: "Adopt and Improve",
        body: "Support real use, gather feedback and improve the service through controlled, responsible change.",
        icon: CheckCircle2,
      },
    ] satisfies ProcessStep[],
  },
  founder: {
    heading: "Founder-led AI advice and delivery, grounded in how SMEs operate",
    imageSrc: "/images/founder/zachary-skinner-founder.png",
    imageAlt: "Portrait of Zachary Skinner, founder of ZZESK Consulting",
    body: [
      "Zachary Skinner founded ZZESK Consulting to help Australian SMEs make sound AI decisions and turn the right priorities into practical working solutions.",
      "We combine advisory thinking with hands-on delivery. That keeps strategy, governance, implementation, integration and adoption connected instead of passing the work between disconnected providers.",
      "Every engagement starts with the business outcome and the people responsible for it. The technology, controls and change approach are then designed to fit the organisation—not a trend or predetermined platform.",
    ],
    attributes: ["Practical SME advice", "Responsible AI by design", "Advisory and technical delivery", "Founder-led accountability"],
  },
  finalCta: {
    heading: "Discuss where AI could create practical value.",
    body:
      "Tell us about the priority, process or decision you are working through. You do not need to arrive with a preferred tool—just enough context to explore a sensible next step.",
  },
};

export const about = {
  intro:
    "ZZESK Consulting helps Australian SMEs turn AI from an emerging opportunity into practical, responsible improvements across strategy, productivity, operations, data and capability.",
  implementationHeading: "Practical advice connected to practical delivery",
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
    "Zachary Skinner founded ZZESK Consulting to give Australian SMEs one accountable partner across AI advice and delivery. His approach combines operational thinking, responsible decision-making and hands-on technical implementation: understand the outcome, identify the right intervention, build it well and help the team use it confidently.",
  whoWeHelp:
    "We work with SME owners, leadership teams and operational managers who need a practical path through AI. Some are deciding where to begin. Others have a defined workflow, data opportunity or tool that needs to be designed, implemented or adopted properly.",
  capability:
    "Our work can connect strategy, governance, generative AI, automation, data, custom applications, implementation and workforce change. Website modernisation remains available as a supporting digital service, but AI consulting and delivery is the core of the business.",
  expectations: [
    "Plain-language advice tied to business decisions",
    "Clear scope, responsibilities and review points",
    "Human oversight and proportionate controls",
    "Hands-on implementation where required",
    "Documentation, handover and an understandable next step",
  ],
  engagementSteps: [
    { title: "Start with context", body: "We discuss the priority, current workflow, stakeholders, systems and constraints." },
    { title: "Define the right engagement", body: "We recommend a focused assessment, pilot, implementation or capability program." },
    { title: "Work with accountable delivery", body: "Zachary remains involved across the important advisory and implementation decisions." },
  ],
};

export const contact = {
  heading: "Discuss your AI priorities.",
  body:
    "Tell us what you are considering, where work is getting stuck or what outcome matters. The first conversation is about understanding the context and deciding whether there is a practical way we can help.",
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
  serviceType: [...services.map((service) => service.title), "Website Modernisation"],
};
