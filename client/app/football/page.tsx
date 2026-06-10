"use client";

import Spinner from "@/components/common/Spinner";
import FootballCard from "@/components/football/FootballCard";
import { useFootball } from "@/hooks/useFootball";
import Link from "next/link";

const leagues = [
  { name: "Premier League", slug: "premier_league" },
  { name: "La Liga", slug: "la_liga" },
  { name: "Serie A", slug: "serie_a" },
  { name: "Bundesliga", slug: "bundesliga" },
  { name: "Ligue 1", slug: "ligue_1" },
  { name: "MLS", slug: "mls" },
  { name: "Champions League", slug: "champions_league" },
];

export default function FootballPage() {
  const { data, loading, error } = useFootball();

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Football</h1>

      <div className="flex flex-wrap gap-2">
        {leagues.map((league) => (
          <Link
            key={league.slug}
            href={`/football/leagues/${league.slug}`}
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
          >
            {league.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Live Matches</h2>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((match: any, index: number) => (
              <FootballCard key={index} match={match} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No live football matches.</p>
        )}
      </div>
    </div>
  );
}