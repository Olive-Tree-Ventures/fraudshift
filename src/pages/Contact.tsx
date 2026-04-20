import { useState } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const industryOptions = [
  "Fintech & Payments",
  "iGaming & Sports Betting",
  "Fraud & Risk Platform",
  "Identity & Verification",
  "Other",
];
const workflowOptions = ["Frontline Support", "Fraud & Risk Ops", "Identity/KYC Ops", "Dispute Operations", "Other"];
const sizeOptions = ["1–3", "4–8", "9–15", "15+"];
const timelineOptions = ["ASAP", "1–2 months", "3+ months", "Just exploring"];

const initialForm = {
  name: "", email: "", company: "", industry: "", workflows: [] as string[],
  size: "", timeline: "", notes: "", honeypot: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWorkflowToggle = (w: string) => {
    setForm((f) => ({
      ...f,
      workflows: f.workflows.includes(w) ? f.workflows.filter((x) => x !== w) : [...f.workflows, w],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || form.honeypot) return;
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mnjornao", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          work_email: form.email,
          company_name: form.company,
          industry: form.industry,
          workflows_needed: form.workflows.join(", "),
          estimated_team_size: form.size,
          timeline: form.timeline,
          additional_notes: form.notes,
          _gotcha: form.honeypot,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Contact | Fraud Shift" description="Tell us your workflows, volumes, and timeline. Get a team recommendation and launch plan for your fraud, compliance, or support operations." path="/contact" />
      <section className="dark-section pt-32 pb-0 md:pt-44 md:pb-0">
        <div className="container-narrow pb-16 md:pb-24">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">Contact</motion.p>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-2xl mb-6">
            Let's design the right team.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/70 max-w-xl leading-relaxed">
            Tell us your workflows, volumes, and timeline. We will come back with a team recommendation and launch plan.
          </motion.p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-narrow section-padding">
          {submitted ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <ArrowRight size={28} className="text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Thanks for reaching out.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We've received your request and will get back to you soon.
              </p>
              <p className="text-muted-foreground/60 text-sm">
                If your inquiry is time-sensitive, feel free to email us directly.
              </p>
            </motion.div>
          ) : (
          <motion.form
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* Honeypot — must stay empty; bots fill it, Formspree rejects them */}
            <input
              type="text"
              name="_gotcha"
              value={form.honeypot}
              onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Company Name</label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Industry</label>
              <select
                required
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select industry…</option>
                {industryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Which workflows do you need covered?</label>
              <div className="flex flex-wrap gap-3 mt-1">
                {workflowOptions.map((w) => (
                  <label key={w} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.workflows.includes(w)}
                      onChange={() => handleWorkflowToggle(w)}
                      className="rounded border-border text-accent focus:ring-accent"
                    />
                    {w}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5">Estimated team size</label>
                <select
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select…</option>
                  {sizeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Timeline</label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select…</option>
                  {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Anything else we should know?</label>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Submit <ArrowRight size={16} /></>}
            </button>
          </motion.form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
