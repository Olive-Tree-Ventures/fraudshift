import { useEffect, useState } from "react";
import { grantConsent, denyConsent, pageview } from "@/lib/analytics";

const STORAGE_KEY = "fs_consent_v1";

export const CookieConsent = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Two-phase mount: ensures we never render different HTML on server vs client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    if (stored === "granted") grantConsent();
  }, [mounted]);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    grantConsent();
    pageview(window.location.pathname + window.location.search);
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    denyConsent();
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[420px] z-[60]"
      style={{
        animation: "fsConsentSlideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fontFamily: "'DM Sans', -apple-system, sans-serif",
      }}
    >
      <style>{`
        @keyframes fsConsentSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        className="rounded-[10px] p-5"
        style={{
          background: "rgba(15, 36, 44, 0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25), 0 24px 64px rgba(0,0,0,0.35)",
        }}
      >
        <p
          className="text-[10px] font-semibold uppercase mb-2"
          style={{ color: "#00D69D", letterSpacing: "2px" }}
        >
          Cookies
        </p>
        <p
          className="text-[13.5px] leading-[1.6] mb-4"
          style={{ color: "#c8d4da" }}
        >
          We use analytics cookies to understand how this site is used and improve it.
          Nothing tracks until you choose.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 transition-colors"
            style={{ color: "#e8edf0" }}
          >
            Privacy policy
          </a>
        </p>
        <div className="flex items-center gap-1.5 justify-end">
          <button
            onClick={decline}
            className="px-3 py-2 text-[12.5px] font-medium rounded-md transition-colors"
            style={{ color: "#7e9aa8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8edf0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7e9aa8")}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-[12.5px] font-semibold rounded-md transition-opacity hover:opacity-90"
            style={{ background: "#00D69D", color: "#0c1a1f" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
