import {
  Bot,
  BriefcaseBusiness,
  Cable,
  Database,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCapability = {
  title: string;
  body: string;
};

export type ServiceEngagement = {
  title: string;
  body: string;
  deliverables: string[];
};

export type ServiceDetail = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoDescription: string;
  outcome: string;
  overview: string[];
  problems: string[];
  capabilities: ServiceCapability[];
  engagements: ServiceEngagement[];
  examples: string[];
  fit: string[];
  approach: string[];
  related: string[];
  icon: LucideIcon;
};

export const services: ServiceDetail[] = [
  {
    number: "01",
    slug: "ai-strategy-governance",
    title: "AI Strategy, Advisory & Governance",
    shortTitle: "Strategy & Governance",
    description: "Set a clear, responsible direction for AI and make confident decisions about priorities, risk, policy and investment.",
    seoDescription:
      "Practical AI strategy, maturity assessment, governance, responsible AI, risk, policy and procurement advice for Australian SMEs.",
    outcome: "Move from scattered AI activity to a practical direction your leaders and teams can act on.",
    overview: [
      "AI creates useful opportunities, but it also introduces decisions about data, risk, accountability, procurement and workforce impact. For many SMEs, the challenge is not a lack of tools. It is knowing which opportunities deserve attention, what should be governed and how to move forward without creating unnecessary complexity.",
      "ZZESK helps leadership teams form a grounded AI position based on their objectives, operating environment and current capability. The work can range from a focused opportunity and maturity assessment to an AI roadmap, internal policy or governance framework. Recommendations are designed to be proportionate to the organisation rather than copied from an enterprise template.",
    ],
    problems: [
      "AI activity is happening without shared priorities or ownership",
      "Leaders are unsure where AI can create credible business value",
      "Teams need clear rules for safe and responsible use",
      "Technology proposals are difficult to compare or procure confidently",
      "Risk, privacy, security and human oversight need to be addressed early",
    ],
    capabilities: [
      { title: "AI strategy and roadmaps", body: "Translate business priorities into a sequenced plan covering opportunities, dependencies, risk and next steps." },
      { title: "Maturity and readiness assessments", body: "Review leadership alignment, data, technology, processes, skills and governance to establish a realistic starting point." },
      { title: "Governance and responsible AI", body: "Define decision rights, review points, acceptable use, human oversight and proportionate controls." },
      { title: "Policy and procurement advice", body: "Develop practical internal guidance and assess proposed platforms or vendors against business and risk requirements." },
    ],
    engagements: [
      {
        title: "AI opportunity and maturity assessment",
        body: "A focused review to identify where AI may be useful and what the organisation needs before progressing.",
        deliverables: ["Leadership and workflow discovery", "Maturity summary", "Prioritised opportunity register", "Recommended next steps"],
      },
      {
        title: "AI strategy and governance foundation",
        body: "A structured engagement that establishes direction, ownership and responsible ways of working.",
        deliverables: ["AI principles and objectives", "Roadmap", "Governance model", "Policy or acceptable-use guidance"],
      },
    ],
    examples: [
      "Prioritising AI opportunities across customer service, finance and operations",
      "Creating practical employee guidance for approved generative AI use",
      "Reviewing an AI vendor proposal before procurement",
      "Defining human review and escalation requirements for an automated process",
    ],
    fit: ["You are exploring AI but do not have a shared plan", "Different teams are trialling tools independently", "You need a proportionate governance approach", "A significant AI purchase or implementation decision is approaching"],
    approach: ["Understand business priorities and constraints", "Assess current capability and exposure", "Prioritise opportunities and required controls", "Leave leaders with decisions, owners and a usable roadmap"],
    related: ["generative-ai-productivity", "ai-implementation-managed-services", "ai-training-change"],
    icon: ShieldCheck,
  },
  {
    number: "02",
    slug: "generative-ai-productivity",
    title: "Generative AI & AI Productivity",
    shortTitle: "Generative AI & Productivity",
    description: "Give teams practical, secure ways to create, find and work with information using copilots, assistants and tailored LLM solutions.",
    seoDescription:
      "Copilots, ChatGPT and LLM solutions, AI assistants, knowledge management and productivity tools for Australian SMEs.",
    outcome: "Help people spend less time searching, drafting and reworking information while keeping appropriate control over how AI is used.",
    overview: [
      "Generative AI can support everyday knowledge work, but value rarely comes from giving everyone access to a tool and hoping for the best. Teams need suitable use cases, reliable information, clear guidance and workflows that fit how work is actually completed.",
      "ZZESK helps SMEs introduce copilots, AI assistants and language-model solutions in a practical way. That may involve configuring an existing platform, creating a focused internal assistant, improving access to business knowledge or designing repeatable content workflows. The emphasis is on useful adoption, good information handling and clear boundaries—not novelty.",
    ],
    problems: [
      "Staff spend too much time finding, summarising or rewriting information",
      "AI use is inconsistent and outputs are difficult to trust",
      "Business knowledge is spread across documents, inboxes and systems",
      "Generic tools do not understand the organisation's context or workflow",
      "Leaders want productivity gains without unmanaged data exposure",
    ],
    capabilities: [
      { title: "Copilot and ChatGPT enablement", body: "Identify appropriate uses, configure the environment and establish guidance for productive day-to-day adoption." },
      { title: "AI assistants", body: "Design focused assistants for roles or workflows such as research, drafting, enquiry support or internal guidance." },
      { title: "Knowledge management", body: "Make approved business information easier to search, retrieve and use with appropriate access controls." },
      { title: "Content and productivity workflows", body: "Create repeatable processes for preparing, checking and refining documents, communications and structured outputs." },
    ],
    engagements: [
      {
        title: "Copilot and productivity launch",
        body: "A focused starting point for selecting use cases, preparing teams and introducing safe working practices.",
        deliverables: ["Use-case shortlist", "Configuration recommendations", "Prompt and workflow guidance", "Team launch session"],
      },
      {
        title: "Knowledge assistant pilot",
        body: "A limited pilot that helps a defined group find and use approved organisational information.",
        deliverables: ["Information-source review", "Assistant design", "Access and answer guardrails", "Pilot testing and handover"],
      },
    ],
    examples: [
      "An internal assistant that answers questions from approved policies and procedures",
      "A structured drafting workflow for proposals or customer communications",
      "Meeting and research summaries with defined human review",
      "Role-specific prompt libraries and practical usage guidance",
    ],
    fit: ["Your team already uses generative AI informally", "You are considering Microsoft Copilot or ChatGPT for work", "Important knowledge is difficult to find", "You want a focused productivity pilot before wider adoption"],
    approach: ["Select high-value, low-friction use cases", "Confirm information and access requirements", "Design the tool and working practices together", "Pilot with users, measure usefulness and improve"],
    related: ["ai-strategy-governance", "ai-automation-agents", "ai-training-change"],
    icon: Sparkles,
  },
  {
    number: "03",
    slug: "ai-automation-agents",
    title: "AI Automation & Intelligent Agents",
    shortTitle: "Automation & Intelligent Agents",
    description: "Turn repetitive, multi-step work into dependable intelligent workflows with human review where it matters.",
    seoDescription:
      "Workflow automation, AI agents, RPA with AI, document processing and business-process automation for Australian SMEs.",
    outcome: "Reduce avoidable manual work and delays by connecting people, systems and AI in a controlled business process.",
    overview: [
      "Many operational processes still rely on copying information, monitoring inboxes, preparing documents, updating several systems or chasing the next approval. Traditional automation can handle predictable steps; AI can extend that support to information that needs classification, extraction, summarisation or contextual handling.",
      "ZZESK designs automation around the whole workflow rather than one isolated task. We identify what should be automated, what should remain a human decision and how exceptions should be handled. Solutions can combine workflow platforms, APIs, robotic process automation, document AI and task-focused agents, with logging and approval points built in.",
    ],
    problems: [
      "Teams repeatedly enter the same information into multiple systems",
      "Documents and inboxes create processing queues and inconsistent handling",
      "Handoffs, follow-ups and approvals cause avoidable delays",
      "Existing automation stops when information is unstructured",
      "Leaders need visibility and human control over AI-assisted actions",
    ],
    capabilities: [
      { title: "Workflow automation", body: "Map and simplify repeatable processes before connecting triggers, decisions, notifications and system updates." },
      { title: "Intelligent agents", body: "Build task-focused agents that gather context, prepare work or coordinate approved actions within defined boundaries." },
      { title: "Document processing", body: "Extract, classify, validate and route information from forms, PDFs, emails and other business documents." },
      { title: "RPA and system orchestration", body: "Combine API integrations and interface automation when older software cannot connect directly." },
    ],
    engagements: [
      {
        title: "Automation and agent pilot",
        body: "Prove a focused workflow with clear boundaries before expanding automation across the business.",
        deliverables: ["Current-state workflow map", "Pilot automation", "Exception and approval design", "Testing and handover"],
      },
      {
        title: "Business-process automation",
        body: "Redesign and implement a broader operational process spanning people, information and systems.",
        deliverables: ["Future-state process", "Integrations and automation", "Monitoring and activity logs", "Documentation and support plan"],
      },
    ],
    examples: [
      "Classifying incoming enquiries and preparing them for staff review",
      "Extracting details from documents and updating approved business systems",
      "Preparing recurring reports from several information sources",
      "Coordinating reminders, approvals and follow-up actions across a workflow",
    ],
    fit: ["A repeated process consumes significant staff attention", "Work moves through predictable stages but includes documents or free text", "Several systems need to be kept in sync", "You want to pilot an agent with clear human oversight"],
    approach: ["Map the real process and remove unnecessary steps", "Separate predictable actions from judgement and exceptions", "Build controls, logging and human approvals into the design", "Test with real scenarios before broader release"],
    related: ["generative-ai-productivity", "ai-business-solutions", "ai-implementation-managed-services"],
    icon: Bot,
  },
  {
    number: "04",
    slug: "ai-data-analytics",
    title: "AI Data, Analytics & Business Intelligence",
    shortTitle: "Data, Analytics & BI",
    description: "Turn connected business data into clearer reporting, forecasting and decision support.",
    seoDescription:
      "Data analytics, business intelligence, predictive analytics, forecasting, machine learning and data platforms for Australian SMEs.",
    outcome: "Give decision-makers a more reliable view of performance, patterns and likely future needs.",
    overview: [
      "Useful AI depends on useful data. Many SMEs have valuable information across accounting platforms, operational systems, spreadsheets, customer tools and documents, but reporting remains manual or gives leaders only a partial picture.",
      "ZZESK helps organisations organise, connect and use data for practical decisions. Work may begin with reporting foundations and dashboards, then progress to forecasting, predictive analysis, machine learning or computer vision when the data and business case support it. The goal is not complexity for its own sake; it is information people can understand and act on.",
    ],
    problems: [
      "Reporting requires repeated spreadsheet work and manual reconciliation",
      "Different systems present conflicting versions of performance",
      "Leaders cannot see emerging issues early enough",
      "Forecasting relies heavily on intuition or static historical averages",
      "Data exists for an AI idea but is not organised or governed for use",
    ],
    capabilities: [
      { title: "Analytics and business intelligence", body: "Create reliable measures, dashboards and reporting views shaped around real operational decisions." },
      { title: "Forecasting and predictive analytics", body: "Use historical and contextual information to support planning, demand estimation or risk identification." },
      { title: "Machine learning", body: "Develop focused models where repeatable patterns and sufficient data make a learning-based approach appropriate." },
      { title: "Data platforms and computer vision", body: "Connect, prepare and govern data, including image-based workflows where visual information is operationally important." },
    ],
    engagements: [
      {
        title: "Reporting and data foundation",
        body: "Establish trusted data flows and practical reporting before adding more advanced analytics.",
        deliverables: ["Source and quality review", "Metric definitions", "Data pipeline or model", "Dashboard and handover"],
      },
      {
        title: "Forecasting or analytics pilot",
        body: "Test whether available data can support a defined planning or decision-making need.",
        deliverables: ["Feasibility assessment", "Prepared dataset", "Pilot analysis or model", "Limitations and next-step recommendations"],
      },
    ],
    examples: [
      "A management dashboard combining financial and operational information",
      "Demand or workload forecasting to support staffing and planning",
      "Identifying unusual transactions or process patterns for review",
      "Using image analysis to assist a defined inspection or classification task",
    ],
    fit: ["Reporting is slow or difficult to trust", "Important data is split across several tools", "You need stronger forecasting for planning", "You are considering machine learning but need to assess feasibility first"],
    approach: ["Begin with the decision the data needs to support", "Assess source quality, access and definitions", "Build the simplest useful analytical foundation", "Explain limitations and keep human interpretation visible"],
    related: ["ai-strategy-governance", "ai-business-solutions", "ai-implementation-managed-services"],
    icon: Database,
  },
  {
    number: "05",
    slug: "ai-business-solutions",
    title: "AI Business Solutions & Applications",
    shortTitle: "Business Solutions & Applications",
    description: "Apply AI to specific customer, finance, people, marketing, compliance, planning and operational needs.",
    seoDescription:
      "Practical AI business applications for customer service, finance, HR, marketing, operations, compliance and planning.",
    outcome: "Solve a defined business problem with an application shaped around the people, information and decisions involved.",
    overview: [
      "Some business problems do not fit neatly into a single product or technical category. They may involve customer interactions, internal knowledge, documents, approvals, forecasting and several existing systems. In these situations, the right answer is often a focused business application that combines the necessary capabilities behind one usable experience.",
      "ZZESK designs AI-enabled applications around a particular function or workflow. Depending on the need, a solution may combine an assistant, automation, analytics, integrations and a purpose-built interface. We define what the application should help people do, where decisions remain human and how it will fit into everyday operations.",
    ],
    problems: [
      "Off-the-shelf software does not fit an important workflow",
      "Teams switch between tools to complete one customer or operational task",
      "Information is available but difficult to turn into a consistent action",
      "A business function needs focused decision support rather than another general tool",
      "The organisation wants an AI application but needs help defining a realistic first release",
    ],
    capabilities: [
      { title: "Customer and service applications", body: "Support enquiry handling, knowledge access, triage, preparation and consistent service workflows." },
      { title: "Finance, HR and compliance tools", body: "Assist document review, internal guidance, reporting, planning and controlled administrative processes." },
      { title: "Marketing and sales support", body: "Help teams research, prepare content, organise information and follow defined customer workflows." },
      { title: "Operational and planning applications", body: "Bring information, decisions and actions together in a focused internal interface." },
    ],
    engagements: [
      {
        title: "Solution discovery and prototype",
        body: "Clarify the user, workflow, information and controls before committing to a broader build.",
        deliverables: ["Problem and user definition", "Workflow and requirements", "Prototype", "Implementation recommendation"],
      },
      {
        title: "Focused business application",
        body: "Design, build and introduce a production-ready first release for a defined team or process.",
        deliverables: ["Application design", "AI and integration components", "Testing and controls", "Handover and improvement backlog"],
      },
    ],
    examples: [
      "A customer-service workspace that prepares context and recommended next actions",
      "An internal compliance assistant grounded in approved procedures",
      "A finance tool that organises documents and prepares items for review",
      "A planning workspace combining forecasts, assumptions and operational commentary",
    ],
    fit: ["You have a clear business problem but no suitable packaged tool", "The workflow spans several systems or information types", "A defined team needs a focused interface", "You want to prototype the experience before a larger implementation"],
    approach: ["Define the user and decision before the feature list", "Design the complete workflow, including exceptions", "Combine only the capabilities the outcome requires", "Release narrowly, learn from use and extend deliberately"],
    related: ["ai-automation-agents", "ai-data-analytics", "ai-implementation-managed-services"],
    icon: BriefcaseBusiness,
  },
  {
    number: "06",
    slug: "ai-implementation-managed-services",
    title: "AI Implementation, Integration & Managed Services",
    shortTitle: "Implementation & Managed Services",
    description: "Move from an AI idea to a dependable working solution integrated with the systems your business already uses.",
    seoDescription:
      "Custom AI development, system integration, deployment, migration, support and managed AI services for Australian SMEs.",
    outcome: "Turn an approved AI priority into a secure, maintainable service that works beyond launch day.",
    overview: [
      "A successful AI implementation has to work with existing systems, information, permissions and support arrangements. A prototype can demonstrate an idea, but production delivery requires attention to security, reliability, monitoring, data handling, adoption and ownership.",
      "ZZESK provides hands-on technical delivery from solution design through integration, deployment and support. We can build a custom component, connect an approved platform, migrate a pilot into production or manage an existing AI service. The implementation is documented and designed so the organisation understands how it operates and what ongoing attention it needs.",
    ],
    problems: [
      "An AI idea or pilot needs to become a production service",
      "New tools must connect securely with existing business systems",
      "Internal teams need additional implementation capacity or specialist guidance",
      "A solution needs monitoring, support and controlled improvement after launch",
      "Ownership, documentation and operational responsibilities are unclear",
    ],
    capabilities: [
      { title: "Custom development", body: "Build focused applications, assistants, agents, data flows and supporting interfaces around approved requirements." },
      { title: "Integration and migration", body: "Connect AI capabilities with existing software, identity, data and workflows or move a pilot into a managed environment." },
      { title: "Deployment and operational readiness", body: "Establish environments, access, testing, monitoring, documentation and release processes." },
      { title: "Support and managed services", body: "Monitor agreed components, resolve issues and manage controlled improvements as needs and providers change." },
    ],
    engagements: [
      {
        title: "Implementation project",
        body: "Deliver an agreed solution from technical design through production release and handover.",
        deliverables: ["Solution architecture", "Build and integration", "Security and acceptance testing", "Deployment and documentation"],
      },
      {
        title: "Managed AI support",
        body: "Provide an agreed level of operational support and continuous improvement after launch.",
        deliverables: ["Monitoring and support process", "Incident and change handling", "Usage and issue review", "Prioritised improvement releases"],
      },
    ],
    examples: [
      "Connecting an AI assistant to approved business knowledge and identity controls",
      "Moving an automation pilot into a monitored production environment",
      "Integrating a new AI capability with a CRM, document store or internal database",
      "Providing ongoing support for a defined AI workflow or application",
    ],
    fit: ["You have an approved use case and need technical delivery", "A pilot needs production controls and integration", "Your internal team needs implementation support", "You want clear post-launch ownership and maintenance"],
    approach: ["Confirm requirements, risks and operational ownership", "Design for existing systems and support capability", "Test security, behaviour and failure handling", "Document, hand over and improve through controlled change"],
    related: ["ai-strategy-governance", "ai-automation-agents", "ai-business-solutions"],
    icon: Cable,
  },
  {
    number: "07",
    slug: "ai-training-change",
    title: "AI Training, Capability & Change",
    shortTitle: "Training, Capability & Change",
    description: "Build the confidence, skills and operating practices required for responsible, lasting AI adoption.",
    seoDescription:
      "AI literacy, workforce training, leadership education, adoption, change management and AI operating models for Australian SMEs.",
    outcome: "Help leaders and teams understand where AI fits, how to use it well and what needs to change around the technology.",
    overview: [
      "AI adoption is a people and operating-model change as much as a technology project. Staff need relevant skills and boundaries; leaders need enough understanding to make decisions; and teams need time to adjust roles, workflows and measures of success.",
      "ZZESK provides practical education and change support connected to the organisation's real work. Training can range from foundational AI literacy to role-specific workshops, leadership briefings and adoption support for a new tool or workflow. We avoid generic demonstrations where possible and focus on the decisions and activities participants will face in their jobs.",
    ],
    problems: [
      "Leaders need a shared understanding of AI opportunities and limitations",
      "Staff are experimenting without consistent guidance or confidence",
      "A new AI tool has been introduced but adoption is uneven",
      "Roles, workflows and responsibilities need to change around an implementation",
      "The organisation needs an operating model for ongoing AI decisions",
    ],
    capabilities: [
      { title: "AI literacy", body: "Build a practical foundation covering terminology, limitations, responsible use and relevant business applications." },
      { title: "Leadership education", body: "Prepare leaders to assess opportunities, ask better questions and govern investment and risk." },
      { title: "Role-based workforce training", body: "Teach teams how to use approved tools and workflows in the context of their responsibilities." },
      { title: "Adoption and operating models", body: "Define ownership, support, communities of practice and change activities that sustain new ways of working." },
    ],
    engagements: [
      {
        title: "AI literacy and leadership program",
        body: "Create a shared, practical understanding suited to the organisation's priorities and risk profile.",
        deliverables: ["Tailored learning content", "Leadership briefing", "Workforce workshop", "Practical guidance and resources"],
      },
      {
        title: "Implementation adoption support",
        body: "Prepare affected teams for a new AI-enabled tool, process or responsibility.",
        deliverables: ["Stakeholder and impact review", "Role-based training", "Adoption activities", "Feedback and reinforcement plan"],
      },
    ],
    examples: [
      "An AI fundamentals workshop for leaders and operational managers",
      "Role-specific training for an approved copilot or assistant",
      "Change support for a new AI-assisted business process",
      "An internal operating model covering ownership, review and continuous learning",
    ],
    fit: ["Your organisation needs a common AI baseline", "Leaders are making AI decisions without enough shared context", "A tool rollout needs practical adoption support", "You want capability to remain inside the business after implementation"],
    approach: ["Connect learning to business priorities and roles", "Use relevant scenarios without implying certainty where it does not exist", "Combine education with practical working guidance", "Gather feedback and reinforce adoption after launch"],
    related: ["ai-strategy-governance", "generative-ai-productivity", "ai-implementation-managed-services"],
    icon: GraduationCap,
  },
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export const serviceInterestOptions = [
  { value: "not-sure", label: "Not sure yet" },
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "website-modernisation", label: "Website Modernisation" },
] as const;

export type ServiceInterest = (typeof serviceInterestOptions)[number]["value"];

const serviceInterestValues = new Set<string>(serviceInterestOptions.map((option) => option.value));

export function isServiceInterest(value: string): value is ServiceInterest {
  return serviceInterestValues.has(value);
}

