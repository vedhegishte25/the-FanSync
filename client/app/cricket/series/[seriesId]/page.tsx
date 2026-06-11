"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import { fetchCricketMatchInfo } from "@/services/cricket";
import { useEffect, useState } from "react";

export default function SeriesPage({
  params,
}: {
  params: { seriesId: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchCricketMatchInfo(params.seriesId);
        setData(result);
      } catch (err) {
        setError("Failed to fetch series details.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.seriesId]);

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {data?.name ?? "Series"}
      </h1>

      {data ? (
        <CricketCard match={data} />
      ) : (
        <p className="text-sm text-gray-400">No series details available.</p>
      )}
    </div>
  );
}