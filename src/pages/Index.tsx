import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield, Fingerprint, MessageCircle, Scale, ArrowRight } from "lucide-react";
import seonLogo from "@/assets/logos/seon.svg";
import snapptLogo from "@/assets/logos/snappt-strip.png";
import ixopayLogo from "@/assets/logos/ixopay.png";
import ncrLogo from "@/assets/logos/ncr.png";
import facesignLogo from "@/assets/logos/facesign.png";
import telesignLogo from "@/assets/logos/telesign.png";
import fraudioLogo from "@/assets/logos/fraudio.png";
import pragmaticLogo from "@/assets/logos/pragmatic.png";
import fisLogo from "@/assets/logos/fis.png";
import HeroDashboard from "@/components/HeroDashboard";
import OpsCloverCaseStudySection from "@/components/OpsCloverCaseStudySection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

/* ─── HERO ─── */
const Hero = () =>
<section className="relative overflow-hidden" style={{ background: "#0c1a1f" }}>
    <div
    className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
    style={{
      background: "radial-gradient(circle, rgba(26,232,140,0.04) 0%, transparent 70%)"
    }} />
  

    <div
    className="container-narrow relative pt-32 pb-16 md:pt-40 md:pb-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-14"
    style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", minHeight: "calc(100vh - 65px)" }}>
    
      <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-[560px]">
      
        <p
        className="text-xs font-semibold uppercase tracking-[3px] mb-6"
        style={{ color: "#00D69D" }}>FINANCIAL CRIME OPERATIONS


      </p>
        <h1
        className="font-bold leading-[1.12] mb-7 tracking-[-0.5px]"
        style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#e8edf0" }}>
        
          The human layer behind <span style={{ color: "#00D69D" }}>fraud and compliance.</span>
        </h1>
        <p
        className="text-[16.5px] leading-[1.7] max-w-[500px] mb-10"
        style={{ color: "#7e9aa8" }}>
        
          Embedded fraud teams — from frontline customer operations to fraud investigations
          to KYC — for fintech, payments, and iGaming companies where getting it wrong isn't an option.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-semibold text-sm hover:opacity-[0.88] transition-opacity"
          style={{ background: "#00D69D", color: "#0c1a1f" }}>
          
            Talk to an Operator →
          </Link>
          <a
          href="#tension"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-medium text-sm transition-all"
          style={{
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#e8edf0"
          }}>
          
            See what's changing in fraud ops ↓
          </a>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="hidden lg:block">
      
        <HeroDashboard />
      </motion.div>
    </div>
  </section>;


/* ─── LOGO STRIP ─── */
const logoCompanies = [
{ name: "SEON", src: seonLogo },
{ name: "Snappt", src: snapptLogo },
{ name: "IxoPay", src: ixopayLogo },
{ name: "NCR", src: ncrLogo },
{ name: "FaceSign", src: facesignLogo },
{ name: "TeleSign", src: telesignLogo },
{ name: "Fraudio", src: fraudioLogo },
{ name: "Pragmatic Play", src: pragmaticLogo },
{ name: "FIS", src: fisLogo }];


const LogoStrip = () =>
<section className="bg-background border-b border-border">
    <div className="container-narrow py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
        Built by operators with experience across
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
        {logoCompanies.map((company) =>
      <img
        key={company.name}
        src={company.src}
        alt={company.name}
        className="h-5 w-auto object-contain transition-opacity duration-300"
        style={{ filter: "grayscale(100%)", opacity: 0.5 }}
        onMouseEnter={(e) => {e.currentTarget.style.opacity = "1";}}
        onMouseLeave={(e) => {e.currentTarget.style.opacity = "0.5";}} />

      )}
      </div>
    </div>
  </section>;


/* ─── TENSION ─── */
const tensionBlocks = [
{
  stat: "$12.5B",
  label: "U.S. fraud losses in 2024",
  title: "Fraud Is Getting Worse, Faster",
  body: "Generative AI has fundamentally changed the attacker's toolkit. Deepfake fraud attempts are up over 1,100%. Synthetic identity document fraud is up 300%. Real-time payment rails have compressed the window for intervention to near-zero. The cases that reach humans are harder, more ambiguous, and higher-stakes than ever."
},
{
  stat: "2026",
  label: "Most aggressive regulatory year ever",
  title: "Regulation Is Tightening on Every Front",
  body: "DORA is now live. PSD3 is tightening fraud liability across EU payments. The GENIUS Act created the first U.S. stablecoin framework. Sponsor banks demand documented AML controls. Regulators are asking to see how your team handles a suspicious transaction at 2am on Saturday."
},
{
  stat: "90%",
  label: "Reduction in false positives from AI",
  title: "AI Changes Everything, Except the Need for Humans",
  body: "AI is automating first-layer triage and reducing false positives dramatically. But the complex cases, investigations requiring judgment, escalations needing context, audit documentation regulators scrutinize, still need people. The human layer gets smaller in volume but dramatically higher in complexity and stakes."
}];


