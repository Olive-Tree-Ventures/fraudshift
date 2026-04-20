import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import belgradeHero from "@/assets/belgrade-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const About = () =>
<>
    <SEO title="Our Story | Fraud Shift" description="Founded by operators who scaled TeleSign from $5M to $450M. Fraud Shift builds embedded fraud and compliance operations teams from Belgrade's talent ecosystem." path="/about" />
    {/* Hero */}
    {/* Hero */}
    <section
      className="pt-32 pb-16 md:pt-44 md:pb-24 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 26, 31, 0.88), rgba(12, 26, 31, 0.92)), url(${belgradeHero})`,
        color: 'hsl(var(--primary-foreground))'
      }}
    >
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Our Story</motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6">
          Built by operators. Born in Belgrade.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed">
          Fraud Shift exists because fraud and compliance operations are getting harder, not easier. Fraud is accelerating. $12.5B in US losses, deepfakes up 1,100%, synthetic identities built in minutes. Regulation is tightening. DORA is live, PSD3 is coming, and sponsor banks are demanding documented controls. And the talent to run these workflows at scale is genuinely hard to find.
        </motion.p>
      </div>
    </section>

    {/* Founder Story */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The Founder Story</h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
            Before Fraud Shift, our founder built <span className="font-bold text-accent">TeleSign</span>'s Serbian operation from the ground up, helping scale the company from $5M to $450M in revenue. TeleSign pioneered two-factor authentication and identity verification for Microsoft, Google, and the world's largest platforms. Its Phone ID scoring product became a foundational tool for fraud teams globally. That operation was built in Belgrade.
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            That same playbook has since powered fraud and compliance operations for <span className="font-bold text-accent">Sift</span> ($20M to $150M ARR), <span className="font-bold text-accent">Snappt</span> (70-person fraud analyst operation through a $100M raise), and <span className="font-bold text-accent">SEON</span> ($80M ARR, 80%+ growth, 20-person embedded team today through our sister company Sales Clover). Through Sales Clover, we have spent years running growth and operations teams for fraud prevention and identity companies, giving us a day-to-day understanding of our clients' world that no generic staffing company can replicate.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Belgrade Talent Ecosystem */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The Belgrade Talent Ecosystem</h2>
          <p className="text-foreground font-semibold mb-4">This is a talent ecosystem play. Built different from outsourcing by design.</p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-6">
            Belgrade's fraud and compliance talent pool was built by the companies that created the infrastructure your business runs on. FIS has run payments and risk operations here since 2003. 550+ professionals across payments infrastructure, risk, and compliance. NCR invested $100M in Europe's largest technology campus here in 2011, scaling to 4,000+ professionals running multilingual transaction support in 20+ languages across 60 countries. TeleSign, SEON, and IxoPay added fraud prevention, identity verification, and payment orchestration expertise.
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-6">
            That is over two decades of scaled operations producing thousands of professionals trained in SLA-driven execution, multilingual support, and the operational rigor that regulated industries demand. The talent pool covers English, German, and major European languages natively, plus Mandarin, Japanese, Spanish, and Portuguese from a workforce with deep multilingual hiring capability spanning EMEA, LATAM, and APAC coverage.
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Our teams ramp faster because they have done the work before. They stay longer because we invest in career development and competitive compensation. And they perform at a level that generic staffing simply cannot replicate.
          </p>
        </motion.div>
      </div>
    </section>

    {/* How We Operate */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">How We Operate</h2>
          <p className="text-foreground font-semibold mb-6">An operating partner. Beyond staffing.</p>
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

    {/* Human-in-the-Loop */}
    <section className="dark-section-deep">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The Human-in-the-Loop Company</h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-4">
            There is a narrative in the market that AI will replace operations teams. The reality is more nuanced, and the companies that get it wrong will pay for it.
          </p>
          <p className="text-primary-foreground/65 leading-relaxed mb-4">
            AI is transforming fraud and compliance operations. It is automating first-layer triage, compressing KYC timelines, and reducing false positives by up to 90%. But it is also changing where humans are needed, not eliminating the need. Klarna laid off 700 support staff, then rebuilt redesigned oversight roles when they realized AI alone could not handle judgment-intensive cases. Regulators across DORA, PSD3, and the GENIUS Act are making it explicit: AI-driven compliance tools require strong human oversight, clear governance, and thorough documentation.
          </p>
          <p className="text-primary-foreground/65 leading-relaxed mb-4">
            The companies that win are not the ones that automate humans out. They are the ones that put the right humans in the loop.
          </p>
          <p className="text-primary-foreground/65 leading-relaxed mb-4">
            We do not compete with AI. We complement it. Your fraud detection model catches anomalies. Our analysts investigate the cases that need human judgment. Your KYC platform flags documents. Our reviewers make the verification decisions that auditors scrutinize. Your dispute system tracks deadlines. Our team builds the evidence packets that win.
          </p>
          <p className="text-accent font-semibold text-lg leading-relaxed">
            That is what we mean by fraud and compliance operations. The operating standard that makes trust possible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Olive Tree */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h3 className="text-xl font-bold mb-3">Part of Olive Tree Ventures</h3>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Fraud Shift is a business unit of Olive Tree Ventures, which also operates Sales Clover, an embedded growth team service for B2B companies. We share recruiting infrastructure, operational playbooks, and a management culture refined across multiple business units and geographies.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all">
            Talk to an Operator <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </>;


export default About;