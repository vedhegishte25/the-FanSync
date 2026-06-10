import { fetchLiveFootballMatches } from "@/services/football";
import { useEffect, useState } from "react";

export function useFootball() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchLiveFootballMatches();
        setData(result);
      } catch (err) {
        setError("Failed to fetch football matches.");
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