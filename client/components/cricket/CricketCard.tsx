interface CricketMatch {
  name: string;
  status: string;
  match_type: string;
  venue: string;
  date: string;
  home_team: { name: string };
  away_team: { name: string };
  score: any[];
}

interface CricketCardProps {
  match: CricketMatch;
}

export default function CricketCard({ match }: CricketCardProps) {
  const isLive = match.status === "Live";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">{match.match_type}</span>
        {isLive ? (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </span>
        ) : (
          <span className="text-xs text-gray-400">{match.status}</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">
          {match.home_team?.name}
        </span>
        <span className="text-xs text-gray-400">vs</span>
        <span className="text-sm font-semibold text-gray-800">
          {match.away_team?.name}
        </span>
      </div>

      {match.score && match.score.length > 0 && (
        <div className="mt-3 flex flex-col gap-1">
          {match.score.map((s: any, index: number) => (
            <p key={index} className="text-xs text-gray-600">
              {s.inning}: {s.r}/{s.w} ({s.o} ov)
            </p>
          ))}
        </div>
      )}

      {match.venue && (
        <p className="text-xs text-gray-400 mt-2">{match.venue}</p>
      )}
    </div>
  );
}