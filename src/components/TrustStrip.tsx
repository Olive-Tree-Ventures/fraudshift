import { motion } from "framer-motion";

interface TrustStripProps {
  trustedBy: { name: string; src: string };
  operatorsFrom: { name: string; src: string }[];
}

const TrustStrip = ({ trustedBy, operatorsFrom }: TrustStripProps) => (
  <section className="bg-background border-b border-border">
    <div className="container-narrow py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-8"
      >
        {/* Tier 1 — Trusted by */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by
          </p>
          <img
            src={trustedBy.src}
            alt={trustedBy.name}
            className="h-10 w-auto object-contain transition-opacity duration-300"
            style={{ filter: "grayscale(100%)", opacity: 0.5 }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.5"; }}
          />
        </div>

        <div className="border-t border-border" />

        {/* Tier 2 — Operators from */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Operators from
          </p>
          {/* flex-wrap + gap matches homepage LogoStrip mobile treatment exactly */}
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
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustStrip;
