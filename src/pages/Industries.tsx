import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { CreditCard, Gamepad2, Search, UserCheck, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

type PanelData = {
  headerLabel: string;
  badgeText: string;
  badgeColor: string;
  bigNumber: string;
  bigLabel: string;
  trend: string;
  trendColor: string;
  bottomLabel: string;
  bottomValue: string;
  progressPercent?: number;
};

const industries = [
  {
    icon: CreditCard,
    name: "Fintech & Payments",
    desc: "You move money. That means high-volume support, dispute resolution, fraud review, and regulatory workflows that never stop. One missed SLA, one sloppy investigation, one audit gap, and your banking partner notices.",
    includes: "PSPs, gateways, processors, orchestration platforms, neobanks, merchant services, embedded finance.",
    teams: ["Frontline Support", "Dispute Operations", "Fraud & Risk", "Identity Operations"],
    panel: {
      headerLabel: "Dispute Queue",
      badgeText: "12 Open",
      badgeColor: "#f5a623",
      bigNumber: "72%",
      bigLabel: "Chargeback Win Rate",
      trend: "↑ 3% vs last month",
      trendColor: "#1ae88c",
      bottomLabel: "Avg resolution",
      bottomValue: "3.8h",
    } as PanelData,
  },
  {
    icon: Gamepad2,
    name: "iGaming & Sports Betting",
    desc: "Regulated from every angle. Player verification, AML monitoring, fraud review, responsible gambling compliance, and 24/7 multilingual support. Your operations team needs to understand both the player experience and the compliance obligations behind it.",
    includes: "Online casino operators, sports betting platforms, iGaming providers, fantasy sports.",
    teams: ["Frontline Support", "Fraud & Risk", "Identity Operations"],
    panel: {
      headerLabel: "AML Alerts",
      badgeText: "3 Flagged",
      badgeColor: "#f0544c",
      bigNumber: "18",
      bigLabel: "Players Under Review",
      trend: "4 new today",
      trendColor: "#f5a623",
      bottomLabel: "Avg review time",
      bottomValue: "22 min",
    } as PanelData,
  },
  {
    icon: Search,
    name: "Fraud & Risk Platforms",
    desc: "Your product fights fraud. But you still need humans to run internal ops: alert review, investigation support, customer onboarding, and the operational feedback loops that make your detection engine smarter over time.",
    includes: "Fraud prevention platforms, risk scoring, AML tools, fraud and compliance vendors.",
    teams: ["Fraud & Risk Operations", "Frontline Support"],
    panel: {
      headerLabel: "Alert Pipeline",
      badgeText: "Live",
      badgeColor: "#1ae88c",
      bigNumber: "312",
      bigLabel: "Alerts Reviewed Today",
      trend: "94% within SLA",
      trendColor: "#1ae88c",
      bottomLabel: "False positive rate",
      bottomValue: "11%",
    } as PanelData,
  },
  {
    icon: UserCheck,
    name: "Identity & Verification",
    desc: "You sell trust. Your internal operations need to reflect that. Verification workflows, customer onboarding, documentation quality: every process needs to be as rigorous as the product you deliver.",
    includes: "IDV providers, KYC/KYB platforms, 2FA/MFA providers, onboarding technology.",
    teams: ["Identity Operations", "Fraud & Risk Operations"],
    panel: {
      headerLabel: "KYC Queue",
      badgeText: "6 Pending",
      badgeColor: "#f5a623",
      bigNumber: "3/5",
      bigLabel: "Verification Steps Done",
      trend: "Liveness check pending",
      trendColor: "#f5a623",
      bottomLabel: "Avg completion",
      bottomValue: "8 min",
      progressPercent: 60,
    } as PanelData,
  },
];

const IndustryPanel = ({ panel }: { panel: PanelData }) => (
  <div
    className="rounded-xl shrink-0 w-[220px] self-start"
    style={{ background: "#0c1a1f", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
  >
    <div className="flex items-center justify-between px-4 pt-4 pb-2">
      <span className="text-[10px] font-semibold uppercase tracking-[1px]" style={{ color: "#7e9aa8" }}>
        {panel.headerLabel}
      </span>
      <span
        className="text-[9.5px] font-semibold px-2 py-[3px] rounded-md"
        style={{ background: `${panel.badgeColor}20`, color: panel.badgeColor }}
      >
        {panel.badgeText}
      </span>
    </div>
    <div className="text-center px-4 py-3">
      <div className="text-3xl font-bold tracking-tight" style={{ color: "#e8edf0" }}>
        {panel.bigNumber}
      </div>
      <div className="text-[10px] uppercase tracking-[0.8px] font-medium mt-1" style={{ color: "#4a6a78" }}>
        {panel.bigLabel}
      </div>
      <div className="text-[10.5px] font-medium mt-1.5" style={{ color: panel.trendColor }}>
        {panel.trend}
      </div>
      {panel.progressPercent != null && (
        <div className="mt-2.5 mx-auto w-4/5 h-[5px] rounded-full overflow-hidden" style={{ background: "#1a2e38" }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${panel.progressPercent}%`, background: panel.trendColor }}
          />
        </div>
      )}
    </div>
    <div className="h-px mx-3" style={{ background: "rgba(255,255,255,0.06)" }} />
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-[10.5px]" style={{ color: "#4a6a78" }}>{panel.bottomLabel}</span>
      <span className="text-[11.5px] font-bold" style={{ color: "#e8edf0" }}>{panel.bottomValue}</span>
    </div>
  </div>
);

const Industries = () => (
  <>
    <SEO title="Industries | Fraud Shift" description="Operational teams for fintech, payments, iGaming, fraud platforms, and identity verification companies. Built for industries where compliance and trust are non-negotiable." path="/industries" />
    <section className="dark-section pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Industries</motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6">
          Built for industries where trust is the product.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed">
          We serve the industries where operational mistakes have consequences: regulatory fines, fraud losses, license revocation, or broken customer trust.
        </motion.p>
      </div>
    </section>

    {industries.map((ind, idx) => (
      <section key={ind.name} className={idx % 2 === 0 ? "bg-background" : "bg-alt"}>
        <div className="container-narrow py-10 md:py-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <ind.icon size={24} className="text-accent" />
                <h2 className="text-2xl md:text-3xl font-extrabold">{ind.name}</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl leading-relaxed mb-4">{ind.desc}</p>
              <p className="text-sm text-secondary mb-4"><span className="font-semibold">Includes:</span> {ind.includes}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-muted-foreground mr-1">Best-fit teams:</span>
                {ind.teams.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent">{t}</span>
                ))}
              </div>
            </div>
            <IndustryPanel panel={ind.panel} />
          </motion.div>
        </div>
      </section>
    ))}

    <section className="dark-section">
      <div className="container-narrow section-padding text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">See a fit? Let's talk about your workflows.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-4 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all">
          Talk to an Operator <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default Industries;
