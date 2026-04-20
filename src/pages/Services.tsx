import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield, Fingerprint, MessageCircle, Scale, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const serviceTeams = [
  {
    icon: Shield,
    id: "fraud",
    title: "Fraud & Risk Operations",
    problem: "AI catches patterns. But deepfakes, synthetic identities, and novel attack vectors evolve weekly. Your rules engine flags thousands of alerts, but someone has to investigate the cases that need human judgment.",
    solution: "Human-in-the-loop fraud operations. Triage, investigations, manual review decisions, and escalation governance. Your risk team defines rules. We run the queue with consistency and documentation discipline.",
    roles: ["Fraud Ops Analyst", "Risk Ops Investigator", "Exceptions Analyst", "QA / Trainer", "Team Lead"],
    weOwn: ["Alert queue review and case documentation", "Investigation support and escalation routing", "QA and coaching for decision consistency"],
    kpis: "Decision accuracy, SLA adherence, backlog size/age, escalation rate, false positive reduction",
  },
  {
    icon: Fingerprint,
    id: "identity",
    title: "Identity Operations",
    problem: "Every new customer is a compliance event. Regulatory scrutiny is intensifying. Sponsor banks demand documented KYC controls. Synthetic identities now pass basic verification in minutes.",
    solution: "Onboarding and verification operations with audit-ready process rigor. Document review, identity verification, and compliance workflows built to scale throughput without sacrificing quality.",
    roles: ["KYC Analyst", "KYB Analyst", "Document Review Specialist", "Onboarding Ops Associate", "QA / Team Lead"],
    weOwn: ["Document review and verification workflows", "Escalation handling and audit trail maintenance", "QA scoring and continuous process improvement"],
    kpis: "Throughput, Accuracy/QA score, SLA compliance, Rework rate",
  },
  {
    icon: Scale,
    id: "disputes",
    title: "Dispute Operations",
    problem: "Dispute volumes are rising. Deadlines are unforgiving. Every case that slips means lost revenue and weakened network standing. Your finance team is asking why the win rate is falling.",
    solution: "End-to-end dispute operations. Intake, evidence gathering, packet assembly, deadline management, and outcome reporting.",
    roles: ["Disputes / Chargeback Specialist", "Case Manager", "Evidence / Documentation Specialist", "QA / Trainer", "Team Lead"],
    weOwn: ["Dispute intake, evidence gathering, and packet assembly", "Deadline tracking, escalation management, and stakeholder comms", "QA and outcome reporting: win rate, backlog, SLA compliance"],
    kpis: "Backlog time, SLA compliance, win rate, time-to-resolution",
  },
  {
    icon: MessageCircle,
    id: "frontline",
    title: "Frontline Support",
    problem: "Your support queue grows faster than your team. But in regulated industries, support is not just answering questions. It is triaging transaction issues. Escalating AML flags. Managing account holds. Every interaction has compliance implications.",
    solution: "Payments-literate, compliance-aware support teams with queue discipline, SLA tracking, knowledge management, and escalation governance.",
    roles: ["Tier 1 Payments/Product Support Specialist", "Tier 2 Specialist (escalation, investigations)", "Case Coordinator", "Knowledge / QA Lead", "Team Lead"],
    weOwn: ["Ticket intake, triage, and escalation routing", "Knowledge base management and response quality", "QA scoring, coaching, and weekly performance reporting"],
    kpis: "First response time, SLA attainment, CSAT, backlog size/age, escalation rate, compliance flag accuracy",
  },
];

const steps = [
  { num: "01", title: "Scope", desc: "We map your workflows, volumes, tooling, SLAs, and compliance requirements." },
  { num: "02", title: "Build", desc: "We recruit from our talent network, onboard to your systems, and train on your playbooks." },
  { num: "03", title: "Operate", desc: "Your team runs with SOPs, QA scoring, SLA tracking, and weekly reporting." },
  { num: "04", title: "Scale", desc: "Add seats, languages, shift coverage, and specialization as volume grows." },
];

const Services = () => (
  <>
    <SEO title="Services | Fraud Shift" description="Fraud operations, identity verification, dispute management, and frontline support teams built for fintech and payments companies. Managed with SLAs, QA, and compliance rigor." path="/services" />
    {/* Hero */}
    <section className="dark-section pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Services</motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6">
          Fraud and compliance operations, designed for your workflows.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed">
          Every team is recruited from Serbia's fraud and compliance talent ecosystem, managed with SLAs and QA, and built to produce auditable, defensible operations from day one.
        </motion.p>
      </div>
    </section>

    {/* Team sections */}
    {serviceTeams.map((team, idx) => (
      <section key={team.id} id={team.id} className={idx % 2 === 0 ? "bg-background" : "bg-alt"}>
        <div className="container-narrow section-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="dark-section-deep rounded-lg p-6 md:p-8 mb-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">The Problem</p>
            <p className="text-primary-foreground/75 leading-relaxed">{team.problem}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <team.icon size={24} className="text-accent" />
              <h2 className="text-2xl md:text-3xl font-extrabold status-dot">{team.title}</h2>
            </div>

            <h3 className="text-lg font-bold mb-2">What we build</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">{team.solution}</p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Roles</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {team.roles.map((r) => <li key={r}>• {r}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">What we own</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {team.weOwn.map((w) => <li key={w}>• {w}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Example KPIs</h4>
                <p className="text-sm text-muted-foreground">{team.kpis}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* Launch a Team in Weeks */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-extrabold mb-16 text-center"
        >
          Launch a team in weeks, not quarters.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-accent flex items-center justify-center font-mono font-bold text-accent text-lg mb-4">
                {step.num}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="dark-section">
      <div className="container-narrow section-padding text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to scope your team?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-4 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all">
          Talk to an Operator <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default Services;
