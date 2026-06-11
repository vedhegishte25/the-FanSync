"use client";

import SplashScreen from "@/components/common/SplashScreen";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date("2026-06-13");
    const end = new Date("2026-07-20T12:00:00");
    setShowBanner(now >= start && now <= end);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <SplashScreen />

      {showBanner && (
        <Link href="/football/leagues/fifa_world_cup">
          <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 flex items-center justify-between cursor-pointer hover:from-yellow-500 hover:to-yellow-600 transition-all">
            <div>
              <h2 className="text-2xl font-bold text-white">
                ⚽ FIFA World Cup 2026
              </h2>
              <p className="text-yellow-100 text-sm mt-1">
                Live now — Follow every match in real time
              </p>
            </div>
            <span className="text-white text-3xl">→</span>
          </div>
        </Link>
      )}

      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Welcome to <span className="text-green-600">FanSync</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Live scores, schedules and news for Football and Cricket
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/live">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Live Scores
            </h2>
            <p className="text-sm text-gray-500">
              Follow live matches in real time
            </p>
          </div>
        </Link>

        <Link href="/football">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Football
            </h2>
            <p className="text-sm text-gray-500">
              Fixtures, standings and match details
            </p>
          </div>
        </Link>

        <Link href="/cricket">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Cricket
            </h2>
            <p className="text-sm text-gray-500">
              Series, scorecards and live matches
            </p>
          </div>
        </Link>

        <Link href="/standings">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Standings
            </h2>
            <p className="text-sm text-gray-500">
              League tables and rankings
            </p>
          </div>
        </Link>

        <Link href="/news">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              News
            </h2>
            <p className="text-sm text-gray-500">
              Latest sports headlines
            </p>
          </div>
        </Link>

        <Link href="/insights">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Insights
            </h2>
            <p className="text-sm text-gray-500">
              Quick match insights and stats
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}