import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProofStatBand from "@/components/ProofStatBand";
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
  { value: "4 → 92", label: "analysts" },
  { value: "11,000", label: "fraud decisions/day" },
  { value: "<0.2%", label: "false positive rate" },
  { value: "24/7", label: "coverage" },
];

const About = () => (
  <>
    <SEO
      title="Our Story | Fraud Shift"
      description="Founded by operators who scaled TeleSign from $5M to $450M. Fraud Shift builds and runs embedded fraud and compliance operations teams proven at scale."
      path="/about"
    />

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Our Story
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6">
          Built by operators. Proven at scale.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed mb-10">
          Fraud and compliance operations get harder every year. Fraud is accelerating, with $12.5B in US losses, deepfakes up 1,100%, and synthetic identities built in minutes. Regulation is tightening as DORA goes live, PSD3 approaches, and sponsor banks demand documented controls. The people who can run these workflows at scale stay genuinely hard to find. Fraud Shift exists to run that human layer, and we have built and scaled it before.
        </motion.p>
        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
          >
            Talk to an Operator <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* The Human-in-the-Loop Company */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The Human-in-the-Loop Company</h2>
          <p className="text-foreground font-semibold mb-4">Where AI ends, judgment begins.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There is a narrative in the market that AI will replace operations teams. The reality is more nuanced, and the companies that get it wrong will pay for it.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI is transforming fraud and compliance operations. It automates first-layer triage, compresses KYC timelines, and reduces false positives by up to 90%. It also changes where humans are needed. Klarna laid off 700 support staff, then rebuilt redesigned oversight roles once they saw that AI alone struggled with judgment-intensive cases. Regulators across DORA, PSD3, and the GENIUS Act make it explicit: AI-driven compliance tools require strong human oversight, clear governance, and thorough documentation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The companies that win put the right humans in the loop. We complement AI. Your fraud detection model catches anomalies. Our analysts investigate the cases that need human judgment. Your KYC platform flags documents. Our reviewers make the verification decisions that auditors scrutinize. Your dispute system tracks deadlines. Our team builds the evidence packets that win.
          </p>
          <p className="text-accent font-semibold text-lg leading-relaxed">
            That is what we mean by fraud and compliance operations. The operating standard that makes trust possible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Built by Operators */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Built by Operators</h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
            Before Fraud Shift, our founder built and scaled TeleSign's operation from the ground up, helping grow the company from $5M to $450M in revenue. TeleSign pioneered two-factor authentication and identity verification for Microsoft, Google, and the world's largest platforms. Its Phone ID scoring product became a foundational tool for fraud teams globally.
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            That same playbook has since powered fraud and compliance operations for Sift ($20M to $150M ARR), Snappt (a 70-person fraud analyst operation through a $100M raise), and SEON ($80M ARR, 80%+ growth, a 20-person embedded team today through our sister company Sales Clover). Through Sales Clover, we have spent years running growth and operations teams for fraud prevention and identity companies, giving us a day-to-day understanding of our clients' world that few staffing firms can claim.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Operator experience logo strip */}
    <section className="bg-background border-b border-border">
      <div className="container-narrow py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Built by operators with experience across
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
            {operatorsFrom.map((company) => (
              <img
                key={company.name}
                src={company.src}
                alt={company.name}
                className="h-5 w-auto object-contain transition-opacity duration-300"
                style={{ filter: "grayscale(100%)", opacity: 0.5 }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.5"; }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Snappt proof stats */}
    <ProofStatBand
      eyebrow="PROOF"
      stats={snapptStats}
      description="Fraud Shift built and ran a 92-person, 24/7 fraud review operation processing 11,000 decisions per day at a sub-0.2% false positive rate, through Snappt's $100M raise from Insight Partners."
    />

    {/* Why Our Teams Outperform */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Why Our Teams Outperform</h2>
          <p className="text-foreground font-semibold mb-4">A talent model built for this work specifically.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We recruit through a network built over two decades of running fraud, payments, and identity operations for companies like TeleSign, Sift, Snappt, and SEON. That network gives us access to operators who already understand transactions, compliance, and operational rigor, which lets us staff specialized roles in weeks, not quarters.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We recruit for traits over tenure: curiosity, organizational discipline, technical fluency, and attention to detail. Every analyst goes through a structured two-week fraud and compliance program before touching a live workflow, tailored to your tools, workflows, and SLAs. Training continues with a weekly coaching rhythm: QA scoring on every analyst, feedback tied to real cases, and development plans that move people from L1 to L2 to team lead. Every team member also works in AI-native workflows from day one, using tools like Claude to accelerate case research, draft investigation summaries, cross-reference signals, and generate documentation faster, while preserving the human judgment your auditors require.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Then we keep them. L1 and L2 operations roles carry high turnover across the industry, often measured in months. Our teams retain at 2 to 4 times the typical rate, the result of competitive compensation, real career paths, and a culture that treats operations work as a career. Every month an experienced analyst stays is a month your quality improves and your ramp costs drop.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our teams cover 20+ languages natively, with capability across EMEA, LATAM, and APAC, so you scale review and support across time zones as volume grows.
          </p>
        </motion.div>
      </div>
    </section>

    {/* How We Operate */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">How We Operate</h2>
          <p className="text-foreground font-semibold mb-6">An operating partner with real discipline.</p>
          <ul className="space-y-3 text-muted-foreground max-w-2xl">
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> SOPs and playbooks documented for every workflow before go-live</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> QA scoring on every team member, every week, with coaching to close gaps</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> SLA tracking and reporting delivered weekly</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> Audit-ready documentation: every decision, escalation, and exception is traceable</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> Team leads who own daily operations and escalation management</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">•</span> Retention as a discipline: competitive comp, career paths, and culture</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Part of Olive Tree Ventures */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h3 className="text-xl font-bold mb-3">Part of Olive Tree Ventures</h3>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Fraud Shift is a business unit of Olive Tree Ventures, which also operates Sales Clover, an embedded growth team service for B2B companies. We share recruiting infrastructure, operational playbooks, and a management culture refined across multiple business units and geographies.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Final CTA */}
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
            Your operations need humans in the loop.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Tell us your workflows, volumes, and timeline. We will come back with a team recommendation and launch plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all text-base"
          >
            Talk to an Operator <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
