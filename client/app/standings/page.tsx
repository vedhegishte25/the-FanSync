"use client";

import Spinner from "@/components/common/Spinner";
import StandingsTable from "@/components/standings/StandingsTable";
import { fetchAllStandings } from "@/services/standings";
import { useEffect, useState } from "react";

const leagues = [
  { name: "Premier League", slug: "premier_league" },
  { name: "La Liga", slug: "la_liga" },
  { name: "Serie A", slug: "serie_a" },
  { name: "Bundesliga", slug: "bundesliga" },
  { name: "Ligue 1", slug: "ligue_1" },
  { name: "MLS", slug: "mls" },
  { name: "Champions League", slug: "champions_league" },
];

export default function StandingsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("premier_league");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchAllStandings(2024);
        setData(result);
      } catch (err) {
        setError("Failed to fetch standings.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Standings</h1>

      <div className="flex flex-wrap gap-2">
        {leagues.map((league) => (
          <button
            key={league.slug}
            onClick={() => setSelected(league.slug)}
            className={`px-4 py-2 rounded-full text-sm transition-colors border ${
              selected === league.slug
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-green-500 hover:text-green-600"
            }`}
          >
            {league.name}
          </button>
        ))}
      </div>

      {data?.[selected] ? (
        <StandingsTable
          standings={data[selected]}
          leagueName={
            leagues.find((l) => l.slug === selected)?.name ?? selected
          }
        />
      ) : (
        <p className="text-sm text-gray-400">No standings available.</p>
      )}
    </div>
  );
}