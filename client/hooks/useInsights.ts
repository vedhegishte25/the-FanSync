import { fetchInsights } from "@/services/insights";
import { useEffect, useState } from "react";

export function useInsights() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchInsights();
        setData(result);
      } catch (err) {
        setError("Failed to fetch insights.");
      } finally {
        setLoading(false);
      }
    }

    load();

    const interval = setInterval(load, 7200000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}