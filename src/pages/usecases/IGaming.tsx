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

const IGaming = () => (
  <>
    <SEO
      title="iGaming & Sports Betting Operations | Fraud Shift"
      description="Embedded player support, KYC, fraud and bonus abuse review, and AML monitoring for licensed iGaming operators. 24/7. 20+ languages. Recruited from Europe's deepest player-ops talent pool."
      path="/use-cases/igaming"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Use Case: iGaming & Sports Betting
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          Every market is a different rulebook. Your player ops team has to run them all.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-2xl leading-relaxed text-lg mb-10">
          Embedded player support, KYC and age verification, fraud and bonus abuse review, and AML monitoring for licensed iGaming operators. 24/7. 20+ languages. Recruited from Europe's deepest player-ops talent pool.
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
            Three forces are compressing iGaming operations right now.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              label: "01",
              title: "iGaming fraud is more creative than any other vertical.",
              stat: "Deepfake liveness attempts are up 1,100% across regulated industries. In iGaming, every active promotion is an additional attack surface.",
              body: "Bonus abuse rings operate with synthetic identities, shared device fingerprints, and scripted deposit patterns calibrated to exhaust budgets before detection triggers. Multi-accounting runs at scale across casino, poker, and esports markets. AI-generated documents are clearing automated KYC with a regularity that changes how operators approach every first-time depositor. The attacker incentive is uniquely strong: the prize is real, the window is short, and every market expansion opens a new vector."
            },
            {
              label: "02",
              title: "Running four markets means running four regulatory frameworks.",
              stat: "Operators licensed in the UK, Germany, Sweden, the Netherlands, and Ontario are running five distinct compliance regimes from a single ops team.",
              body: "The UK Gambling Commission's affordability checks require documented player financial risk assessments at defined thresholds. Germany's GlüStV imposes deposit limits and cooling-off periods with audit trails regulators inspect in detail. Dutch CRUKS and Swedish Spelpaus self-exclusion databases require real-time integration and documented verification at sign-up. EU AMLD frameworks demand transaction monitoring calibrated to gambling-specific typologies. License retention is conditional on demonstrable operational discipline across every framework simultaneously."
            },
            {
              label: "03",
              title: "AI compresses the easy decisions. Analysts absorb the hard ones.",
              stat: "Automation handles first-layer triage across KYC and fraud review, compressing processing time and reducing false positives. The cases that survive that filter require judgment.",
              body: "Borderline responsible gambling interventions where a regulator will scrutinize every call. Bonus abuse rings running sophisticated anti-detection tooling. Complex AML patterns tied to high-value players where the decision carries consequences beyond the case file. The UK Gambling Commission has been explicit: AI-assisted compliance decisions require documented human oversight and clear governance. The demand for trained analysts is growing as automation expands."
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
            Operations built for licensed iGaming operators.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Four service lines, prioritised for the workflows iGaming operators actually run. Player ops leads. Everything else supports it.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              number: "01",
              title: "Frontline Support",
              subtitle: "Player Operations",
              body: "Player ops in iGaming is support, compliance, and risk detection inside the same queue. A payment query can carry an RG flag. A KYC follow-up can surface a SAR trigger. A bonus dispute can reveal a multi-accounting pattern. Fraud Shift analysts are trained to handle all three while maintaining SLA and keeping every workflow in a single queue. Coverage runs across 20+ languages with native-speaker depth in every major regulated market: English, German, Swedish, Dutch, Spanish, Portuguese, Italian, Polish, Romanian, French, Hungarian, Greek, and Turkish. CET timezone gives full EMEA day coverage, with 24/7 shift structure for global operators.",
              kpi: "Queue discipline under volume. SLA met across all channels. RG and AML escalation paths documented and audit-ready."
            },
            {
              number: "02",
              title: "Identity Operations",
              subtitle: "KYC and Age Verification",
              body: "iGaming KYC operates under gambling-specific requirements that general-purpose KYC operations frequently miss. Age verification at sign-up, enhanced due diligence at deposit threshold, source-of-funds checks at high-value triggers, and liveness review under deepfake pressure. Fraud Shift runs document review and verification workflows with the audit-trail discipline gambling regulators inspect: every decision logged, every escalation documented, every exception traceable. The operation is built to satisfy UK GC, MGA, SGA, and ONJN requirements.",
              kpi: "Verification SLA met at every deposit tier. Full audit trail per player record. Escalation rate within agreed thresholds."
            },
            {
              number: "03",
              title: "Fraud and Risk Operations",
              subtitle: "Bonus Abuse, Multi-Accounting, Collusion",
              body: "Bonus abuse, multi-accounting, collusion, payment fraud, chargeback abuse. Fraud Shift analysts understand iGaming-specific fraud typologies from the inside: how bonus rings structure rotation patterns, how multi-accounting manifests differently across casino and poker verticals, how collusion surfaces in live game data. Review queues run with documented thresholds, catch-rate reporting, and false positive tracking calibrated to your risk appetite and the player LTV calculations your business depends on.",
              kpi: "Catch rate and false positive rate reported weekly. Every decision documented to the standard an audit can verify."
            },
            {
              number: "04",
              title: "Dispute Operations",
              subtitle: "Chargeback Handling",
              body: "Chargeback handling in iGaming is operationally distinct from other verticals. Evidence packets require game logs, session data, KYC documentation, and bonus history in a format that satisfies both the card network and the gambling regulator. Fraud Shift builds and manages dispute workflows that hold up under both forms of review.",
              kpi: "Response rate and win rate tracked per chargeback reason code. Documentation audit-ready."
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
          <h3 className="text-lg font-bold text-foreground mb-3">Europe's deepest iGaming player-ops talent pool.</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Belgrade's talent pool has direct iGaming experience. Europe's largest operators already source player ops from the region. Language coverage is deep and specific: German (critical for the GlüStV market), Swedish, Dutch, Romanian, Polish, Hungarian, Greek, and Turkish, alongside English, Spanish, Portuguese, Italian, and French. CET timezone gives full EMEA day coverage. Two decades of payments and compliance operations infrastructure means analysts arrive trained in SLA-driven execution, with the operational discipline regulated industries demand.
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Proven at scale. Ready for your license framework.</h2>
          </div>

          <p className="text-primary-foreground/80 leading-relaxed text-lg">
            The Snappt operation is the closest proof point to what iGaming player ops requires: 92 analysts running 24/7, processing 11,000 decisions per day at a sub-0.2% false positive rate, built through Snappt's $100M raise from Insight Partners. The operational rigor that satisfies institutional investor scrutiny maps directly to what gambling regulators audit: queue management, case documentation, QA scoring, and SLA reporting. The playbook exists and has been pressure-tested at scale.
          </p>

          <p className="text-primary-foreground/65 leading-relaxed">
            Our founder built TeleSign's Serbian operation from the ground up, scaling from $5M to $450M in revenue. TeleSign's Phone ID scoring became foundational for identity verification across every regulated industry requiring trust decisions at volume, including gambling platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Managed Teams</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                A fully staffed player ops bench covering support, KYC, fraud review, and dispute handling. Trained on your workflows, embedded in your tools, managed with the discipline regulators want to see. The right structure for operators entering a new market or scaling an existing one without building an internal management layer.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3">
              <h3 className="font-bold text-primary-foreground">Embedded Talent</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                Senior analysts placed directly into your existing team. You manage the workflow. Fraud Shift handles sourcing, vetting, and retention. The right structure for operators with a strong internal ops team who need to add specific language coverage or specialist capacity.
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

export default IGaming;
