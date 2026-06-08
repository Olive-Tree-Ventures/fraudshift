let cachedCountry: string | null = null;

export const getCountry = async (): Promise<string> => {
  if (cachedCountry !== null) return cachedCountry;
  try {
    const res = await fetch("/cdn-cgi/trace");
    const text = await res.text();
    const match = text.match(/^loc=([A-Z]{2})/m);
    cachedCountry = match ? match[1] : "XX";
  } catch {
    cachedCountry = "XX"; // safe fallback → non-US → opt-in
  }
  return cachedCountry;
};
