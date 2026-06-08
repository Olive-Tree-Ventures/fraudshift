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
  { value: "92", label: "analysts" },
  { value: "11,000", label: "fraud decisions/day" },
  { value: "<0.2%", label: "false positive rate" },
  { value: "24/7", label: "coverage" },
  { value: "2.5–3yr", label: "avg analyst tenure" },
];

const Crypto = () => (
  <>
    <SEO
      title="Crypto & Stablecoin Fraud, KYC, and AML Operations | Fraud Shift"
      description="Embedded fraud, KYC, and AML operations teams for crypto and stablecoin companies. Sanctions review, EDD, transaction monitoring, and SAR case workup with audit-grade case documentation."
      path="/use-cases/crypto-stablecoin"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Use Case: Crypto & Stablecoin
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          Audit-ready fraud, KYC, and AML operations for crypto and stablecoin teams.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed text-lg mb-10">
          Embedded teams running the sanctions, EDD, KYC, and transaction monitoring queues your blockchain analytics and IDV tooling generates. Every decision documented to hold up under BSA exam, sponsor bank diligence, and licensing review.
        </motion.p>
        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
          <p className="text-primary-foreground/50 text-sm mb-4">
            Tell us your workflows, volumes, and timeline. We will come back with a team recommendation and launch plan.
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
      eyebrow="PROOF"
      stats={snapptStats}
      description="Fraud Shift built and ran a 92-person fraud review operation processing 11,000 decisions per day with audit-grade case documentation discipline. The same operational rigor that satisfied Snappt's institutional diligence is what a BSA examiner, sponsor bank, or licensing authority looks for: documented queues, defensible decisions, traceable escalations."
    />

    {/* Service Lines */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 max-w-2xl">
            The human review layer behind your tooling.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Fraud and Risk Operations",
              roles: "Fraud Ops Analyst · Risk Investigator · On-Chain Alert Reviewer · QA · Team Lead",
              body: "Fiat rails fraud, ATO, mule patterns, and on-chain alert triage. The cases your tooling cannot decide on its own.",
              weOwn: "Queue review, case documentation, escalation routing.",
              kpi: "Decision accuracy · SLA adherence · Backlog age · False positive reduction"
            },
            {
              number: "02",
              title: "Identity Operations",
              roles: "KYC Analyst · KYB Analyst · EDD Specialist · Document Review · QA · Team Lead",
              body: "KYC, KYB, and EDD review queues downstream of Sumsub, Persona, or Veriff. The manual review tier where exam risk lives.",
              weOwn: "KYC and KYB workflows, EDD case workup, audit trail maintenance.",
              kpi: "Throughput · QA score · SLA compliance · Audit trail completeness"
            },
            {
              number: "03",
              title: "AML and Transaction Monitoring Operations",
              roles: "AML Analyst · TM Reviewer · Sanctions Specialist · SAR Workup Analyst · QA · Team Lead",
              body: "Alert triage, sanctions hit review, Travel Rule exceptions, and SAR case workup. Your BSA officer signs and files.",
              weOwn: "Alert clearance, SAR evidence assembly and narrative drafting, sanctions review.",
              kpi: "Alert clearance rate · SLA compliance · Case quality · SAR workup turnaround"
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
                  <p className="text-sm font-mono text-accent tracking-wide">{service.roles}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.body}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">We own:</span> {service.weOwn}
                </p>
                <p className="text-sm text-foreground/70 font-medium italic border-l-2 border-accent/40 pl-3 leading-relaxed">
                  {service.kpi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Talent Bench */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 p-8 rounded-xl bg-background border border-border"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Talent</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <h3 className="text-lg font-bold text-foreground">Operators who have run these queues before.</h3>
            <p>
              Fraud Shift teams are recruited from a fraud and compliance operations talent pool built over two decades by enterprise payments infrastructure and identity verification companies. Analysts arrive fluent in alert queues, KYC workflows, SAR documentation discipline, and the audit trail standards regulated industries demand.
            </p>
            <p className="font-mono text-sm text-accent">
              20+ languages · 24/7 coverage · 2.5–3yr average analyst tenure · AI-native workflows from day one
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
            Two ways to engage.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Managed Teams",
              body: "We recruit, onboard, and run the team end to end. SOPs, QA scoring, SLA tracking, and weekly reporting from day one. You set the goals. We run the operation."
            },
            {
              title: "Embedded Talent",
              body: "Dedicated hires matched to your workflows. Fast ramp, ongoing recruiting pipeline, replacement coverage. Your management, our talent."
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
          <p className="text-accent/80 text-sm italic">
            Your next BSA exam will not wait for your next hire.
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let's design the right team.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Tell us your workflows, volumes, and timeline. We will come back with a team recommendation and launch plan.
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

export default Crypto;
