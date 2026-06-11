import {
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  Cloud,
  Database,
  Globe,
  Inbox,
  LayoutGrid,
  Mail,
  Receipt,
  Table2,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tools: { label: string; icon: LucideIcon }[] = [
  { label: "Microsoft 365", icon: LayoutGrid },
  { label: "Outlook", icon: Mail },
  { label: "Google Workspace", icon: Globe },
  { label: "Email inboxes", icon: Inbox },
  { label: "Calendars", icon: CalendarDays },
  { label: "Spreadsheets", icon: Table2 },
  { label: "CRMs", icon: Users },
  { label: "Forms", icon: ClipboardList },
  { label: "Cloud storage", icon: Cloud },
  { label: "Internal databases", icon: Database },
  { label: "Accounting platforms", icon: Receipt },
  { label: "Booking platforms", icon: CalendarCheck },
];

function MarqueeTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {tools.map((tool) => (
        <span
          key={tool.label}
          role={hidden ? undefined : "listitem"}
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-400/[0.16] bg-white/[0.03] px-4 py-2 text-sm font-medium text-mist-300"
        >
          <tool.icon className="h-4 w-4 text-accent-300" aria-hidden="true" />
          {tool.label}
        </span>
      ))}
    </div>
  );
}

export function ToolMarquee() {
  return (
    <div className="marquee" role="list" aria-label="Tools ZZESK Consulting connects">
      <MarqueeTrack />
      <MarqueeTrack hidden />
    </div>
  );
}
