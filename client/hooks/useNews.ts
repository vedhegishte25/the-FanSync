import { fetchAllNews } from "@/services/news";
import { useEffect, useState } from "react";

export function useNews() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchAllNews();
        setData(result);
      } catch (err) {
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    }

    load();

    const interval = setInterval(load, 1800000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}