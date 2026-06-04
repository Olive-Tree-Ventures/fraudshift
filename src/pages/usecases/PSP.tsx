import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const PSP = () => (
  <>
    <SEO
      title="PSP & Payment Gateway Operations | Fraud Shift"
      description="Embedded fraud review, dispute operations, and KYB onboarding teams for payment service providers and payment gateways. Recruited from Serbia's payments operations ecosystem."
      path="/use-cases/psp-payments"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Use Case: PSPs & Payment Gateways
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          Your rules engine keeps getting better. The cases that survive it keep getting harder.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed text-lg mb-10">
          Embedded fraud review, dispute operations, and KYB onboarding teams for payment service providers and payment gateways. Recruited from Serbia's payments operations ecosystem, managed with documented SLAs and QA from day one.
        </motion.p>
        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
          <p className="text-primary-foreground/50 text-sm mb-4">
            Tell us your workflows, volumes, and timeline. We'll come back with a team recommendation and launch plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all text-base"
          >
            Design my team <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Three Forces */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">The operating reality</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 max-w-2xl">
            Three forces are converging on PSP operations right now.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              label: "01",
              title: "Payments fraud is more sophisticated than the tools designed to catch it.",
              stat: "US card fraud losses reached $12.5B in 2024. The cases that survive automated detection are the ones requiring analyst judgment.",
              body: "Card testing at scale. BIN attacks cycling through merchant endpoints. Synthetic merchant applications and transaction laundering designed to look like legitimate volume. Friendly fraud and first-party misuse running through the chargeback process. Real-time payment rails have compressed the intervention window to seconds. The alerts that clear the rules engine are the ones where a human decision separates a recoverable loss from a written-off one."
            },
            {
              label: "02",
              title: "Card networks and regulators want to see the discipline behind the rules engine.",
              stat: "Visa VAMP and Mastercard's equivalent compliance programs evaluate operational documentation, not just fraud rates.",
              body: "PSD3 tightens fraud liability across EU payments, shifting more responsibility onto PSPs and their acquirers. Sponsor bank scrutiny for embedded finance and BaaS-adjacent payment companies is intensifying, with documented operational controls becoming a baseline expectation. Reg E enforcement on dispute timeliness and Reg E error resolution require process discipline that a rules engine alone cannot demonstrate. The audit is about what the humans behind the queues are doing, and how well it is documented."
            },
            {
              label: "03",
              title: "AI reduces the volume. It raises the stakes on what remains.",
              stat: "Klarna replaced 700 support staff with AI, then rebuilt those roles when it became clear that judgment-intensive cases required human oversight.",
              body: "Rules engines and ML models compress the easy work. High-value disputes, complex fraud investigations, and sponsor-bank-escalated KYB reviews land on analyst desks because the system flagged them as requiring a decision it was built to defer. The average difficulty of each case goes up as automation improves. Fraud analyst headcount in payments is being restructured, not eliminated, and the analysts who remain need to be better."
            }
          ].map((force, i) => (
            <motion.div
              key={force.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="space-y-4"
            >
              <span className="font-mono text-xs text-accent tracking-widest">{force.label}</span>
              <h3 className="text-lg font-bold text-foreground leading-snug">{force.title}</h3>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed border-l-2 border-accent pl-3">{force.stat}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{force.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What We Run */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">What we run</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl">
            Operations built for the queues payment companies actually run.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Four service lines, prioritised for the workflows that matter most to PSPs and payment gateways. Fraud ops leads. Everything else supports it.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Fraud and Risk Operations",
              subtitle: "Alert Triage, Investigation, Manual Review",
              body: "Alert triage, investigation support, escalation governance, and manual review decisions. Fraud Shift analysts work the cases that survive the rules engine: the ones with ambiguous signals, high transaction values, and network-escalated patterns that require a documented decision rather than an automated disposition. Every case logged, every decision defensible, every escalation path documented to the standard a card network compliance review or sponsor bank audit expects.",
              kpi: "Catch rate and false positive rate tracked weekly. Alert backlog age and SLA adherence reported against agreed thresholds."
            },
            {
              number: "02",
              title: "Dispute Operations",
              subtitle: "Intake, Evidence, Deadline Management",
              body: "Intake, evidence gathering, packet assembly, and deadline tracking across Visa, Mastercard, and network-specific dispute workflows. Fraud Shift runs dispute queues with the process discipline that win rates require: the right evidence in the right format, submitted before the deadline, with the documentation chain that supports a reversal at arbitration. Every missed deadline is lost revenue and a weakened position in future network reviews.",
              kpi: "Response rate and win rate tracked per reason code. Deadline adherence at 100%. Documentation audit-ready for network review."
            },
            {
              number: "03",
              title: "Identity Operations",
              subtitle: "KYB Merchant Onboarding",
              body: "Merchant onboarding, KYB document review, beneficial ownership verification, and sponsor bank audit trail discipline. PSP KYB operates under requirements that consumer KYC operations are designed to miss: business verification, UBO screening, ongoing monitoring, and the documentation depth that satisfies both network compliance programs and sponsor bank due diligence cycles. Fraud Shift runs KYB with the audit-readiness that a payments license depends on.",
              kpi: "Onboarding SLA met. Full audit trail per merchant record. Escalation rate within agreed thresholds."
            },
            {
              number: "04",
              title: "Frontline Support",
              subtitle: "Merchant Support and Compliance Triage",
              body: "Merchant support and ticket triage with embedded compliance flag handling. Payment queries, dispute status, and onboarding follow-ups handled by analysts trained to identify and escalate compliance signals inside support interactions.",
              kpi: "SLA met across channels. Compliance escalation rate documented and audit-ready."
            }
          ].map((service, i) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              variants={fadeUp}
              className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10"
            >
              <div>
                <span className="font-mono text-3xl font-bold text-accent/30">{service.number}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm font-mono text-accent tracking-wide">{service.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.body}</p>
                <p className="text-sm text-foreground/70 font-medium border-l-2 border-accent/40 pl-3 leading-relaxed">
                  {service.kpi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Belgrade */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 p-8 rounded-xl bg-background border border-border"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Why Belgrade</p>
          <h3 className="text-lg font-bold text-foreground mb-3">Two decades of payments operations infrastructure.</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            FIS has run payments and risk operations in Belgrade since 2003, with over 550 professionals across payments infrastructure, risk, and compliance. NCR invested $100M in Europe's largest technology campus in Belgrade in 2011, scaling to 4,000+ professionals running multilingual transaction support across 60 countries. The analysts Fraud Shift recruits arrive trained in SLA-driven execution, dispute workflows, and the process discipline that payments operations require. This is payments-native talent, built by the companies that run the infrastructure your business depends on.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Fraud Shift */}
    <section className="dark-section-deep">
      <div className="container-narrow section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl space-y-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Why Fraud Shift</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">PSP-relevant volume. PSP-relevant quality discipline.</h2>
          </div>

          <p className="text-primary-foreground/80 leading-relaxed text-lg">
            The Snappt operation demonstrates what fraud review looks like at payments scale: 92 analysts, processing 11,000 fraud decisions per day at a sub-0.2% false positive rate, running 24/7, with an average analyst tenure of 2.5-3 years. The throughput proves capacity. The false positive rate proves quality discipline at volume. The tenure proves that the operation is stable, something every PSP buyer knows matters when fraud analyst churn resets institutional knowledge on a rolling basis.
          </p>

          <p className="text-primary-foreground/65 leading-relaxed">
            Our founder built TeleSign's Serbian operation from the ground up, scaling from $5M to $450M in revenue. TeleSign pioneered two-factor authentication and identity verification for Microsoft, Google, and the world's largest platforms. TeleSign's Phone ID scoring became a foundational tool for fraud teams across payments and identity globally.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Managed Teams</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                A fully staffed fraud, dispute, or KYB operation embedded in your tools and workflows. Trained on your decision thresholds, managed with documented QA and SLA reporting from day one. Built for PSPs that need operational capacity without adding to their internal management overhead.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Embedded Talent</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                Senior analysts placed directly into your existing team. You own the workflow and the decisions. Fraud Shift handles sourcing, vetting, and retention. Built for PSPs with a strong internal ops structure that needs to add specialist capacity or cover a specific queue.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-primary-foreground/50 text-sm mb-4">
              Tell us your workflows, volumes, and timeline. We'll come back with a team recommendation and launch plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all text-base"
            >
              Design my team <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default PSP;
