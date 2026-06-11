"use client";

import Spinner from "@/components/common/Spinner";
import MatchCard from "@/components/match/MatchCard";
import { fetchFootballFixtures } from "@/services/football";
import { use, useEffect, useState } from "react";

export default function LeaguePage({
  params,
}: {
  params: Promise<{ leagueId: string }>;
}) {
  const { leagueId } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchFootballFixtures(leagueId, 2024);
        setData(result);
      } catch (err) {
        setError("Failed to fetch fixtures.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [leagueId]);

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 capitalize">
        {leagueId.replace(/_/g, " ")}
      </h1>

      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((match: any, index: number) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No fixtures available.</p>
      )}
    </div>
  );
}