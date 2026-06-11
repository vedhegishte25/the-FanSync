"use client";

import Spinner from "@/components/common/Spinner";
import apiClient from "@/lib/apiClient";
import { useEffect, useState } from "react";

export default function CricketTeamPage({
  params,
}: {
  params: { teamId: string };
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await apiClient.get(`/cricket/teams/${params.teamId}`);
        setData(result.data);
      } catch (err) {
        setError("Failed to fetch team details.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.teamId]);

  if (loading) return <Spinner />;

  if (error) return (
    <p className="text-red-500 text-sm text-center mt-10">{error}</p>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {data?.name ?? "Team"}
      </h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Country:</span>{" "}
            {data?.country ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Sport:</span>{" "}
            {data?.sport ?? "Cricket"}
          </p>
        </div>
      </div>
    </div>
  );
}