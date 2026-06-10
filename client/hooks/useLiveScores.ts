import { fetchLiveMatches } from "@/services/api";
import { useEffect, useState } from "react";

export function useLiveScores() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchLiveMatches();
        setData(result);
      } catch (err) {
        setError("Failed to fetch live scores.");
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