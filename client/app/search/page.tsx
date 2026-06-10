"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import MatchCard from "@/components/match/MatchCard";
import apiClient from "@/lib/apiClient";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch() {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const [football, cricket] = await Promise.all([
        apiClient.get("/football/live"),
        apiClient.get("/cricket/live"),
      ]);

      const footballResults = football.data.filter((match: any) =>
        match.home_team?.name.toLowerCase().includes(query.toLowerCase()) ||
        match.away_team?.name.toLowerCase().includes(query.toLowerCase())
      );

      const cricketResults = cricket.data.filter((match: any) =>
        match.name?.toLowerCase().includes(query.toLowerCase())
      );

      setResults({ football: footballResults, cricket: cricketResults });
    } catch (err) {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Search</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search teams or matches..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </div>

      {loading && <Spinner />}

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      {results && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-700">Football</h2>
            {results.football.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.football.map((match: any, index: number) => (
                  <MatchCard key={index} match={match} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No football results.</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-700">Cricket</h2>
            {results.cricket.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.cricket.map((match: any, index: number) => (
                  <CricketCard key={index} match={match} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No cricket results.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}