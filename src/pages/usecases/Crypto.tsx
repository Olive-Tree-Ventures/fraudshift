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

const Crypto = () => (
  <>
    <SEO
      title="Crypto & Stablecoin Compliance Operations | Fraud Shift"
      description="Embedded AML/CFT operations, sanctions screening, KYC/KYB, and on-chain transaction monitoring for stablecoin issuers, crypto payment rails, and regulated exchanges. Built to GENIUS Act and BSA standards."
      path="/use-cases/crypto-stablecoin"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Use Case: Crypto & Stablecoin
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          The GENIUS Act made stablecoin issuers financial institutions. The compliance program has to match.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed text-lg mb-10">
          Embedded AML/CFT operations, sanctions screening, KYC/KYB, and on-chain transaction monitoring teams for stablecoin issuers, crypto payment rails, and regulated exchanges. Built to GENIUS Act and BSA standards. Running in weeks, built to last.
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
            Three forces are converging on crypto compliance operations right now.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              label: "01",
              title: "The regulatory clock is specific, statutory, and running.",
              stat: "The GENIUS Act was signed July 18, 2025. FinCEN and OFAC published their proposed AML/CFT and sanctions rule on April 8, 2026. The statutory implementation window is 18 months after enactment or 120 days after final regulations.",
              body: "For the first time in US law, permitted payment stablecoin issuers carry explicit BSA financial institution status, with mandatory AML/CFT and sanctions compliance programs as a condition of operation. EU MiCA brings the same standard to crypto-asset issuers and service providers across European markets. The FATF Travel Rule is expanding across VASP jurisdictions globally. Banking partners and payment rail providers are already requiring documented operational controls as a condition of continued service. The program has to be built, and built to a standard that survives examination."
            },
            {
              label: "02",
              title: "Crypto financial crime moves faster than any other vertical.",
              stat: "Sanctioned wallet exposure, mixer and bridge laundering, address poisoning, and AI-generated KYC documents are evolving faster in crypto than in any other segment because the attacker tooling is open-source and the iteration loop is fast.",
              body: "Synthetic identity rings are using crypto payment rails for cash-out at scale. Bridge exploits and mixer flows create on-chain patterns that require both traditional financial crime literacy and blockchain analytics fluency to interpret correctly. AI-generated documents are clearing KYC at onboarding with increasing regularity. The cases that reach analysts require judgment on crypto-native typologies that general-purpose AML teams are trained to miss."
            },
            {
              label: "03",
              title: "Blockchain analytics handles the surface. Analysts handle what survives.",
              stat: "Chainalysis, Elliptic, and TRM Labs automate first-layer on-chain risk scoring and compress false positive volume. The cases that remain require human judgment at its most demanding.",
              body: "Sanctions edge cases involving indirect exposure through multi-hop transactions. EDD on complex institutional counterparties with offshore structures. SAR-worthy on-chain patterns where the filing decision carries legal weight. Travel Rule compliance reviews across VASP-to-VASP transfers in multiple jurisdictions. Crypto compliance has the highest ratio of AI-automatable surface to human-judgment-dependent core of any compliance segment. The analysts at that core require both blockchain fluency and BSA-grade documentation discipline."
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
            Compliance operations built for the GENIUS Act standard.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Four service lines, prioritised for the workflows stablecoin issuers and crypto payment companies need to build first. KYC and AML ops lead. Speed to operations is built in from the start.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Identity Operations",
              subtitle: "KYC, KYB, and Enhanced Due Diligence",
              body: "Customer identification at onboarding, KYB on institutional accounts, enhanced due diligence on high-risk profiles, and ongoing monitoring under BSA and GENIUS Act requirements. Fraud Shift runs KYC and KYB workflows with the audit-trail discipline that a BSA examination requires: every decision logged, every risk classification documented, every escalation traceable. For stablecoin issuers building toward PPSI status, KYC and KYB documentation quality is the first thing an examiner will review. The program has to be built to that standard from the first customer.",
              kpi: "Onboarding SLA met. Full audit trail per customer record. EDD completion rate and escalation rate within agreed thresholds."
            },
            {
              number: "02",
              title: "Fraud and Risk Operations",
              subtitle: "Transaction Monitoring, Sanctions Screening, SAR Support",
              body: "Transaction monitoring alert triage with on-chain analytics integration, sanctions screening review and adjudication, SAR preparation support, and escalation governance across BSA-required workflows. Fraud Shift analysts train on Chainalysis, Elliptic, and TRM Labs as industry-standard tooling; blockchain analytics fluency is a baseline, not a specialty. Alert review workflows are calibrated to crypto-native typologies: mixer-adjacent flows, bridge activity, sanctioned wallet exposure at varying hop distances, and Travel Rule compliance review for VASP-to-VASP transfers. Every SAR decision is documented to the standard a FinCEN examiner expects.",
              kpi: "Alert backlog age and SLA adherence reported weekly. SAR filing rate and documentation quality tracked per workflow. Sanctions adjudication audit-ready."
            },
            {
              number: "03",
              title: "Frontline Support",
              subtitle: "Compliance-Literate Customer Operations",
              body: "Multilingual customer support across regulated markets, with the literacy to handle compliance-flagged tickets, sanctions-blocked transactions, and source-of-funds follow-ups inside a single workflow. Analysts are trained to identify compliance signals in support interactions and escalate through documented paths, rather than routing everything to a separate compliance team and breaking SLA.",
              kpi: "SLA met across channels and languages. Compliance escalation rate documented and audit-ready."
            },
            {
              number: "04",
              title: "Dispute Operations",
              subtitle: "Growing with Crypto Payment Volume",
              body: "Dispute handling for crypto payment rail operators and exchanges, covering evidence assembly and deadline management as volume and regulatory expectations grow.",
              kpi: "Response rate and documentation quality tracked per case type."
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
          <h3 className="text-lg font-bold text-foreground mb-3">Speed to operations. The clock requires it.</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Belgrade has 5,000+ payments and risk operations professionals already trained in BSA-style workflows at FIS, NCR, and TeleSign. Crypto-specific tooling — Chainalysis, Elliptic, TRM Labs — trains in days rather than months because the underlying compliance skill set is already in place. That combination is the only answer to a regulatory clock with a fixed statutory date. Language coverage adds to it: 20+ languages for KYC in the customer's language across global markets. The operational rigor comes from two decades of payments and compliance infrastructure built by the companies that run the systems regulated finance depends on.
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">We've built a 90-person audit-grade operation from zero before. The playbook is proven.</h2>
          </div>

          <p className="text-primary-foreground/80 leading-relaxed text-lg">
            The Snappt operation started with four analysts and scaled to 92, processing 11,000 decisions per day at a sub-0.2% false positive rate, 24/7, through Snappt's $100M raise from Insight Partners. Investor diligence at that level scrutinises operational discipline with the same rigour a BSA examination applies. Queue management, case documentation, QA scoring, SAR-equivalent escalation governance: the same disciplines that satisfy a compliance examiner were built and pressure-tested at scale. Building a GENIUS-Act-ready stablecoin compliance program on the same playbook is execution, not invention.
          </p>

          <p className="text-primary-foreground/65 leading-relaxed">
            Our founder built TeleSign's Serbian operation from the ground up, scaling from $5M to $450M in revenue. TeleSign pioneered identity verification at internet scale for Microsoft, Google, and the world's largest platforms. Phone ID scoring became foundational for fraud and compliance teams across every regulated industry that needed trust decisions at volume, including the financial infrastructure that crypto payment rails are now being held to the standard of.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Managed Teams</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                A full AML, sanctions, and KYC/KYB operations team, embedded in your tools and workflows, managed with BSA-grade documentation discipline from day one. The right structure for stablecoin issuers and crypto payment companies who need a compliant program running fast, without building an internal ops management layer from scratch against a regulatory deadline.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Embedded Talent</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                Senior analysts placed directly into your existing compliance team. You own the workflow and the program. Fraud Shift handles sourcing, vetting, and retention. The right structure for companies with internal compliance leadership who need to add operational capacity, blockchain analytics fluency, or specific language coverage.
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

export default Crypto;
