import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
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
            <h2 className="text-lg font-semibold text-gray-800 mb-1">News</h2>
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