const TensionSection = () =>
<section id="tension" className="dark-section-deep relative">
    <div className="container-narrow section-padding">
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
      
        The Tension
      </motion.p>
      <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={fadeUp}
      className="text-3xl md:text-4xl font-extrabold max-w-2xl mb-16">
      
        Three forces are converging on fraud and compliance operations right now.
      </motion.h2>

      <div className="space-y-16">
        {tensionBlocks.map((block, i) =>
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        variants={fadeUp}
        className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
        
            <div>
              <span className="font-mono text-5xl md:text-6xl font-bold text-accent">{block.stat}</span>
              <p className="font-mono text-xs text-primary-foreground/50 mt-2">{block.label}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{block.title}</h3>
              <p className="text-primary-foreground/65 leading-relaxed max-w-2xl">{block.body}</p>
            </div>
          </motion.div>
      )}
      </div>

      {/* Klarna callout */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-16 p-6 md:p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03]">
      
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">The Klarna Example</p>
        <p className="text-primary-foreground/70 leading-relaxed max-w-3xl italic">
          "Klarna deployed an AI assistant that handled 2.3 million conversations in its first month, the
          equivalent of 700 full-time agents. They cut resolution time by 82%. Then they laid off 700
          employees. And then they rehired, into redesigned roles that require oversight, interpretation,
          and contextual judgment. The jobs did not disappear. They changed."
        </p>
      </motion.div>

      {/* Convergence */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-16 max-w-3xl">
      
        <h3 className="text-xl md:text-2xl font-bold mb-4">The Convergence</h3>
        <p className="text-lg text-primary-foreground/80 font-medium leading-relaxed">
          Fraud is getting harder. Regulation is getting stricter. AI is handling the easy work.
          What remains is the hard work, and that is where your operations team lives.
        </p>
        <p className="mt-4 text-accent font-semibold text-lg">
          The companies that win are the ones that put the right humans in the loop.
        </p>
      </motion.div>
    </div>
  </section>;


/* ─── INSIGHT ─── */
const insightStats = [
{ value: "5,000+", label: "NCR and FIS professionals in Serbia supporting global payments infrastructure" },
{ value: "20+", label: "Languages covered through Fraud Shift" },
{ value: "24/7", label: "Ability to scale operational teams to cover all time zones globally" }];


const InsightSection = () =>
<section className="bg-alt dot-pattern">
    <div className="container-narrow section-padding">
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
      
        The Insight
      </motion.p>
      <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={fadeUp}
      className="text-3xl md:text-4xl font-extrabold max-w-3xl mb-6">
      
        There's a fraud and compliance talent ecosystem most companies don't know about
      </motion.h2>
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      variants={fadeUp}
      className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
      
        Serbia has been quietly building fraud and compliance operations talent for almost two decades. The talent pool covers 20+ languages and has spent years inside the fraud queues, KYC workflows, and dispute operations that power fintech today.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
      {
        name: "Enterprise Foundations",
        text: "The world's largest fintech company (FIS) has run payments and risk operations from Belgrade since 2003. NCR invested $100M in Europe's largest tech campus here in 2011 - 4,000+ professionals supporting transaction infrastructure in 20+ languages across 60 countries."
      },
      {
        name: "Built From the Ground Up",
        text: "Our founder built TeleSign's Serbian operation from the ground up, helping scale the company from $5M to $450M in revenue. TeleSign pioneered two-factor authentication and identity verification for Microsoft, Google, and the world's largest platforms. Powered by the team we built in Belgrade."
      },
      {
        name: "Scale-Up Proven",
        text: "We helped companies like Sift, Snappt, SEON, and IxoPay build the operational foundations they needed to scale. Recruiting and running teams in Serbia that grew alongside them to $100M+ in revenue."
      }].
      map((anchor, i) =>
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        variants={fadeUp}
        className="card-service">
        
            <h3 className="font-bold text-lg mb-2 status-dot">{anchor.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{anchor.text}</p>
          </motion.div>
      )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {insightStats.map((stat, i) =>
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        variants={fadeUp}
        className="text-center sm:text-left">
        
            <span className="font-mono text-3xl font-bold text-accent">{stat.value}</span>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


/* ─── WHAT WE BUILD ─── */
const teams = [
{
  icon: Shield,
  title: "Fraud & Risk Operations",
  subtitle: "The human judgment layer.",
  body: "AI catches the patterns. But the cases that survive that filter are the hardest ones. We run fraud review queues with triage, investigation support, and QA discipline that keeps decisions audit-ready."
},
{
  icon: Fingerprint,
  title: "Identity Operations",
  subtitle: "Audit-ready from day one.",
  body: "Every new customer is a compliance event. We staff document review, identity verification, and onboarding operations with the process rigor that auditors want to see."
},
{
  icon: Scale,
  title: "Dispute Operations",
  subtitle: "Every missed deadline is lost revenue.",
  body: "We run dispute intake, evidence gathering, deadline tracking, and resolution workflows designed to reduce your backlog and improve your win rate."
},
{
  icon: MessageCircle,
  title: "Frontline Support",
  subtitle: "The first line of defense.",
  body: "We run multilingual support queues for cross-border payments products, with queue discipline, SLA tracking, and escalation governance built in. Native language coverage across EMEA, LATAM, and APAC."
}];


const WhatWeBuild = () =>
<section className="bg-background">
    <div className="container-narrow section-padding">
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
      
        What We Build
      </motion.p>
      <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={fadeUp}
      className="text-3xl md:text-4xl font-extrabold max-w-2xl mb-4">
      
        Fraud and Compliance Operations, Embedded
      </motion.h2>
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      variants={fadeUp}
      className="text-muted-foreground max-w-2xl mb-12">
      
        Four team types. One operational continuum. From the first customer inquiry to the final
        fraud investigation, we build and manage the human layer.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {teams.map((team, i) =>
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        variants={fadeUp}
        className="card-service">
        
            <div className="flex items-center gap-3 mb-4">
              <team.icon size={22} className="text-accent shrink-0" />
              <h3 className="font-bold text-lg status-dot">{team.title}</h3>
            </div>
            <p className="text-foreground font-semibold text-sm mb-2">{team.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{team.body}</p>
          </motion.div>
      )}
      </div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-10">
      
        <Link to="/services" className="text-accent font-semibold text-sm hover:underline">
          See all services →
        </Link>
      </motion.div>
    </div>
  </section>;


/* ─── ENGAGEMENT MODELS ─── */
const EngagementModels = () =>
<section className="bg-alt">
    <div className="container-narrow section-padding">
      <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
      
        Two ways to work with us. One operating standard.
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="rounded-lg border border-border bg-card p-8">
        
          <span className="font-mono text-xs text-accent uppercase tracking-widest">Managed Teams</span>
          <p className="text-sm text-muted-foreground mt-2 mb-4">
            Best for: Companies that want outcomes without building an internal management layer.
          </p>
          <ul className="space-y-2 text-sm text-foreground">
            <li>• We recruit, onboard, and operate the team end to end</li>
            <li>• SOPs, QA scoring, SLA tracking, and weekly reporting from day one</li>
            <li>• Team lead and delivery governance built in</li>
          </ul>
          <p className="mt-4 font-semibold text-sm text-accent">You set the goals. We run the operation.</p>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="rounded-lg border border-border bg-card p-8">
        
          <span className="font-mono text-xs text-accent uppercase tracking-widest">Embedded Talent</span>
          <p className="text-sm text-muted-foreground mt-2 mb-4">
            Best for: Companies that manage day-to-day but need premium recruiting and fast ramp.
          </p>
          <ul className="space-y-2 text-sm text-foreground">
            <li>• Dedicated hires matched to your workflows and culture</li>
            <li>• Fast replacement coverage and ongoing recruiting pipeline</li>
            <li>• Onboarding support and operational enablement</li>
          </ul>
          <p className="mt-4 font-semibold text-sm text-accent">Your management. Our talent network.</p>
        </motion.div>
      </div>
    </div>
  </section>;


/* ─── FINAL CTA ─── */
const FinalCTA = () =>
<section className="dark-section">
    <div className="container-narrow section-padding text-center">
      <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl mx-auto mb-6">
      
        Your operations need humans in the loop. We will put the right ones there.
      </motion.h2>
      <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={fadeUp}
      className="text-primary-foreground/70 max-w-xl mx-auto mb-10">
      
        Tell us your workflows, volumes, and timeline. We will recommend the right team structure
        and show you how fast we can launch.
      </motion.p>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      variants={fadeUp}>
      
        <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all">
        
          Talk to an Operator <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  </section>;


/* ─── PAGE ─── */
const Index = () =>
<>
    <SEO title="Fraud Shift | Fraud and Compliance Operations, Embedded" description="Embedded fraud and compliance operations teams for fintech, payments, and iGaming. Frontline support, fraud investigations, KYC, and dispute operations from Belgrade." path="/" />
    <Hero />
    <LogoStrip />
    <TensionSection />
    <InsightSection />
    <WhatWeBuild />
    <OpsCloverCaseStudySection />
    <EngagementModels />
    <FinalCTA />
  </>;


export default Index;