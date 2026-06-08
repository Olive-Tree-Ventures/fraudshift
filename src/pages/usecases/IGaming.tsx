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

const IGaming = () => (
  <>
    <SEO
      title="iGaming Fraud, KYC, and Dispute Operations | Fraud Shift"
      description="Embedded fraud review, KYC/AML, and dispute operations for licensed iGaming operators and the platforms that serve them. Audit-ready, multilingual, 24/7."
      path="/use-cases/igaming"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Use Case: iGaming & Sports Betting
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          Player ops that satisfy regulators without killing conversion.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed text-lg mb-10">
          Embedded KYC, AML, fraud review, and 24/7 multilingual player support for licensed iGaming operators and the platforms that serve them.
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

    {/* Trust Strip */}
    <TrustStrip trustedBy={snapptTrustedBy} operatorsFrom={operatorsFrom} />

    {/* Proof Stat Band */}
    <ProofStatBand
      eyebrow="PROOF"
      stats={snapptStats}
      description="Fraud Shift built and ran a 92-person, 24/7 fraud review operation processing 11,000 decisions a day at audit-grade documentation discipline. The same operating standard maps to licensed player ops: queue stability through volume spikes, decisions a regulator can review, multilingual coverage as a default rather than a project."
    />

    {/* Service Lines */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 max-w-2xl">
            Three operations our teams run for iGaming.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Fraud & Risk Operations",
              roles: "Fraud Ops Analyst · Bonus Abuse Specialist · VIP Risk Analyst · QA Lead · Team Lead",
              body: "Bonus abuse, multi-accounting, collusion, arbitrage, payment fraud. Your rules engine flags the volume. Our analysts work the ambiguous cases.",
              weOwn: "Alert triage, investigation, manual review decisions, escalation routing, QA scoring.",
              kpi: "Catch rate, false positive rate, backlog age, escalation rate. Reported weekly."
            },
            {
              number: "02",
              title: "Identity Operations",
              roles: "KYC Analyst · EDD Specialist · Document Review Analyst · Onboarding Associate · QA Lead",
              body: "Age verification, KYC, source of funds, EDD on VIPs. Documented and defensible for MGA, UKGC, and US state review.",
              weOwn: "Document review, identity verification, source of funds, EDD case work, audit trails.",
              kpi: "Throughput, accuracy, SLA compliance, rework rate. Reported weekly."
            },
            {
              number: "03",
              title: "Dispute Operations",
              roles: "Disputes Specialist · Case Manager · Evidence Specialist · QA Lead · Team Lead",
              body: "Network deadlines and regulator timelines in parallel. Evidence packets that win.",
              weOwn: "Intake, evidence gathering, packet assembly, deadline tracking, outcome reporting.",
              kpi: "Win rate, time to resolution, SLA compliance, backlog age. Reported weekly."
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

        {/* Talent bench */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 p-8 rounded-xl bg-background border border-border"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Built on Europe's deepest iGaming operations bench</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Licensed operators have been running KYC, AML, fraud review, and multilingual player ops out of South East Europe for over twenty years. Two decades of regulated work under MGA, UKGC, ONJN, and US state frameworks. The world's largest live casino studios sit in the same talent market. We recruit from it.
            </p>
            <p className="font-mono text-sm text-accent">
              20+ languages · 24/7 coverage · 2.5–3yr average analyst tenure
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
              body: "We recruit, onboard, and run the team. SOPs, QA scoring, SLA tracking, weekly reporting from day one. You set the goals. We run the operation."
            },
            {
              title: "Embedded Talent",
              body: "We recruit and place. You manage day to day. Fast ramp, dedicated hires, ongoing pipeline."
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
            Match day volume spikes faster than your hiring pipeline.
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Design the team your license requires.
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

export default IGaming;
