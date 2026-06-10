"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import MatchCard from "@/components/match/MatchCard";
import { useLiveScores } from "@/hooks/useLiveScores";

export default function LivePage() {
  const { data, loading, error } = useLiveScores();

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Live Matches</h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Football</h2>
        {data?.football?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.football.map((match: any, index: number) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No live football matches.</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Cricket</h2>
        {data?.cricket?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.cricket.map((match: any, index: number) => (
              <CricketCard key={index} match={match} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No live cricket matches.</p>
        )}
      </div>
    </div>
  );
}