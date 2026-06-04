import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logos/opsclover-light.svg";
import logoColor from "@/assets/logos/opsclover-color.svg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
];

const afterDropdownLinks = [
  { label: "Our People", href: "/our-people" },
  { label: "Our Story", href: "/about" },
];

const useCaseLinks = [
  { label: "PSPs & Payment Gateways", href: "/use-cases/psp-payments" },
  { label: "iGaming & Sports Betting", href: "/use-cases/igaming" },
  { label: "Crypto & Stablecoin", href: "/use-cases/crypto-stablecoin" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setUseCasesOpen(false);
    setMobileUseCasesOpen(false);
  }, [location]);

  const isTransparent = !scrolled && !mobileOpen;
  const isUseCasesActive = location.pathname.startsWith("/use-cases");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative">
          <img
            src={logoLight}
            alt="Fraud Shift"
            className="h-5 md:h-7 w-auto transition-opacity duration-300"
            style={{ opacity: isTransparent ? 1 : 0 }}
          />
          <img
            src={logoColor}
            alt=""
            className="h-5 md:h-7 w-auto absolute inset-0 transition-opacity duration-300"
            style={{ opacity: isTransparent ? 0 : 1 }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-base font-medium transition-colors hover:text-accent ${
                isTransparent ? "text-primary-foreground/80" : "text-muted-foreground"
              } ${location.pathname === link.href ? "!text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Use Cases dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setUseCasesOpen(true)}
            onMouseLeave={() => setUseCasesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-accent ${
                isTransparent ? "text-primary-foreground/80" : "text-muted-foreground"
              } ${isUseCasesActive ? "!text-accent" : ""}`}
            >
              Use Cases
              <motion.span
                animate={{ rotate: useCasesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {useCasesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                    {useCaseLinks.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:text-accent hover:bg-accent/5 ${
                          location.pathname === item.href ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {afterDropdownLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-base font-medium transition-colors hover:text-accent ${
                isTransparent ? "text-primary-foreground/80" : "text-muted-foreground"
              } ${location.pathname === link.href ? "!text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all"
        >
          Talk to an Operator →
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-narrow py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.href ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Use Cases */}
              <button
                onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
                className={`flex items-center justify-between text-sm font-medium py-2 w-full ${
                  isUseCasesActive ? "text-accent" : "text-muted-foreground"
                }`}
              >
                Use Cases
                <motion.span
                  animate={{ rotate: mobileUseCasesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>
              <AnimatePresence>
                {mobileUseCasesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    {useCaseLinks.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block text-sm py-2 pl-4 border-l-2 border-accent/30 mb-1 ${
                          location.pathname === item.href ? "text-accent border-accent" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {afterDropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.href ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold mt-2"
              >
                Talk to an Operator →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
