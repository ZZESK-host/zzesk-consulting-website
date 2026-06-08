import { AlertTriangle, Bot, CalendarCheck, Clock3, FileText, Inbox, UserCheck } from "lucide-react";

const statusItems = [
  { label: "Incoming enquiries", value: "18", tone: "text-accent-300" },
  { label: "Approval requests", value: "6", tone: "text-mist-50" },
  { label: "Follow-up tasks", value: "12", tone: "text-mist-50" },
  { label: "Exceptions", value: "3", tone: "text-status-warning" },
];

const approvals = [
  {
    title: "Draft response ready",
    meta: "New client enquiry - Review tone and quote range",
    badge: "Needs approval",
  },
  {
    title: "Booking confirmation",
    meta: "Calendar match found - Send proposed time",
    badge: "Review",
  },
  {
    title: "Document extraction",
    meta: "PDF intake complete - Check flagged fields",
    badge: "Exception",
  },
];

const activities = [
  { icon: Inbox, text: "Agent grouped 7 customer enquiries", time: "2 min ago" },
  { icon: CalendarCheck, text: "Availability checked for 4 bookings", time: "8 min ago" },
  { icon: FileText, text: "Two documents processed and summarised", time: "14 min ago" },
  { icon: UserCheck, text: "Approval queue updated", time: "21 min ago" },
];

const workflows = [
  { label: "Enquiry handling", progress: "w-[82%]", status: "On track" },
  { label: "Booking updates", progress: "w-[68%]", status: "Waiting approval" },
  { label: "Document processing", progress: "w-[54%]", status: "Review fields" },
];

export function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-400/[0.2] bg-ink-800 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_74%_10%,rgba(79,141,247,0.14),transparent_22rem),radial-gradient(circle_at_12%_90%,rgba(45,212,191,0.1),transparent_20rem)]"
        aria-hidden="true"
      />
      <div className="relative flex min-h-12 items-center justify-between gap-4 border-b border-slate-400/[0.16] bg-ink-950/78 px-4">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-status-error/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-status-warning/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-status-success/80" />
        </div>
        <p className="hidden text-xs font-medium text-mist-300 sm:block">ZZESK workflow control centre</p>
        <span className="rounded-full border border-accent-300/25 bg-accent-300/10 px-3 py-1 text-xs font-medium text-accent-300">
          Live preview
        </span>
      </div>
      <div className="relative grid min-h-[620px] lg:grid-cols-[16rem_1fr]">
        <aside className="border-b border-slate-400/[0.16] bg-ink-950/72 p-5 lg:border-b-0 lg:border-r lg:border-slate-400/[0.16]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-400/10 text-accent-300">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-mist-50">Operations</p>
              <p className="text-xs text-mist-400">Agent dashboard</p>
            </div>
          </div>

          <nav className="mt-8 grid gap-2 text-sm text-mist-300" aria-label="Dashboard mockup sections">
            {["Overview", "Approvals", "Enquiries", "Bookings", "Documents", "Activity"].map((item, index) => (
              <span
                key={item}
                className={
                  index === 0
                    ? "rounded-lg border border-accent-300/20 bg-accent-400/10 px-3 py-2 text-accent-300"
                    : "rounded-lg border border-transparent px-3 py-2"
                }
              >
                {item}
              </span>
            ))}
          </nav>

          <div className="mt-8 rounded-lg border border-slate-400/[0.14] bg-white/[0.035] p-4">
            <p className="text-xs font-medium text-mist-100">Agent mode</p>
            <p className="mt-2 text-sm leading-6 text-mist-300">Prepare actions, request approval, escalate exceptions.</p>
          </div>
        </aside>

        <div className="grid gap-5 p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-300">WORKFLOW CONTROL CENTRE</p>
              <h3 className="mt-2 text-2xl font-semibold text-mist-50">Today&apos;s operational view</h3>
            </div>
            <span className="w-fit rounded-full border border-status-success/25 bg-status-success/10 px-3 py-1 text-xs font-medium text-status-success">
              Agents active
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {statusItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-400/[0.14] bg-white/[0.035] p-4">
                <p className={`text-2xl font-semibold ${item.tone}`}>{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-mist-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-lg border border-slate-400/[0.16] bg-ink-950/58 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-mist-50">Approval queue</h4>
                <span className="rounded-full border border-cobalt-300/20 bg-cobalt-300/10 px-2.5 py-1 text-xs text-cobalt-300">Human review</span>
              </div>
              <div className="grid gap-3">
                {approvals.map((approval, index) => (
                  <article key={approval.title} className="rounded-lg border border-slate-400/[0.14] bg-white/[0.035] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h5 className="text-sm font-medium text-mist-50">{approval.title}</h5>
                        <p className="mt-1 text-xs leading-5 text-mist-400">{approval.meta}</p>
                      </div>
                      <span
                        className={
                          index === 2
                            ? "rounded-full border border-status-warning/25 bg-status-warning/10 px-2.5 py-1 text-[0.68rem] font-medium text-status-warning"
                            : "rounded-full border border-accent-300/20 bg-accent-400/10 px-2.5 py-1 text-[0.68rem] font-medium text-accent-300"
                        }
                      >
                        {approval.badge}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-400/[0.16] bg-ink-950/58 p-4">
              <h4 className="text-sm font-semibold text-mist-50">Recent agent activity</h4>
              <div className="mt-4 grid gap-3">
                {activities.map((activity) => (
                  <div key={activity.text} className="flex gap-3 rounded-lg border border-slate-400/[0.14] bg-white/[0.03] p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-400/10 text-accent-300">
                      <activity.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-mist-100">{activity.text}</p>
                      <p className="mt-0.5 text-xs text-mist-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-lg border border-slate-400/[0.16] bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold text-mist-50">Workflow status</h4>
              <div className="flex items-center gap-2 text-xs text-mist-400">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Live operations
              </div>
            </div>
            <div className="grid gap-4">
              {workflows.map((workflow, index) => (
                <div key={workflow.label}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                    <span className="font-medium text-mist-100">{workflow.label}</span>
                    <span className={index === 2 ? "text-status-warning" : "text-mist-400"}>{workflow.status}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className={`h-full rounded-full bg-gradient-to-r from-accent-400 to-cobalt-400 ${workflow.progress}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-2 text-xs">
            {["Customer details", "Draft responses", "Calendar bookings", "Document processing", "Exceptions requiring attention"].map((badge) => (
              <span key={badge} className="rounded-full border border-slate-400/[0.14] bg-white/[0.035] px-3 py-1.5 text-mist-300">
                {badge}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 rounded-full border border-status-warning/20 bg-status-warning/10 px-3 py-1.5 text-status-warning">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
              Exceptions requiring attention
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
