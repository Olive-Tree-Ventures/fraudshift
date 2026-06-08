import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface ProofStatBandProps {
  eyebrow: string;
  stats: Stat[];
  description: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const ProofStatBand = ({ eyebrow, stats, description }: ProofStatBandProps) => {
  const isOddCount = stats.length % 2 !== 0;

  return (
    <section className="bg-alt">
      <div className="container-narrow section-padding">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-10"
        >
          {eyebrow}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className={`text-center ${
                isOddCount && i === stats.length - 1
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-accent leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-muted-foreground leading-relaxed max-w-3xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default ProofStatBand;
