import type { ReactNode } from "react";

// Re-mounts on every route change so each page eases in.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
