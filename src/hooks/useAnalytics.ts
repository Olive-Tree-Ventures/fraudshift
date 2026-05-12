import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/analytics";

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // useEffect only runs on the client, so this is SSR-safe
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);
};
