import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="dark-section-deep">
    <div className="container-narrow py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & tagline */}
        <div>
          <span className="font-extrabold text-lg tracking-tight">FRAUD SHIFT</span>
          <p className="mt-3 text-sm text-primary-foreground/60 max-w-xs">
            Fraud and compliance operations, embedded. Recruited from Serbia's talent ecosystem.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/40">
            Part of{" "}
            <a href="#" className="underline hover:text-accent transition-colors">
              Olive Tree Ventures
            </a>
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-1">
            Navigation
          </span>
          {[
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Our Story", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social & sister company */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-1">
            Connect
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Need pipeline?{" "}
            <a href="#" className="text-accent hover:underline">
              Meet Sales Clover →
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/30">
        © 2026 Olive Tree Ventures. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
