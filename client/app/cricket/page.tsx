"use client";

import Spinner from "@/components/common/Spinner";
import CricketCard from "@/components/cricket/CricketCard";
import { useCricket } from "@/hooks/useCricket";
import Link from "next/link";

export default function CricketPage() {
  const { data, loading, error } = useCricket();

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Cricket</h1>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/cricket/series"
          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
        >
          All Series
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Live Matches</h2>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((match: any, index: number) => (
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