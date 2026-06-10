"use client";

import Spinner from "@/components/common/Spinner";
import InsightCard from "@/components/insights/InsightCard";
import { useInsights } from "@/hooks/useInsights";

export default function InsightsPage() {
  const { data, loading, error } = useInsights();

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Insights</h1>

      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((insight: any, index: number) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No insights available.</p>
      )}
    </div>
  );
}