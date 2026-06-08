import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import TrustStrip from "@/components/TrustStrip";
import ProofStatBand from "@/components/ProofStatBand";
import snapptLogo from "@/assets/logos/snappt-strip.png";
import seonLogo from "@/assets/logos/seon.svg";
import ixopayLogo from "@/assets/logos/ixopay.png";
import ncrLogo from "@/assets/logos/ncr.png";
import telesignLogo from "@/assets/logos/telesign.png";
import fisLogo from "@/assets/logos/fis.png";
import fraudioLogo from "@/assets/logos/fraudio.png";
import pragmaticLogo from "@/assets/logos/pragmatic.png";
import facesignLogo from "@/assets/logos/facesign.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const snapptTrustedBy = { name: "Snappt", src: snapptLogo };

const operatorsFrom = [
  { name: "SEON", src: seonLogo },
  { name: "IxoPay", src: ixopayLogo },
  { name: "NCR", src: ncrLogo },
  { name: "Telesign", src: telesignLogo },
  { name: "FIS", src: fisLogo },
  { name: "Fraudio", src: fraudioLogo },
  { name: "Pragmatic Play", src: pragmaticLogo },
  { name: "FaceSign", src: facesignLogo },
];

const snapptStats = [
  { value: "92", label: "analysts at peak" },
  { value: "11,000", label: "fraud decisions/day" },
  { value: "<0.2%", label: "false positive rate" },
  { value: "24/7", label: "coverage" },
  { value: "2.5–3yr", label: "avg analyst tenure" },
];

const PSP = () => (
  <>
    <SEO
      title="Fraud & Dispute Operations for PSPs & Payment Gateways | Fraud Shift"
      description="Embedded fraud review, dispute operations, and KYB onboarding for PSPs and payment gateways. SLA-driven, audit-ready, running in weeks. Built and proven at payments scale."
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
          Embedded fraud review, dispute operations, and KYB onboarding for PSPs and payment gateways. SLA-driven, audit-ready, running in weeks.
        </motion.p>
        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
          <p className="text-primary-foreground/50 text-sm mb-4">
            Tell us your queues, volumes, and SLAs. We'll come back with a team structure and a launch plan inside 5 business days.
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

    {/* Trust Strip */}
    <TrustStrip trustedBy={snapptTrustedBy} operatorsFrom={operatorsFrom} />

    {/* Proof Stat Band */}
    <ProofStatBand
      eyebrow="Built and proven at payments scale."
      stats={snapptStats}
      description="Fraud Shift built and ran Snappt's fraud review operation from 4 analysts to 92, through their $100M raise from Insight Partners. 4M+ total decisions. The throughput proves capacity. The false positive rate proves discipline. The tenure proves the operation stays stable when analyst churn would otherwise reset institutional knowledge every quarter."
    />

    {/* Service Lines */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">What we run</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl">
            What we run for PSPs.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Four service lines built for the queues PSPs and payment gateways actually run. Fraud ops leads. Everything else supports it.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Fraud & Risk Operations",
              subtitle: "Alert Triage, Investigation, Manual Review",
              body: "The cases that survive your rules engine: ambiguous signals, high-value transactions, network-escalated patterns. Every decision logged, every escalation traceable to the standard a card network compliance review expects.",
              kpi: "Catch rate, false positive rate, alert backlog age, SLA adherence — reported weekly."
            },
            {
              number: "02",
              title: "Dispute Operations",
              subtitle: "Intake, Evidence, Deadline Management",
              body: "Intake, evidence assembly, deadline tracking across Visa, Mastercard, and network-specific workflows. The right evidence in the right format, submitted before the deadline. Every missed deadline is lost revenue and a weaker position in future reviews.",
              kpi: "Win rate by reason code, response rate, 100% deadline adherence. Documentation audit-ready."
            },
            {
              number: "03",
              title: "KYB Merchant Onboarding",
              subtitle: "Business Verification, UBO, Sponsor Bank Readiness",
              body: "Business verification, UBO screening, beneficial ownership, and the documentation depth that satisfies both network compliance and sponsor bank due diligence cycles.",
              kpi: "Onboarding SLA, full audit trail per merchant, escalation rate within agreed thresholds."
            },
            {
              number: "04",
              title: "Frontline Merchant Support",
              subtitle: "Compliance-Literate Ticket Triage",
              body: "Ticket triage with embedded compliance flag handling. Payment queries, dispute status, and onboarding follow-ups handled by analysts trained to escalate compliance signals correctly the first time.",
              kpi: "SLA across channels. Compliance escalation rate audit-ready."
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
                <p className="text-sm text-foreground/70 font-medium italic border-l-2 border-accent/40 pl-3 leading-relaxed">
                  {service.kpi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Belgrade */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 p-8 rounded-xl bg-background border border-border"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Built on Europe's deepest fintech operations bench</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              The analysts we recruit arrive payments-native. They've worked inside the dispute queues, KYC workflows, and fraud review operations that power global payments — at scale, under regulatory pressure, with the SLA discipline regulated finance demands.
            </p>
            <p>
              That bench exists because the companies that built modern payments infrastructure have been operating from Serbia for over two decades. FIS has run payments and risk operations here since 2003 — 550+ professionals across infrastructure, risk, and compliance. NCR invested $100M in Europe's largest tech campus here in 2011, scaling to 4,000+ professionals supporting transactions in 20+ languages across 60 countries.
            </p>
            <p>
              Two decades of operational infrastructure, built by the companies whose rails your business runs on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Two ways to engage */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Two ways to engage</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 max-w-2xl">
            Pick the model that fits your ops structure.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Managed Teams",
              body: "Fully staffed fraud, dispute, or KYB operations embedded in your tools. SOPs, QA, and SLA reporting from day one. Built for PSPs that need capacity without adding management overhead."
            },
            {
              title: "Embedded Talent",
              body: "Senior analysts placed into your existing team. You own the workflow. We handle sourcing, vetting, and retention. Built for PSPs with strong internal ops who need specialist capacity or queue coverage."
            }
          ].map((model, i) => (
            <motion.div
              key={model.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              variants={fadeUp}
              className="p-6 rounded-xl bg-background border border-border space-y-3"
            >
              <h3 className="text-lg font-bold text-foreground">{model.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{model.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Closing CTA */}
    <section className="dark-section-deep">
      <div className="container-narrow section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Your next card network review is closer than your next hire.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Tell us your queues, volumes, and SLAs. We'll come back with a team structure and a launch plan inside 5 business days.
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
  </>
);

export default PSP;
