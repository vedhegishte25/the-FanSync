"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import Scorecard from "@/components/cricket/Scorecard";
import { fetchCricketMatchInfo } from "@/services/cricket";
import { useEffect, useState } from "react";

export default function CricketMatchPage({
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
        const result = await fetchCricketMatchInfo(params.matchId);
        setData(result);
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

      {data && <CricketCard match={data} />}

      {data?.scorecard?.map((inning: any, index: number) => (
        <Scorecard
          key={index}
          inning={inning.inning}
          batting={inning.batting ?? []}
          bowling={inning.bowling ?? []}
        />
      ))}

      {!data && (
        <p className="text-sm text-gray-400">No match details available.</p>
      )}
    </div>
  );
}