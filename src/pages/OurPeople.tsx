import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const traitPills = ["Curious", "Organized", "Tech-savvy", "Detail-oriented", "Eager to learn"];

const timelineSteps = [
{
  num: "01",
  title: "Who we hire",
  subtitle: "The profile, not the resume",
  paragraphs: [
  "We recruit for traits over tenure - curiosity, organizational discipline, tech proficiency, attention to detail, and a bias toward learning. Belgrade's university system produces strong economics and technical graduates - and the region's deep payments and fintech ecosystem means candidates arrive with baseline fluency in the language of transactions, compliance, and operational rigor.",
  "We screen for people who want to build a career in fraud and compliance operations - people committed to growing in the role."],

  visual: "pills" as const
},
{
  num: "02",
  title: "How we train",
  subtitle: "Productive from day one of deployment",
  paragraphs: [
  "Every analyst goes through a structured two-week fraud and compliance training program before they touch a live workflow. The program covers fraud typologies, KYC/KYB frameworks, dispute lifecycle, escalation decision-making, and documentation standards - tailored to your specific tools, workflows, and SLAs before go-live.",
  "The result: faster ramp, fewer errors in the first 30 days, and analysts who arrive in your queues ready to contribute from the first case."],

  visual: "stats" as const,
  stats: [
  { value: "2 weeks", label: "Structured onboarding" },
  { value: "Day 1", label: "Productive in live queues" }]

},
{
  num: "03",
  title: "How we develop",
  subtitle: "Weekly coaching. AI-native from day one.",
  paragraphs: [
  "Training doesn't stop after onboarding. Every Fraud Shift team runs on a weekly coaching rhythm - QA scoring on every analyst, specific feedback tied to real cases, and development plans that move people from L1 to L2 to team lead roles over time.",
  "Our managers are measured on coaching quality first, team output second. That means your analysts get better every month - and more efficient.",
  "And every team member is trained on AI-native workflows from day one. We provision tools like Claude so analysts can accelerate case research, draft investigation summaries, cross-reference signals, and generate documentation faster - while preserving the human judgment your auditors require. Our people embrace AI as leverage - they're trained to use it from day one."],

  visual: "stats" as const,
  stats: [
  { value: "Weekly", label: "QA scoring + coaching" },
  { value: "AI-native", label: "Workflows from day one" }]

},
{
  num: "04",
  title: "Why they stay",
  subtitle: "Retention is a discipline, not a perk",
  paragraphs: [
  "L1 and L2 operations roles have notoriously high turnover - the industry standard in outsourced environments is measured in months. Our teams retain at 2–4x the typical rate.",
  "That's not an accident. It's the result of competitive compensation benchmarked to the Belgrade market, real career progression from analyst to team lead, investment in skills that make people more valuable over time (AI training, fraud specialization, compliance certifications), and a culture that treats operations work as a career.",
  "Retention isn't a perk we offer. It's a discipline we manage. Because every month an experienced analyst stays is a month your quality improves and your ramp costs go down."],

  visual: "stats" as const,
  stats: [
  { value: "2–4x", label: "Industry retention rate for L1/L2 operations roles" }]

}];


const OurPeople = () =>
<>
    <SEO title="Our People | Fraud Shift" description="How Fraud Shift recruits, trains, and retains fraud and compliance operations talent from Belgrade. Purpose-built teams with 2-4x industry retention rates." path="/our-people" />

    {/* Section A — Hero */}
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20" style={{ background: "hsl(var(--dark-bg))" }}>
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Our People
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6" style={{ color: "#e8edf0" }}>
          The team behind your fraud and compliance operations.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="max-w-[720px] leading-relaxed" style={{ color: "#7e9aa8" }}>The hardest part of scaling fraud and compliance operations is finding people who can run the workflows beyond the platform's reach - and keeping them long enough to get great at it. Our entire people model is built around solving that problem.

      </motion.p>
      </div>
    </section>

    {/* Section B — Vertical Timeline */}
    {timelineSteps.map((step, idx) =>
  <section key={step.num} className={idx % 2 === 0 ? "bg-background" : "bg-alt"}>
        <div className="container-narrow section-padding">
          <div className="flex gap-8 md:gap-12">
            {/* Timeline line + circle */}
            <div className="hidden md:flex flex-col items-center shrink-0">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-mono font-bold text-sm shrink-0">
                {step.num}
              </div>
              {idx < timelineSteps.length - 1 &&
          <div className="w-0.5 flex-1 bg-accent/30 mt-2" />
          }
            </div>

            {/* Content */}
            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex-1 pb-4">
          
              {/* Mobile circle */}
              <div className="md:hidden w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-mono font-bold text-xs mb-4">
                {step.num}
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{step.title}</h2>
              <p className="text-muted-foreground font-medium mb-6">{step.subtitle}</p>

              {step.paragraphs.map((p, pi) =>
          <p key={pi} className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
                  {p}
                </p>
          )}

              {/* Visual: Pills */}
              {step.visual === "pills" &&
          <div className="flex flex-wrap gap-3 mt-6">
                  {traitPills.map((trait) =>
            <span
              key={trait}
              className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              
                      {trait}
                    </span>
            )}
                </div>
          }

              {/* Visual: Stat cards */}
              {step.visual === "stats" && step.stats &&
          <div className={`grid gap-4 mt-6 ${step.stats.length > 1 ? "sm:grid-cols-2" : ""}`} style={{ maxWidth: step.stats.length === 1 ? "400px" : undefined }}>
                  {step.stats.map((stat) =>
            <div key={stat.label} className="rounded-lg border border-border bg-card p-6">
                      <p className="font-mono text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
            )}
                </div>
          }
            </motion.div>
          </div>
        </div>
      </section>
  )}

    {/* Section C — Built to Work Across Borders */}
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Built to work across borders</h2>
          <p className="text-muted-foreground font-medium mb-6">Serbia. Macedonia. LATAM. 20+ languages.</p>

          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
            Fraud Shift teams operate across Serbia, Macedonia, and growing LATAM coverage — with language capability spanning English, German, major European languages, Spanish, Portuguese, Mandarin, and Japanese.
          </p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">
            We've built distributed teams across multiple countries, time zones, and cultures since our founding. That means coverage models that align with your operating hours, management structures that work across geographies, and communication norms built for async and real-time collaboration. Your team feels embedded in your operation - regardless of where they sit.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
          { value: "20+", label: "Languages" },
          { value: "CET", label: "Timezone — EMEA + US overlap" },
          { value: "3+", label: "Countries" }].
          map((stat) =>
          <div key={stat.label} className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-mono text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
          )}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section D — Closing CTA */}
    <section className="bg-background">
      <div className="container-narrow section-padding text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to meet the team behind the workflows?</h2>
          <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all">
          
            Talk to an Operator <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

  </>;


export default OurPeople;