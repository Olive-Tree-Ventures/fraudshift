const HeroDashboard = () => (
  <div className="relative" style={{ perspective: "1200px" }}>
    <div
      className="rounded-[14px] overflow-hidden border border-white/[0.06] max-w-[620px] ml-auto"
      style={{
        background: "#111f26",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.25), 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        transform: "rotateY(-2deg) rotateX(1deg)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-[18px] py-3 border-b border-white/[0.06]"
        style={{ background: "rgba(0,0,0,0.15)", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center gap-2.5">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="#4a6a78" strokeWidth="1.4" />
            <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="#4a6a78" strokeWidth="1.4" />
            <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="#4a6a78" strokeWidth="1.4" />
            <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="#4a6a78" strokeWidth="1.4" />
          </svg>
          <span className="text-[11.5px]" style={{ color: "#4a6a78" }}>
            Fraud Ops <span className="opacity-40">›</span>{" "}
            <strong className="font-medium" style={{ color: "#7e9aa8" }}>Case Queue</strong>
          </span>
        </div>
        <div className="flex">
          <span
            className="text-[11px] px-3 py-[5px] font-medium rounded-md"
            style={{ color: "#e8edf0", background: "rgba(255,255,255,0.06)" }}
          >
            My Queue
          </span>
          <span className="text-[11px] px-3 py-[5px] font-medium" style={{ color: "#4a6a78" }}>
            All Cases
          </span>
          <span className="text-[11px] px-3 py-[5px] font-medium" style={{ color: "#4a6a78" }}>
            Escalations
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-[160px_1fr] min-h-[360px]">
        {/* Sidebar */}
        <div className="border-r border-white/[0.06] py-3.5" style={{ background: "rgba(0,0,0,0.08)" }}>
          <NavItem icon="overview" label="Overview" />
          <NavItem icon="queue" label="Case Queue" active />
          <NavItem icon="sla" label="SLA Tracker" />
          <NavItem icon="investigations" label="Investigations" />
          <div className="h-px mx-4 my-2" style={{ background: "rgba(255,255,255,0.06)" }} />
          <NavItem icon="kyc" label="KYC Review" />
          <NavItem icon="analytics" label="Analytics" />
        </div>

        {/* Main content */}
        <div className="p-4 flex flex-col gap-3.5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2.5">
            <StatCard label="Open Cases" value="247" sub="↓ 12% vs last week" subColor="#1ae88c" />
            <StatCard label="Avg Resolution" value="4.2h" sub="Within SLA target" subColor="#1ae88c" />
            <StatCard label="Escalation Rate" value="8.1%" sub="↑ 1.3% vs last week" subColor="#f0544c" />
          </div>

          {/* Queue label */}
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-semibold uppercase tracking-[1px]"
              style={{ color: "#7e9aa8" }}
            >
              Active Cases
            </span>
            <span className="text-[10px] font-semibold flex items-center" style={{ color: "#1ae88c" }}>
              <span
                className="w-1.5 h-1.5 rounded-full mr-[5px] inline-block"
                style={{
                  background: "#1ae88c",
                  animation: "livePulse 2s ease-in-out infinite",
                }}
              />
              Live
            </span>
          </div>

          {/* Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Case ID", "Type", "Risk", "Status", "Analyst"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[9.5px] uppercase tracking-[0.8px] font-semibold px-2 py-1.5 border-b border-white/[0.06]"
                    style={{ color: "#4a6a78" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <CaseRow
                id="FRD-29841"
                type="Account Takeover"
                risk="high"
                status="review"
                analyst="JM"
                analystName="J. Miller"
                avatarColor="#1ae88c"
                active
              />
              <CaseRow
                id="FRD-29839"
                type="Payment Fraud"
                risk="high"
                status="escalated"
                analyst="ST"
                analystName="S. Torres"
                avatarColor="#f5a623"
              />
              <CaseRow
                id="KYC-10284"
                type="Document Mismatch"
                risk="medium"
                status="review"
                analyst="RH"
                analystName="R. Hayes"
                avatarColor="#4ca4f0"
              />
              <CaseRow
                id="FRD-29836"
                type="Promo Abuse"
                risk="low"
                status="cleared"
                analyst="JM"
                analystName="J. Miller"
                avatarColor="#1ae88c"
              />
              <CaseRow
                id="KYC-10281"
                type="Sanctions Screen"
                risk="medium"
                status="review"
                analyst="ST"
                analystName="S. Torres"
                avatarColor="#f5a623"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Sub-components ─── */

const navIcons: Record<string, JSX.Element> = {
  overview: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 6h12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  queue: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path d="M4 4h8M4 8h8M4 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  sla: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 5v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  investigations: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path d="M8 2v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 9a5.5 5.5 0 1010.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  kyc: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path d="M6 3H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 9l6-6M10 3h3v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path d="M2 12l3-4 3 2 4-6 2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const NavItem = ({ icon, label, active }: { icon: string; label: string; active?: boolean }) => (
  <div
    className="flex items-center gap-2 px-4 py-2 text-[11.5px] font-medium border-l-2 cursor-default"
    style={{
      color: active ? "#1ae88c" : "#4a6a78",
      background: active ? "rgba(26,232,140,0.06)" : "transparent",
      borderLeftColor: active ? "#1ae88c" : "transparent",
    }}
  >
    <span style={{ opacity: active ? 1 : 0.7 }}>{navIcons[icon]}</span>
    {label}
  </div>
);

const StatCard = ({
  label,
  value,
  sub,
  subColor,
}: {
  label: string;
  value: string;
  sub: string;
  subColor: string;
}) => (
  <div
    className="rounded-lg border border-white/[0.06] px-3.5 py-3"
    style={{ background: "#0f242c" }}
  >
    <div
      className="text-[10px] uppercase tracking-[0.8px] font-medium mb-1.5"
      style={{ color: "#4a6a78" }}
    >
      {label}
    </div>
    <div className="text-xl font-bold tracking-tight" style={{ color: "#e8edf0" }}>
      {value}
    </div>
    <div className="text-[10px] font-medium mt-1" style={{ color: subColor }}>
      {sub}
    </div>
  </div>
);

const badgeStyles: Record<string, { bg: string; color: string; label: string }> = {
  high: { bg: "rgba(240,84,76,0.12)", color: "#f0544c", label: "High" },
  medium: { bg: "rgba(245,166,35,0.12)", color: "#f5a623", label: "Medium" },
  low: { bg: "rgba(76,164,240,0.12)", color: "#4ca4f0", label: "Low" },
  review: { bg: "rgba(245,166,35,0.12)", color: "#f5a623", label: "In Review" },
  escalated: { bg: "rgba(240,84,76,0.12)", color: "#f0544c", label: "Escalated" },
  cleared: { bg: "rgba(26,232,140,0.12)", color: "#1ae88c", label: "Cleared" },
};

const Badge = ({ type }: { type: string }) => {
  const s = badgeStyles[type];
  return (
    <span
      className="inline-block text-[9.5px] font-semibold px-2 py-[3px] rounded-[5px] uppercase tracking-[0.3px]"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
};

const CaseRow = ({
  id,
  type,
  risk,
  status,
  analyst,
  analystName,
  avatarColor,
  active,
}: {
  id: string;
  type: string;
  risk: string;
  status: string;
  analyst: string;
  analystName: string;
  avatarColor: string;
  active?: boolean;
}) => (
  <tr style={active ? { background: "rgba(26,232,140,0.06)" } : undefined}>
    <td className="px-2 py-2 border-b border-white/[0.06] text-[11.5px]" style={{ color: "#7e9aa8" }}>
      <span className="font-semibold text-[11px]" style={{ color: "#e8edf0" }}>{id}</span>
    </td>
    <td className="px-2 py-2 border-b border-white/[0.06] text-[11.5px]" style={{ color: "#7e9aa8" }}>
      {type}
    </td>
    <td className="px-2 py-2 border-b border-white/[0.06]">
      <Badge type={risk} />
    </td>
    <td className="px-2 py-2 border-b border-white/[0.06]">
      <Badge type={status} />
    </td>
    <td className="px-2 py-2 border-b border-white/[0.06] text-[11.5px]" style={{ color: "#7e9aa8" }}>
      <span
        className="w-[18px] h-[18px] rounded-full inline-flex items-center justify-center text-[8px] font-bold mr-1 align-middle"
        style={{ background: avatarColor, color: "#0c1a1f" }}
      >
        {analyst}
      </span>
      {analystName}
    </td>
  </tr>
);

export default HeroDashboard;
