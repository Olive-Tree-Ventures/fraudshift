declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = "G-7CYB5WHVZW";

const isClient = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

export const pageview = (url: string) => {
  if (!isClient()) return;
  window.gtag("config", GA_ID, {
    page_path: url,
    send_page_view: true,
  });
};

export const event = (name: string, params: Record<string, any> = {}) => {
  if (!isClient()) return;
  window.gtag("event", name, params);
};

export const grantConsent = () => {
  if (!isClient()) return;
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
};

export const denyConsent = () => {
  if (!isClient()) return;
  window.gtag("consent", "update", {
    analytics_storage: "denied",
  });
};

export {};
