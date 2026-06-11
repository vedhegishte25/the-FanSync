"use client";

import Spinner from "@/components/common/Spinner";
import MatchStats from "@/components/match/MatchStats";
import MatchTimeline from "@/components/match/MatchTimeline";
import apiClient from "@/lib/apiClient";
import { useEffect, useState } from "react";

export default function FootballMatchPage({
  params,
}: {
  params: { matchId: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await apiClient.get(
          `/football/fixtures/${params.matchId}/2024`
        );
        setData(result.data);
      } catch (err) {
        setError("Failed to fetch match details.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.matchId]);

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Match Details</h1>

      {data?.stats && <MatchStats stats={data.stats} />}
      {data?.timeline && <MatchTimeline events={data.timeline} />}

      {!data?.stats && !data?.timeline && (
        <p className="text-sm text-gray-400">No match details available.</p>
      )}
    </div>
  );
}